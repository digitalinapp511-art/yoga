import { useState } from 'react';
import usePageMeta from '@/hooks/usePageMeta';
import { Container, Button } from '@/components/ui';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import {
  IoLeafOutline,
  IoWaterOutline,
  IoHandLeftOutline,
  IoBodyOutline,
  IoFlameOutline,
  IoFootstepsOutline,
  IoFlashlightOutline,
  IoShieldCheckmarkOutline,
  IoPersonOutline,
  IoSparklesOutline,
  IoPulseOutline,
  IoHeartOutline,
  IoMoonOutline,
  IoFlashOutline,
  IoRibbonOutline,
  IoPeopleOutline,
  IoDocumentTextOutline,
  IoBookOutline,
  IoFitnessOutline,
  IoHomeOutline,
  IoStar,
  IoAddOutline,
  IoRemoveOutline,
  IoLogoWhatsapp,
  IoCallOutline,
  IoCalendarOutline,
  IoMailOutline,
  IoChevronDown,
} from 'react-icons/io5';

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
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/* ===== Hero trust badges ===== */
const heroBadges = [
  { label: 'Drug-Free Natural Healing', icon: IoLeafOutline },
  { label: 'Personalized Therapy Plans', icon: IoPersonOutline },
  { label: 'Holistic Wellness for Body & Mind', icon: IoSparklesOutline },
  { label: 'Safe, Hygienic & Professional Care', icon: IoShieldCheckmarkOutline },
];

/* ===== Wellness Support Categories (8 Categories) ===== */
const wellnessCategories = [
  {
    title: 'Spine, Back & Neck Wellness',
    items: [
      'Lower Back Pain',
      'Neck Pain',
      'Cervical Spondylosis',
      'Sciatica',
      'Slipped Disc / Herniated Disc',
      'Lumbar Spondylosis',
      'Posture-related discomfort',
      'Muscle stiffness & tension',
    ],
  },
  {
    title: 'Joint & Mobility Wellness',
    items: [
      'Knee Pain',
      'Shoulder Pain',
      'Frozen Shoulder',
      'Arthritis & Osteoarthritis',
      'Joint Stiffness',
      'Muscle Tension',
      'Reduced Mobility',
      'Musculoskeletal Discomfort',
    ],
  },
  {
    title: 'Stress, Mind & Sleep Wellness',
    items: [
      'Stress & Anxiety',
      'Overthinking',
      'Mental Fatigue',
      'Poor Sleep & Insomnia',
      'Burnout',
      'Stress-related Headache',
    ],
  },
  {
    title: "Women's Wellness",
    items: [
      'PCOS & PCOD',
      'Menstrual Irregularities',
      'Menopause-related Concerns',
      'Hormonal Wellness',
    ],
  },
  {
    title: 'Weight & Metabolic Wellness',
    items: [
      'Overweight & Obesity',
      'Weight-management Concerns',
      'Type 2 Diabetes (Supportive)',
      'High Blood Pressure (Supportive)',
      'High Cholesterol',
      'Metabolic Syndrome',
    ],
  },
  {
    title: 'Digestive Wellness',
    items: [
      'Acidity & Bloating',
      'Constipation',
      'Indigestion & Gas',
      'Irregular Bowel Habits',
      'Digestive Discomfort',
    ],
  },
  {
    title: 'Respiratory Wellness',
    items: [
      'Asthma (Supportive Wellness)',
      'Allergic Rhinitis',
      'Breathing-related Concerns',
      'Reduced Respiratory Fitness',
    ],
  },
  {
    title: 'General Lifestyle Wellness',
    items: [
      'Low Energy & Fatigue',
      'Poor Flexibility & Posture',
      'Reduced Strength',
      'Physical Inactivity',
      'Irregular Daily Routine',
      'Lack of Relaxation',
    ],
  },
];

