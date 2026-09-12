import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import usePageMeta from '@/hooks/usePageMeta';
import { Container, Button } from '@/components/ui';
import { Team, FAQSection } from '@/components/sections';
import { HiArrowRight } from 'react-icons/hi2';
import { FiPlus, FiMinus } from 'react-icons/fi';
import {
  IoLeafOutline,
  IoBodyOutline,
  IoHandLeftOutline,
  IoWaterOutline,
  IoSchoolOutline,
  IoMailOutline,
  IoTimeOutline,
  IoRibbonOutline,
} from 'react-icons/io5';
import { GiMeditation, GiLotus } from 'react-icons/gi';

/* ===== Animation variants ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

/* ===== Programs offered ===== */
const programs = [
  {
    title: 'Yoga Classes',
    description: 'Asanas, Pranayama, Shatkriya, Yoga Nidra & Meditation for all levels.',
    icon: GiMeditation,
  },
  {
    title: 'Yoga Therapy',
    description: 'Therapeutic practice tailored to specific health concerns and recovery.',
    icon: IoBodyOutline,
  },
  {
    title: 'Naturopathy',
    description: 'Ancient detoxification techniques to cleanse and restore balance.',
    icon: IoLeafOutline,
  },
  {
    title: 'Acupressure',
    description: 'Pressure-point therapy for natural pain relief and circulation.',
    icon: IoHandLeftOutline,
  },
  {
    title: 'Cupping Therapy',
    description: 'Traditional suction therapy to stimulate healing and wellness.',
    icon: IoWaterOutline,
  },
  {
    title: 'Yoga Teacher Training',
    description: 'Certified training for those ready to deepen and share their practice.',
    icon: IoSchoolOutline,
  },
];

/* ===== Practices & styles ===== */
const practices = ['Asanas', 'Pranayama', 'Shatkriya', 'Yoga Nidra', 'Meditation'];
const styles = ['Hatha Yoga', 'Ashtanga Vinyasa Yoga', 'Iyengar Yoga', 'Chakra Yoga'];

/* ===== Founder credentials ===== */
const credentials = [
  'M.A. (Yogacharya)',
  'B.N.Y.',
  'UGC NET (Yoga)',
  'D.N.Y.S.',
  'D.A.H.S.',
  'H.H.M.',
];

const founderBioFull = `When he came to Haridwar, he stayed at Shantikunj Ashram. Attended regular yoga and yagya classes there for 45 days and ate satvik food and saw huge change in his physical, mental health, stress, and insomnia — and came to know that yoga is the art of living life. So he decided to live his future life in the same way. Then he did a Diploma in Holistic Health Management course from Dev Sanskriti Vishwavidyalaya, Shantikunj in 2012, and from there continued further education in Yoga and tried to bring changes in the health and lifestyle of people based on knowledge and experience. Meanwhile, he also got education in Naturopathy, Diploma in Acupressure, Ayurveda, and Marma Chikitsa.

Established Vimoksha Yogashala in 2019 after doing his MA in Yoga. From there, efforts are being made to bring changes in the health and lifestyle of people through Yoga and Naturopathy.`;

