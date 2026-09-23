/**
 * GallerySection â€” Premium gallery with true masonry layout, animated filters,
 * blur-up image loading, and a swipeable lightbox with thumbnail strip.
 *
 * The 9 photos (title / category / image) are admin-editable from
 * Site Content > Gallery. Card heights (for the masonry variety) are assigned
 * automatically by position â€” not admin-editable, so the layout always looks
 * intentional regardless of what's uploaded.
 *
 * Images live in `src/assets/images/gallery/`. gallery4 is a .webp file â€”
 * keep that extension, don't rename it to .jpg.
 */

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Button } from '@/components/ui';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi2';
import { FiImage, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import useSiteContent from '@/hooks/useSiteContent';

/* ===== Gallery images â€” fallback photos until the admin uploads replacements ===== */
import gallery1 from '@/assets/images/gallery/gallery1.jpg';
import gallery2 from '@/assets/images/gallery/gallery2.jpg';
import gallery3 from '@/assets/images/gallery/gallery3.jpg';
import gallery4 from '@/assets/images/gallery/gallery10.webp';
import gallery5 from '@/assets/images/gallery/gallery5.jpg';
import gallery6 from '@/assets/images/gallery/gallery6.jpg';
import gallery7 from '@/assets/images/gallery/gallery7.jpg';
import gallery8 from '@/assets/images/gallery/gallery8.jpg';
import gallery9 from '@/assets/images/gallery/gallery9.jpg';

/* ===== Animation variants ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.25, ease: 'easeInOut' },
  },
};

/* Lightbox slide variants â€” direction-aware */
const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80, scale: 0.96 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80, scale: 0.96 }),
};

/* ===== Filter categories ===== */
const categories = [
  'All',
  'Yoga Classes',
  'Meditation',
  'Teacher Training',
  'Events',
  'Workshops',
];

/* ===== Uniform card height â€” every gallery image renders at the same size ===== */
const CARD_HEIGHT = 'h-[340px]';

/* ===== Fallback gallery data â€” shown until the admin edits this section,
   and used to backfill any photo the admin hasn't touched yet. ===== */
const galleryFallbackItems = [
  { image: gallery1, category: 'Yoga Classes', title: 'Hatha Yoga Session' },
  { image: gallery2, category: 'Meditation', title: 'Morning Meditation' },
  { image: gallery3, category: 'Teacher Training', title: 'Teacher Training Program' },
  { image: gallery4, category: 'Events', title: 'Yoga Retreat Event' },
  { image: gallery5, category: 'Workshops', title: 'Pranayama Workshop' },
  { image: gallery6, category: 'Yoga Classes', title: 'Ashtanga Practice' },
  { image: gallery7, category: 'Meditation', title: 'Sunset Meditation' },
  { image: gallery8, category: 'Teacher Training', title: 'Alignment Training' },
  { image: gallery9, category: 'Events', title: 'Community Yoga Day' },
];

const galleryFallback = {
  heading: 'Experience the Journey of Wellness',
  subheading: 'Our Gallery',
  description:
    'Showcase the peaceful environment, yoga sessions, workshops, teacher training, meditation, and community activities.',
  image: '',
  features: [],
  items: galleryFallbackItems,
};

/* ===== Placeholder gradient colors ===== */
const gradients = [
  'from-primary/30 to-primary-dark/40',
  'from-secondary/30 to-secondary-light/40',
  'from-primary-light/30 to-primary/40',
  'from-secondary-light/30 to-secondary/40',
  'from-primary-dark/30 to-primary-light/40',
  'from-primary/30 to-secondary/40',
  'from-secondary/30 to-primary-light/40',
  'from-primary-light/30 to-secondary-light/40',
  'from-primary-dark/30 to-secondary/40',
];