/* ===== 4 Main Therapies ===== */
const mainTherapies = [
  {
    title: 'Yoga & Therapeutic Yoga',
    image: '/images/services/yoga-therapy.jpg',
    description: 'Personalized yoga practices focused on movement, mobility, flexibility, strength, breathing awareness, relaxation, and overall well-being.',
    points: ['Movement & Mobility', 'Breath Awareness', 'Postural Alignment', 'Deep Relaxation'],
  },
  {
    title: 'Naturopathy',
    image: '/images/therapies/Naturopathy.jpg',
    description: "A natural wellness approach focused on lifestyle, diet, natural practices, rest, and the body's overall balance.",
    points: ['Body Detoxification', 'Natural Diet & Rest', 'Internal Balance', 'Lifestyle Healing'],
  },
  {
    title: 'Acupressure',
    image: '/images/therapies/Acupressure_Therapy.jpg',
    description: 'A traditional pressure-based wellness practice using specific points on the body to promote relaxation and support overall well-being.',
    points: ['Pressure Points', 'Energy Flow', 'Muscular Relief', 'Circulation Support'],
  },
  {
    title: 'Cupping Therapy',
    image: '/images/therapies/Cupping_Therapy.jpg',
    description: 'A traditional therapy involving the controlled application of cups to the body, commonly used as a supportive practice for muscular relaxation and physical comfort.',
    points: ['Suction Cups', 'Muscular Relaxation', 'Tension Release', 'Deep Comfort'],
  },
];

/* ===== 11 Sub-Therapies (From Handwritten Note) ===== */
const subTherapies = [
  { name: 'Snehan (मसाज / Massage)', desc: 'Herbal oil massage to nourish tissues and relieve stiffness.' },
  { name: 'Swedan (Steam)', desc: 'Medicated herbal steam therapy for full-body detoxification.' },
  { name: 'Patra Potali Massage', desc: 'Warm herbal poultice massage for joint & muscle comfort.' },
  { name: 'Shirodhara', desc: 'Continuous stream of warm oil on forehead for deep mental peace.' },
  { name: 'Janu Vasti', desc: 'Medicated oil pooling therapy specifically for knee joint care.' },
  { name: 'Kati Vasti', desc: 'Warm herbal oil reservoir over lower back for spinal relief.' },
  { name: 'Mud Bath', desc: 'Mineral-rich mud therapy for cooling, detox and skin vitality.' },
  { name: 'Abdominal Mud Pack', desc: 'Targeted mud application on abdomen to support digestion.' },
  { name: 'Hip Bath', desc: 'Hydrotherapy sitz bath supporting pelvic and lower body wellness.' },
  { name: 'Arm Bath', desc: 'Targeted hydrotherapy bath for arms and upper-body circulation.' },
  { name: 'Colon Cleansing', desc: 'Natural digestive and colon wellness cleansing practice.' },
];

/* ===== What We Aim to Support ===== */
const supportGoals = [
  'Move with greater ease',
  'Develop better body awareness',
  'Improve flexibility and mobility',
  'Relax the body and mind',
  'Develop healthier daily habits',
  'Improve breathing awareness',
  'Support better sleep and relaxation',
  'Manage lifestyle-related stress',
  'Build consistency in self-care',
  'Develop a more balanced lifestyle',
];

/* ===== Benefits of natural healing ===== */
const healingBenefits = [
  { label: 'Boosts Immunity', icon: IoShieldCheckmarkOutline },
  { label: 'Detoxifies Body', icon: IoWaterOutline },
  { label: 'Reduces Pain & Inflammation', icon: IoPulseOutline },
  { label: 'Relieves Stress & Anxiety', icon: IoHeartOutline },
  { label: 'Improves Sleep', icon: IoMoonOutline },
  { label: 'Enhances Energy', icon: IoFlashOutline },
  { label: 'Restores Body Balance', icon: IoBodyOutline },
  { label: 'Supports Overall Wellness', icon: IoSparklesOutline },
];

