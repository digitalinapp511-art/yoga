import React from 'react';
import {
  Calendar,
  TrendingUp,
  Award,
  Flower2,
  Globe,
  CalendarCheck,
  ChevronRight,
} from 'lucide-react';

/* ===== Traditional Ornamental Mandala / Filigree Flourish ===== */
export function FiligreeFlourish({ className = 'text-primary' }) {
  return (
    <div className="flex items-center justify-center py-4" aria-hidden="true">
      <svg
        viewBox="0 0 300 36"
        className={`w-48 sm:w-64 h-7 ${className}`}
        fill="currentColor"
      >
        <circle cx="150" cy="18" r="3.5" />
        <circle cx="150" cy="9" r="2" />
        <circle cx="150" cy="27" r="2" />
        <circle cx="141" cy="18" r="2" />
        <circle cx="159" cy="18" r="2" />
        <path
          d="M138 18c-8-6-16-10-26-10-15 0-26 10-26 21 0 7 5 13 13 13 7 0 13-5 13-12 0-7-5-12-12-12-3 0-5 1-7 3 2-4 6-7 11-7 8 0 16 5 22 11l-3 3c-5-5-11-9-18-9-6 0-11 4-11 10 0 5 4 9 9 9 6 0 11-5 11-11 0-8-7-14-16-14-12 0-20 8-20 17 0 10 8 18 19 18 12 0 22-7 30-15l3 3c-9 9-20 16-34 16-14 0-24-10-24-22 0-13 11-23 26-23 12 0 22 5 30 12l-2 2z"
          transform="scale(0.85) translate(25, -2)"
        />
        <path
          d="M162 18c8-6 16-10 26-10 15 0 26 10 26 21 0 7-5 13-13 13-7 0-13-5-13-12 0-7 5-12 12-12 3 0 5 1 7 3-2-4-6-7-11-7-8 0-16 5-22 11l3 3c5-5 11-9 18-9 6 0 11 4 11 10 0 5-4 9-9 9-6 0-11-5-11-11 0-8 7-14 16-14 12 0 20 8 20 17 0 10-8 18-19 18-12 0-22-7-30-15l-3 3c9 9 20 16 34 16 14 0 24-10 24-22 0-13-11-23-26-23-12 0-22 5-30 12l2 2z"
          transform="scale(0.85) translate(4, -2)"
        />
        <line x1="45" y1="18" x2="80" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="38" cy="18" r="2" />
        <circle cx="30" cy="18" r="1.5" />
        <line x1="220" y1="18" x2="255" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="262" cy="18" r="2" />
        <circle cx="270" cy="18" r="1.5" />
      </svg>
    </div>
  );
}

