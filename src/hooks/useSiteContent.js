import { useEffect, useState } from 'react';
import { api } from '@/lib/api';

const CACHE_KEY = 'vimoksha_site_content_cache_v2';
const listeners = new Set();

// In-memory cache loaded synchronously from localStorage
let inMemoryCache = null;
let fetchAllPromise = null;
let lastFetchTime = 0;
const REVALIDATE_INTERVAL = 30000; // 30 seconds

/**
 * Load cache synchronously from localStorage on initial call
 */
export function loadStorageCache() {
  if (inMemoryCache) return inMemoryCache;
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(CACHE_KEY) : null;
    inMemoryCache = raw ? JSON.parse(raw) : {};
  } catch (err) {
    inMemoryCache = {};
  }
  return inMemoryCache;
}

/**
 * Save new data to in-memory cache and localStorage, and notify all subscribers
 */
export function saveStorageCache(data) {
  if (!data || typeof data !== 'object') return;
  inMemoryCache = { ...(inMemoryCache || loadStorageCache()), ...data };
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(CACHE_KEY, JSON.stringify(inMemoryCache));
    }
  } catch (err) {
    // Ignore localStorage quota errors
  }
  listeners.forEach((listener) => {
    try {
      listener(inMemoryCache);
    } catch {
      // Ignore listener error
    }
  });
}

/**
 * Manually update a specific section in cache (e.g. from Admin save)
 */
export function updateSiteContentCache(section, sectionData) {
  saveStorageCache({ [section]: sectionData });
}

/**
 * Synchronously get cached section data
 */
export function getCachedSection(section) {
  const cache = inMemoryCache || loadStorageCache();
  return cache[section] || null;
}

/**
 * Merges API / cached section data over fallback defaults
 */
export function mergeContent(fallback = {}, data = {}) {
  if (!data) return fallback;

  const hasSavedItems = Array.isArray(data.items) && data.items.length > 0;
  const hasSavedFields =
    Boolean(data.heading?.trim()) ||
    Boolean(data.subheading?.trim()) ||
    Boolean(data.description?.trim()) ||
    Boolean(data.image?.trim()) ||
    (Array.isArray(data.features) && data.features.length > 0);

  if (!hasSavedItems && !hasSavedFields) return fallback;

  let mergedItems = fallback.items || [];

  if (hasSavedItems) {
    const maxLen = Math.max(fallback.items?.length || 0, data.items.length);
    mergedItems = Array.from({ length: maxLen }, (_, i) => {
      const fallbackItem = fallback.items?.[i] || {};
      const savedItem = data.items[i];

      if (!savedItem) return fallbackItem;

      const savedHasContent = Boolean(
        savedItem.title?.trim() ||
          savedItem.description?.trim() ||
          savedItem.image?.trim() ||
          savedItem.category?.trim() ||
          savedItem.link?.trim() ||
          savedItem.duration?.trim() ||
          savedItem.difficulty?.trim() ||
          savedItem.date?.trim() ||
          savedItem.readTime?.trim()
      );

      if (!savedHasContent) return fallbackItem;

      return {
        ...fallbackItem,
        ...savedItem,
        title: savedItem.title?.trim() ? savedItem.title : (fallbackItem.title || ''),
        description: savedItem.description?.trim() ? savedItem.description : (fallbackItem.description || ''),
        image: savedItem.image?.trim() ? savedItem.image : (fallbackItem.image || ''),
        category: savedItem.category?.trim() ? savedItem.category : (fallbackItem.category || ''),
        link: savedItem.link?.trim() ? savedItem.link : (fallbackItem.link || ''),
        duration: savedItem.duration?.trim() ? savedItem.duration : (fallbackItem.duration || ''),
        difficulty: savedItem.difficulty?.trim() ? savedItem.difficulty : (fallbackItem.difficulty || ''),
        date: savedItem.date?.trim() ? savedItem.date : (fallbackItem.date || ''),
        readTime: savedItem.readTime?.trim() ? savedItem.readTime : (fallbackItem.readTime || ''),
      };
    }).filter(
      (item) => Boolean(item.title?.trim()) || Boolean(item.description?.trim()) || Boolean(item.image?.trim())
    );
  }

  return {
    ...fallback,
    ...data,
    heading: data.heading?.trim() ? data.heading : fallback.heading,
    subheading: data.subheading?.trim() ? data.subheading : fallback.subheading,
    description: data.description?.trim() ? data.description : fallback.description,
    image: data.image?.trim() ? data.image : fallback.image,
    ctaText: data.ctaText?.trim() ? data.ctaText : fallback.ctaText,
    ctaLink: data.ctaLink?.trim() ? data.ctaLink : fallback.ctaLink,
    features: Array.isArray(data.features) && data.features.length ? data.features : fallback.features || [],
    items: mergedItems,
  };
}

/**
 * Fetch all sections in ONE single request to /api/content and update all cache & subscribers
 */
export function fetchAllSiteContentOnce(force = false) {
  const now = Date.now();
  if (!force && fetchAllPromise) return fetchAllPromise;
  if (!force && now - lastFetchTime < REVALIDATE_INTERVAL && inMemoryCache && Object.keys(inMemoryCache).length > 0) {
    return Promise.resolve(inMemoryCache);
  }

  fetchAllPromise = api
    .getAllSiteContent()
    .then((allData) => {
      lastFetchTime = Date.now();
      if (allData && typeof allData === 'object') {
        saveStorageCache(allData);
      }
      return allData;
    })
    .catch((err) => {
      console.warn('Failed to batch-fetch all site content:', err);
    })
    .finally(() => {
      fetchAllPromise = null;
    });

  return fetchAllPromise;
}

// Automatically start background batch fetch on script load (client-side)
if (typeof window !== 'undefined') {
  loadStorageCache();
  // Fetch immediately in background so cache is fresh
  setTimeout(() => {
    fetchAllSiteContentOnce();
  }, 50);
}

/**
 * Fetches admin-edited content for a given site-content section
 * with instant synchronous cache initialization to eliminate image flash.
 *
 * @param {string} section - 'hero' | 'classes' | 'training' | 'therapy' | 'programs' | 'blogs' | 'gallery' | 'faq' | 'about' | 'therapiesPage' | 'ttcPage'
 * @param {object} fallback - the hardcoded copy/items for this section
 */
export default function useSiteContent(section, fallback = {}) {
  // Synchronous initial state: if cached, render with cached data immediately!
  const [content, setContent] = useState(() => {
    const cached = getCachedSection(section);
    return cached ? mergeContent(fallback, cached) : fallback;
  });

  const [loaded, setLoaded] = useState(() => Boolean(getCachedSection(section)));

  useEffect(() => {
    let cancelled = false;

    // 1. Subscribe to global cache updates
    const handleUpdate = (allCache) => {
      if (cancelled) return;
      if (allCache && allCache[section]) {
        setContent(mergeContent(fallback, allCache[section]));
        setLoaded(true);
      }
    };
    listeners.add(handleUpdate);

    // 2. If section wasn't in cache, or to revalidate, trigger batch or section fetch
    fetchAllSiteContentOnce();

    // 3. Fallback targeted fetch if this section isn't cached yet
    if (!getCachedSection(section)) {
      api
        .getSiteContent(section)
        .then((data) => {
          if (cancelled || !data) return;
          updateSiteContentCache(section, data);
        })
        .catch(() => {})
        .finally(() => {
          if (!cancelled) setLoaded(true);
        });
    }

    return () => {
      cancelled = true;
      listeners.delete(handleUpdate);
    };
  }, [section, fallback]);

  return { content, loaded };
}