/* ===== Why choose us ===== */
const whyChooseUs = [
  { label: 'Experienced Therapists', icon: IoPeopleOutline },
  { label: 'Personalized Treatment Plans', icon: IoDocumentTextOutline },
  { label: 'Natural & Holistic Healing', icon: IoLeafOutline },
  { label: 'Safe & Hygienic Environment', icon: IoShieldCheckmarkOutline },
  { label: 'Traditional Ayurvedic Practices', icon: IoBookOutline },
  { label: 'Integrated Yoga + Therapy Approach', icon: IoFitnessOutline },
  { label: 'Professional Care & Guidance', icon: IoRibbonOutline },
  { label: 'Peaceful Wellness Centre', icon: IoHomeOutline },
];

/* ===== Testimonials ===== */
const testimonials = [
  {
    name: 'Neha S.',
    image: '/images/testimonials/neha.jpg',
    quote: 'Naturopathy sessions helped me detox and improve my energy levels naturally. I feel lighter, healthier and more active.',
  },
  {
    name: 'Rohit M.',
    image: '/images/testimonials/rohit.jpg',
    quote: 'Cupping therapy and massage reduced my back pain significantly. The therapists are professional and caring.',
  },
  {
    name: 'Priya D.',
    image: '/images/testimonials/priya.jpg',
    quote: 'Shirodhara therapy is extremely relaxing. It has improved my sleep and reduced my stress levels a lot.',
  },
  {
    name: 'Arjun K.',
    image: '/images/testimonials/arjun.jpg',
    quote: 'The Janu Basti sessions eased my knee pain within a couple of weeks. The therapists genuinely listen and adjust the treatment to what you need.',
  },
];

/* ===== FAQs ===== */
const faqs = [
  { q: 'Are the therapies safe?', a: 'Yes. Every therapy is administered by trained practitioners using natural, drug-free techniques suited to your health profile.' },
  { q: 'How many sessions will I need?', a: 'This depends on your concern and goals. Your practitioner will recommend a session plan after your first consultation.' },
  { q: 'Do I need to book an appointment?', a: 'Yes, all therapies are offered by appointment so we can give you focused, one-on-one attention.' },
  { q: 'Can I combine therapies with yoga?', a: 'Absolutely. Many guests pair therapies with our yoga classes for a more complete wellness routine.' },
  { q: 'Will there be any side effects?', a: 'Our therapies are natural and gentle. Mild, temporary effects like relaxation or light soreness are normal and pass quickly.' },
  { q: 'What should I do before the session?', a: 'Eat a light meal, stay hydrated, and wear comfortable clothing. Your practitioner will share any specific guidance beforehand.' },
  { q: 'Is there any age limit?', a: 'Most therapies suit a wide age range. We\u2019ll tailor the approach for you after understanding your health background.' },
  { q: 'Do you offer customized plans?', a: 'Yes, every plan is built around your specific concerns, schedule and wellness goals.' },
  { q: 'What are your centre timings?', a: 'We\u2019re open daily by appointment. Reach out and we\u2019ll find a slot that works for you.' },
];

const therapyOptions = [
  ...mainTherapies.map((t) => t.title),
  ...subTherapies.map((s) => s.name),
];