export default function AboutPage() {
  usePageMeta('about');
  const [bioExpanded, setBioExpanded] = useState(false);

  return (
    <div data-page="about">
      {/* ===== 1. Intro / Hero ===== */}
      <section className="overflow-hidden bg-background pt-[110px] pb-[70px] sm:pt-[135px] md:pb-[90px]">
        <Container className="max-w-[1280px]">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full border border-secondary/30" />
              <div className="relative overflow-hidden rounded-[32px] border-[10px] border-white shadow-elevated">
                <img
                  src="/images/about-hero-yoga.jpg"
                  alt="Yoga practice at Vimoksha Yogshala"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 rounded-2xl bg-primary px-5 py-4 text-white shadow-card sm:right-5">
                <p className="font-heading text-2xl font-semibold">Since 2019</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/75">Rooted in tradition</p>
              </div>
            </div>

            <div className="order-1 flex flex-col items-start gap-5 lg:order-2">
              <span className="inline-block rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                About Us
              </span>
              <h1 className="max-w-xl font-heading text-4xl font-semibold leading-[1.05] text-dark sm:text-5xl md:text-6xl">
                A quieter path to a <span className="text-primary">stronger self.</span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
                Vimoksha Yogshala is a sanctuary for holistic wellness in Dehradun,
                where authentic yoga, natural healing, and thoughtful guidance meet.
                We help you build a steadier body, clearer mind, and more balanced life.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {['Yoga Classes', 'Yoga Therapy', 'Teacher Training'].map((item) => (
                  <span key={item} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-dark shadow-soft">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 2. Meaning of Vimoksha ===== */}
      <section className="bg-white py-14 md:py-18 border-y border-border/60">
        <Container className="max-w-[1200px]">
          <div className="rounded-[28px] bg-background p-8 md:p-12 border border-border shadow-soft text-center">
            <span className="inline-block rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4">
              More than a Yoga Studio
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-dark mb-4">
              Dehradun&apos;s Yoga &amp; Lifestyle <span className="text-primary">Transformation Center</span>
            </h2>
            <div className="mx-auto max-w-3xl space-y-4 text-base md:text-lg leading-relaxed text-muted">
              <p>
                <strong className="text-dark font-semibold">Vimoksha means liberation.</strong> For us, liberation does not mean liberation from life, but liberation from physical and mental problems that occur in everyday life.
              </p>
              <p>
                We chose this name because yoga helps us find freedom from physical ailments, mental stress, and constant ups and downs. Vimoksha symbolizes a dedicated journey towards health, clarity, balance, and inner well-being.
              </p>
            </div>
          </div>
        </Container>
      </section>

           {/* ===== 3. Vision & Mission ===== */}
      <section className="bg-background py-14 md:py-18">
        <Container className="max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Vision */}
            <div className="bg-white rounded-[28px] p-8 md:p-10 border border-border shadow-soft flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4">
                  Our Vision
                </span>
                <h3 className="font-heading text-2xl font-semibold text-dark mb-4">
                  Yoga as a Meaningful Way of Living
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-muted">
                  To make yoga a meaningful way of living — creating greater balance, awareness, and wellbeing in everyday life.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div className="bg-white rounded-[28px] p-8 md:p-10 border border-border shadow-soft flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-secondary/15 text-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4">
                  Our Mission
                </span>
                <h3 className="font-heading text-2xl font-semibold text-dark mb-4">
                  Authentic &amp; Personalized Wellness
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-muted">
                  To provide authentic, practical, and personalized yoga and wellness practices that support healthier bodies, calmer minds, and balanced lives.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 4. What We Offer ===== */}
      <section className="bg-white py-14 md:py-20">
        <Container className="max-w-[1200px]">
          <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
            <h2 className="font-heading text-2xl font-semibold text-dark sm:text-3xl md:text-4xl">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <div
                  key={program.title}
                  className="group flex flex-col rounded-[24px] border border-border bg-white p-7 shadow-soft transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-dark">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {program.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ===== 5. Our Story ===== */}
      <section className="bg-background py-8 md:py-12">
        <Container className="max-w-[1200px]">
          <div className="bg-white rounded-[28px] p-8 md:p-12 border border-border shadow-soft flex flex-col gap-6">
            <span className="mx-auto inline-block rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
              Our Story
            </span>

            <h2 className="text-center font-heading text-2xl font-semibold text-dark sm:text-3xl md:text-4xl">
              Where Tradition Meets Modern Wellness
            </h2>

            <p className="text-base leading-relaxed text-muted md:text-lg">
              Founded in 2019 by Yogacharya Gyan Prakash, Vimoksha Yogshala
              was created with the vision of providing a space where
              traditional healing methods and contemporary wellness practices
              converge. Our founders are passionate about guiding individuals
              on their journey to balance and vitality.
            </p>

            <p className="text-base leading-relaxed text-muted md:text-lg">
              We design yoga classes for beginners to advanced levels,
              including Asanas, Pranayama, Shatkriya, Yoga Nidra, and
              Meditation — following different styles of yoga such as Hatha
              Yoga, Ashtanga Vinyasa Yoga, Iyengar Yoga, and Chakra Yoga.
            </p>

            <p className="text-base leading-relaxed text-muted md:text-lg">
              Our Naturopathy program is an ancient detoxification technique
              that involves a series of cleansing treatments designed to
              remove toxins and restore balance to the body. This program is
              a popular choice among our clients, as it offers a holistic
              approach to detoxification and rejuvenation.
            </p>

            <p className="text-base leading-relaxed text-muted md:text-lg">
              At Vimoksha, we offer a range of programs and services tailored
              to meet the unique needs of each individual. Our yoga
              trainings, led by experienced and certified instructors, are
              designed to help students deepen their practice and
              understanding of yoga, while our Naturopathy and Acupressure
              services provide natural solutions for a variety of health
              concerns.
            </p>

            {/* Practices & Styles pills */}
            <div className="mt-4 flex flex-col gap-4">
              <div>
                <p className="mb-2.5 font-body text-xs font-semibold uppercase tracking-wider text-muted">
                  Practices We Teach
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {practices.map((p) => (
                    <span
                      key={p}
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary/8 px-4 py-1.5 font-body text-sm font-medium text-primary"
                    >
                      <GiLotus className="h-3.5 w-3.5" />
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2.5 font-body text-xs font-semibold uppercase tracking-wider text-muted">
                  Yoga Styles
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {styles.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 font-body text-sm font-medium text-secondary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 6. Founder Profile ===== */}
      <section className="bg-background pt-4 pb-12 md:pb-16">
        <Container className="max-w-[1200px]">
          <div className="rounded-[28px] border border-border bg-white p-8 shadow-soft md:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              {/* Founder photo */}
              <div className="mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-full border border-border bg-background sm:mx-0">
                <img
                  src="/images/about-instructor.jpg"
                  alt="Yogacharya Gyan Prakash"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2 text-center sm:text-left">
                <h3 className="font-heading text-xl font-semibold text-dark sm:text-2xl md:text-3xl">
                  Yogacharya Gyan Prakash
                </h3>
                <p className="font-body text-sm text-muted">
                  {credentials.join(', ')}
                </p>
              </div>
            </div>

            {/* Quick facts */}
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full border border-border px-4 py-2">
                <IoTimeOutline className="h-4 w-4 text-primary" />
                <span className="font-body text-sm text-dark/80">13 years experience</span>
              </div>
              <a
                href="mailto:info@vimokshayogshala.in"
                className="flex items-center gap-2 rounded-full border border-border px-4 py-2 transition-colors hover:border-primary/40"
              >
                <IoMailOutline className="h-4 w-4 text-primary" />
                <span className="font-body text-sm text-dark/80">info@vimokshayogshala.in</span>
              </a>
              <div className="flex items-center gap-2 rounded-full border border-border px-4 py-2">
                <IoRibbonOutline className="h-4 w-4 text-primary" />
                <span className="font-body text-sm text-dark/80">Founder &amp; Patron</span>
              </div>
            </div>

            {/* Bio */}
            <p className="mt-6 text-base leading-relaxed text-dark/80">
              Yogacharya Gyan Prakash is the founder and patron of Vimoksha
              Yogashala. He is a PhD scholar in Yogic Science from Shri Guru
              Ram Rai University and has qualified UGC NET in Yoga. He also
              serves as Assistant Professor in the Department of Yoga at ITM
              College, Dehradun. The beginning of yoga in his life is like a
              mysterious event which brought a lot of change in his life.
            </p>

            {/* Expandable "About More" */}
            <div className="mt-4">
              <button
                onClick={() => setBioExpanded(!bioExpanded)}
                className="flex items-center gap-2 font-body text-sm font-semibold text-primary transition-all hover:gap-3"
                aria-expanded={bioExpanded}
              >
                {bioExpanded ? 'Show Less' : 'About More'}
                {bioExpanded ? (
                  <FiMinus className="h-4 w-4" />
                ) : (
                  <FiPlus className="h-4 w-4" />
                )}
              </button>

              {bioExpanded && (
                <div className="mt-4 flex flex-col gap-4 border-t border-border pt-4">
                  {founderBioFull.split('\n\n').map((para, i) => (
                    <p key={i} className="text-sm leading-relaxed text-dark/70">
                      {para}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 7. Team Section ===== */}
      <Team />

      {/* ===== 8. Recognitions & Associations (3 Logos) ===== */}
      <section className="bg-background py-16 md:py-24 border-y border-border/70">
        <Container className="max-w-[1200px]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-3">
              Trust &amp; Affiliations
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark">
              Recognitions &amp; <span className="text-primary">Associations</span>
            </h2>
            <p className="mt-3 text-base text-muted">
              Recognized and affiliated with premier national yoga and government wellness bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Logo 1: Indian Yoga Association */}
            <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-border shadow-soft flex flex-col items-center text-center transition-all duration-300 hover:shadow-elevated hover:-translate-y-1">
              <div className="h-32 w-full flex items-center justify-center p-2 mb-4 bg-background/50 rounded-xl">
                <img
                  src="/images/recognition/iya-association.jpeg"
                  alt="Associated with Indian Yoga Association"
                  className="max-h-24 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-dark">
                Indian Yoga Association
              </h3>
              <span className="mt-2 inline-block rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium">
                Associated Member
              </span>
            </div>

            {/* Logo 2: MSME Govt of India */}
            <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-border shadow-soft flex flex-col items-center text-center transition-all duration-300 hover:shadow-elevated hover:-translate-y-1">
              <div className="h-32 w-full flex items-center justify-center p-2 mb-4 bg-background/50 rounded-xl">
                <img
                  src="/images/recognition/msme-gov-india.jpeg"
                  alt="MSME Registration Government of India"
                  className="max-h-24 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-dark">
                MSME — Govt. of India
              </h3>
              <span className="mt-2 inline-block rounded-full bg-secondary/15 text-secondary px-3 py-1 text-xs font-medium">
                Registered Enterprise
              </span>
            </div>

            {/* Logo 3: Official Fitness Partner */}
            <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-border shadow-soft flex flex-col items-center text-center transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
              <div className="h-32 w-full flex items-center justify-center p-2 mb-4 bg-background/50 rounded-xl">
                <img
                  src="/images/recognition/fitness-partner.png"
                  alt="Official Fitness Partner"
                  className="max-h-24 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-dark">
                Official Fitness Partner
              </h3>
              <span className="mt-2 inline-block rounded-full bg-dark/10 text-dark px-3 py-1 text-xs font-medium">
                Certified Partner
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 9. FAQs ===== */}
      <FAQSection />

      {/* ===== 10. Closing CTA ===== */}
      <section className="bg-white py-[60px] md:py-[100px]">
        <Container className="max-w-[700px]">
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Discover the benefits of our yoga classes, naturopathic
              consultations, and holistic workshops, and become part of a
              community that values natural health and wellness. We look
              forward to guiding you on your path to vitality and balance.
            </p>

            <p className="font-heading text-xl font-semibold text-primary">
              We look forward to welcoming you to Vimoksha Yogshala.
            </p>

            <div>
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
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}