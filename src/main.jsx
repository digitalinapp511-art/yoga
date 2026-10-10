import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@/styles/index.css';
import { fetchAllSiteContentOnce } from '@/hooks/useSiteContent';

// Prefetch site content immediately on bundle load
fetchAllSiteContentOnce();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
