import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import usePageMeta from '@/hooks/usePageMeta';
import { Container, Button } from '@/components/ui';
import { HiArrowRight } from 'react-icons/hi2';
import {
  IoCheckmarkCircle,
  IoTimeOutline,
  IoMailOutline,
  IoCallOutline,
  IoLocationOutline,
  IoVideocamOutline,
  IoBusinessOutline,
  IoCalendarOutline,
} from 'react-icons/io5';
import { GiLotus } from 'react-icons/gi';
import { useAppContext } from '@/context/AppContext';
import { classLevels } from './classLevelsData';

/* ===== Animation variants ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

/* ===== Default Hero Visuals & Highlights per Class Level ===== */
const defaultHeroImages = {
  beginner: {
    src: '/images/classes/beginner-hero.jpg',
    alt: 'Serene beginner yoga practitioner sitting peacefully in Himalayan yoga studio in Dehradun',
    quote: 'Every master was once a beginner. Start your journey with gentle grace.',
    badge: 'Gentle & Foundational',
  },
  intermediate: {
    src: '/images/classes/intermediate-hero.jpg',
    alt: 'Intermediate yoga practitioner demonstrating focused Warrior II pose in Dehradun studio',
    quote: 'Build stamina, precision, and deeper mental stillness.',
    badge: 'Strength & Flow',
  },
  advance: {
    src: '/images/classes/advance-hero.jpg',
    alt: 'Master yogi performing advanced arm balance overlooking Himalayan sunrise',
    quote: 'Total poise, unwavering focus, and master alignment.',
    badge: 'Mastery & Discipline',
  },
};

const levelHighlights = {
  beginner: [
    'No Prior Experience Needed',
    'Hands-on Alignment Coaching',
    'Small Focused Batches',
  ],
  intermediate: [
    'Dynamic Asana Sequences',
    'Endurance & Balance Holds',
    'Deep Pranayama Practice',
  ],
  advance: [
    'Advanced Asanas & Inversions',
    'Mastery & Inner Poise',
    'Physiological Precision',
  ],
};

/**
 * Dedicated class level page shell. Renders a level-specific framed luxury hero,
 * summary, benefits, gallery, styles taught, includes, timings, and CTA.
 */
