import React, { useState } from 'react';
import {
  GraduationCap,
  Flower2,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Sparkle,
  BookOpen,
  Award,
  Check,
  MessageCircle,
} from 'lucide-react';
import SEO from '@/components/common/SEO';
import { useAppContext } from '@/context/AppContext';
import CourseDetailsCard from '@/components/teacher-training/CourseDetailsCard';
import {
  StayAndFoodSection,
  FacultyMentorsSection,
  FaqAndWhyChooseSection,
  BottomCtaSection,
  LotusMark,
  RibbonLabel,
  Panel,
  ImageSlot,
} from '@/components/teacher-training/TtcSharedSections';
import {
  course300Details,
  whyChoose300,
  curriculum300,
} from '@/data/ttcData';

export default function Ttc300Page() {
  const [activeModule, setActiveModule] = useState(0);
  const { openTrialModal } = useAppContext();

  return (
    <div className="bg-background font-body text-dark">
      {/* SEO Metadata */}
      <SEO
        title="300-Hour Advanced Yoga Teacher Training in Dehradun | RYS 300 Master Program"
        description="Advance your yoga teaching career with Vimoksha Yogshala's 300-Hour Advanced Yoga Teacher Training Course in Dehradun, India. 28-day intensive master certification for 200-hour graduates."
      />

      {/* HERO SECTION (Styled after Home Hero Banner) */}
      <section className="relative isolate overflow-hidden bg-background pt-[115px] sm:pt-[135px] md:pt-[145px] pb-12 sm:pb-16 border-b border-border/80">
        {/* Subtle ambient decorative lighting */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <LotusMark className="absolute -top-24 -left-24 w-[420px] text-primary opacity-[0.04]" />
        </div>
        <div className="container-custom relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/8 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-secondary shadow-soft">
              <GraduationCap className="w-4 h-4 text-secondary" />
              Yoga Alliance USA Certified (RYS 300) Master Track
            </div>

            <h1 className="font-heading text-4xl font-semibold leading-[1.08] text-dark sm:text-5xl lg:text-6xl">
              300-Hour Advanced Yoga <span className="text-primary">TTC</span>
            </h1>
            <p className="mt-4 font-heading text-xl italic leading-snug text-primary sm:text-2xl">
              Deepen Your Practice. Refine Your Teaching. Master the Art.
            </p>
            <div className="my-5 flex items-center gap-2 text-secondary">
              <span className="h-px w-10 bg-primary/20" />
              <Flower2 className="h-4 w-4 text-secondary" />
              <span className="h-px w-10 bg-primary/20" />
            </div>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Designed for certified teachers and serious practitioners ready to move beyond foundational knowledge. Refine your hands-on adjustments, master advanced biomechanics, unlock subtle pranic anatomy, and develop an authoritative, authentic teaching presence.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={openTrialModal}
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 font-semibold text-white shadow-elevated transition-colors hover:bg-secondary-light"
              >
                Enroll in 300-Hour <Flower2 className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/919026612796?text=Hi%20Vimoksha%20Yogshala,%20I'm%20interested%20in%20the%20300-Hour%20Advanced%20TTC%20program."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:opacity-90 transition-opacity text-white font-semibold px-6 py-3.5 rounded-full shadow-soft"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Inquiry
              </a>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative lg:pl-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border-[8px] border-white shadow-elevated">
              <ImageSlot
                src="/images/teacher-training/hero.webp"
                alt="300-Hour Advanced Yoga teacher training class in session"
                label="300-Hour Advanced TTC"
                className="w-full h-full"
              />
            </div>

            {/* Seal Badge */}
            <div className="absolute -bottom-5 -right-2 flex h-28 w-28 flex-col items-center justify-center rounded-full border-2 border-dashed border-secondary bg-surface p-2 text-center leading-none shadow-elevated sm:-bottom-6 sm:-right-4 sm:h-32 sm:w-32">
              <ShieldCheck className="w-5 h-5 text-secondary mb-0.5" />
              <span className="text-[9px] font-semibold tracking-wide text-primary-dark uppercase">
                Yoga Alliance
              </span>
              <span className="my-0.5 font-heading text-xl sm:text-2xl font-bold text-primary">
                RYS 300
              </span>
              <span className="text-[9px] font-semibold tracking-wide text-primary-dark uppercase">
                Master Level
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE DETAILS CARD (Hero Terracotta & Saffron Palette) */}
      <CourseDetailsCard
        duration={course300Details.duration}
        level={course300Details.level}
        certification={course300Details.certification}
        yogaStyle={course300Details.yogaStyle}
        language={course300Details.language}
        date={course300Details.date}
        originalFee={course300Details.originalFee}
        discountedFee={course300Details.discountedFee}
        currency={course300Details.currency}
        inrFee={course300Details.inrFee}
        courseHeading={course300Details.courseHeading}
        courseSubheading={course300Details.courseSubheading}
        leftImage={course300Details.leftImage}
        rightImage={course300Details.rightImage}
        onBookNow={openTrialModal}
      />

      {/* INTRO & WHY CHOOSE 300-HOUR */}
      <section className="bg-surface/60 border-b border-border py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <RibbonLabel icon={GraduationCap}>Advanced Master Program</RibbonLabel>
              <h2 className="font-heading text-3xl sm:text-4xl text-dark font-semibold mt-3">
                Deepen Your Practice. Refine Your Teaching.
              </h2>
              <p className="text-muted text-sm sm:text-base mt-3 leading-relaxed">
                The 300-Hour program is designed for teachers who are ready to move beyond foundational training and develop greater depth in their practice, philosophical understanding, and teaching clarity. At Vimoksha Yogshala, we encourage teachers to move beyond simply performing postures and learn to observe, understand, adapt, and teach yoga mindfully and responsibly.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {whyChoose300.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 bg-background p-3 rounded-xl border border-border text-xs sm:text-sm text-dark">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <Panel className="border-2 border-primary/25 bg-surface p-6 sm:p-8 flex flex-col gap-4">
                <h3 className="font-heading text-xl font-bold text-dark">Course Highlights & Meta</h3>
                <ul className="space-y-3 text-xs sm:text-sm">
                  <li className="flex items-center justify-between pb-2 border-b border-border">
                    <span className="text-muted">Total Hours</span>
                    <span className="font-bold text-primary-dark">300 Hours Intensive</span>
                  </li>
                  <li className="flex items-center justify-between pb-2 border-b border-border">
                    <span className="text-muted">Duration</span>
                    <span className="font-bold text-primary-dark">27–30 Days</span>
                  </li>
                  <li className="flex items-center justify-between pb-2 border-b border-border">
                    <span className="text-muted">Eligibility</span>
                    <span className="font-bold text-primary-dark">200-Hr TTC or Equivalent</span>
                  </li>
                  <li className="flex items-center justify-between pb-2 border-b border-border">
                    <span className="text-muted">Non-Residential Fee</span>
                    <span className="font-bold text-primary text-base">Starting ₹ 25,000/-</span>
                  </li>
                  <li className="flex items-center justify-between pb-2 border-b border-border">
                    <span className="text-muted">Certification</span>
                    <span className="font-bold text-secondary text-right">300-Hr Advanced Certificate</span>
                  </li>
                </ul>

                <div className="bg-primary/5 p-3 rounded-xl border border-primary/15 text-xs text-muted space-y-1">
                  <p>✔ <strong>Location:</strong> Dehradun, Uttarakhand, India</p>
                  <p>✔ <strong>Language:</strong> Hindi + English</p>
                  <p>✔ <strong>Batch:</strong> Starts 1st of every month</p>
                </div>

                <button
                  type="button"
                  onClick={openTrialModal}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full text-sm shadow-soft transition-colors"
                >
                  Enroll in 300-Hour Program <ChevronRight className="w-4 h-4" />
                </button>
              </Panel>
            </div>
          </div>
        </div>
      </section>

      {/* 10-MODULE ADVANCED CURRICULUM */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-custom max-w-[1200px]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <RibbonLabel icon={BookOpen}>Advanced 10-Module Syllabus</RibbonLabel>
            <h2 className="font-heading text-3xl sm:text-4xl text-dark mt-3">
              Comprehensive 300-Hour Curriculum
            </h2>
            <p className="text-muted text-sm mt-2">
              Master advanced philosophy, biomechanics, sequencing, adjustments, and therapeutic applications.
            </p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            {/* 10 Module Selector */}
            <div className="flex flex-col gap-2">
              {curriculum300.map((module, idx) => {
                const isActive = idx === activeModule;
                return (
                  <button
                    key={module.id}
                    type="button"
                    onClick={() => setActiveModule(idx)}
                    className={`flex items-center justify-between gap-3 rounded-xl border p-3.5 text-left transition-all ${
                      isActive
                        ? 'bg-primary text-white border-primary shadow-soft'
                        : 'bg-surface hover:bg-background border-border text-dark'
                    }`}
                  >
                    <span className="font-semibold text-xs sm:text-sm">
                      {module.title}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isActive ? 'text-white translate-x-1' : 'text-muted'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Module Details */}
            <div>
              <Panel className="border-2 border-primary/20 p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary mb-2">
                  <Sparkle className="w-4 h-4" /> Advanced Module Overview
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl text-dark font-semibold">
                  {curriculum300[activeModule].title}
                </h3>
                <p className="text-muted text-sm sm:text-base mt-2 leading-relaxed">
                  {curriculum300[activeModule].desc}
                </p>

                <div className="my-5 h-px bg-border" />

                <h4 className="font-semibold text-dark text-sm mb-3">Key In-Depth Topics:</h4>
                <ul className="grid gap-2.5">
                  {curriculum300[activeModule].topics.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 bg-background p-3 rounded-xl border border-border text-xs sm:text-sm text-dark">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>
          </div>
        </div>
      </section>

      {/* PREREQUISITES & CERTIFICATION */}
      <section className="bg-surface/50 border-y border-border py-14 md:py-18">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          <Panel className="flex flex-col gap-4">
            <RibbonLabel tone="light">Who Can Join & Prerequisites</RibbonLabel>
            <h3 className="font-heading text-2xl text-dark font-semibold">Recommended Prerequisite</h3>
            <p className="text-sm text-muted leading-relaxed">
              A foundational yoga teacher training qualification (such as 200-Hour YTTC) or equivalent consistent yoga experience is recommended before joining the 300-Hour program.
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-dark mt-2">
              {[
                'Experienced Yoga Teachers seeking mastery',
                '200-Hour Yoga Teacher Training Graduates',
                'Yoga Instructors wanting advanced adjustments & sequencing',
                'Dedicated practitioners with a strong personal foundation',
                'Wellness & fitness professionals adding specialized yoga credentials',
              ].map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel className="flex flex-col gap-4 border-2 border-primary/20">
            <RibbonLabel icon={Award}>Assessment & Certification</RibbonLabel>
            <h3 className="font-heading text-2xl text-dark font-semibold">300-Hour Certification</h3>
            <p className="text-sm text-muted leading-relaxed">
              Participants are assessed through attendance, practical demonstrations, teaching practicum, class sequencing assignments, and a final practical assessment.
            </p>
            <div className="bg-background p-4 rounded-xl border border-border text-xs sm:text-sm space-y-2 mt-2">
              <p>✔ <strong>Credential:</strong> 300-Hour Yoga Teacher Training Certificate</p>
              <p>✔ <strong>Yoga Alliance:</strong> Qualifies for RYT 500 when combined with 200-Hour</p>
              <p>✔ <strong>Global Scope:</strong> Eligible to lead workshops, retreats, and teacher trainings</p>
            </div>
          </Panel>
        </div>
      </section>

      {/* SHARED SECTIONS */}
      <StayAndFoodSection />
      <FacultyMentorsSection />
      <FaqAndWhyChooseSection />
      <BottomCtaSection onEnroll={openTrialModal} />
    </div>
  );
}
