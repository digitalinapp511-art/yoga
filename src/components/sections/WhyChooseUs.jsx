import { motion } from 'framer-motion';
import { Container } from '@/components/ui';
import {
  FaUserGraduate,
  FaLeaf,
  FaHeart,
  FaClock,
  FaHandsHelping,
} from 'react-icons/fa';
import { HiOutlineCheckBadge } from 'react-icons/hi2';
import useSiteContent from '@/hooks/useSiteContent';
import FormattedText from '@/components/common/FormattedText';

/* ───── Animation Variants ───── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 * i },
  }),
};

const defaultIcons = [
  FaUserGraduate,
  FaLeaf,
  FaClock,
  FaHandsHelping,
  HiOutlineCheckBadge,
  FaHeart,
];

/* ───── Feature Data (from original reference) ───── */
const whyUsFallbackItems = [
  {
    title: 'Expert Instruction',
    description:
      'Authentic Yoga Studio in Dehradun with certified and experienced instructors.',
  },
  {
    title: 'Dedicated Space',
    description:
      'Personalized and group Yoga Classes in Dehradun for all levels.',
  },
  {
    title: 'Flexible time schedule',
    description:
      'Therapeutic and restorative Yoga Therapy in Dehradun.',
  },
  {
    title: 'Variety of Classes',
    description:
      'Traditional healing with Acupressure and Cupping Therapy Dehradun.',
  },
  {
    title: 'Additional Services',
    description:
      'Comprehensive Yoga Teacher Training in Dehradun with International certification.',
  },
  {
    title: 'Safety and Injury Prevention',
    description:
      'A peaceful and welcoming environment for yoga enthusiasts.',
  },
];

const whyUsFallback = {
  heading: 'Why Choose *Vimoksha Yogshala*?',
  subheading: 'WHY CHOOSE VIMOKSHA YOGSHALA',
  description: 'Discover Balance, Strength, and Serenity',
  image: '/images/why-choose-man.jpg',
  items: whyUsFallbackItems,
};

/* ───── Component ───── */
export default function WhyChooseUs() {
  const { content } = useSiteContent('whyUs', whyUsFallback);
  const items = content.items?.length ? content.items : whyUsFallbackItems;

  const leftItems = items.slice(0, 3);
  const rightItems = items.slice(3, 6);
  const heroImage = content.image || whyUsFallback.image;

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24 border-t border-b border-border/50">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-secondary/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-72 w-72 rounded-full bg-primary/5 blur-[90px]" />

      <Container className="max-w-[1320px] relative z-10">
        {/* ─── Header: Why Choose Vimoksha Yogshala? ─── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mx-auto mb-10 max-w-2xl text-center md:mb-14"
        >
          {content.subheading && (
            <motion.span
              custom={0}
              variants={fadeUp}
              className="mb-3 inline-block rounded-full border border-secondary/30 bg-secondary/8 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary"
            >
              {content.subheading}
            </motion.span>
          )}

          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-semibold tracking-tight text-dark"
          >
            <FormattedText text={content.heading || whyUsFallback.heading} />
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="mt-3 text-sm sm:text-base md:text-lg font-normal text-muted"
          >
            {content.description || whyUsFallback.description}
          </motion.p>
        </motion.div>

        {/* ─── Desktop 3-Column Layout: Left (3) | Center Photo | Right (3) ─── */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1.15fr_1fr] items-center gap-8 xl:gap-12">
          {/* Left Column: 3 Items */}
          <div className="space-y-8 xl:space-y-10">
            {leftItems.map((feature, idx) => {
              const Icon = defaultIcons[idx] || FaUserGraduate;
              return (
                <motion.div
                  key={feature.title || idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="group flex items-start gap-4 p-3 rounded-2xl transition-all duration-300 hover:bg-background/80"
                >
                  <div className="flex h-12 w-12 xl:h-14 xl:w-14 flex-shrink-0 items-center justify-center rounded-full bg-secondary/15 text-primary border border-secondary/30 shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                    <Icon className="text-xl xl:text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl xl:text-2xl font-bold text-dark transition-colors duration-200 group-hover:text-primary leading-snug">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs xl:text-sm leading-relaxed text-muted font-light">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Column: Cutout Yogi with Radiant Mandala */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Soft radiant ambient glow */}
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-secondary/10 blur-3xl scale-90" />

            <div className="relative w-full max-w-[440px] xl:max-w-[480px]">
              <img
                src={heroImage}
                alt="Why Choose Vimoksha Yogshala - Yogacharya Gyan Prakash"
                className="w-full h-auto object-contain drop-shadow-sm transition-transform duration-700 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Column: 3 Items */}
          <div className="space-y-8 xl:space-y-10">
            {rightItems.map((feature, idx) => {
              const Icon = defaultIcons[idx + 3] || FaHandsHelping;
              return (
                <motion.div
                  key={feature.title || idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="group flex items-start gap-4 p-3 rounded-2xl transition-all duration-300 hover:bg-background/80"
                >
                  <div className="flex h-12 w-12 xl:h-14 xl:w-14 flex-shrink-0 items-center justify-center rounded-full bg-secondary/15 text-primary border border-secondary/30 shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                    <Icon className="text-xl xl:text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl xl:text-2xl font-bold text-dark transition-colors duration-200 group-hover:text-primary leading-snug">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs xl:text-sm leading-relaxed text-muted font-light">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ─── Mobile & Tablet Layout (< lg) ─── */}
        <div className="lg:hidden flex flex-col items-center">
          {/* Center Yogi Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full max-w-[340px] sm:max-w-[400px] mb-8 sm:mb-10"
          >
            <div className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-secondary/10 blur-2xl scale-90" />
            <img
              src={heroImage}
              alt="Why Choose Vimoksha Yogshala"
              className="w-full h-auto object-contain drop-shadow-sm"
              loading="lazy"
            />
          </motion.div>

          {/* 6 Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            {items.map((feature, idx) => {
              const Icon = defaultIcons[idx] || FaUserGraduate;
              return (
                <motion.div
                  key={feature.title || idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                  className="flex items-start gap-3.5 p-4 rounded-2xl border border-border/70 bg-background/50 shadow-xs"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-secondary/15 text-primary border border-secondary/30 shadow-xs">
                    <Icon className="text-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-dark leading-snug">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}