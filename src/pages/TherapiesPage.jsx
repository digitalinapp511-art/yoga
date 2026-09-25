import { useState } from 'react';
import usePageMeta from '@/hooks/usePageMeta';
import { Container, Button } from '@/components/ui';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';
import { Star, Quote, ExternalLink } from 'lucide-react';
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
  IoTimeOutline,
  IoEyeOutline,
  IoCloseOutline,
  IoCheckmarkCircleOutline,
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

/* ===== 11 Sub-Therapies (Rich Data with Photos & Modalities) ===== */
const subTherapies = [
  {
    id: 'snehan',
    name: 'Snehan (Abhyanga)',
    englishName: 'Medicated Herbal Oil Massage',
    category: 'Ayurveda & Panchakarma',
    image: '/images/therapies/Therapeutic_Massage.webp',
    duration: '45 - 60 Min',
    idealFor: 'Muscle stiffness, joint fatigue, stress & insomnia',
    benefits: ['Nourishes Deep Tissues', 'Relieves Joint Stiffness', 'Calms Nervous System'],
    shortDesc: 'Medicated herbal oil massage to nourish tissues and relieve stiffness.',
    desc: 'Deeply relaxing full-body rhythmic massage using warm Ayurvedic herbal oils tailored to your dosha constitution. It stimulates blood circulation, releases muscle knots, and restores youthful suppleness.',
  },
  {
    id: 'swedan',
    name: 'Swedan (Herbal Steam)',
    englishName: 'Herbal Steam Chamber Detox',
    category: 'Ayurveda & Panchakarma',
    image: '/images/therapies/swedan_steam.jpg',
    duration: '20 - 30 Min',
    idealFor: 'Body heaviness, toxin buildup, sluggish metabolism',
    benefits: ['Sweats Out Toxins', 'Opens Micro-Channels', 'Eases Body Heaviness'],
    shortDesc: 'Medicated herbal steam therapy for full-body detoxification & lightness.',
    desc: 'Medicated herbal steam therapy inside a traditional hand-crafted wooden chamber. Aromatic steam infused with healing leaves opens up micro-circulation channels (srotas) and eliminates deep metabolic waste.',
  },
  {
    id: 'patra-potali',
    name: 'Patra Potali (Kizhi)',
    englishName: 'Warm Herbal Leaf Poultice Therapy',
    category: 'Ayurveda & Panchakarma',
    image: '/images/therapies/patra_potali.jpg',
    duration: '45 - 60 Min',
    idealFor: 'Arthritis, sciatica, frozen shoulder, chronic inflammation',
    benefits: ['Relieves Chronic Inflammation', 'Soothes Arthritic Pain', 'Improves Joint Mobility'],
    shortDesc: 'Warm herbal leaf poultice massage for joint & deep muscle comfort.',
    desc: 'Therapeutic massage using warm cotton boluses (potlis) packed with fresh medicinal leaves fried in Ayurvedic oils. Rhythmically applied over joints and muscles to reduce swelling and ease acute joint discomfort.',
  },
  {
    id: 'shirodhara',
    name: 'Shirodhara',
    englishName: 'Warm Oil Third-Eye Flow',
    category: 'Ayurveda & Panchakarma',
    image: '/images/therapies/Shirodhara.jpeg',
    duration: '45 - 60 Min',
    idealFor: 'Anxiety, mental fatigue, insomnia, chronic headaches',
    benefits: ['Deep Mental Calm', 'Alleviates Insomnia', 'Soothes Migraine & Stress'],
    shortDesc: 'Continuous stream of warm oil on forehead for deep mental peace.',
    desc: 'A continuous, soothing stream of warm dosha-specific herbal oil gently poured over the forehead (Ajna chakra). Induces a profound meditative state, lowers stress hormones, and promotes restorative sleep.',
  },
  {
    id: 'janu-vasti',
    name: 'Janu Vasti',
    englishName: 'Knee Joint Oil Reservoir Care',
    category: 'Ayurveda & Panchakarma',
    image: '/images/therapies/Janu_Basti.webp',
    duration: '30 - 45 Min',
    idealFor: 'Osteoarthritis, knee stiffness, cartilage degeneration',
    benefits: ['Nourishes Knee Joint', 'Lubricates Synovial Fluid', 'Relieves Walking Pain'],
    shortDesc: 'Medicated oil pooling therapy specifically for knee joint care & mobility.',
    desc: 'A leak-proof dough dam placed over the knee joint, filled with continuously warm medicinal oils. Deeply lubricates the joint capsule, eases degenerative friction, and strengthens surrounding tendons.',
  },
  {
    id: 'kati-vasti',
    name: 'Kati Vasti',
    englishName: 'Lumbosacral Spinal Oil Reservoir',
    category: 'Ayurveda & Panchakarma',
    image: '/images/therapies/Kati_Basti.webp',
    duration: '30 - 45 Min',
    idealFor: 'Lower back pain, slipped disc, sciatica, lumbar spondylosis',
    benefits: ['Decompresses Spinal Nerves', 'Soothes Sciatic Ache', 'Strengthens Lumbar Muscles'],
    shortDesc: 'Warm herbal oil reservoir over lower back for spine & sciatica relief.',
    desc: 'Warm herbal medicated oil retained within a dough boundary placed over the lower spinal region. Relieves nerve compression, nourishes vertebral discs, and provides long-lasting relief from lumbar pain.',
  },
  {
    id: 'mud-bath',
    name: 'Mud Bath (Mitti Snan)',
    englishName: 'Full Body Therapeutic Clay Bath',
    category: 'Naturopathy & Clay',
    image: '/images/therapies/mud_bath.jpg',
    duration: '40 - 50 Min',
    idealFor: 'Skin conditions, high body heat, systemic impurities',
    benefits: ['Draws Out Impurities', 'Enhances Skin Radiance', 'Cools Internal Heat'],
    shortDesc: 'Mineral-rich therapeutic mud bath for cooling, detox & skin radiance.',
    desc: 'Immersive application of mineral-rich Himalayan healing clay. The volcanic and mineral elements draw out impurities through the skin pores, balance body temperature, and revitalize the epidermis.',
  },
  {
    id: 'abdominal-mud-pack',
    name: 'Abdominal Mud Pack',
    englishName: 'Digestive Detox Clay Pack',
    category: 'Naturopathy & Clay',
    image: '/images/therapies/abdominal_mud_pack.jpg',
    duration: '25 - 35 Min',
    idealFor: 'Constipation, acid reflux, sluggish digestion, bloating',
    benefits: ['Stimulates Bowel Peristalsis', 'Alleviates Acid Reflux', 'Soothes Gut Heat'],
    shortDesc: 'Targeted cooling mud pack on abdomen to support digestive wellness.',
    desc: 'A pure, sterile natural mud pack applied directly over the stomach and abdominal area. It absorbs excess gastrointestinal heat, stimulates intestinal motility, and supports natural, regular digestion.',
  },
  {
    id: 'hip-bath',
    name: 'Hip Bath (Kati Snan)',
    englishName: 'Hydrotherapy Sitz Bath',
    category: 'Hydrotherapy & Detox',
    image: '/images/therapies/hip_bath.jpg',
    duration: '20 - 30 Min',
    idealFor: 'Pelvic congestion, menstrual cramps, piles, reproductive wellness',
    benefits: ['Tones Pelvic Organs', 'Relieves Menstrual Pain', 'Improves Lower Circulation'],
    shortDesc: 'Hydrotherapy sitz bath supporting pelvic circulation & lower body comfort.',
    desc: 'Specialized hydrotherapeutic tub bath where the pelvic and lower abdominal regions are immersed in temperature-regulated therapeutic water, stimulating vital circulation to the reproductive and digestive organs.',
  },
  {
    id: 'arm-bath',
    name: 'Arm Bath (Hasta Snan)',
    englishName: 'Arm & Forearm Immersion Therapy',
    category: 'Hydrotherapy & Detox',
    image: '/images/therapies/arm_bath.jpg',
    duration: '15 - 25 Min',
    idealFor: 'Respiratory distress, asthma, upper-body stiffness, cold extremities',
    benefits: ['Stimulates Reflex Points', 'Eases Breathing Constriction', 'Relieves Arm Tension'],
    shortDesc: 'Targeted hydrotherapy bath for arm circulation & nervous relaxation.',
    desc: 'A calming hydrotherapy session where forearms and hands are submerged in warm medicated water. Through nervous reflex action, it promotes bronchial relaxation, improves circulation, and clears chest tension.',
  },
  {
    id: 'colon-cleansing',
    name: 'Colon Cleansing & Detox',
    englishName: 'Digestive Tract Cleansing Practice',
    category: 'Hydrotherapy & Detox',
    image: '/images/therapies/colon_cleansing.jpg',
    duration: '45 - 60 Min',
    idealFor: 'Chronic toxicity, sluggish metabolism, metabolic reset',
    benefits: ['Flushes Gastrointestinal Toxins', 'Resets Digestive Agni', 'Restores Gut Energy'],
    shortDesc: 'Natural digestive & colon cleansing practice for internal purification.',
    desc: 'Gentle, traditional yogic and naturopathic cleansing method using herbal infusions and natural hydration under expert guidance. Completely resets the digestive tract, clears encrusted waste, and revitalizes whole-body energy.',
  },
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

/* ===== Testimonials (Verified Client Healing Stories) ===== */
const testimonials = [
  {
    id: 'th-rev-1',
    name: 'Neha Sharma',
    role: 'Naturopathy & Detox Patient',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    quote:
      'Naturopathy sessions helped me detox, reset my metabolism, and improve my energy levels naturally. I feel remarkably lighter, healthier, and refreshed.',
  },
  {
    id: 'th-rev-2',
    name: 'Rohit Verma',
    role: 'Cupping & Back Pain Relief',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    quote:
      'Cupping therapy and therapeutic massage reduced my severe lower back pain within 3 sessions. The therapists are exceptionally professional, gentle, and caring.',
  },
  {
    id: 'th-rev-3',
    name: 'Priya Nair',
    role: 'Shirodhara & Stress Relief',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    quote:
      'Shirodhara therapy was deeply soothing. It normalized my sleep cycle and melted away months of accumulated work stress. Highly recommended!',
  },
  {
    id: 'th-rev-4',
    name: 'Arjun Kapoor',
    role: 'Janu Basti (Knee & Joint Care)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    quote:
      'The Janu Basti herbal oil therapy relieved my persistent knee stiffness within two weeks. The team genuinely listens and customizes every session with utmost care.',
  },
];

/* ===== Therapy Review Card (Exact Luxury Home Page Aesthetic) ===== */
function TherapyReviewCard({ review }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative flex h-full flex-col justify-between rounded-[24px] border border-border/80 bg-white p-6 sm:p-7 shadow-soft transition-all duration-300 hover:border-secondary/40 hover:shadow-card hover:-translate-y-1.5">
      {/* Top Header: Star Rating + Signature Quote Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={16}
              className={
                star <= review.rating
                  ? 'fill-secondary text-secondary drop-shadow-[0_1px_3px_rgba(246,145,22,0.35)]'
                  : 'fill-transparent text-border'
              }
              strokeWidth={1.5}
            />
          ))}
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
          <Quote size={15} className="rotate-180" />
        </div>
      </div>

      {/* Review Text */}
      <p className="flex-1 font-body text-sm leading-relaxed text-dark/85 italic mb-6">
        &ldquo;{review.quote}&rdquo;
      </p>

      {/* Author Info with Circular Photo */}
      <div className="flex items-center justify-between border-t border-border/60 pt-4 mt-auto">
        <div className="flex items-center gap-3.5">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-secondary/30 shadow-xs ring-2 ring-white/80 bg-secondary/10">
            {review.avatar && !imgError ? (
              <img
                src={review.avatar}
                alt={review.name}
                className="h-full w-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-secondary font-heading text-base font-bold text-white">
                {review.name ? review.name.charAt(0).toUpperCase() : 'U'}
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-base font-bold text-dark leading-tight group-hover:text-primary transition-colors">
              {review.name}
            </span>
            <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider mt-0.5">
              {review.role}
            </span>
          </div>
        </div>

        {/* Verified Badge */}
        <div className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50/90 px-2.5 py-1 rounded-full border border-emerald-200/60">
          <span className="text-xs">✓</span>
          <span>Verified</span>
        </div>
      </div>
    </div>
  );
}

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
  const [selectedTherapyModal, setSelectedTherapyModal] = useState(null);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    therapy: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSelectTherapy = (therapyName) => {
    setForm((prev) => ({ ...prev, therapy: therapyName }));
    if (selectedTherapyModal) setSelectedTherapyModal(null);
    const el = document.getElementById('book-consultation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('ring-4', 'ring-primary', 'ring-offset-2', 'transition-all', 'duration-500');
      setTimeout(() => {
        el.classList.remove('ring-4', 'ring-primary', 'ring-offset-2');
      }, 2500);
    }
  };

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

          {/* 11 Sub-Therapies (Option A: Clean Luxury Grid - User Sketch Format) */}
          <div className="bg-white/90 backdrop-blur-sm rounded-[32px] p-6 sm:p-10 md:p-12 border border-border shadow-soft mb-16 relative overflow-hidden">
            {/* Ambient decorative glow */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
              <span className="inline-block rounded-full border border-secondary/30 bg-secondary/8 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-3">
                Specialized Healing Modalities
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-dark">
                Supportive <span className="text-primary">Sub-Therapies</span>
              </h3>
              <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                Time-tested Ayurvedic Panchakarma, Naturopathic Clay, and Hydrotherapy healing modalities integrated seamlessly into your individualized wellness plan.
              </p>
            </div>

            {/* 11 Sub-Therapies Grid (Format matching user sketch: Circular Photo + Name + 2-line Description) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 relative z-10">
              {subTherapies.map((sub) => (
                <div
                  key={sub.id || sub.name}
                  onClick={() => setSelectedTherapyModal(sub)}
                  className="group relative flex items-center gap-3.5 sm:gap-4.5 rounded-2xl sm:rounded-full bg-[#fcfaf7] p-3 sm:p-3.5 pr-5 sm:pr-6 border border-border/80 shadow-xs transition-all duration-300 hover:shadow-card hover:border-primary/40 hover:-translate-y-1 hover:bg-white cursor-pointer"
                >
                  {/* Left: Circular Image Frame (Matching User Sketch 'imge') */}
                  <div className="relative shrink-0 w-16 h-16 sm:w-[74px] sm:h-[74px] rounded-full overflow-hidden border-2 border-primary/20 ring-2 ring-secondary/20 shadow-xs group-hover:scale-105 group-hover:border-primary group-hover:ring-primary/30 transition-all duration-300">
                    <img
                      src={sub.image}
                      alt={sub.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = '/images/therapies/hero.jpg';
                      }}
                    />
                  </div>

                  {/* Right: Content Block (Therapy Name + Accent Line + Short 2-word Description) */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-heading text-base sm:text-[17px] font-bold text-dark group-hover:text-primary transition-colors leading-snug truncate">
                      {sub.name}
                    </h4>

                    {/* Subtle underline / accent line as drawn in sketch */}
                    <div className="w-8 h-0.5 bg-primary/25 group-hover:w-16 group-hover:bg-primary transition-all duration-300 rounded-full my-1" />

                    {/* इसके बारे में 2 शब्द (Short Description) */}
                    <p className="text-xs sm:text-[13px] text-muted leading-relaxed line-clamp-2">
                      {sub.shortDesc || sub.desc}
                    </p>
                  </div>
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
            {/* Testimonials (Matching Home Page Luxury Aesthetic) */}
            <div>
              <div className="mx-auto mb-12 flex max-w-[720px] flex-col items-center text-center">
                <span className="inline-block rounded-full border border-secondary/35 bg-white/90 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-primary shadow-soft backdrop-blur-sm mb-3">
                  Community Love &amp; Experiences
                </span>
                <h2 className="font-heading text-3xl font-semibold leading-tight text-dark sm:text-4xl md:text-5xl">
                  What Our Clients <span className="text-primary">Say About Our Therapies</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted max-w-[620px]">
                  Real transformative recovery journeys from individuals who restored bodily balance, relieved chronic back &amp; joint pain, and found deep relaxation through our therapies.
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Vimoksha+Yogshala+27+Mohit+Nagar+GMS+Road+Dehradun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-dark shadow-soft transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-card"
                >
                  <div className="flex items-center gap-0.5 text-secondary">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                  <span>4.9 / 5.0 on Google Reviews</span>
                  <ExternalLink size={14} className="text-secondary" />
                </a>
              </div>

              {/* 4 Luxury Testimonial Cards Grid */}
              <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {testimonials.map((review) => (
                  <TherapyReviewCard key={review.id || review.name} review={review} />
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

      {/* ===== 6. Closing CTA banner (Natural Healing Journey) ===== */}
      <section className="relative overflow-hidden bg-dark py-16 sm:py-20 lg:py-24 border-y border-white/10 shadow-elevated">
        {/* Cinematic Background Image */}
        <img
          src="/images/therapies/natural-healing-cta-bg.jpg"
          alt="Ayurvedic natural wellness and healing therapy atmosphere at Vimoksha Yogshala"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Luxury Vignette & Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/65" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-dark/60 pointer-events-none" />

        <Container className="relative max-w-[1320px]">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Left: Heading & Subtitle */}
            <div className="max-w-xl">
              <span className="inline-block rounded-full border border-secondary/40 bg-secondary/15 px-3.5 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary-light backdrop-blur-xs mb-3">
                Holistic Wellbeing
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-snug drop-shadow-md">
                Begin Your <span className="text-secondary-light">Natural Healing Journey</span> Today
              </h2>
              <p className="mt-2.5 font-body text-sm sm:text-base text-white/80 leading-relaxed drop-shadow-xs">
                Let nature heal you. Let us guide you towards renewed vitality, deep peace, and lasting balance.
              </p>
            </div>

            {/* Middle: 4 Pillar Feature Badges */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7">
              {[
                { label: 'Heal Naturally', icon: IoLeafOutline },
                { label: 'Restore Balance', icon: IoBodyOutline },
                { label: 'Reduce Stress', icon: IoHeartOutline },
                { label: 'Live Better', icon: IoSparklesOutline },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="group flex flex-col items-center gap-2 text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md text-secondary-light shadow-soft transition-all duration-300 group-hover:scale-110 group-hover:border-secondary group-hover:bg-secondary/20">
                      <Icon className="text-xl" />
                    </span>
                    <span className="font-body text-xs font-medium text-white/90 drop-shadow-xs tracking-wide">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Right: Primary Action Button */}
            <div className="shrink-0">
              <Button
                as={Link}
                to="/contact"
                variant="primary"
                size="lg"
                icon={<HiArrowRight className="h-4 w-4" />}
                className="h-[52px] rounded-full px-8 text-sm font-bold shadow-elevated hover:shadow-2xl transition-all duration-300"
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== Sub-Therapy Quick View Modal (Compact Luxury Card) ===== */}
      <AnimatePresence>
        {selectedTherapyModal && (
          <div
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-dark/80 backdrop-blur-md"
            onClick={() => setSelectedTherapyModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-lg bg-white rounded-[24px] overflow-hidden shadow-2xl border border-border flex flex-col my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image Header — Compact */}
              <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-muted/20 shrink-0">
                <img
                  src={selectedTherapyModal.image}
                  alt={selectedTherapyModal.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.src = '/images/therapies/hero.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/15" />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedTherapyModal(null)}
                  className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition-all shadow-md cursor-pointer"
                  aria-label="Close modal"
                >
                  <IoCloseOutline className="text-xl" />
                </button>

                {/* Modal Header Titles */}
                <div className="absolute bottom-3 left-5 right-5 text-white">
                  <span className="inline-block rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white mb-1 shadow-xs">
                    {selectedTherapyModal.category}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold leading-tight drop-shadow-md text-white">
                    {selectedTherapyModal.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-white/90 font-medium drop-shadow-xs mt-0.5">
                    {selectedTherapyModal.englishName} &bull; {selectedTherapyModal.duration}
                  </p>
                </div>
              </div>

              {/* Modal Body — Compact & Clean */}
              <div className="p-5 sm:p-6 space-y-3.5">
                <div>
                  <h4 className="font-heading text-sm font-bold text-dark mb-1">
                    Therapy Overview
                  </h4>
                  <p className="text-xs sm:text-[13px] text-muted leading-relaxed line-clamp-3">
                    {selectedTherapyModal.desc}
                  </p>
                </div>

                {selectedTherapyModal.idealFor && (
                  <div className="rounded-xl bg-background px-3.5 py-2 border border-border/70">
                    <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-primary block">
                      Recommended For
                    </span>
                    <p className="text-xs font-medium text-dark mt-0.5">
                      {selectedTherapyModal.idealFor}
                    </p>
                  </div>
                )}

                {selectedTherapyModal.benefits && (
                  <div>
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-dark/80 mb-1.5">
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {selectedTherapyModal.benefits.map((b) => (
                        <div key={b} className="flex items-center gap-1.5 text-xs text-dark/80">
                          <IoCheckmarkCircleOutline className="text-sm text-primary shrink-0" />
                          <span className="truncate">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="pt-3 border-t border-border flex items-center justify-between gap-3">
                  <a
                    href={`https://wa.me/919026612796?text=${encodeURIComponent(
                      `Hello Vimoksha Yogshala, I would like to inquire about the ${selectedTherapyModal.name} therapy.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-4 text-xs font-bold text-white hover:opacity-90 transition-opacity"
                  >
                    <IoLogoWhatsapp className="text-base" />
                    WhatsApp
                  </a>

                  <button
                    type="button"
                    onClick={() => handleSelectTherapy(selectedTherapyModal.name)}
                    className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-primary px-5 text-xs font-bold text-white hover:bg-primary-dark shadow-xs transition-all cursor-pointer"
                  >
                    <span>Book Consultation</span>
                    <HiArrowRight className="text-xs" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}