export default function ClassLevelsTemplate({
  metaKey,
  pageKey,
  levelKey = 'beginner',
  badgeLabel,
  heroTitleLead,
  heroTitleAccent,
  heroTitleTail = '',
  heroDescription,
  heroImage,
  ctaBadge = 'Get In Touch',
  ctaHeading,
  ctaDescription,
}) {
  usePageMeta(metaKey);
  const { openTrialModal } = useAppContext();
  const level = classLevels[levelKey] || classLevels.beginner;
  const heroImg = heroImage || defaultHeroImages[levelKey] || defaultHeroImages.beginner;
  const highlights = levelHighlights[levelKey] || levelHighlights.beginner;

  return (
    <div data-page={pageKey}>
      {/* ===== 1. Hero Banner (Framed Luxury Aesthetic — Not full-screen) ===== */}
      <section className="relative overflow-hidden bg-background pt-[115px] pb-12 sm:pt-[135px] sm:pb-16 md:pt-[145px] md:pb-20">
        {/* Subtle ambient lighting */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

        <Container className="max-w-[1320px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
            {/* Left Column: Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start"
            >
              {/* Badge */}
              <motion.div variants={fadeUp} className="mb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/8 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                  <GiLotus className="text-sm text-primary" />
                  <span>{badgeLabel}</span>
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={fadeUp}
                className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] leading-[1.12] tracking-tight text-dark"
              >
                {heroTitleLead} <span className="italic text-primary">{heroTitleAccent}</span>
                {heroTitleTail ? ` ${heroTitleTail}` : ''}
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="mt-5 text-sm sm:text-base md:text-lg font-normal leading-relaxed text-muted max-w-xl"
              >
                {heroDescription}
              </motion.p>

              {/* Feature Highlights */}
              <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2.5">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-dark shadow-xs border border-border/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </span>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  <Button
                    type="button"
                    onClick={openTrialModal}
                    variant="primary"
                    icon={<HiArrowRight className="h-4 w-4" />}
                    className="h-12 rounded-full px-8 text-sm font-semibold shadow-soft hover:shadow-elevated transition-all"
                  >
                    Book Free Trial
                  </Button>
                </motion.div>

                <motion.a
                  href="#batch-schedules"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-white px-6 text-sm font-semibold text-dark shadow-xs transition-all hover:border-primary hover:text-primary hover:bg-white"
                >
                  View Batch Timings &darr;
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column: Framed Luxury Hero Photo (Not full-screen, clean luxury card) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative w-full"
            >
              {/* Decorative accent ring */}
              <div className="pointer-events-none absolute -left-4 -top-4 -z-10 h-28 w-28 rounded-full border border-secondary/30" />

              {/* Main Photo Frame */}
              <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] border-[8px] sm:border-[10px] border-white bg-white shadow-elevated">
                <img
                  src={heroImg.src}
                  alt={heroImg.alt}
                  fetchPriority="high"
                  className="h-[340px] sm:h-[410px] md:h-[450px] lg:h-[480px] w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/20 to-transparent pointer-events-none" />

                {/* Floating Tagline & Quote Overlay */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                  <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-[11px] uppercase tracking-wider font-bold text-white border border-white/30 mb-2">
                    {heroImg.badge}
                  </span>
                  <p className="font-heading text-base sm:text-lg italic font-medium text-white drop-shadow-md leading-snug">
                    &ldquo;{heroImg.quote}&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ===== Level Summary + Benefits ===== */}
      <section className="bg-white py-[60px] md:py-[100px]">
        <Container className="max-w-[1320px]">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-4 text-center"
              >
                <motion.h2
                  variants={fadeUp}
                  className="font-heading text-2xl font-semibold text-dark sm:text-3xl md:text-4xl"
                >
                  {level.sectionHeading}
                </motion.h2>
                <motion.p variants={fadeUp} className="text-base leading-relaxed text-muted">
                  {level.summary}
                </motion.p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
              >
                {level.benefits.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      whileHover={{ y: -6 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                      className="group flex flex-col rounded-[24px] border border-border bg-white p-7 shadow-soft transition-shadow duration-300 hover:shadow-elevated"
                    >
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                        <Icon className="text-2xl" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-dark">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </Container>
          </section>

          {/* ===== Gallery ===== */}
          <section className="bg-background py-[60px] md:py-[100px]">
            <Container className="max-w-[1320px]">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-3"
              >
                {level.gallery.map((photo) => (
                  <motion.div
                    key={photo.src}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    className="overflow-hidden rounded-[24px] shadow-soft"
                  >
                    <img src={photo.src} alt={photo.alt} className="aspect-[4/3] w-full object-cover" />
                  </motion.div>
                ))}
              </motion.div>
            </Container>
          </section>

          {/* ===== Styles Taught ===== */}
          <section className="bg-white py-[60px] md:py-[100px]">
            <Container className="max-w-[1100px]">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mx-auto mb-14 flex max-w-2xl flex-col items-center gap-4 text-center"
              >
                <motion.h2
                  variants={fadeUp}
                  className="font-heading text-2xl font-semibold text-dark sm:text-3xl md:text-4xl"
                >
                  Styles Taught at This Level
                </motion.h2>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className={`mx-auto grid grid-cols-1 gap-6 ${
                  level.styles.length === 1
                    ? 'max-w-[420px]'
                    : level.styles.length === 2
                    ? 'sm:grid-cols-2'
                    : 'sm:grid-cols-3'
                }`}
              >
                {level.styles.map((style) => {
                  const Icon = style.icon;
                  return (
                    <motion.div
                      key={style.title}
                      variants={fadeUp}
                      whileHover={{ y: -6 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                      className="group flex flex-col items-center rounded-[24px] border border-border bg-background p-7 text-center shadow-soft transition-shadow duration-300 hover:shadow-elevated"
                    >
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                        <Icon className="text-2xl" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-dark">{style.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{style.description}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </Container>
          </section>

          {/* ===== Class Includes + Offline & Online Batches ===== */}
          <section id="batch-schedules" className="bg-background py-[60px] md:py-[100px] scroll-mt-20">
            <Container className="max-w-[1240px]">
              {/* Section Header */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-3 text-center"
              >
                <motion.span
                  variants={fadeUp}
                  className="inline-block rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary"
                >
                  Offline & Online Batches
                </motion.span>
                <motion.h2
                  variants={fadeUp}
                  className="font-heading text-2xl font-semibold text-dark sm:text-3xl md:text-4xl"
                >
                  Program Details & Batch Schedules
                </motion.h2>
                <motion.p variants={fadeUp} className="text-base leading-relaxed text-muted">
                  Choose between in-person studio training at our serene Dehradun center or join live interactive sessions from anywhere in the world.
                </motion.p>
              </motion.div>

              {/* Class Inclusions Banner */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mb-10 rounded-[28px] border border-border bg-white p-7 md:p-9 shadow-soft"
              >
                <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-heading text-xl font-semibold text-dark sm:text-2xl">
                    What's Included in This Program
                  </h3>
                  <span className="font-body text-xs font-semibold uppercase tracking-wider text-muted">
                    Full Program Curriculum
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {level.classIncludes.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/60 px-4 py-3 text-sm font-medium text-dark/80"
                    >
                      <IoCheckmarkCircle className="h-5 w-5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Offline & Online Batches Dual Cards */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="grid grid-cols-1 gap-8 lg:grid-cols-2"
              >
                {/* 1. Offline Studio Batches */}
                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="flex flex-col justify-between rounded-[32px] border-2 border-primary/20 bg-white p-7 sm:p-9 shadow-soft transition-all duration-300 hover:border-primary/40 hover:shadow-elevated"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 font-body text-xs font-semibold uppercase tracking-wider text-primary">
                        <IoBusinessOutline className="text-sm" />
                        {level.batches?.offline?.tag || 'In-Studio (Dehradun)'}
                      </span>
                      <span className="flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wider text-muted">
                        <IoCalendarOutline className="text-primary" />
                        {level.batches?.offline?.days || 'Monday to Saturday'}
                      </span>
                    </div>

                    <h3 className="mt-4 font-heading text-2xl font-semibold text-dark">
                      {level.batches?.offline?.title || 'Offline Studio Batches'}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-muted">
                      <IoLocationOutline className="text-primary shrink-0" />
                      {level.batches?.offline?.subtitle || 'Vimoksha Yogshala Studio, Dehradun'}
                    </p>

                    {/* Features List */}
                    <div className="mt-6 rounded-2xl bg-background/60 p-4">
                      <p className="font-body text-xs font-semibold uppercase tracking-wider text-dark/70 mb-2.5">
                        Studio Highlights:
                      </p>
                      <ul className="flex flex-col gap-2">
                        {(level.batches?.offline?.features || []).map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-xs leading-relaxed text-dark/80">
                            <IoCheckmarkCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Timings Slots */}
                    <div className="mt-6">
                      <p className="font-body text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                        Available Offline Timings:
                      </p>
                      <div className="flex flex-col gap-2.5">
                        {(level.batches?.offline?.slots || []).map((slot) => (
                          <div
                            key={slot.time}
                            className="flex items-center justify-between rounded-xl border border-border/80 bg-white px-4 py-3 shadow-xs"
                          >
                            <div className="flex items-center gap-2.5">
                              <IoTimeOutline className="h-4 w-4 text-primary shrink-0" />
                              <span className="text-sm font-semibold text-dark">{slot.time}</span>
                            </div>
                            <span className="rounded-md bg-secondary/10 px-2.5 py-1 text-xs font-medium text-secondary">
                              {slot.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border/70">
                    <Button
                      type="button"
                      onClick={openTrialModal}
                      variant="primary"
                      className="w-full h-[50px] rounded-full text-sm font-semibold"
                      icon={<HiArrowRight className="h-4 w-4" />}
                    >
                      Book Offline Studio Trial
                    </Button>
                  </div>
                </motion.div>

                {/* 2. Online Live Batches */}
                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="flex flex-col justify-between rounded-[32px] border-2 border-secondary/25 bg-white p-7 sm:p-9 shadow-soft transition-all duration-300 hover:border-secondary/50 hover:shadow-elevated"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/15 px-3.5 py-1.5 font-body text-xs font-semibold uppercase tracking-wider text-secondary">
                        <IoVideocamOutline className="text-sm" />
                        {level.batches?.online?.tag || 'Live 2-Way Interactive'}
                      </span>
                      <span className="flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wider text-muted">
                        <IoCalendarOutline className="text-secondary" />
                        {level.batches?.online?.days || 'Monday to Saturday'}
                      </span>
                    </div>

                    <h3 className="mt-4 font-heading text-2xl font-semibold text-dark">
                      {level.batches?.online?.title || 'Online Live Batches'}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-muted">
                      <IoVideocamOutline className="text-secondary shrink-0" />
                      {level.batches?.online?.subtitle || 'Live Stream via Zoom / Google Meet'}
                    </p>

                    {/* Features List */}
                    <div className="mt-6 rounded-2xl bg-background/60 p-4">
                      <p className="font-body text-xs font-semibold uppercase tracking-wider text-dark/70 mb-2.5">
                        Online Highlights:
                      </p>
                      <ul className="flex flex-col gap-2">
                        {(level.batches?.online?.features || []).map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-xs leading-relaxed text-dark/80">
                            <IoCheckmarkCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-secondary" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Timings Slots */}
                    <div className="mt-6">
                      <p className="font-body text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                        Available Online Timings:
                      </p>
                      <div className="flex flex-col gap-2.5">
                        {(level.batches?.online?.slots || []).map((slot) => (
                          <div
                            key={slot.time}
                            className="flex items-center justify-between rounded-xl border border-border/80 bg-white px-4 py-3 shadow-xs"
                          >
                            <div className="flex items-center gap-2.5">
                              <IoTimeOutline className="h-4 w-4 text-secondary shrink-0" />
                              <span className="text-sm font-semibold text-dark">{slot.time}</span>
                            </div>
                            <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                              {slot.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border/70">
                    <Button
                      type="button"
                      onClick={openTrialModal}
                      variant="secondary"
                      className="w-full h-[50px] rounded-full text-sm font-semibold"
                      icon={<HiArrowRight className="h-4 w-4" />}
                    >
                      Book Online Live Trial
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </Container>
          </section>

      {/* ===== Contact ===== */}
      <section className="bg-white py-[60px] md:py-[100px]">
        <Container className="max-w-[900px]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-[32px] border border-border bg-background p-8 shadow-soft md:p-10"
          >
            <motion.div variants={fadeUp} className="flex flex-col items-center gap-4 text-center">
              <span className="inline-block rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                {ctaBadge}
              </span>
              <h2 className="font-heading text-2xl font-semibold text-dark sm:text-3xl md:text-4xl">
                {ctaHeading}
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-muted">{ctaDescription}</p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:info@vimokshayogshala.in"
                className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 transition-colors hover:border-primary/40"
              >
                <IoMailOutline className="h-4 w-4 text-primary" />
                <span className="font-body text-sm text-dark/80">info@vimokshayogshala.in</span>
              </a>
              <a
                href="tel:+919026612796"
                className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 transition-colors hover:border-primary/40"
              >
                <IoCallOutline className="h-4 w-4 text-primary" />
                <span className="font-body text-sm text-dark/80">+91 9026612796</span>
              </a>
              <div className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2">
                <IoLocationOutline className="h-4 w-4 text-primary" />
                <span className="font-body text-sm text-dark/80">Dehradun, Uttarakhand</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex justify-center">
              <Button
                as={Link}
                to="/contact"
                variant="primary"
                size="lg"
                icon={<HiArrowRight className="h-4 w-4" />}
                className="h-[56px] rounded-full px-8 text-base"
              >
                Book Free Trial
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}