export default function GallerySection() {
  const { content } = useSiteContent('gallery', galleryFallback);

  /* Assign a stable numeric id + a masonry height by position */
  const galleryItems = useMemo(
    () =>
      content.items.map((item, i) => ({
        ...item,
        id: i,
        height: CARD_HEIGHT,
      })),
    [content.items],
  );

  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [direction, setDirection] = useState(0);
  const [loadedIds, setLoadedIds] = useState(() => new Set());
  const [hoveredId, setHoveredId] = useState(null);

  /* Filtered items based on active category */
  const filteredItems = useMemo(
    () =>
      activeFilter === 'All'
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeFilter),
    [activeFilter, galleryItems],
  );

  /* Category counts, recomputed whenever the underlying items change */
  const categoryCounts = useMemo(
    () =>
      categories.reduce((acc, cat) => {
        acc[cat] = cat === 'All' ? galleryItems.length : galleryItems.filter((i) => i.category === cat).length;
        return acc;
      }, {}),
    [galleryItems],
  );

  const markLoaded = useCallback((id) => {
    setLoadedIds((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }, []);

  /* ===== Lightbox navigation ===== */
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const nextImage = useCallback(() => {
    setDirection(1);
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filteredItems.length));
  }, [filteredItems.length]);

  const prevImage = useCallback(() => {
    setDirection(-1);
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length,
    );
  }, [filteredItems.length]);

  const goToImage = useCallback(
    (index) => {
      setDirection(index > (lightboxIndex ?? 0) ? 1 : -1);
      setLightboxIndex(index);
    },
    [lightboxIndex],
  );

  /* ===== Keyboard navigation ===== */
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = useCallback((dir) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 360 + 24;
    scrollContainerRef.current.scrollBy({
      left: dir === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  }, []);

  const handleMouseDown = (e) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 6) setHasDragged(true);
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  /* Autoplay smooth advancement */
  useEffect(() => {
    if (isHovered || isDragging || lightboxIndex !== null) return;
    const interval = setInterval(() => {
      if (!scrollContainerRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 20) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const cardWidth = 360 + 24;
        scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 3800);
    return () => clearInterval(interval);
  }, [isHovered, isDragging, lightboxIndex, filteredItems]);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 360 + 24;
    const newIdx = Math.round(scrollContainerRef.current.scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(0, newIdx), filteredItems.length - 1));
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      setActiveIndex(0);
    }
  }, [activeFilter]);

  const dragThreshold = 80;

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#FAF7F2] py-16 md:py-20"
    >
      <style>{`
        .gallery-scroller::-webkit-scrollbar { display: none; }
        .gallery-scroller { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Ambient decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-secondary/5 blur-3xl"
      />

      <Container className="relative max-w-[1320px]">
        {/* ===== Section Heading & Desktop Controls ===== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-2xl"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block rounded-full border border-secondary/35 bg-white/80 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-primary shadow-soft backdrop-blur-sm mb-3"
            >
              {content.subheading || 'Our Gallery'}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-dark"
            >
              {content.heading || 'Experience the Journey of Wellness'}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-sm sm:text-base text-muted leading-relaxed max-w-xl"
            >
              {content.description ||
                'Showcase the peaceful environment, yoga sessions, workshops, teacher training, meditation, and community activities.'}
            </motion.p>
          </motion.div>

          {/* Navigation Arrow Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll('left')}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border/80 bg-white text-dark shadow-soft transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
              aria-label="Previous photos"
            >
              <FiChevronLeft size={22} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border/80 bg-white text-dark shadow-soft transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
              aria-label="Next photos"
            >
              <FiChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* ===== Category Filter Pills ===== */}
        <div className="mb-8 flex flex-wrap items-center gap-2.5">
          {categories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative overflow-hidden rounded-full px-4 py-2 font-body text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-white shadow-soft'
                    : 'border border-border/80 bg-white text-dark/70 hover:border-primary/40 hover:text-primary'
                }`}
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  {category}
                  <span
                    className={`text-[10px] font-bold ${
                      isActive ? 'text-white/80' : 'text-dark/40'
                    }`}
                  >
                    {categoryCounts[category]}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* ===== Horizontal Image Scroller Track ===== */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              handleMouseUp();
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onScroll={handleScroll}
            className="gallery-scroller flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 cursor-grab active:cursor-grabbing snap-x snap-mandatory scroll-smooth select-none"
          >
            {filteredItems.map((item, index) => {
              const isLoaded = loadedIds.has(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (hasDragged) return;
                    goToImage(index);
                  }}
                  className="group relative w-[280px] sm:w-[340px] md:w-[370px] h-[320px] sm:h-[350px] shrink-0 cursor-pointer overflow-hidden rounded-[26px] bg-dark/5 shadow-soft border border-border/80 transition-all duration-500 hover:shadow-card hover:border-secondary/50 snap-start"
                >
                  {/* Skeleton shimmer */}
                  {!isLoaded && (
                    <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-dark/10 via-dark/5 to-dark/10" />
                  )}

                  {/* Photo */}
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      onLoad={() => markLoaded(item.id)}
                      draggable={false}
                      className={`h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-108 ${
                        isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
                      }`}
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className={`h-full w-full bg-gradient-to-br ${gradients[index % gradients.length]} transition-transform duration-500 ease-out group-hover:scale-108`}
                    />
                  )}

                  {/* Gradient shadow for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300" />

                  {/* Category Pill Tag (Top Left) */}
                  {item.category && (
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1 font-body text-xs font-semibold text-primary shadow-soft border border-white/70">
                      {item.category}
                    </span>
                  )}

                  {/* Bottom Content Card */}
                  <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-snug drop-shadow-sm group-hover:text-secondary-light transition-colors">
                        {item.title}
                      </h3>
                      <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-white/80">
                        <FiImage className="text-secondary" /> Click to view full
                      </span>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                      <FiImage size={18} />
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredItems.length === 0 && (
              <div className="w-full flex flex-col items-center gap-3 py-16 text-center">
                <FiImage className="h-10 w-10 text-dark/20" />
                <p className="font-body text-muted">No photos in this category yet.</p>
              </div>
            )}
          </div>
        </div>

        {/* ===== Indicator Dots & Bottom Action ===== */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-border/60">
          {/* Progress Indicator Dots */}
          <div className="flex items-center gap-2">
            {filteredItems.slice(0, 9).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (!scrollContainerRef.current) return;
                  const cardWidth = 370 + 24;
                  scrollContainerRef.current.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-8 bg-primary shadow-xs' : 'w-2 bg-border hover:bg-secondary/60'
                }`}
              />
            ))}
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 font-body text-xs font-bold uppercase tracking-wider text-dark border border-border/80 shadow-soft transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-card"
          >
            View Full Gallery
            <HiArrowRight className="h-3.5 w-3.5 text-primary" />
          </Link>
        </div>
      </Container>

      {/* ===== Lightbox ===== */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-105 hover:bg-white/20"
              aria-label="Close"
            >
              <FiX className="h-6 w-6" />
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-105 hover:bg-white/20"
              aria-label="Previous"
            >
              <FiChevronLeft className="h-6 w-6" />
            </button>

            {/* Image container â€” swipeable */}
            <div className="relative flex max-h-[75vh] max-w-[90vw] items-center justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={lightboxIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -dragThreshold) nextImage();
                    else if (info.offset.x > dragThreshold) prevImage();
                  }}
                  className="relative max-h-[75vh] max-w-[90vw] cursor-grab overflow-hidden rounded-[24px] active:cursor-grabbing"
                  onClick={(e) => e.stopPropagation()}
                >
                  {filteredItems[lightboxIndex].image ? (
                    <img
                      src={filteredItems[lightboxIndex].image}
                      alt={filteredItems[lightboxIndex].title}
                      draggable={false}
                      className="max-h-[75vh] w-auto select-none object-contain"
                    />
                  ) : (
                    <div
                      className={`flex h-[60vh] w-[80vw] max-w-[800px] items-center justify-center bg-gradient-to-br ${gradients[lightboxIndex % gradients.length]}`}
                    >
                      <div className="text-center">
                        <FiImage className="mx-auto h-16 w-16 text-white/60" />
                        <p className="mt-4 font-heading text-2xl text-white/80">
                          {filteredItems[lightboxIndex].title}
                        </p>
                        <p className="mt-2 font-body text-sm text-white/60">
                          Image will appear here once added
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Caption */}
            <p className="mt-5 font-heading text-lg text-white/90">
              {filteredItems[lightboxIndex].title}
            </p>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-105 hover:bg-white/20"
              aria-label="Next"
            >
              <FiChevronRight className="h-6 w-6" />
            </button>

            {/* Thumbnail strip */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="mt-6 flex max-w-[90vw] gap-2 overflow-x-auto px-4 pb-2"
            >
              {filteredItems.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => goToImage(i)}
                  aria-label={`View ${item.title}`}
                  className={`relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg transition-all duration-200 ${
                    i === lightboxIndex
                      ? 'ring-2 ring-white ring-offset-2 ring-offset-black/85 opacity-100'
                      : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  ) : (
                    <div className={`h-full w-full bg-gradient-to-br ${gradients[i % gradients.length]}`} />
                  )}
                </button>
              ))}
            </div>

            {/* Image counter */}
            <div className="mt-2 rounded-full bg-white/10 px-4 py-1.5 font-body text-xs text-white backdrop-blur-md">
              {lightboxIndex + 1} / {filteredItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}