/* ===== Luxury Course Details Floating Card (Sacred Terracotta & Saffron Palette) ===== */
export default function CourseDetailsCard({
  duration = '24 Days',
  level = 'Beginner to Intermediate',
  certification = '200 Hour RYT - Yoga Alliance',
  yogaStyle = 'Multistyle - Ashtanga, Vinyasa & Hatha',
  language = 'English & Hindi',
  date = '1st to 24th of every month',
  originalFee = '$1050',
  discountedFee = '$649',
  currency = 'USD',
  inrFee = '₹21,000 INR',
  courseHeading = '200 HOUR YOGA TEACHER TRAINING IN DEHRADUN INDIA',
  courseSubheading = 'FOUNDATIONAL LEVEL YOGA ALLIANCE CERTIFIED COURSE',
  leftImage,
  rightImage,
  onBookNow,
}) {
  // Determine left and right preview images based on props or course heading
  const getSideImages = () => {
    if (leftImage && rightImage) return { left: leftImage, right: rightImage };
    const text = `${courseHeading} ${courseSubheading}`.toLowerCase();
    if (text.includes('aerial') || text.includes('50')) {
      return {
        left: leftImage || '/images/teacher-training/aerial-hero.jpg',
        right: rightImage || '/images/teacher-training/aerial-side.jpg',
      };
    }
    if (text.includes('300')) {
      return {
        left: leftImage || '/images/teacher-training/300-hero.jpg',
        right: rightImage || '/images/classes/advance-hero.jpg',
      };
    }
    return {
      left: leftImage || '/images/teacher-training/200-hero.jpg',
      right: rightImage || '/images/teacher-training/hero.webp',
    };
  };

  const sideImages = getSideImages();

  return (
    <section className="relative bg-background pt-10 pb-14 sm:pt-14 sm:pb-16 border-b border-border/80 overflow-hidden">
      <div className="container-custom max-w-[1280px]">
        {/* Floating Card framed in Sacred Terracotta */}
        <div className="relative rounded-2xl sm:rounded-3xl border-2 border-primary bg-white p-6 pt-10 sm:p-8 sm:pt-12 md:p-10 md:pt-12 shadow-[0_16px_45px_rgba(116,39,17,0.12)]">
          {/* COURSE DETAILS Tab Pill (Overlapping Top-Left Border in Deep Terracotta) */}
          <div className="absolute -top-5 left-6 sm:left-10 rounded-t-xl rounded-b-sm bg-primary-dark px-6 sm:px-8 py-2 sm:py-2.5 shadow-md">
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-white uppercase">
              COURSE DETAILS
            </span>
          </div>

          {/* Main Content Grid: 6 Specs Left + Pricing Right */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_330px] lg:items-center">
            {/* Left 6 Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-5 sm:gap-x-6">
              {/* 1. DURATION */}
              <div className="flex items-center gap-3.5 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-secondary/30 bg-[#fff7f2] shadow-xs transition-colors group-hover:border-secondary">
                  <Calendar className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <span className="block font-heading text-xs font-bold uppercase tracking-wider text-secondary">
                    DURATION
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-dark/90 mt-0.5">
                    {duration}
                  </span>
                </div>
              </div>

              {/* 2. LEVEL */}
              <div className="flex items-center gap-3.5 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-secondary/30 bg-[#fff7f2] shadow-xs transition-colors group-hover:border-secondary">
                  <TrendingUp className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <span className="block font-heading text-xs font-bold uppercase tracking-wider text-secondary">
                    LEVEL
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-dark/90 mt-0.5">
                    {level}
                  </span>
                </div>
              </div>

              {/* 3. CERTIFICATION */}
              <div className="flex items-center gap-3.5 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-secondary/30 bg-[#fff7f2] shadow-xs transition-colors group-hover:border-secondary">
                  <Award className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <span className="block font-heading text-xs font-bold uppercase tracking-wider text-secondary">
                    CERTIFICATION
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-dark/90 mt-0.5">
                    {certification}
                  </span>
                </div>
              </div>

              {/* 4. YOGA STYLE */}
              <div className="flex items-center gap-3.5 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-secondary/30 bg-[#fff7f2] shadow-xs transition-colors group-hover:border-secondary">
                  <Flower2 className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <span className="block font-heading text-xs font-bold uppercase tracking-wider text-secondary">
                    YOGA STYLE
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-dark/90 mt-0.5">
                    {yogaStyle}
                  </span>
                </div>
              </div>

              {/* 5. LANGUAGE */}
              <div className="flex items-center gap-3.5 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-secondary/30 bg-[#fff7f2] shadow-xs transition-colors group-hover:border-secondary">
                  <Globe className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <span className="block font-heading text-xs font-bold uppercase tracking-wider text-secondary">
                    LANGUAGE
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-dark/90 mt-0.5">
                    {language}
                  </span>
                </div>
              </div>

              {/* 6. DATE */}
              <div className="flex items-center gap-3.5 group">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-secondary/30 bg-[#fff7f2] shadow-xs transition-colors group-hover:border-secondary">
                  <CalendarCheck className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <span className="block font-heading text-xs font-bold uppercase tracking-wider text-secondary">
                    DATE
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-dark/90 mt-0.5">
                    {date}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Pricing & CTA Block */}
            <div className="flex flex-col justify-center border-t border-border/80 pt-6 lg:border-t-0 lg:border-l lg:border-border/80 lg:pl-8 lg:pt-0">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-secondary">
                  COURSE FEE
                </span>
                <span className="text-[11px] italic font-medium text-primary-dark">
                  starting from
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-base sm:text-lg font-bold text-dark/40 line-through">
                  {originalFee}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-heading text-3xl sm:text-4xl font-black tracking-tight text-primary-dark">
                    {discountedFee}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary-dark">
                    {currency}
                  </span>
                </div>
              </div>

              {inrFee && (
                <p className="text-[11px] font-semibold text-muted mb-4">
                  (Indian Nationals:{' '}
                  <span className="text-primary font-bold">{inrFee}</span>)
                </p>
              )}

              <button
                type="button"
                onClick={onBookNow}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-8 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-secondary-light hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>BOOK NOW</span>
                <ChevronRight className="h-4 w-4 stroke-[3]" />
              </button>
            </div>
          </div>
        </div>

        {/* Course Title Banner Flanked by Side Images */}
        <div className="mt-8 sm:mt-10 mx-auto max-w-6xl px-2 sm:px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            {/* Left Image (Flanking Title) */}
            <div className="hidden sm:block shrink-0 w-32 h-28 sm:w-36 sm:h-32 md:w-48 md:h-38 lg:w-56 lg:h-42 rounded-2xl overflow-hidden shadow-elevated border-4 border-white ring-1 ring-primary/20 group transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src={sideImages.left}
                alt={courseHeading}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Middle Bold Title Block */}
            <div className="text-center max-w-2xl px-2 sm:px-4 flex-1">
              <FiligreeFlourish className="text-primary mb-2" />
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-black leading-tight tracking-tight text-dark uppercase drop-shadow-xs">
                {courseHeading}
              </h2>
              <p className="mt-3 font-sans text-xs sm:text-sm md:text-base font-extrabold tracking-[0.16em] text-primary-dark uppercase">
                {courseSubheading}
              </p>
            </div>

            {/* Right Image (Flanking Title) */}
            <div className="hidden sm:block shrink-0 w-32 h-28 sm:w-36 sm:h-32 md:w-48 md:h-38 lg:w-56 lg:h-42 rounded-2xl overflow-hidden shadow-elevated border-4 border-white ring-1 ring-primary/20 group transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src={sideImages.right}
                alt={courseHeading}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Mobile View: Compact Side-by-Side Images under Title */}
            <div className="flex sm:hidden items-center justify-center gap-3 mt-3 w-full max-w-xs">
              <div className="w-1/2 h-24 rounded-xl overflow-hidden shadow-soft border-2 border-white ring-1 ring-primary/20">
                <img
                  src={sideImages.left}
                  alt={courseHeading}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-1/2 h-24 rounded-xl overflow-hidden shadow-soft border-2 border-white ring-1 ring-primary/20">
                <img
                  src={sideImages.right}
                  alt={courseHeading}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
