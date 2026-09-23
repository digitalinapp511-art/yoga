import React, { useState } from 'react';
import {
  Award,
  Flower2,
  Calendar,
  Clock,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Sparkle,
  BookOpen,
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
  course200Details,
  batches200,
  curriculum200,
  schedule200,
} from '@/data/ttcData';

export default function Ttc200Page() {
  const [activeModule, setActiveModule] = useState(curriculum200[0].id);
  const { openTrialModal } = useAppContext();

  const selectedModuleObj =
    curriculum200.find((m) => m.id === activeModule) || curriculum200[0];

  return (
    <div className="bg-background font-body text-dark">
      {/* SEO Metadata */}
      <SEO
        title="200-Hour Yoga Teacher Training in Dehradun | RYS 200 Yoga Alliance"
        description="Join Vimoksha Yogshala's Yoga Alliance USA certified 200-Hour Yoga Teacher Training Course in Dehradun, India. 24-day intensive residential course with Satvik food and expert gurus."
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
              <Award className="w-4 h-4 text-secondary" />
              Yoga Alliance USA Certified (RYS 200)
            </div>

            <h1 className="font-heading text-4xl font-semibold leading-[1.08] text-dark sm:text-5xl lg:text-6xl">
              200-Hour Yoga Teacher <span className="text-primary">Training</span>
            </h1>
            <p className="mt-4 font-heading text-xl italic leading-snug text-primary sm:text-2xl">
              Deepen Your Practice. Awaken Your Inner Teacher. Teach Worldwide.
            </p>
            <div className="my-5 flex items-center gap-2 text-secondary">
              <span className="h-px w-10 bg-primary/20" />
              <Flower2 className="h-4 w-4 text-secondary" />
              <span className="h-px w-10 bg-primary/20" />
            </div>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              At Vimoksha Yogshala Dehradun, learning yoga is a transformative journey that goes far beyond physical postures. Our 200-Hour foundational course provides the complete philosophical, anatomical, and pedagogical mastery needed to step onto the mat as a confident, internationally registered teacher.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={openTrialModal}
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 font-semibold text-white shadow-elevated transition-colors hover:bg-secondary-light"
              >
                Enroll Now <Flower2 className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/919026612796?text=Hi%20Vimoksha%20Yogshala,%20I'm%20interested%20in%20the%20200-Hour%20Yoga%20Teacher%20Training%20program."
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
                alt="200-Hour Yoga teacher training class in session at Vimoksha Yogshala"
                label="200-Hour TTC Class"
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
                RYS 200
              </span>
              <span className="text-[9px] font-semibold tracking-wide text-primary-dark uppercase">
                Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE DETAILS CARD (Hero Terracotta & Saffron Palette) */}
      <CourseDetailsCard
        duration={course200Details.duration}
        level={course200Details.level}
        certification={course200Details.certification}
        yogaStyle={course200Details.yogaStyle}
        language={course200Details.language}
        date={course200Details.date}
        originalFee={course200Details.originalFee}
        discountedFee={course200Details.discountedFee}
        currency={course200Details.currency}
        inrFee={course200Details.inrFee}
        courseHeading={course200Details.courseHeading}
        courseSubheading={course200Details.courseSubheading}
        leftImage={course200Details.leftImage}
        rightImage={course200Details.rightImage}
        onBookNow={openTrialModal}
      />

      {/* UPCOMING BATCHES SECTION */}
      <section className="border-b border-border bg-surface/50 py-12 md:py-16">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <RibbonLabel icon={Calendar}>Upcoming Batches</RibbonLabel>
            <h2 className="font-heading text-3xl sm:text-4xl text-dark mt-3">
              Reserve Your Seat in Next Batch
            </h2>
            <p className="text-muted text-sm mt-2">
              Small batch size (max 12–15 students) to ensure personalized instruction & one-on-one attention.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {batches200.map((batch) => (
              <Panel key={batch.month} className="flex flex-col justify-between hover:border-primary/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      24-Day Intensive
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${batch.badgeTone}`}
                    >
                      {batch.status}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl text-dark font-semibold">
                    {batch.month}
                  </h3>
                  <p className="text-sm font-medium text-primary-dark mt-1 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    {batch.dates}
                  </p>
                  <p className="text-xs text-muted mt-3 bg-background p-2.5 rounded-lg border border-border">
                    🔥 <strong>{batch.seatsLeft}</strong> remaining for this intake.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted block">Deposit to Reserve</span>
                    <span className="text-base font-bold text-dark">₹ 5,000</span>
                  </div>
                  <button
                    type="button"
                    onClick={openTrialModal}
                    className="inline-flex items-center gap-1 bg-primary hover:bg-primary-dark text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
                  >
                    Reserve Seat <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM SECTION (INTERACTIVE TABS) */}
      <section id="curriculum" className="scroll-mt-24 bg-background py-16 md:py-20">
        <div className="container-custom max-w-[1200px]">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <RibbonLabel icon={BookOpen}>Comprehensive Curriculum</RibbonLabel>
            <h2 className="font-heading text-3xl sm:text-4xl text-dark mt-3">
              What You Will Learn in 200 Hours
            </h2>
            <p className="text-muted text-sm mt-2">
              Our 200-hour syllabus covers all 6 key modules mandated by Yoga Alliance USA.
            </p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
            {/* Module Tabs List */}
            <div className="flex flex-col gap-2.5">
              {curriculum200.map((module) => {
                const isActive = module.id === activeModule;
                return (
                  <button
                    key={module.id}
                    type="button"
                    onClick={() => setActiveModule(module.id)}
                    className={`flex min-h-[64px] items-center justify-between gap-4 rounded-2xl border p-4 text-left transition-all sm:min-h-[72px] ${
                      isActive
                        ? 'bg-primary text-white border-primary shadow-soft'
                        : 'bg-surface hover:bg-background border-border text-dark'
                    }`}
                  >
                    <span className="font-semibold text-sm sm:text-base">
                      {module.title}
                    </span>
                    <ChevronRight
                      className={`w-5 h-5 shrink-0 transition-transform ${
                        isActive ? 'text-white translate-x-1' : 'text-muted'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Active Module Details */}
            <div className="min-w-0">
              <Panel className="h-full border-2 border-primary/20 p-5 sm:p-7">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary mb-2">
                  <Sparkle className="w-4 h-4" /> Module Overview
                </div>
                <h3 className="max-w-3xl break-words font-heading text-2xl font-semibold leading-tight text-dark sm:text-3xl">
                  {selectedModuleObj.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                  {selectedModuleObj.desc}
                </p>

                <div className="my-6 h-px bg-border" />

                <h4 className="font-semibold text-dark text-sm mb-3">
                  Key Topics Covered:
                </h4>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {selectedModuleObj.highlights.map((item) => (
                    <li key={item} className="flex min-h-[68px] items-start gap-2.5 rounded-xl border border-border bg-background p-3 text-xs text-dark sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>
          </div>
        </div>
      </section>

      {/* DAILY SCHEDULE & CERTIFICATION */}
      <section className="bg-surface/50 border-y border-border py-16 md:py-20">
        <div className="container-custom grid lg:grid-cols-2 gap-8">
          {/* Daily Schedule Timeline */}
          <Panel className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <RibbonLabel tone="light">Daily Schedule</RibbonLabel>
              <span className="text-xs text-muted font-semibold">Sample 24-Day Routine</span>
            </div>
            <p className="text-xs text-muted -mt-2">
              Carefully balanced schedule to nurture your physical vitality, mental clarity, and spiritual focus.
            </p>
            <ul className="relative flex flex-col pl-2">
              <span
                className="absolute left-[11px] top-3 bottom-3 w-px bg-border"
                aria-hidden="true"
              />
              {schedule200.map(([time, activity]) => (
                <li key={time} className="relative flex items-start gap-3 py-2.5">
                  <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-surface shadow-xs">
                    <span className="h-2 w-2 rounded-full bg-secondary" />
                  </span>
                  <div>
                    <span className="block text-xs font-bold text-primary">{time}</span>
                    <span className="block text-sm text-dark font-medium">{activity}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>

          {/* Certification & Career */}
          <div className="flex flex-col gap-6">
            <Panel className="border-2 border-primary/20 flex flex-col gap-4">
              <RibbonLabel icon={Award}>Global Recognition</RibbonLabel>
              <h3 className="font-heading text-2xl text-dark font-semibold">
                Yoga Alliance USA (RYS 200) Certification
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Upon successful graduation, you receive the internationally acknowledged <strong>RYT 200</strong> certification, allowing you to register with Yoga Alliance USA and teach professionally anywhere in the world.
              </p>

              <div className="bg-background rounded-xl p-4 border border-border flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-dark">Internationally Valid in 130+ Countries</h4>
                  <p className="text-xs text-muted mt-0.5">
                    Eligible for international yoga liability insurance and global studio employment.
                  </p>
                </div>
              </div>
            </Panel>

            <Panel className="bg-primary/5 border border-primary/20 flex flex-col gap-3">
              <h4 className="font-heading text-lg font-bold text-primary-dark">
                What's Included in the 200-Hour Course:
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs text-dark">
                {[
                  '24-Day Residential Ashram Stay',
                  '3 Daily Organic Satvik Meals',
                  'Printed 200-Hour Course Manuals',
                  'Kriya Cleansing Kit (Neti Pot, etc.)',
                  'Himalayan Temple Excursions',
                  'Official RYS 200 Graduation Ceremony',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>
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
