import React, { useState } from 'react';
import {
  Activity,
  Flower2,
  Calendar,
  Clock,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Sparkle,
  BookOpen,
  Award,
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
  courseAerialDetails,
  curriculumAerial,
  scheduleAerial,
  outcomesAerial,
} from '@/data/ttcData';

export default function TtcAerialPage() {
  const [activeModule, setActiveModule] = useState(0);
  const { openTrialModal } = useAppContext();

  return (
    <div className="bg-background font-body text-dark">
      {/* SEO Metadata */}
      <SEO
        title="50-Hour Aerial Yoga Teacher Training in Dehradun | Certification Course"
        description="Master suspended yoga with Vimoksha Yogshala's 50-Hour Aerial Yoga Teacher Training in Dehradun, India. 7-day intensive specialization covering rigging, inversions, and teaching methodology."
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
              <Activity className="w-4 h-4 text-secondary" />
              Specialized Aerial Yoga Certification • 50 Contact Hours
            </div>

            <h1 className="font-heading text-4xl font-semibold leading-[1.08] text-dark sm:text-5xl lg:text-6xl">
              50-Hour Aerial Yoga <span className="text-primary">TTC</span>
            </h1>
            <p className="mt-4 font-heading text-xl italic leading-snug text-primary sm:text-2xl">
              Defy Gravity. Master Suspended Alignment. Expand Your Offerings.
            </p>
            <div className="my-5 flex items-center gap-2 text-secondary">
              <span className="h-px w-10 bg-primary/20" />
              <Flower2 className="h-4 w-4 text-secondary" />
              <span className="h-px w-10 bg-primary/20" />
            </div>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Unlock the transformative power of suspended movement. Learn to utilize high-density silk hammocks for zero-compression spinal decompression, supported deep backbends, and serene floating meditation in this comprehensive 7-day intensive training.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={openTrialModal}
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 font-semibold text-white shadow-elevated transition-colors hover:bg-secondary-light"
              >
                Enroll in Aerial TTC <Flower2 className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/919026612796?text=Hi%20Vimoksha%20Yogshala,%20I'm%20interested%20in%20the%2050-Hour%20Aerial%20Yoga%20TTC%20program."
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
                src="/images/offline-aerial-yoga.jpg"
                alt="Aerial Yoga teacher training class in session at Vimoksha Yogshala"
                label="50-Hour Aerial TTC"
                className="w-full h-full"
              />
            </div>

            {/* Seal Badge */}
            <div className="absolute -bottom-5 -right-2 flex h-28 w-28 flex-col items-center justify-center rounded-full border-2 border-dashed border-secondary bg-surface p-2 text-center leading-none shadow-elevated sm:-bottom-6 sm:-right-4 sm:h-32 sm:w-32">
              <ShieldCheck className="w-5 h-5 text-secondary mb-0.5" />
              <span className="text-[9px] font-semibold tracking-wide text-primary-dark uppercase">
                Vimoksha
              </span>
              <span className="my-0.5 font-heading text-xl sm:text-2xl font-bold text-primary">
                50-HR
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
        duration={courseAerialDetails.duration}
        level={courseAerialDetails.level}
        certification={courseAerialDetails.certification}
        yogaStyle={courseAerialDetails.yogaStyle}
        language={courseAerialDetails.language}
        date={courseAerialDetails.date}
        originalFee={courseAerialDetails.originalFee}
        discountedFee={courseAerialDetails.discountedFee}
        currency={courseAerialDetails.currency}
        inrFee={courseAerialDetails.inrFee}
        courseHeading={courseAerialDetails.courseHeading}
        courseSubheading={courseAerialDetails.courseSubheading}
        leftImage={courseAerialDetails.leftImage}
        rightImage={courseAerialDetails.rightImage}
        onBookNow={openTrialModal}
      />

      {/* INTRO & LEARNING OUTCOMES */}
      <section className="bg-surface/60 border-b border-border py-16 md:py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <RibbonLabel icon={Activity}>Suspended Movement Art</RibbonLabel>
              <h2 className="font-heading text-3xl sm:text-4xl text-dark font-semibold mt-3">
                Experience Weightless Freedom & Teaching Confidence
              </h2>
              <p className="text-muted text-sm sm:text-base mt-3 leading-relaxed">
                Designed for yoga teachers, fitness professionals, movement artists, and dedicated practitioners who want to learn how to safely and confidently teach Aerial Yoga. Learn to utilize the aerial hammock as a versatile prop for spinal decompression, core strength, inversions, and floating relaxation.
              </p>

              <h3 className="font-heading text-xl text-dark font-bold mt-6 mb-3">
                What You Will Be Able to Do After the Course:
              </h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {outcomesAerial.map((item) => (
                  <div key={item} className="flex items-start gap-2 bg-background p-2.5 rounded-xl border border-border text-xs text-dark">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <Panel className="border-2 border-primary/25 bg-surface p-6 sm:p-8 flex flex-col gap-4">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border mb-2">
                  <ImageSlot
                    src="/images/offline-aerial-yoga.jpg"
                    alt="Aerial yoga training at Vimoksha Yogshala"
                    label="Aerial Yoga Practice"
                    className="w-full h-full"
                  />
                </div>
                <h3 className="font-heading text-lg font-bold text-dark">Who Can Join?</h3>
                <p className="text-xs text-muted leading-relaxed">
                  Suitable for certified yoga teachers, yoga practitioners, fitness trainers, Pilates instructors, and movement enthusiasts. <em>Previous aerial experience is not mandatory</em> — comprehensive rigging, mounting, and safety protocols are taught from scratch.
                </p>
                <button
                  type="button"
                  onClick={openTrialModal}
                  className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-light text-white font-semibold py-3 px-6 rounded-full text-sm shadow-soft transition-colors mt-2"
                >
                  Enroll in Aerial 50-Hour TTC <ChevronRight className="w-4 h-4" />
                </button>
              </Panel>
            </div>
          </div>
        </div>
      </section>

      {/* 8-MODULE AERIAL CURRICULUM */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-custom max-w-[1200px]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <RibbonLabel icon={BookOpen}>8-Module Aerial Syllabus</RibbonLabel>
            <h2 className="font-heading text-3xl sm:text-4xl text-dark mt-3">
              50-Hour Aerial Yoga Curriculum
            </h2>
            <p className="text-muted text-sm mt-2">
              Covers equipment rigging, safety inspections, suspended postures, anatomy, and practical teaching.
            </p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            {/* 8 Module Selector */}
            <div className="flex flex-col gap-2">
              {curriculumAerial.map((module, idx) => {
                const isActive = idx === activeModule;
                return (
                  <button
                    key={module.modNum}
                    type="button"
                    onClick={() => setActiveModule(idx)}
                    className={`flex items-center justify-between gap-3 rounded-xl border p-3.5 text-left transition-all ${
                      isActive
                        ? 'bg-primary text-white border-primary shadow-soft'
                        : 'bg-surface hover:bg-background border-border text-dark'
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider opacity-80 font-bold">
                        {module.modNum} • {module.hours}
                      </span>
                      <span className="font-semibold text-xs sm:text-sm">
                        {module.title}
                      </span>
                    </div>
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
                <div className="flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider text-secondary mb-2">
                  <span className="flex items-center gap-1.5"><Sparkle className="w-4 h-4" /> {curriculumAerial[activeModule].modNum}</span>
                  <span className="bg-secondary/10 px-2.5 py-0.5 rounded-full text-secondary">
                    {curriculumAerial[activeModule].hours}
                  </span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl text-dark font-semibold">
                  {curriculumAerial[activeModule].title}
                </h3>

                <div className="my-5 h-px bg-border" />

                <h4 className="font-semibold text-dark text-sm mb-3">Key Practical Topics:</h4>
                <ul className="grid gap-2.5">
                  {curriculumAerial[activeModule].topics.map((t) => (
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

      {/* 7-DAY AERIAL TRAINING SCHEDULE */}
      <section className="bg-surface/50 border-y border-border py-16 md:py-20">
        <div className="container-custom max-w-[1200px]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <RibbonLabel icon={Calendar}>7-Day Intensive Schedule</RibbonLabel>
            <h2 className="font-heading text-3xl sm:text-4xl text-dark mt-3">
              Day-by-Day Training Breakdown
            </h2>
            <p className="text-muted text-sm mt-2">
              50 contact hours over 7 immersive days of intensive practical instruction & practicum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {scheduleAerial.map((item) => (
              <Panel key={item.day} className="p-5 flex flex-col justify-between border hover:border-primary/40 transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                      {item.day}
                    </span>
                    <span className="text-xs font-semibold text-muted flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-primary" /> {item.hours}
                    </span>
                  </div>
                  <h4 className="font-heading text-base font-semibold text-dark mt-2">
                    {item.title}
                  </h4>
                </div>
              </Panel>
            ))}
            <Panel className="p-5 flex flex-col justify-center items-center text-center bg-primary text-white border-none">
              <Award className="w-8 h-8 text-secondary-light mb-2" />
              <h4 className="font-heading text-lg font-bold">Total: 50 Contact Hours</h4>
              <p className="text-xs text-white/80 mt-1">
                Assessment, Practicum & Official Certification upon completion.
              </p>
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
