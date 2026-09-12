import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Users,
  Users2,
  Award,
  Clock,
  CheckCircle2,
  Home,
  UtensilsCrossed,
  TreePine,
  Wifi,
  UserCheck,
  FlaskConical,
  Hand,
  BookOpen,
  HeartPulse,
  MessageCircle,
  Phone,
  CalendarCheck,
  Plus,
  Minus,
  Flower2,
  Info,
  ImageIcon,
  Calendar,
  Star,
  Check,
  ChevronRight,
  ShieldCheck,
  GraduationCap,
  Sparkle,
  Activity,
} from 'lucide-react';
import SEO from '@/components/common/SEO';
import { useAppContext } from '@/context/AppContext';

/* ===== Image Slot Component ===== */
function ImageSlot({ src, alt = '', label, className = '', focus = 'center' }) {
  if (src) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          style={{ objectPosition: focus }}
        />
      </div>
    );
  }
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 border-2 border-dashed border-primary-light/50 bg-primary-light/10 text-primary-dark/50 ${className}`}
    >
      <ImageIcon className="w-6 h-6" />
      {label && (
        <span className="text-[11px] font-semibold uppercase tracking-wide text-center px-2">
          {label}
        </span>
      )}
    </div>
  );
}

/* ===== Decorative Lotus Mark ===== */
function LotusMark({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor">
      {[0, 45, 90, 135].map((deg) => (
        <ellipse
          key={deg}
          cx="100"
          cy="100"
          rx="90"
          ry="26"
          strokeWidth="1"
          transform={`rotate(${deg} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ===== Section Badge ===== */
function RibbonLabel({ children, tone = 'dark', icon: Icon }) {
  const toneClasses =
    tone === 'dark' ? 'bg-primary-dark text-white' : 'bg-secondary text-white';
  return (
    <div
      className={`inline-flex items-center gap-2 ${toneClasses} rounded-lg px-4 py-2 text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase shadow-soft`}
    >
      {Icon ? <Icon className="w-4 h-4" /> : null}
      {children}
    </div>
  );
}

/* ===== Card Panel Wrapper ===== */
function Panel({ children, className = '' }) {
  return (
    <div
      className={`bg-surface rounded-[26px] border border-border/80 shadow-soft p-6 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------
   COURSE 1: 200-HOUR YOGA TEACHER TRAINING DATA
---------------------------------------------------------------- */
const batches200 = [
  {
    month: 'September 2026 Batch',
    dates: 'Sep 1 – Sep 24, 2026',
    status: 'Filling Fast',
    seatsLeft: '3 Seats Left',
    badgeTone: 'bg-amber-100 text-amber-800 border-amber-300',
  },
  {
    month: 'October 2026 Batch',
    dates: 'Oct 1 – Oct 24, 2026',
    status: 'Open for Registration',
    seatsLeft: '7 Seats Left',
    badgeTone: 'bg-emerald-100 text-emerald-800 border-emerald-300',
  },
  {
    month: 'November 2026 Batch',
    dates: 'Nov 1 – Nov 24, 2026',
    status: 'Open for Registration',
    seatsLeft: '10 Seats Left',
    badgeTone: 'bg-blue-100 text-blue-800 border-blue-300',
  },
];

const curriculum200 = [
  {
    id: 'asana',
    title: '1. Asana Alignment & Adjustments',
    desc: 'Master 80+ foundational & intermediate postures with precision alignment, anatomical cues, and safe hands-on adjustments.',
    highlights: [
      'Classical Hatha & Dynamic Vinyasa Primary Series',
      'Anatomical alignment & modification props (blocks, straps, bolsters)',
      'Hands-on physical adjustments & posture corrections',
      'Injury-prevention techniques & contraindications for bodies',
    ],
  },
  {
    id: 'anatomy',
    title: '2. Yogic Anatomy & Biomechanics',
    desc: 'Understand how the human body moves, breathes, and responds to yogic practices from both Western and Eastern perspectives.',
    highlights: [
      'Musculoskeletal system in posture mechanics & joints',
      'Nervous system, breath regulation & stress reduction response',
      'Subtle body anatomy: Chakras, Nadis, Pancha Koshas & Prana',
      'Biomechanics of spinal health & joint flexibility',
    ],
  },
  {
    id: 'philosophy',
    title: '3. Yoga Philosophy & Sutras',
    desc: 'Explore the timeless spiritual heritage of Patanjali Yoga Sutras, Bhagavad Gita, and the 8 Limbs of Classical Yoga.',
    highlights: [
      'History, lineages and origins of classical Yoga philosophy',
      'Patanjali Yoga Sutras (4 Padas deep conceptual breakdown)',
      'The 8 Limbs of Ashtanga (Yama, Niyama to Samadhi)',
      'Applying ancient yogic wisdom to modern daily living',
    ],
  },
  {
    id: 'pranayama',
    title: '4. Pranayama, Shatkarma & Meditation',
    desc: 'Deepen inner stillness through traditional yogic breathwork, cleansing techniques, and mindfulness meditation.',
    highlights: [
      'Classical Pranayama (Nadi Shodhana, Kapalabhati, Bhastrika, Sheetali)',
      'Shatkarma detox techniques (Jala Neti, Trataka purification)',
      'Dhyana (Meditation) techniques & sacred Mantra chanting',
      'Yoga Nidra & restorative deep relaxation practices',
    ],
  },
  {
    id: 'teaching',
    title: '5. Teaching Methodology & Cueing',
    desc: 'Build confidence, clarity, and vocal projection to structure and lead inspiring, safe yoga classes.',
    highlights: [
      'Effective class sequencing & thematic planning',
      'Verbal cueing, voice modulation & spatial presence',
      'Teaching mixed-ability & beginner groups with confidence',
      'Classroom ethics, student observation & engagement',
    ],
  },
  {
    id: 'practicum',
    title: '6. Practicum & Yogic Lifestyle',
    desc: 'Put theory into practice by co-teaching classes, receiving peer feedback, and adopting an authentic yogic lifestyle.',
    highlights: [
      'Live teaching practicum with structured instructor feedback',
      'Yogic diet (Satvik principles) & daily routine (Dinacharya)',
      'Code of ethics and conduct for professional yoga instructors',
      'Business of Yoga: Marketing, studio setup & career paths',
    ],
  },
];

const schedule200 = [
  ['6:00 AM – 6:30 AM', 'Pranayama & Meditation (Inner Stillness)'],
  ['6:30 AM – 8:00 AM', 'Morning Asana Practice (Classical Hatha / Vinyasa)'],
  ['8:00 AM – 9:00 AM', 'Nutritious Satvik Vegetarian Breakfast & Rest'],
  ['9:00 AM – 10:30 AM', 'Yogic Anatomy, Physiology & Biomechanics'],
  ['10:45 AM – 12:15 PM', 'Yoga Philosophy & Patanjali Yoga Sutras'],
  ['12:15 PM – 1:15 PM', 'Satvik Lunch & Nourishing Relaxation'],
  ['1:15 PM – 2:45 PM', 'Teaching Methodology & Alignment Workshop'],
  ['3:00 PM – 4:00 PM', 'Self-Study, Chanting & Group Discussion'],
  ['4:15 PM – 5:45 PM', 'Evening Asana, Adjustments & Practicum Lab'],
  ['6:00 PM – 7:00 PM', 'Evening Chanting, Kirtan & Meditation'],
];

/* -------------------------------------------------------------
   COURSE 2: 300-HOUR ADVANCED YOGA TEACHER TRAINING DATA
---------------------------------------------------------------- */
const curriculum300 = [
  {
    id: 'phil-adv',
    title: '1. Advanced Yoga Philosophy & Sutras',
    desc: 'Deepen your philosophical foundation with profound study of ancient yogic texts, human psychology, and metaphysical frameworks.',
    topics: [
      'Patanjali Yoga Sutras (In-depth analysis of Samadhi, Sadhana & Vibhuti Padas)',
      'Ashtanga Yoga & Antaranga Sadhana (Dharana, Dhyana, Samadhi)',
      'Chitta & Chitta Vrittis (Mind modifications) & 5 Kleshas (afflictions)',
      'Karma, Samskaras (mental impressions) & The 3 Gunas (Sattva, Rajas, Tamas)',
      'Abhyasa (Unwavering practice) & Vairagya (Detached awareness)',
      'Integrating traditional yogic philosophy into modern teaching & lifestyle',
    ],
  },
  {
    id: 'asana-adv',
    title: '2. Advanced Asana & Precision Alignment',
    desc: 'Take your physical practice to new heights with master-level postures, transitions, and biomechanical precision.',
    topics: [
      'Advanced Hatha & Ashtanga Primary / Intermediate flow sequences',
      'Dynamic Vinyasa transitions, floating, jumping through & stepping back',
      'Arm balances: Bakasana, Parsva Bakasana, Astavakrasana, Pincha Mayurasana',
      'Advanced standing balances, deep spinal twists & profound hip openers',
      'Deep backbends: Chakrasana, Urdhva Dhanurasana, Kapotasana preparation',
      'Inversions: Sirshasana variations, Pincha, Sarvangasana & Handstand prep',
      'Biomechanical alignment principles, safe progressions & advanced props',
    ],
  },
  {
    id: 'anatomy-adv',
    title: '3. Functional Anatomy & Biomechanics',
    desc: 'Detailed clinical and functional understanding of the human body to prevent injuries and adapt practices for all body anatomies.',
    topics: [
      'Functional anatomy of the musculoskeletal system during yogic movements',
      'Spinal column mechanics: Cervical, thoracic & lumbar health in twists and backbends',
      'Shoulder girdle & pelvic girdle stability vs. mobility dynamics',
      'Fascial lines, tendons, joint lubrication & muscular activation patterns',
      'Respiratory mechanics: Diaphragmatic excursion and nervous system regulation',
      'Identifying compensatory movement patterns & postural misalignments',
      'Injury prevention, contraindications, and anatomical adaptation guidelines',
    ],
  },
  {
    id: 'pranayama-adv',
    title: '4. Advanced Pranayama & Subtle Energies',
    desc: 'Master high-level breath control techniques, energetic locks (Bandhas), and subtle energy channeling.',
    topics: [
      'Science and metaphysical principles of Prana and Pranayama',
      'Advanced Nadi Shodhana with Antar & Bahir Kumbhaka (Breath retentions)',
      'Ujjayi, Bhramari, Sheetali, Sheetkari & Surya/Chandra Bhedana',
      'The Three Bandhas: Mula Bandha, Uddiyana Bandha, Jalandhara Bandha & Maha Bandha',
      'Energetic sequencing of pranayama sessions according to doshas and seasons',
      'Contraindications, safety warnings, and precautions in intense breath retention',
    ],
  },
  {
    id: 'meditation-adv',
    title: '5. Meditation, Mindfulness & Subtle Body',
    desc: 'Cultivate deep meditative absorption, witness consciousness, and master advanced concentration techniques.',
    topics: [
      'Progression from Dharana (focused awareness) into Dhyana (effortless meditation)',
      'Breath-based mindfulness, Vipassana principles & Somatic awareness',
      'Traditional Mantra meditation & sacred sound vibration dynamics',
      'Cultivating Sakshi Bhava (Witness Consciousness) throughout life',
      'Facilitating transformative Yoga Nidra journeys for profound restorative healing',
      'Subtle energy maps: Chakras, Nadis, Kundalini theory & Pancha Kosha integration',
    ],
  },
  {
    id: 'shatkriya-adv',
    title: '6. Shatkriya & Yogic Detoxification',
    desc: 'Master the traditional six yogic cleansing techniques for physical detoxification, mental clarity, and energetic balance.',
    topics: [
      'Origins, spiritual purpose, and health benefits of classical Shatkriya',
      'Jala Neti & Sutra Neti: Safe practical application and sinus cleansing',
      'Trataka: Concentrated candle gazing for ocular strength and mental focus',
      'Kapalabhati & Agnisara: Abdominal fire activation and digestive health',
      'Nauli Kriya: Progressive introduction to abdominal churning and core isolation',
      'Dhauti & Basti: Theoretical understanding, physiological context & safety protocols',
    ],
  },
  {
    id: 'therapeutic-adv',
    title: '7. Therapeutic Yoga Applications',
    desc: 'Learn how to intelligently modify yogic practices as educational wellness support for common lifestyle ailments.',
    topics: [
      'Principles of therapeutic yoga as a supportive wellness methodology',
      'Postural assessment, body reading, and individual movement observation',
      'Yoga protocols for lower back comfort, spine mobility & pelvic alignment',
      'Techniques for neck, shoulder, and upper thoracic tension release',
      'Therapeutic interventions for chronic stress, insomnia & lifestyle disorders',
      'Restorative yoga utilizing bolsters, blocks, straps, and weighted props',
      'Note: Taught as supportive educational wellness, not medical replacement',
    ],
  },
  {
    id: 'methodology-adv',
    title: '8. Advanced Teaching Methodology',
    desc: 'Refine your teaching voice, classroom presence, hands-on adjustments, and communication for high-impact classes.',
    topics: [
      'Precision verbal cueing: Articulate, concise, empowering and inclusive',
      'Advanced demonstration strategies and optimal instructor positioning',
      'Acute observation skills to identify micro-misalignments in large groups',
      'Intelligent progressions, regressions, and instant adaptations for mixed levels',
      'Mindful, ethical, and safe hands-on assists and adjustment physics',
      'Cultivating an authentic teacher persona, ethics, and professional boundaries',
    ],
  },
  {
    id: 'sequencing-adv',
    title: '9. Advanced Sequencing & Class Design',
    desc: 'Design purposeful, inspiring, and multi-layered classes for studios, workshops, and intensive retreats.',
    topics: [
      'Peak pose class architecture: Safe preparation, culmination & counterposes',
      'Designing diverse styles: Classical Hatha, Vinyasa Flow, and Ashtanga-inspired flows',
      'Curating transformative weekend workshops, masterclasses, and multi-week series',
      'Harmonizing physical asana with thematic philosophy, pranayama, and meditation',
      'Evening restorative and yin-inspired sequencing for nervous system recovery',
    ],
  },
  {
    id: 'practicum-adv',
    title: '10. Teaching Practicum & Master Mentorship',
    desc: 'Extensive live teaching practice with peer evaluations and direct one-on-one feedback from senior master gurus.',
    topics: [
      'Designing and submitting structured, comprehensive class lesson plans',
      'Conducting full-length 60 to 90-minute advanced yoga classes',
      'Leading standalone pranayama, guided meditation, and Yoga Nidra sessions',
      'Receiving constructive, detailed feedback from lead faculty instructors',
      'Peer observation, teaching critique, and collaborative learning circles',
      'Polishing your unique signature teaching voice and building confidence',
    ],
  },
];

const whyChoose300 = [
  'Deepen your personal asana practice and explore advanced postures safely',
  'Refine your verbal cueing, voice projection, and instructional communication',
  'Learn to assess individual student anatomy and offer intelligent modifications',
  'Master intelligent peak pose sequencing for workshops and retreats',
  'Apply mindful, respectful, and safe hands-on adjustments with confidence',
  'Bridge ancient yogic wisdom from classical texts into modern teaching',
  'Build genuine teacher presence, authority, and emotional resonance',
  'Adopt a mindful, responsible, and trauma-informed pedagogical approach',
];

/* -------------------------------------------------------------
   COURSE 3: 50-HOUR AERIAL YOGA TEACHER TRAINING DATA
---------------------------------------------------------------- */
const curriculumAerial = [
  {
    modNum: 'Module 1',
    hours: '5 Hours',
    title: 'Introduction to Aerial Yoga',
    topics: [
      'Concept, historical evolution & modern growth of Aerial Yoga',
      'Key differences and synergies between mat-based and suspended yoga',
      'Core movement principles & physiological benefits of aerial practice',
      'Role of the silk hammock as a supportive prop and suspension tool',
      'Aerial yoga terminology, spatial orientation & student mindset',
    ],
  },
  {
    modNum: 'Module 2',
    hours: '6 Hours',
    title: 'Equipment, Setup & Rigging Safety',
    topics: [
      'Understanding aerial equipment: High-density silk, carabiners, daisy chains',
      'Hammock height calibration tailored to student height and class style',
      'Daily equipment inspection, wear-and-tear detection & weight ratings',
      'Safe mounting, dismounting, fabric grip techniques & foot wraps',
      'Spotting protocols, risk management & handling student fear or dizziness',
    ],
  },
  {
    modNum: 'Module 3',
    hours: '12 Hours',
    title: 'Aerial Asanas & Suspended Techniques',
    topics: [
      'Standing aerial postures, lunges, balance poses & Warrior variations',
      'Seated & wrapped postures for deep hip opening and pelvic mobilization',
      'Supported forward folds, backbends & zero-compression spinal traction',
      'Basic and intermediate aerial inversions (Flying Butterfly, Inverted Star)',
      'Suspended flying postures, smooth aerial transitions & flow combinations',
    ],
  },
  {
    modNum: 'Module 4',
    hours: '6 Hours',
    title: 'Anatomy, Alignment & Biomechanics',
    topics: [
      'Functional biomechanics of suspended movement and spinal decompression',
      'Core engagement, pelvic floor activation & stabilizing deep musculature',
      'Shoulder girdle mechanics, joint preservation & grip endurance',
      'Precision alignment cues to prevent fabric pinching or muscular strain',
      'Modifications for varying flexibility levels and body proportions',
    ],
  },
  {
    modNum: 'Module 5',
    hours: '4 Hours',
    title: 'Aerial Pranayama, Meditation & Relaxation',
    topics: [
      'Breath awareness inside the gentle enclosure of the silk hammock',
      'Calming pranayama practices supported by full body suspension',
      'Sensory-deprivation floating meditation & mental stillness',
      'Floating Savasana: Cocoon relaxation for profound nervous system recovery',
      'Principles of Restorative Aerial Yoga & floating Yoga Nidra',
    ],
  },
  {
    modNum: 'Module 6',
    hours: '4 Hours',
    title: 'Strength, Mobility & Inversion Prep',
    topics: [
      'Targeted core conditioning utilizing the hammock as resistance',
      'Upper-body pulling strength, back muscle engagement & grip drills',
      'Hip mobility drills and hamstring opening using aerial support',
      'Inversion preparation drills to build mental confidence and spatial awareness',
      'Progressive conditioning exercises to build student stamina',
    ],
  },
  {
    modNum: 'Module 7',
    hours: '7 Hours',
    title: 'Teaching Methodology & Sequencing',
    topics: [
      'Structure of an aerial yoga class: Grounding, warmup, flying, cooldown',
      'Clear verbal and visual cueing from outside the hammock',
      'Demonstration techniques that keep students focused and safe',
      'Designing intelligent beginner, intermediate, and restorative aerial flows',
      'Managing mixed-level classes and adjusting hammock heights seamlessly',
    ],
  },
  {
    modNum: 'Module 8',
    hours: '6 Hours',
    title: 'Practical Teaching & Assessment',
    topics: [
      'Live teaching practicum: Leading selected postures and sequences',
      'Hands-on spotting practice under senior master instructor evaluation',
      'Emergency dismount response and safety protocol testing',
      'Instructor critique, student self-reflection & teaching refinement',
      'Final practical teaching evaluation & certification ceremony',
    ],
  },
];

const scheduleAerial = [
  { day: 'Day 1', title: 'Introduction, Fundamentals, Equipment & Rigging Safety', hours: '7 Hours' },
  { day: 'Day 2', title: 'Basic Aerial Asanas, Mounting & Grounding Techniques', hours: '7 Hours' },
  { day: 'Day 3', title: 'Asanas, Smooth Flow Transitions & Precision Alignment', hours: '7 Hours' },
  { day: 'Day 4', title: 'Anatomy, Mobility, Strength & Inversion Conditioning', hours: '7 Hours' },
  { day: 'Day 5', title: 'Supported Inversions, Aerial Pranayama & Floating Cocoon Rest', hours: '7 Hours' },
  { day: 'Day 6', title: 'Teaching Methodology, Sequencing & Practice Teaching', hours: '8 Hours' },
  { day: 'Day 7', title: 'Practical Teaching Practicum, Assessment & Certification', hours: '7 Hours' },
];

const outcomesAerial = [
  'Confidently conduct safe, beginner and intermediate Aerial Yoga classes',
  'Demonstrate, explain, and spot fundamental and suspended aerial postures',
  'Properly inspect, rig, and calibrate aerial hammocks with strict safety protocols',
  'Create structured, fluid, and engaging aerial class sequences and workshops',
  'Safely guide students into zero-gravity, zero-compression spinal inversions',
  'Offer tailored modifications, regressions, and assists for different body types',
  'Seamlessly integrate pranayama, meditation, and floating savasana into classes',
  'Expand your studio or fitness offerings with a highly sought-after aerial credential',
];

/* -------------------------------------------------------------
   SHARED FACULTY, ACCOMMODATION, FAQS, ETC.
---------------------------------------------------------------- */
const accommodation = [
  { icon: Home, label: 'Clean & Comfortable Rooms' },
  { icon: UtensilsCrossed, label: '3 Daily Pure Satvik Meals' },
  { icon: TreePine, label: 'Peaceful Yogic Environment' },
  { icon: Wifi, label: 'High-Speed Wi-Fi Access' },
];

const whyChoose = [
  { icon: Users, label: 'Experienced & Dedicated Faculty' },
  { icon: UserCheck, label: 'Small Batch Size for Personal Attention' },
  { icon: FlaskConical, label: 'Traditional Wisdom with Modern Science' },
  { icon: Hand, label: 'Hands-on Practical Training & Adjustment' },
  { icon: TreePine, label: 'Peaceful & Natural Dehradun Environment' },
  { icon: BookOpen, label: 'Comprehensive Study Material & Manuals' },
  { icon: Users2, label: 'Lifetime Learning Community & Support' },
  { icon: HeartPulse, label: 'Holistic Growth for Mind, Body & Soul' },
];

const faculty = [
  {
    name: 'Yogacharya Master Dev',
    role: 'Lead Asana & Alignment Instructor',
    exp: '12+ Years Teaching Experience',
    bio: 'Specializes in classical Hatha alignment, Vinyasa flow sequencing, and hands-on body adjustments with utmost safety and precision.',
  },
  {
    name: 'Acharya Dr. Sharma',
    role: 'Philosophy & Sutra Scholar',
    exp: '15+ Years Academic & Spiritual Study',
    bio: 'Renowned scholar with deep knowledge of Patanjali Yoga Sutras, Bhagavad Gita, and Sanskrit mantra chanting.',
  },
  {
    name: 'Dr. Neha Verma',
    role: 'Yogic Anatomy & Biomechanics Specialist',
    exp: '10+ Years Integrative Health Expertise',
    bio: 'Combines Western functional anatomy with Eastern subtle energy systems, ensuring teachers understand injury prevention and biomechanics.',
  },
];

const faqs = [
  {
    q: 'Do I need prior yoga experience to join the 200-Hour YTT?',
    a: 'No prior teaching experience is required. Our 200-Hour program is thoughtfully structured to welcome complete beginners as well as intermediate practitioners looking to establish a deep foundation and earn international certification.',
  },
  {
    q: 'What is the prerequisite for the 300-Hour Advanced YTT?',
    a: 'The 300-Hour Advanced Training is designed for teachers who have completed a 200-Hour Yoga Teacher Training Course (Yoga Alliance certified or equivalent), or dedicated practitioners with a strong, consistent foundational practice.',
  },
  {
    q: 'Do I need previous aerial experience for the 50-Hour Aerial Yoga Course?',
    a: 'No previous aerial experience is necessary! The 50-Hour Aerial course starts with hammock safety, equipment rigging, mounting, and basic supported asanas before advancing to inversions and teaching methodology.',
  },
  {
    q: 'What certifications will I receive upon graduation?',
    a: 'For the 200-Hour course, you receive a Yoga Alliance USA RYS 200 internationally recognized certificate. For the 300-Hour and 50-Hour Aerial courses, you receive official Teacher Training Certificates from Vimoksha Yogshala, recognized globally for professional teaching.',
  },
  {
    q: 'What is the difference between Residential and Non-Residential fees?',
    a: 'Non-Residential packages include full tuition, official study manuals, training kits, and certification. Residential packages additionally include comfortable accommodation (shared or private room), three daily Satvik vegetarian meals, herbal teas, and cultural excursions.',
  },
  {
    q: 'How does seat reservation work?',
    a: 'You can reserve your seat in any upcoming batch by paying a ₹5,000 booking deposit online or via UPI. The remaining course fee can be paid upon arrival at the yogshala before classes commence.',
  },
  {
    q: 'What are the food and accommodation standards at Vimoksha Yogshala?',
    a: 'We provide clean, hygienic twin-sharing or private single rooms with attached modern bathrooms, 24/7 hot water, and high-speed Wi-Fi. All meals are 100% freshly cooked, Satvik vegetarian, and prepared with organic local ingredients to support your yogic sadhana.',
  },
];

export default function TeacherTrainingPage() {
  const [selectedCourse, setSelectedCourse] = useState('200hr'); // '200hr' | '300hr' | 'aerial50hr'
  const [activeModule200, setActiveModule200] = useState(curriculum200[0].id);
  const [activeModule300, setActiveModule300] = useState(0);
  const [activeModuleAerial, setActiveModuleAerial] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const { openTrialModal } = useAppContext();

  const selectedModuleObj200 =
    curriculum200.find((m) => m.id === activeModule200) || curriculum200[0];

  return (
    <div className="bg-background font-body text-dark">
      {/* SEO metadata */}
      <SEO
        title="Yoga Teacher Training in Dehradun | 200hr, 300hr & Aerial Yoga TTC"
        description="Join Vimoksha Yogshala's Yoga Alliance certified 200-Hour, 300-Hour Advanced, and 50-Hour Aerial Yoga Teacher Training programs in Dehradun. Become a certified yoga instructor."
      />

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-primary-dark py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <LotusMark className="absolute -top-24 -left-24 w-[420px] text-white opacity-[0.07]" />
        </div>
        <div className="container-custom relative grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-soft">
              <Award className="w-4 h-4 text-secondary-light" />
              Yoga Alliance USA Certified (RYS 200) & Vimoksha Yogshala
            </div>

            <h1 className="font-heading text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Yoga Teacher Training <span className="text-secondary-light">Programs</span>
            </h1>
            <p className="mt-4 font-heading text-xl italic leading-snug text-white/90 sm:text-2xl">
              Deepen Your Practice. Awaken Your Inner Teacher. Teach Worldwide.
            </p>
            <div className="my-5 flex items-center gap-2 text-secondary">
              <span className="h-px w-10 bg-white/30" />
              <Flower2 className="h-4 w-4" />
              <span className="h-px w-10 bg-white/30" />
            </div>
            <p className="text-base leading-relaxed text-white/75 sm:text-lg">
              At Vimoksha Yogshala Dehradun, learning yoga is a transformative journey that goes far beyond physical postures. Choose from our internationally accredited certification courses taught by experienced gurus in a serene Himalayan foothills environment.
            </p>

            {/* Course Selector Buttons in Hero */}
            <div className="mt-8">
              <p className="text-xs uppercase font-bold tracking-wider text-secondary-light mb-3">
                Select Course to Explore Details:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedCourse('200hr')}
                  className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                    selectedCourse === '200hr'
                      ? 'bg-secondary text-white border-secondary shadow-elevated scale-[1.02]'
                      : 'bg-white/10 hover:bg-white/15 text-white/90 border-white/20'
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-white/80">Foundational</span>
                  <span className="text-base font-bold font-heading">200-Hour YTTC</span>
                  <span className="text-[11px] opacity-80 mt-0.5">24 Days • From ₹21,000</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedCourse('300hr')}
                  className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                    selectedCourse === '300hr'
                      ? 'bg-secondary text-white border-secondary shadow-elevated scale-[1.02]'
                      : 'bg-white/10 hover:bg-white/15 text-white/90 border-white/20'
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-white/80">Advanced Master</span>
                  <span className="text-base font-bold font-heading">300-Hour YTTC</span>
                  <span className="text-[11px] opacity-80 mt-0.5">27–30 Days • From ₹25,000</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedCourse('aerial50hr')}
                  className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                    selectedCourse === 'aerial50hr'
                      ? 'bg-secondary text-white border-secondary shadow-elevated scale-[1.02]'
                      : 'bg-white/10 hover:bg-white/15 text-white/90 border-white/20'
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-white/80">Specialization</span>
                  <span className="text-base font-bold font-heading">50-Hour Aerial</span>
                  <span className="text-[11px] opacity-80 mt-0.5">7 Days Intensive</span>
                </button>
              </div>
            </div>

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
                href="https://wa.me/919026612796?text=Hi%20Vimoksha%20Yogshala,%20I'm%20interested%20in%20the%20Yoga%20Teacher%20Training%20program."
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border-[8px] border-white/90 shadow-elevated">
              <ImageSlot
                src={
                  selectedCourse === 'aerial50hr'
                    ? '/images/offline-aerial-yoga.jpg'
                    : '/images/teacher-training/hero.webp'
                }
                alt="Yoga teacher training class in session at Vimoksha Yogshala"
                label="Teacher Training Class"
                className="w-full h-full"
              />
            </div>

            {/* Badge Overlay */}
            <div className="absolute -bottom-5 -right-2 flex h-28 w-28 flex-col items-center justify-center rounded-full border-2 border-dashed border-secondary bg-surface p-2 text-center leading-none shadow-elevated sm:-bottom-6 sm:-right-4 sm:h-32 sm:w-32">
              <ShieldCheck className="w-5 h-5 text-secondary mb-0.5" />
              <span className="text-[9px] font-semibold tracking-wide text-primary-dark uppercase">
                {selectedCourse === '200hr' ? 'Yoga Alliance' : 'Vimoksha'}
              </span>
              <span className="my-0.5 font-heading text-xl sm:text-2xl font-bold text-primary">
                {selectedCourse === '200hr' ? 'RYS 200' : selectedCourse === '300hr' ? '300-HR' : '50-HR'}
              </span>
              <span className="text-[9px] font-semibold tracking-wide text-primary-dark uppercase">
                Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY / PROMINENT TAB BAR */}
      <div className="sticky top-16 z-30 bg-surface/95 backdrop-blur-md border-b border-border shadow-xs">
        <div className="container-custom py-3">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar">
            <button
              type="button"
              onClick={() => setSelectedCourse('200hr')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCourse === '200hr'
                  ? 'bg-primary text-white shadow-soft'
                  : 'bg-background hover:bg-surface text-muted border border-border'
              }`}
            >
              <Award className="w-4 h-4" />
              200-Hour Yoga TTC (RYS 200)
            </button>

            <button
              type="button"
              onClick={() => setSelectedCourse('300hr')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCourse === '300hr'
                  ? 'bg-primary text-white shadow-soft'
                  : 'bg-background hover:bg-surface text-muted border border-border'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              300-Hour Advanced YTTC
            </button>

            <button
              type="button"
              onClick={() => setSelectedCourse('aerial50hr')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCourse === 'aerial50hr'
                  ? 'bg-primary text-white shadow-soft'
                  : 'bg-background hover:bg-surface text-muted border border-border'
              }`}
            >
              <Activity className="w-4 h-4" />
              50-Hour Aerial Yoga TTC
            </button>
          </div>
        </div>
      </div>

      {/* =============================================================
          COURSE TAB 1: 200-HOUR YOGA TEACHER TRAINING
      ============================================================= */}
      {selectedCourse === '200hr' && (
        <div>
          {/* 200hr Overview Stats Strip */}
          <section className="bg-primary/5 border-b border-border py-8">
            <div className="container-custom">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="bg-surface p-4 rounded-xl border border-border text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">Duration</span>
                  <span className="text-base font-bold text-primary-dark">24 Days</span>
                </div>
                <div className="bg-surface p-4 rounded-xl border border-border text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">Level</span>
                  <span className="text-base font-bold text-primary-dark">Beginner to Interm.</span>
                </div>
                <div className="bg-surface p-4 rounded-xl border border-border text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">Yoga Style</span>
                  <span className="text-base font-bold text-primary-dark">Hatha & Ashtanga</span>
                </div>
                <div className="bg-surface p-4 rounded-xl border border-border text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">Language</span>
                  <span className="text-base font-bold text-primary-dark">Hindi + English</span>
                </div>
                <div className="bg-surface p-4 rounded-xl border border-border text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">Batches</span>
                  <span className="text-base font-bold text-primary-dark">1st–24th Monthly</span>
                </div>
                <div className="bg-surface p-4 rounded-xl border border-primary/30 text-center bg-primary/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">Starting Fee</span>
                  <span className="text-base font-bold text-primary">₹ 21,000/-</span>
                </div>
              </div>
            </div>
          </section>

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
                    const isActive = module.id === activeModule200;
                    return (
                      <button
                        key={module.id}
                        type="button"
                        onClick={() => setActiveModule200(module.id)}
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
                      {selectedModuleObj200.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                      {selectedModuleObj200.desc}
                    </p>

                    <div className="my-6 h-px bg-border" />

                    <h4 className="font-semibold text-dark text-sm mb-3">
                      Key Topics Covered:
                    </h4>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {selectedModuleObj200.highlights.map((item) => (
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
                      <span className="relative z-10 mt-1.5 w-3 h-3 rounded-full ring-4 ring-surface shrink-0 bg-primary" />
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                        <span className="text-xs font-bold text-primary-dark sm:w-36 sm:shrink-0">
                          {time}
                        </span>
                        <span className="text-xs sm:text-sm text-dark">{activity}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted bg-background border border-border rounded-lg px-3 py-2 flex items-start gap-2 mt-auto">
                  <Info className="w-4 h-4 shrink-0 mt-0.5 text-secondary" />
                  Schedule may slightly adapt on special excursion days, workshops & outdoor Ganga sessions.
                </p>
              </Panel>

              {/* Certification Card & Packages */}
              <div className="flex flex-col gap-6">
                <Panel className="flex flex-col gap-5 border-2 border-primary/20">
                  <RibbonLabel icon={Award}>Certification</RibbonLabel>

                  {/* Certificate Preview Card */}
                  <div className="border-2 border-dashed border-primary-light/50 rounded-xl p-5 text-center bg-background relative overflow-hidden">
                    <Flower2 className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-heading text-xl text-dark font-semibold">200-Hour Certificate of Completion</p>
                    <p className="text-xs text-muted mt-1">Conferred upon fulfilling all criteria of</p>
                    <p className="font-heading italic text-primary-dark text-lg font-semibold my-1">
                      Yoga Alliance USA (RYS 200)
                    </p>
                    <p className="text-xs text-muted">
                      Eligible to register worldwide as a Registered Yoga Teacher (RYT 200).
                    </p>
                    <div className="mt-3 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] font-semibold text-dark">
                      <span>Vimoksha Yogshala, Dehradun</span>
                      <span className="text-secondary font-bold">RYS 200 Certified</span>
                    </div>
                  </div>

                  <h4 className="font-semibold text-sm text-dark">What's Included in 200-Hour Course:</h4>
                  <div className="grid sm:grid-cols-2 gap-2 text-xs text-dark">
                    {[
                      '200 Hours In-Person Training',
                      'Yoga Alliance RYS 200 Certificate',
                      'Official Course Manuals & Books',
                      'Yoga Mat & Cleansing Kit (Jala Neti)',
                      'Hands-on Adjustments Practicum',
                      'Excursions & Spiritual Outings',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 bg-background p-2 rounded-lg border border-border">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </Panel>

                {/* Course Fees Breakdown */}
                <Panel className="flex flex-col gap-4 border-2 border-primary/30 relative">
                  <div className="absolute -top-3 right-5 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-soft">
                    Best Value
                  </div>
                  <RibbonLabel tone="light">200-Hour Pricing Options</RibbonLabel>

                  <div className="flex flex-col divide-y divide-border">
                    <div className="flex items-center justify-between py-2.5">
                      <div>
                        <p className="text-sm font-bold text-dark">Non-Residential Course Fee</p>
                        <p className="text-xs text-muted">Tuition, manuals, kit & certification</p>
                      </div>
                      <p className="text-xl font-bold text-primary">₹ 21,000/-</p>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                      <div>
                        <p className="text-sm font-bold text-dark">Early Bird Residential</p>
                        <p className="text-xs text-emerald-700 font-semibold">Includes stay & 3 Satvik meals</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary">₹ 42,000/-</p>
                        <p className="text-xs text-muted line-through">₹ 50,000</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between py-2.5">
                      <div>
                        <p className="text-sm font-semibold text-dark">Seat Booking Deposit</p>
                        <p className="text-xs text-muted">Reserve seat, balance on arrival</p>
                      </div>
                      <p className="text-base font-bold text-secondary">₹ 5,000/-</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={openTrialModal}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark transition-colors text-white font-semibold px-6 py-3 rounded-full shadow-soft text-sm mt-2"
                  >
                    Enroll / Reserve 200-Hour Seat <Flower2 className="w-4 h-4" />
                  </button>
                </Panel>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* =============================================================
          COURSE TAB 2: 300-HOUR ADVANCED YOGA TEACHER TRAINING
      ============================================================= */}
      {selectedCourse === '300hr' && (
        <div>
          {/* 300hr Overview Stats Strip */}
          <section className="bg-primary/5 border-b border-border py-8">
            <div className="container-custom">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="bg-surface p-4 rounded-xl border border-border text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">Duration</span>
                  <span className="text-base font-bold text-primary-dark">27–30 Days</span>
                </div>
                <div className="bg-surface p-4 rounded-xl border border-border text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">Level</span>
                  <span className="text-base font-bold text-primary-dark">Advanced</span>
                </div>
                <div className="bg-surface p-4 rounded-xl border border-border text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">Training</span>
                  <span className="text-base font-bold text-primary-dark">300 Hours</span>
                </div>
                <div className="bg-surface p-4 rounded-xl border border-border text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">Yoga Style</span>
                  <span className="text-base font-bold text-primary-dark">Hatha, Ashtanga, Vinyasa</span>
                </div>
                <div className="bg-surface p-4 rounded-xl border border-border text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">Batches</span>
                  <span className="text-base font-bold text-primary-dark">Starts 1st Monthly</span>
                </div>
                <div className="bg-surface p-4 rounded-xl border border-primary/30 text-center bg-primary/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">Starting Fee</span>
                  <span className="text-base font-bold text-primary">₹ 25,000/-</span>
                </div>
              </div>
            </div>
          </section>

          {/* Intro & Why Choose 300-Hour Training */}
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
                    const isActive = idx === activeModule300;
                    return (
                      <button
                        key={module.id}
                        type="button"
                        onClick={() => setActiveModule300(idx)}
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
                      {curriculum300[activeModule300].title}
                    </h3>
                    <p className="text-muted text-sm sm:text-base mt-2 leading-relaxed">
                      {curriculum300[activeModule300].desc}
                    </p>

                    <div className="my-5 h-px bg-border" />

                    <h4 className="font-semibold text-dark text-sm mb-3">Key In-Depth Topics:</h4>
                    <ul className="grid gap-2.5">
                      {curriculum300[activeModule300].topics.map((t) => (
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
                  <p className="font-bold text-primary-dark">📜 Official Credential:</p>
                  <p className="text-muted">
                    Upon successful completion, participants receive a <strong>300-Hour Advanced Yoga Teacher Training Certificate from Vimoksha Yogshala</strong>, empowering you to teach advanced masterclasses, workshops, and retreats worldwide.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={openTrialModal}
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full text-sm shadow-soft transition-colors"
                >
                  Enroll in 300-Hour TTC <Flower2 className="w-4 h-4" />
                </button>
              </Panel>
            </div>
          </section>
        </div>
      )}

      {/* =============================================================
          COURSE TAB 3: 50-HOUR AERIAL YOGA TEACHER TRAINING
      ============================================================= */}
      {selectedCourse === 'aerial50hr' && (
        <div>
          {/* Aerial Overview Stats Strip */}
          <section className="bg-primary/5 border-b border-border py-8">
            <div className="container-custom">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="bg-surface p-4 rounded-xl border border-border text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">Duration</span>
                  <span className="text-base font-bold text-primary-dark">7 Days</span>
                </div>
                <div className="bg-surface p-4 rounded-xl border border-border text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">Contact Hours</span>
                  <span className="text-base font-bold text-primary-dark">50 Hours Intensive</span>
                </div>
                <div className="bg-surface p-4 rounded-xl border border-border text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">Level</span>
                  <span className="text-base font-bold text-primary-dark">All Levels</span>
                </div>
                <div className="bg-surface p-4 rounded-xl border border-border text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">Core Tool</span>
                  <span className="text-base font-bold text-primary-dark">Aerial Silk Hammock</span>
                </div>
                <div className="bg-surface p-4 rounded-xl border border-border text-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted block">Location</span>
                  <span className="text-base font-bold text-primary-dark">Dehradun, India</span>
                </div>
                <div className="bg-surface p-4 rounded-xl border border-primary/30 text-center bg-primary/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary block">Certification</span>
                  <span className="text-base font-bold text-primary">50-Hr Aerial TTC</span>
                </div>
              </div>
            </div>
          </section>

          {/* Aerial Intro & What You Will Be Able to Do */}
          <section className="bg-surface/60 border-b border-border py-16 md:py-20">
            <div className="container-custom">
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <RibbonLabel icon={Activity}>7-Day Intensive Specialization</RibbonLabel>
                  <h2 className="font-heading text-3xl sm:text-4xl text-dark font-semibold mt-3">
                    Move Beyond the Mat. Discover Aerial Yoga.
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
                    const isActive = idx === activeModuleAerial;
                    return (
                      <button
                        key={module.modNum}
                        type="button"
                        onClick={() => setActiveModuleAerial(idx)}
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
                      <span className="flex items-center gap-1.5"><Sparkle className="w-4 h-4" /> {curriculumAerial[activeModuleAerial].modNum}</span>
                      <span className="bg-secondary/10 px-2.5 py-0.5 rounded-full text-secondary">
                        {curriculumAerial[activeModuleAerial].hours}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl text-dark font-semibold">
                      {curriculumAerial[activeModuleAerial].title}
                    </h3>

                    <div className="my-5 h-px bg-border" />

                    <h4 className="font-semibold text-dark text-sm mb-3">Key Practical Topics:</h4>
                    <ul className="grid gap-2.5">
                      {curriculumAerial[activeModuleAerial].topics.map((t) => (
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
        </div>
      )}

      {/* =============================================================
          SHARED SECTIONS (FACULTY, STAY, WHY CHOOSE US, FAQS, CTA)
      ============================================================= */}

      {/* STAY & SATVIK FOOD */}
      <section className="bg-background py-16 md:py-20 border-b border-border">
        <div className="container-custom grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <RibbonLabel tone="light">Peaceful Ashrami Environment</RibbonLabel>
            <h2 className="font-heading text-3xl sm:text-4xl text-dark font-semibold mt-3">
              Accommodation & Satvik Nutrition
            </h2>
            <p className="text-muted text-sm leading-relaxed mt-3">
              To fully absorb yogic wisdom, one needs a peaceful, pure, and distraction-free sanctuary. Our center in Dehradun offers clean, comfortable rooms, high-speed Wi-Fi, and three daily freshly prepared Satvik vegetarian meals rich in prana.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-6">
              {accommodation.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 bg-surface p-3 rounded-xl border border-border text-xs font-medium text-dark">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted mt-5 bg-surface border border-border rounded-lg p-3">
              ℹ️ <strong>Room Types:</strong> Shared twin rooms or private single rooms with attached modern bathrooms and 24/7 hot water are available.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-3 gap-3">
            <ImageSlot
              src="/images/teacher-training/room.jpg"
              alt="Comfortable rooms at Vimoksha Yogshala"
              label="Comfortable Rooms"
              className="aspect-[3/4] rounded-2xl border border-border shadow-soft"
            />
            <ImageSlot
              src="/images/teacher-training/meal.jpeg"
              alt="Fresh Satvik meals at Vimoksha Yogshala"
              label="Satvik Meals"
              className="aspect-[3/4] rounded-2xl border border-border shadow-soft"
            />
            <ImageSlot
              src="/images/teacher-training/grounds.jpg"
              alt="Serene ashram grounds in Dehradun"
              label="Serene Grounds"
              className="aspect-[3/4] rounded-2xl border border-border shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* MEET YOUR MENTORS / FACULTY */}
      <section className="bg-surface/40 py-16 md:py-20 border-b border-border">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <RibbonLabel icon={Users}>Meet Your Mentors</RibbonLabel>
            <h2 className="font-heading text-3xl sm:text-4xl text-dark mt-3">
              Learn From Experienced Masters
            </h2>
            <p className="text-muted text-sm mt-2">
              Dedicated gurus committed to guiding your physical, mental, and spiritual evolution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {faculty.map((member) => (
              <Panel key={member.name} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary text-primary flex items-center justify-center mb-4">
                  <Users className="w-9 h-9" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-dark">{member.name}</h3>
                <p className="text-xs font-bold text-primary mt-0.5">{member.role}</p>
                <p className="text-[11px] font-semibold text-secondary mt-1 bg-secondary/10 px-3 py-1 rounded-full">
                  {member.exp}
                </p>
                <p className="text-xs text-muted mt-3 leading-relaxed">{member.bio}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US & REVIEWS */}
      <section className="bg-background py-16 md:py-20 border-b border-border">
        <div className="container-custom grid lg:grid-cols-12 gap-8 items-start">
          {/* FAQ Accordion */}
          <div className="lg:col-span-7">
            <Panel>
              <div className="flex justify-center mb-6">
                <RibbonLabel icon={Flower2}>Frequently Asked Questions</RibbonLabel>
              </div>

              <div className="flex flex-col divide-y divide-border">
                {faqs.map((item, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={item.q} className="py-2">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-4 py-3 text-left"
                      >
                        <span className="text-sm font-semibold text-dark">{item.q}</span>
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </span>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs sm:text-sm text-muted pb-4 pr-6 leading-relaxed">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </Panel>
          </div>

          {/* Why Choose Vimoksha Yogshala */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Panel>
              <div className="flex justify-center mb-6">
                <RibbonLabel>Why Choose Vimoksha Yogshala?</RibbonLabel>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {whyChoose.slice(0, 6).map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-2 bg-background p-3 rounded-xl border border-border">
                    <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span className="text-[11px] font-semibold text-dark leading-tight">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </Panel>

            {/* Testimonial Quote */}
            <Panel className="bg-primary-dark text-white border-none">
              <div className="flex items-center gap-1 text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="italic text-xs sm:text-sm leading-relaxed text-white/90">
                "Transformative experience! The teachers at Vimoksha Yogshala explain alignment and philosophy with so much clarity. I gained full confidence to teach asana classes immediately after graduating."
              </p>
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-bold">Ananya Sharma</span>
                <span className="text-secondary-light">Delhi, India</span>
              </div>
            </Panel>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-primary-dark relative overflow-hidden py-14">
        <LotusMark className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 text-white opacity-[0.06]" />
        <div className="container-custom flex flex-col lg:flex-row items-center justify-between gap-6 relative">
          <div className="text-center lg:text-left">
            <h3 className="text-white font-heading text-2xl sm:text-3xl font-semibold">
              Ready to Begin Your Yogic Transformation?
            </h3>
            <p className="text-secondary-light italic font-heading mt-1 text-base sm:text-lg">
              Reserve your seat for the upcoming Teacher Training batch in Dehradun.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/919026612796?text=Hi%20Vimoksha%20Yogshala,%20I'm%20interested%20in%20the%20Yoga%20Teacher%20Training%20program."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:opacity-90 transition-opacity text-white font-semibold text-sm px-5 py-3 rounded-full"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="flex flex-col items-start leading-tight">
                Chat on WhatsApp
                <span className="text-[10px] font-normal opacity-90">+91 9026612796</span>
              </span>
            </a>
            <a
              href="tel:+919026612796"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light transition-colors text-white font-semibold text-sm px-5 py-3 rounded-full"
            >
              <Phone className="w-4 h-4" />
              <span className="flex flex-col items-start leading-tight">
                Call Now
                <span className="text-[10px] font-normal opacity-90">+91 9026612796</span>
              </span>
            </a>
            <button
              type="button"
              onClick={openTrialModal}
              className="inline-flex items-center gap-2 bg-white text-primary-dark hover:bg-surface transition-colors font-semibold text-sm px-6 py-3 rounded-full shadow-soft"
            >
              <CalendarCheck className="w-4 h-4" />
              Enroll / Reserve Seat
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}