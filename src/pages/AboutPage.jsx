import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import usePageMeta from '@/hooks/usePageMeta';
import { Container, Button } from '@/components/ui';
import { Team, FAQSection } from '@/components/sections';
import { HiArrowRight } from 'react-icons/hi2';
import { GiLotus } from 'react-icons/gi';

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

/* ===== Practices & styles ===== */
const practices = ['Asanas', 'Pranayama', 'Shatkriya', 'Yoga Nidra', 'Meditation'];
const styles = ['Hatha Yoga', 'Ashtanga Vinyasa Yoga', 'Iyengar Yoga', 'Chakra Yoga'];

export default function AboutPage() {
  usePageMeta('about');

  return (
    <div data-page="about">
      {/* ===== 1. Intro / Hero ===== */}
      <section className="relative overflow-hidden bg-background pt-[115px] sm:pt-[135px] md:pt-[145px] pb-10 sm:pb-16">
        {/* Subtle ambient decorative lighting */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

        <Container className="max-w-[1320px]">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-16">
            {/* LEFT: Framed Luxury Hero Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative order-2 lg:order-1"
            >
              {/* Main Photo Frame */}
              <div className="relative overflow-hidden rounded-[32px] border-[8px] sm:border-[10px] border-white bg-white shadow-elevated">
                <img
                  src="/images/about-hero-yoga.jpg"
                  alt="Himalayan Yoga Sanctuary at Vimoksha Yogshala Dehradun"
                  fetchPriority="high"
                  className="h-[380px] sm:h-[460px] md:h-[500px] lg:h-[520px] w-full object-cover object-center"
                />
              </div>
            </motion.div>

            {/* RIGHT: Text Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start justify-center order-1 lg:order-2"
            >
              {/* Heading */}
              <motion.h1
                variants={fadeUp}
                className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] leading-[1.15] tracking-tight text-dark"
              >
                A Sacred Sanctuary for <span className="italic text-primary">Inner Peace</span> &amp; Authentic Yoga
              </motion.h1>

              {/* Description (Meaning of Vimoksha) */}
              <motion.div
                variants={fadeUp}
                className="mt-6 space-y-3.5 text-sm sm:text-base md:text-lg font-normal leading-relaxed text-muted max-w-xl"
              >
                <p>
                  <strong className="text-dark font-semibold">Vimoksha means liberation.</strong> For us, liberation does not mean liberation from life, but liberation from physical and mental problems that occur in everyday life.
                </p>
                <p>
                  We chose this name because yoga helps us find freedom from physical ailments, mental stress, and constant ups and downs. Vimoksha symbolizes a dedicated journey towards health, clarity, balance, and inner well-being.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ===== 2. Our Philosophy — Full Card ===== */}
      <section id="about-philosophy" className="bg-white pt-12 md:pt-16 pb-14 md:pb-20 border-b border-border/60 scroll-mt-24">
        <Container className="max-w-[1200px]">
          <div id="about-gateway" className="rounded-[28px] bg-background p-8 md:p-12 border border-border shadow-soft">
            {/* Header: Our Philosophy */}
            <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
              <span className="inline-block rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-3">
                Ancient Yogic Wisdom
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-dark">
                Our <span className="text-primary">Philosophy</span>
              </h2>

              {/* Inspired by Sacred Wisdom — moved into Our Philosophy */}
              <div className="mt-6 mx-auto w-full max-w-xl rounded-2xl border border-secondary/30 bg-gradient-to-br from-secondary/10 via-primary/5 to-white/90 p-4 sm:p-5 shadow-xs backdrop-blur-xs">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/15 text-secondary text-xs">
                    <GiLotus />
                  </span>
                  <span className="font-body text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                    Inspired by Ancient Yogic Wisdom
                  </span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                  <span className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-xs sm:text-[13px] font-medium text-dark shadow-2xs border border-border/80 hover:border-primary/50 transition-colors">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    Shree Madbhagwat Geeta
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-xs sm:text-[13px] font-medium text-dark shadow-2xs border border-border/80 hover:border-secondary/50 transition-colors">
                    <span className="h-2 w-2 rounded-full bg-secondary" />
                    Patanjali Yogsutra
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-xs sm:text-[13px] font-medium text-dark shadow-2xs border border-border/80 hover:border-primary/50 transition-colors">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    Hatha Yoga
                  </span>
                </div>
              </div>
            </div>

            {/* Row 1: Photo + Samatvam Yoga Uchyate */}
            <div className="grid items-stretch gap-8 pb-10 border-b border-border/70 lg:grid-cols-2 lg:gap-12">
              {/* Left Column: Photo */}
              <div className="overflow-hidden rounded-[24px] border border-border/80 shadow-xs bg-white h-full min-h-[340px] sm:min-h-[380px]">
                <img
                  src="/images/abouthome.jpg"
                  alt="Yogacharya Gyan Prakash practicing yoga"
                  className="w-full h-full object-cover object-center block"
                  loading="lazy"
                />
              </div>

              {/* Right Column: Samatvam Yoga Uchyate */}
              <div className="h-full">
                <div className="rounded-[24px] bg-white p-6 sm:p-8 md:p-10 border border-border/80 shadow-xs h-full flex flex-col justify-center">
                  <div className="border-l-4 border-primary pl-4 mb-5">
                    <span className="inline-block rounded-full bg-primary/10 text-primary px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-2">
                      Bhagavad Gita II.48
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-dark tracking-wide">
                      समत्वं योग उच्यते
                    </h3>
                    <p className="text-sm sm:text-base italic font-medium text-primary mt-1.5">
                      samatvaṁ yoga ucyate — &ldquo;Equanimity is Yoga.&rdquo;
                    </p>
                  </div>

                  <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-muted">
                    <p>
                      At Vimoksha Yogshala, we believe yoga is not just about flexibility, strength, or physical postures. It is a journey towards balance within — bringing harmony to the body, awareness to the breath, clarity to the mind, and steadiness to everyday life.
                    </p>
                    <p>
                      Inspired by the timeless wisdom of <em>&ldquo;Samatvam Yoga Uchyate,&rdquo;</em> we see yoga as the cultivation of inner balance — learning to remain steady through both comfort and discomfort, success and failure, activity and rest.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Tato Dvandva-anabhighatah (Full-Width Card) */}
            <div className="mt-10 rounded-[24px] bg-white p-6 sm:p-8 md:p-10 border border-border/80 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6 lg:gap-12 items-center">
                {/* Left Column: Shloka Header */}
                <div>
                  <div className="border-l-4 border-secondary pl-4">
                    <span className="inline-block rounded-full bg-secondary/15 text-secondary px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-2">
                      Patanjali Yoga Sutra II.48
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-dark tracking-wide">
                      ततो द्वन्द्वानभिघातः
                    </h3>
                    <p className="text-sm sm:text-base italic font-medium text-secondary mt-1.5">
                      tato dvandva-anabhighātaḥ
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-dark/70 mt-1">
                      &ldquo;Then, one is no longer disturbed by the pairs of opposites.&rdquo;
                    </p>
                  </div>
                </div>

                {/* Right Column: Detailed Explanation */}
                <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-muted">
                  <p>
                    Through consistent practice, yoga helps us develop a more stable relationship with life&apos;s changing experiences. Rather than being constantly affected by stress, discomfort, or external circumstances, we learn to respond with greater awareness, resilience, and calmness.
                  </p>
                  <p>
                    We bring together the traditional wisdom of Asana, Pranayama, Shatkriya, Meditation, and Yoga Philosophy with a practical approach to modern wellness.
                  </p>
                </div>
              </div>
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

      {/* ===== 4. Our Story ===== */}
      <section className="bg-background pt-4 pb-12 md:pt-6 md:pb-16">
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

      {/* ===== 5. Team Section ===== */}
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