import { motion } from 'framer-motion';
import { Container, Button } from '@/components/ui';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiOutlineMapPin, HiOutlineCheckBadge } from 'react-icons/hi2';
import { IoLeafOutline, IoPlayOutline } from 'react-icons/io5';
import { GiMeditation } from 'react-icons/gi';
import { useRef } from 'react';
import { useAppContext } from '@/context/AppContext';
import useSiteContent from '@/hooks/useSiteContent';
import FormattedText from '@/components/common/FormattedText';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 * i },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const stats = [
  { icon: IoLeafOutline, value: '1000+', label: 'Happy Students' },
  { icon: GiMeditation, value: '15+', label: 'Years Experience' },
  { icon: HiOutlineCheckBadge, value: 'Certified', label: 'Yoga Teachers' },
  { icon: HiOutlineMapPin, value: 'Dehradun', label: 'Uttarakhand, India' },
];

/* Brand primary — reused for the stat-strip accent bars and value text
   so the strip visually ties back to the CTA button above it. */
const colorPrimary = '#9a3617';


/* ===== Fallback copy — used until/unless the admin saves Hero content ===== */
const heroFallback = {
  heading: 'Find Your Inner Peace at *Vimoksha Yogshala*',
  subheading: "EST. 2019 · DEHRADUN'S TRUSTED YOGSHALA",
  description:
    "Nestled in the serene beauty of Dehradun, we've guided over 1000 students through authentic Hatha yoga, pranayama, and yoga therapy — taught in small batches, led by teachers who know your name by the second class.",
  image: '/hero.png',
  ctaText: 'Book Free Trial',
  ctaLink: '',
};

export default function HeroSection() {
  const { openTrialModal } = useAppContext();
  const { content } = useSiteContent('hero', heroFallback);

  const hasCustomLink = content.ctaLink && content.ctaLink.trim().length > 0;

  return (
    <section className="relative overflow-hidden bg-background pt-[115px] sm:pt-[135px] md:pt-[145px] pb-10 sm:pb-14">
      {/* Subtle ambient decorative lighting */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      {/* Main 2-Column Split Hero Container */}
      <Container className="max-w-[1320px]">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-16">
          {/* LEFT: Text Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Tagline Badge */}
            <motion.div variants={fadeUp} className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/8 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                <IoLeafOutline className="text-sm" />
                <span>{content.subheading || heroFallback.subheading}</span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] leading-[1.08] tracking-tight text-dark"
            >
              <FormattedText text={content.heading || heroFallback.heading} />
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-5 text-sm sm:text-base md:text-lg font-normal leading-relaxed text-muted max-w-xl"
            >
              {content.description || heroFallback.description}
            </motion.p>

            {/* Feature Pills */}
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-dark shadow-xs border border-border/80">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Himalayan Sanctuary
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-dark shadow-xs border border-border/80">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Small Focused Batches
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-dark shadow-xs border border-border/80">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Certified Yoga Masters
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                {hasCustomLink ? (
                  <Button
                    as={Link}
                    to={content.ctaLink}
                    variant="primary"
                    icon={<HiArrowRight className="h-4 w-4" />}
                    className="h-12 rounded-full px-8 text-sm font-semibold shadow-soft hover:shadow-elevated transition-all"
                  >
                    {content.ctaText || heroFallback.ctaText}
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={openTrialModal}
                    variant="primary"
                    icon={<HiArrowRight className="h-4 w-4" />}
                    className="h-12 rounded-full px-8 text-sm font-semibold shadow-soft hover:shadow-elevated transition-all"
                  >
                    {content.ctaText || heroFallback.ctaText}
                  </Button>
                )}
              </motion.div>

              <motion.a
                href="#pathways"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-white px-6 text-sm font-semibold text-dark shadow-xs transition-all hover:border-primary hover:text-primary hover:bg-white"
              >
                Explore Pathways
                <HiArrowRight className="h-3.5 w-3.5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Half Photo with Luxury Framed UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            {/* Decorative accent ring */}
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full border border-secondary/30 pointer-events-none -z-10" />

            {/* Main Photo Frame */}
            <div className="relative overflow-hidden rounded-[32px] border-[8px] sm:border-[10px] border-white bg-white shadow-elevated">
              <img
                src={content.image || heroFallback.image}
                alt="Vimoksha Yogshala student meditating in serene environment"
                fetchPriority="high"
                className="h-[380px] sm:h-[460px] md:h-[500px] lg:h-[530px] w-full object-cover object-center"
              />
            </div>

            {/* Floating Trust Badge 1: Top Right */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-3 -right-2 sm:-right-4 rounded-2xl bg-white px-4 py-2.5 shadow-card border border-border/70 flex items-center gap-2.5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/15 text-secondary text-base">
                ★
              </span>
              <div>
                <p className="text-xs font-bold text-dark leading-none">4.9 / 5.0 Rating</p>
                <p className="text-[10px] text-muted leading-tight mt-0.5">350+ Google Reviews</p>
              </div>
            </motion.div>

            {/* Floating Trust Badge 2: Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-4 -left-2 sm:-left-4 rounded-2xl bg-primary px-5 py-3 text-white shadow-elevated"
            >
              <p className="font-heading text-xl font-bold leading-none">Since 2019</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/80">
                Rooted in Himalayan Tradition
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* ===== Stats strip — trust markers ===== */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-14 sm:mt-18 rounded-[28px] border border-border/80 bg-white p-6 sm:p-8 md:p-10 shadow-soft grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              custom={i}
              variants={fadeUp}
              className="flex items-center gap-3.5 sm:gap-4"
            >
              <span
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#EAE6DA] sm:h-14 sm:w-14"
                style={{ color: colorPrimary }}
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </span>
              <span className="flex flex-col leading-tight">
                <span
                  style={{ color: colorPrimary }}
                  className="font-heading text-lg sm:text-xl md:text-2xl font-bold"
                >
                  {value}
                </span>
                <span className="text-xs font-light text-neutral-500 sm:text-sm mt-0.5">
                  {label}
                </span>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}