export default function TherapiesPage() {
  usePageMeta('therapies');

  const [openFaq, setOpenFaq] = useState(null);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    therapy: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div data-page="therapies">
      {/* ===== 1. Hero Section ===== */}
      <section className="bg-background pt-[120px] pb-[60px] sm:pt-[140px] md:pt-[160px] md:pb-[80px]">
        <Container className="max-w-[1320px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="flex flex-col items-start gap-5">
              <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                Holistic Wellness for a Healthier Life
              </span>

              <h1 className="font-heading text-3xl font-semibold leading-tight text-dark sm:text-4xl md:text-5xl">
                Wellness &amp; <span className="text-primary">Therapies</span>
              </h1>

              <p className="max-w-lg text-base leading-relaxed text-muted">
                At Vimoksha Yogshala, we believe wellness is more than simply managing symptoms. It is about creating balance in the body, breath, mind, and lifestyle. Our holistic approach brings together the traditional wisdom of Yoga and Naturopathy with supportive wellness therapies selected according to individual needs, lifestyle, and wellness goals.
              </p>

              <div className="mt-2 grid w-full grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
                {heroBadges.map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div key={badge.label} className="flex flex-col items-start gap-2">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-white text-primary">
                        <Icon className="text-lg" />
                      </span>
                      <span className="font-body text-xs font-medium leading-snug text-dark/70">
                        {badge.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] shadow-elevated">
              <img
                src="/images/therapies/hero.jpg"
                alt="Guest enjoying a calming candlelit head and face massage at Vimoksha Yogshala"
                className="h-[320px] w-full object-cover sm:h-[380px] md:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              <blockquote className="absolute bottom-6 right-6 max-w-[220px] text-right font-heading text-lg font-medium leading-snug text-white sm:bottom-8 sm:right-8">
                <span className="mb-1 block text-3xl leading-none text-white/70">&ldquo;</span>
                Nature has the power to heal. We simply help your body remember it.
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 2. Wellness Support For (8 Categories) ===== */}
      <section className="bg-white py-16 md:py-24 border-b border-border/70">
        <Container className="max-w-[1320px]">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-3">
              Targeted Care
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark">
              Wellness <span className="text-primary">Support For</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted leading-relaxed">
              Modern lifestyles can affect our physical health, mental well-being, sleep, digestion, movement, and hormonal health. Our wellness services are designed to support individuals experiencing common lifestyle-related concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wellnessCategories.map((category) => (
              <div
                key={category.title}
                className="bg-background rounded-[24px] p-6 border border-border shadow-soft flex flex-col transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
              >
                <h3 className="font-heading text-lg font-semibold text-dark mb-4 pb-3 border-b border-border/80">
                  {category.title}
                </h3>
                <ul className="space-y-2.5 text-sm text-muted">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 3. Our Wellness Therapies (Main + Sub-Therapies) ===== */}
      <section className="bg-background py-16 md:py-24">
        <Container className="max-w-[1320px]">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-3">
              Holistic Care
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-dark">
              Our Wellness <span className="text-primary">Therapies</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted">
              Evidence-informed traditional therapies administered by trained practitioners.
            </p>
          </div>

          {/* 4 Main Therapies */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {mainTherapies.map((therapy) => (
              <div
                key={therapy.title}
                className="bg-white rounded-[24px] border border-border overflow-hidden shadow-soft flex flex-col justify-between transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
              >
                <div>
                  <div className="h-44 w-full overflow-hidden bg-muted/20">
                    <img
                      src={therapy.image}
                      alt={therapy.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        e.target.src = '/images/therapies/Naturopathy.jpg';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-dark mb-2">
                      {therapy.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {therapy.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {therapy.points.map((pt) => (
                        <span key={pt} className="rounded-md bg-primary/10 text-primary px-2.5 py-1 text-xs font-medium">
                          {pt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 11 Sub-Therapies (From Handwritten Note) */}
          <div className="bg-white rounded-[28px] p-8 md:p-12 border border-border shadow-soft mb-16">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="inline-block rounded-full bg-secondary/15 text-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-2">
                Specialized Healing Modalities
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-dark">
                Supportive <span className="text-primary">Sub-Therapies</span>
              </h3>
              <p className="mt-2 text-sm text-muted">
                Traditional Ayurvedic and Naturopathic therapies integrated into your personalized plan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {subTherapies.map((sub, idx) => (
                <div
                  key={sub.name}
                  className="rounded-2xl bg-background p-5 border border-border/80 flex flex-col justify-between hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <h4 className="font-heading text-base font-semibold text-dark">
                      {sub.name}
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm text-muted leading-relaxed pl-10">
                    {sub.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Personalized Approach & What We Aim to Support */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Personalized Wellness Approach */}
            <div className="bg-white rounded-[28px] p-8 md:p-10 border border-border shadow-soft flex flex-col justify-between">
              <div>
                <span className="inline-block rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4">
                  Individual Care
                </span>
                <h3 className="font-heading text-2xl md:text-3xl font-semibold text-dark mb-4">
                  Personalized Wellness Approach
                </h3>
                <p className="text-base text-muted leading-relaxed mb-4">
                  We understand that every individual is different.
                </p>
                <p className="text-base text-muted leading-relaxed mb-4">
                  Instead of following the same approach for everyone, we first understand your lifestyle, physical condition, daily routine, wellness goals, and individual requirements.
                </p>
                <p className="text-base text-muted leading-relaxed">
                  Based on this understanding, appropriate yoga practices and wellness therapies may be combined to create a truly personalized healing experience.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-border">
                <a
                  href="#book-consultation"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  Book a Wellness Consultation
                </a>
              </div>
            </div>

            {/* Right: What We Aim to Support (10 Goals) */}
            <div className="bg-white rounded-[28px] p-8 md:p-10 border border-border shadow-soft">
              <span className="inline-block rounded-full bg-secondary/15 text-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4">
                Our Goals
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-dark mb-2">
                What We Aim to Support
              </h3>
              <p className="text-sm font-medium text-primary mb-6">
                Our goal is to help you:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {supportGoals.map((goal) => (
                  <div key={goal} className="flex items-start gap-2.5 text-sm text-dark/80">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shrink-0 text-xs mt-0.5">
                      ✓
                    </span>
                    <span className="leading-tight">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 4. Benefits & Why Choose Us + Booking Form ===== */}
      <section className="bg-white py-16 md:py-24 border-t border-border/70">
        <Container className="max-w-[1320px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px]">
            {/* Left column */}
            <div className="flex flex-col gap-16">
              {/* Benefits of natural healing */}
              <div>
                <h2 className="mb-8 text-center font-heading text-xl font-semibold uppercase tracking-wide text-dark sm:text-2xl">
                  Benefits of Natural Healing
                </h2>
                <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
                  {healingBenefits.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex flex-col items-center gap-3 text-center"
                      >
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background text-primary shadow-soft">
                          <Icon className="text-2xl" />
                        </span>
                        <span className="font-body text-xs font-medium leading-snug text-dark/70">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Why choose us */}
              <div>
                <h2 className="mb-8 text-center font-heading text-xl font-semibold uppercase tracking-wide text-dark sm:text-2xl">
                  Why Choose Vimoksha Yogshala?
                </h2>
                <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
                  {whyChooseUs.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex flex-col items-center gap-3 text-center"
                      >
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background text-secondary shadow-soft">
                          <Icon className="text-2xl" />
                        </span>
                        <span className="font-body text-xs font-medium leading-snug text-dark/70">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right column: booking sidebar */}
            <div
              id="book-consultation"
              className="h-fit overflow-hidden rounded-[20px] border border-border shadow-elevated lg:sticky lg:top-28"
            >
              <div className="bg-secondary px-6 py-5 text-white">
                <h3 className="font-heading text-base font-bold uppercase tracking-wide">
                  Book Your Therapy Consultation
                </h3>
                <p className="mt-1 font-body text-xs text-white/80">
                  Fill in the details and we will get in touch with you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3 bg-white px-6 py-6">
                <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5">
                  <IoPersonOutline className="shrink-0 text-muted" />
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    className="w-full bg-transparent font-body text-sm text-dark outline-none placeholder:text-muted"
                  />
                </div>

                <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5">
                  <IoCallOutline className="shrink-0 text-muted" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    className="w-full bg-transparent font-body text-sm text-dark outline-none placeholder:text-muted"
                  />
                </div>

                <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5">
                  <IoMailOutline className="shrink-0 text-muted" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    className="w-full bg-transparent font-body text-sm text-dark outline-none placeholder:text-muted"
                  />
                </div>

                <div className="relative flex items-center gap-2 rounded-lg border border-border px-3 py-2.5">
                  <IoLeafOutline className="shrink-0 text-muted" />
                  <select
                    name="therapy"
                    required
                    value={form.therapy}
                    onChange={handleChange}
                    className="w-full appearance-none bg-transparent font-body text-sm text-dark outline-none"
                  >
                    <option value="" disabled>Select Therapy *</option>
                    {therapyOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <IoChevronDown className="pointer-events-none absolute right-3 text-muted" />
                </div>

                <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5">
                  <IoCalendarOutline className="shrink-0 text-muted" />
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    placeholder="Preferred Date"
                    className="w-full bg-transparent font-body text-sm text-dark outline-none placeholder:text-muted"
                  />
                </div>

                <div className="flex items-start gap-2 rounded-lg border border-border px-3 py-2.5">
                  <IoDocumentTextOutline className="mt-0.5 shrink-0 text-muted" />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message (Optional)"
                    rows={3}
                    className="w-full resize-none bg-transparent font-body text-sm text-dark outline-none placeholder:text-muted"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="mt-1 h-[50px] rounded-full text-sm font-bold uppercase tracking-wide"
                >
                  {submitted ? 'Request Sent' : 'Book Consultation'}
                </Button>

                <div className="my-1 flex items-center gap-3">
                  <span className="h-px flex-1 bg-border" />
                  <span className="font-body text-xs font-medium text-muted">OR</span>
                  <span className="h-px flex-1 bg-border" />
                </div>

                <a
                  href="https://wa.me/919026612796"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full bg-[#25D366] font-body text-sm font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
                >
                  <IoLogoWhatsapp className="text-lg" />
                  Chat on WhatsApp
                </a>

                <a
                  href="tel:+919026612796"
                  className="inline-flex h-[50px] items-center justify-center gap-2 rounded-full border border-border font-body text-sm font-bold uppercase tracking-wide text-dark transition-colors hover:border-primary hover:text-primary"
                >
                  <IoCallOutline className="text-lg" />
                  Call Now: +91 90266 12796
                </a>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 5. Client reviews & FAQ ===== */}
      <section className="bg-background py-16 md:py-24">
        <Container className="max-w-[1320px]">
          <div className="flex flex-col gap-16">
            {/* Testimonials */}
            <div>
              <h2 className="mb-8 text-center font-heading text-xl font-semibold uppercase tracking-wide text-dark sm:text-2xl">
                What Our Clients Say
              </h2>
              <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {testimonials.map((t) => (
                  <div
                    key={t.name}
                    className="flex h-full flex-col rounded-[20px] border border-border bg-white p-5 shadow-soft"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-11 w-11 shrink-0 rounded-full object-cover"
                      />
                      <div className="flex text-primary">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <IoStar key={i} className="text-sm" />
                        ))}
                      </div>
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                      {t.quote}
                    </p>
                    <p className="mt-4 font-heading text-sm font-semibold text-dark">
                      &mdash; {t.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="mb-8 text-center font-heading text-xl font-semibold uppercase tracking-wide text-dark sm:text-2xl">
                Frequently Asked Questions
              </h2>
              <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-3">
                {faqs.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={faq.q} className="border-b border-border py-3">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-3 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="font-body text-sm font-medium text-dark/80">
                          {faq.q}
                        </span>
                        <span className="shrink-0 text-primary">
                          {isOpen ? <IoRemoveOutline /> : <IoAddOutline />}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="mt-2 text-xs leading-relaxed text-muted">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 6. Closing CTA banner ===== */}
      <section className="relative overflow-hidden bg-dark py-14">
        <img
          src="/images/therapies/hero.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/40" />
        <Container className="relative max-w-[1320px]">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-white sm:text-3xl">
                Begin Your <span className="text-primary">Natural Healing Journey</span> Today
              </h2>
              <p className="mt-2 font-body text-sm text-white/70">
                Let nature heal you. Let us guide you.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              {[
                { label: 'Heal Naturally', icon: IoLeafOutline },
                { label: 'Restore Balance', icon: IoBodyOutline },
                { label: 'Reduce Stress', icon: IoHeartOutline },
                { label: 'Live Better', icon: IoSparklesOutline },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-primary">
                      <Icon className="text-lg" />
                    </span>
                    <span className="font-body text-xs font-medium text-white/80">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div>
              <Button
                as={Link}
                to="/contact"
                variant="primary"
                size="lg"
                icon={<HiArrowRight className="h-4 w-4" />}
                className="h-[52px] rounded-full px-8 text-sm"
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}