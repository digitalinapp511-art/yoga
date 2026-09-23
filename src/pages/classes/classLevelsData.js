import {
  IoTrendingUpOutline,
  IoBodyOutline,
  IoBulbOutline,
  IoFlashOutline,
  IoPersonOutline,
  IoSchoolOutline,
  IoHeartOutline,
  IoMedkitOutline,
  IoTrophyOutline,
  IoRibbonOutline,
  IoSpeedometerOutline,
} from 'react-icons/io5';
import { GiYinYang, GiMeditation, GiMuscleUp, GiLotus, GiWaterDrop } from 'react-icons/gi';
import { FaPersonBooth } from 'react-icons/fa6';

/* Fixed display order for the level switcher tabs */
export const levelOrder = ['beginner', 'intermediate', 'advance'];

/* ===== Single source of truth for every level's content =====
   Every classes page (Student, Professional, Adult) pulls from this
   same object so Beginner / Intermediate / Advance content always
   stays in sync no matter which page it's shown on. */
export const classLevels = {
  beginner: {
    id: 'beginner',
    label: 'Beginner',
    sectionHeading: 'Why Start With Beginner Classes',
    summary:
      "New to yoga, or coming back after time away? Beginner classes build the foundation — proper alignment, steady breathing, and the confidence to move into a fuller practice at your own pace.",
    benefits: [
      {
        title: 'No Experience Needed',
        description: 'Every posture is introduced from the ground up — you never need to have set foot on a mat before.',
        icon: IoPersonOutline,
      },
      {
        title: 'Full Alignment Cues',
        description: 'Instructors walk through exactly where your hands, feet, and hips go, so nothing is left to guesswork.',
        icon: IoSchoolOutline,
      },
      {
        title: 'Slower, Steadier Pace',
        description: 'Poses are held longer and transitions are gentle, giving your body time to learn each shape properly.',
        icon: IoHeartOutline,
      },
      {
        title: 'Modified for You',
        description: 'Adjustments and props are offered freely for tighter hips, stiff shoulders, or old injuries.',
        icon: IoMedkitOutline,
      },
    ],
    styles: [
      {
        title: 'Hatha Yoga',
        description: 'The most basic yoga postures, paired with breathing and relaxation techniques — the natural starting point.',
        icon: GiLotus,
      },
      {
        title: 'Iyengar Yoga',
        description: 'Precise alignment with blocks, straps, and blankets, so correct form comes before difficulty.',
        icon: FaPersonBooth,
      },
      {
        title: 'Restorative Yoga',
        description: 'Gentle, passive poses held for longer stretches — soothing for a nervous system new to slowing down.',
        icon: GiWaterDrop,
      },
    ],
    classIncludes: [
      'Foundational Asana Practice',
      'Breathing Basics (Pranayam)',
      'Guided Relaxation',
      'Posture & Alignment Coaching',
      'Beginner-friendly Meditation',
      'Modifications & Props',
    ],
    batchTimings: ['6:00 – 7:00 AM', '8:00 – 9:00 AM', '4:30 – 5:30 PM'],
    batches: {
      offline: {
        title: 'Offline Studio Batches',
        tag: 'In-Studio (Dehradun)',
        subtitle: 'Vimoksha Yogshala Studio, Dehradun',
        days: 'Monday to Saturday',
        slots: [
          { time: '6:00 AM – 7:00 AM', label: 'Morning Foundation' },
          { time: '8:00 AM – 9:00 AM', label: 'Morning Alignment' },
          { time: '4:30 PM – 5:30 PM', label: 'Evening Gentle Flow' },
        ],
        features: [
          'Hands-on physical posture & alignment corrections',
          'Studio mats, bolsters, and yoga blocks provided',
          'Quiet, serene Himalayan studio environment',
        ],
      },
      online: {
        title: 'Online Live Batches',
        tag: 'Live 2-Way Interactive',
        subtitle: 'Live Stream via Zoom / Google Meet',
        days: 'Monday to Saturday',
        slots: [
          { time: '6:30 AM – 7:30 AM', label: 'Morning Live Cohort' },
          { time: '8:00 AM – 9:00 AM', label: 'Morning Breathwork & Flow' },
          { time: '5:30 PM – 6:30 PM', label: 'Evening Relaxation & Asana' },
        ],
        features: [
          'Real-time instructor corrections via 2-way HD video',
          'Practice comfortably from home anywhere in the world',
          'Interactive Q&A and guided Pranayam support',
        ],
      },
    },
    gallery: [
      { src: '/images/offline-studio-stretch.jpeg', alt: 'Beginner practicing a seated stretch in the studio' },
      { src: '/images/home-side-stretch.jpg', alt: 'Instructor guiding a new student through a standing side stretch' },
      { src: '/images/offline-park-session.jpeg', alt: 'Beginner-friendly outdoor session in the park' },
    ],
  },

  intermediate: {
    id: 'intermediate',
    label: 'Intermediate',
    sectionHeading: 'What Changes at This Level',
    summary:
      "Comfortable with the fundamentals and ready for more? Intermediate classes raise the pace with flowing sequences, longer holds, and deeper breathwork — building real strength session by session.",
    benefits: [
      {
        title: 'Longer Holds',
        description: 'Postures are held further into the breath, building real strength and stamina instead of just form.',
        icon: IoTrendingUpOutline,
      },
      {
        title: 'Flowing Sequences',
        description: 'Poses connect through breath-led transitions rather than isolated holds, raising the pace and challenge.',
        icon: IoBodyOutline,
      },
      {
        title: 'Deeper Focus Work',
        description: 'Meditation and pranayama sessions extend, sharpening concentration alongside the physical practice.',
        icon: IoBulbOutline,
      },
      {
        title: 'Real Conditioning',
        description: 'Classes are built to leave you stronger week over week, not just more flexible.',
        icon: IoFlashOutline,
      },
    ],
    styles: [
      {
        title: 'Ashtanga & Vinyasa Yoga',
        description: 'Flowing sequences that connect breath with movement through a continuous, more dynamic series of poses.',
        icon: GiYinYang,
      },
      {
        title: 'Chakra Yoga',
        description: 'Physical postures, breathing, and meditation combined to work with subtler energy through the body.',
        icon: GiMeditation,
      },
    ],
    classIncludes: [
      'Vinyasa & Ashtanga Flow',
      'Extended Pranayam',
      'Bandha & Breath Control',
      'Deeper Meditation Practice',
      'Strength-building Holds',
      'Yog Nidra',
    ],
    batchTimings: ['7:00 – 8:00 AM', '5:00 – 6:00 PM', '6:30 – 7:30 PM'],
    batches: {
      offline: {
        title: 'Offline Studio Batches',
        tag: 'In-Studio (Dehradun)',
        subtitle: 'Vimoksha Yogshala Studio, Dehradun',
        days: 'Monday to Saturday',
        slots: [
          { time: '7:00 AM – 8:00 AM', label: 'Morning Vinyasa Flow' },
          { time: '5:00 PM – 6:00 PM', label: 'Evening Dynamic Practice' },
          { time: '6:30 PM – 7:30 PM', label: 'Sunset Strength & Holds' },
        ],
        features: [
          'Direct physical assists and dynamic sequence coaching',
          'Deep breath synchronization and bandha work',
          'Access to all studio training equipment & props',
        ],
      },
      online: {
        title: 'Online Live Batches',
        tag: 'Live 2-Way Interactive',
        subtitle: 'Live Stream via Zoom / Google Meet',
        days: 'Monday to Saturday',
        slots: [
          { time: '7:00 AM – 8:00 AM', label: 'Morning Ashtanga Series' },
          { time: '6:00 PM – 7:00 PM', label: 'Evening Flow & Conditioning' },
          { time: '7:30 PM – 8:30 PM', label: 'Night Chakra & Yog Nidra' },
        ],
        features: [
          'Multi-angle master demonstration & real-time cueing',
          'Progressive stamina building for working professionals',
          'Interactive personal posture check and advice',
        ],
      },
    },
    gallery: [
      { src: '/images/home-downdog-adjustment.jpg', alt: 'Instructor guiding a student through a flowing transition' },
      { src: '/images/corporate-warrior-pose.webp', alt: 'Group holding Warrior pose through a longer flow' },
      { src: '/images/offline-warrior-pose.jpg', alt: 'Studio class deepening a standing pose' },
    ],
  },

  advance: {
    id: 'advance',
    label: 'Advance',
    sectionHeading: 'What Defines This Level',
    summary:
      "For practitioners with an established foundation. Advance classes move fast, go deep into backbends and inversions, and assume your alignment is already solid — this is where strength and years of practice meet.",
    benefits: [
      {
        title: 'Fast, Dynamic Flows',
        description: 'Sequences move quickly, chaining challenging postures with minimal rest between them.',
        icon: IoFlashOutline,
      },
      {
        title: 'Inversions & Backbends',
        description: 'Deeper backbends, arm balances, and inversions are practiced with an established base of strength.',
        icon: IoTrophyOutline,
      },
      {
        title: 'Minimal Cueing',
        description: 'Instructors trust your form and focus corrections on refinement, not fundamentals.',
        icon: IoRibbonOutline,
      },
      {
        title: 'Peak Conditioning',
        description: 'Built for practitioners training for stamina, competition-level flexibility, or teaching certification.',
        icon: IoSpeedometerOutline,
      },
    ],
    styles: [
      {
        title: 'Power Yoga',
        description: 'A high-intensity style inspired by Ashtanga, built to develop strength and endurance through a vigorous, fast-paced practice.',
        icon: GiMuscleUp,
      },
      {
        title: 'Ashtanga Vinyasa Advanced',
        description: 'Rigorous dynamic series with rapid transitions, jump-backs, and advanced breath-synchronized movement.',
        icon: GiYinYang,
      },
      {
        title: 'Kundalini & Kriya Practice',
        description: 'Intense breath retention, bandhas (energy locks), and kriyas aimed at mastering subtler prana and endurance.',
        icon: GiMeditation,
      },
    ],
    classIncludes: [
      'Advanced Asana Sequences',
      'Arm Balances & Inversions',
      'Deep Backbends',
      'High-intensity Vinyasa Flow',
      'Advanced Pranayam',
      'Teaching-level Alignment Detail',
    ],
    batchTimings: ['5:30 – 7:00 AM', '10:00 – 11:00 AM', '6:00 – 7:30 PM'],
    batches: {
      offline: {
        title: 'Offline Studio Batches',
        tag: 'In-Studio (Dehradun)',
        subtitle: 'Vimoksha Yogshala Studio, Dehradun',
        days: 'Monday to Saturday',
        slots: [
          { time: '5:30 AM – 7:00 AM', label: 'Early Intensive (90 Mins)' },
          { time: '10:00 AM – 11:00 AM', label: 'Mid-Day Mastery & Inversions' },
          { time: '6:00 PM – 7:30 PM', label: 'Evening Peak Practice (90 Mins)' },
        ],
        features: [
          'Rope walls, inversion spotting, and arm balance drills',
          'Intensive direct training under Yogacharya Gyan Prakash',
          'Advanced classical kriyas and meditative immersion',
        ],
      },
      online: {
        title: 'Online Live Batches',
        tag: 'Live 2-Way Interactive',
        subtitle: 'Live Stream via Zoom / Google Meet',
        days: 'Monday to Saturday',
        slots: [
          { time: '6:00 AM – 7:15 AM', label: 'Early Morning Advanced Flow' },
          { time: '6:30 PM – 7:45 PM', label: 'Intensive Dynamic Sequence' },
          { time: '8:00 PM – 9:00 PM', label: 'Kriya, Bandha & Advanced Pranayam' },
        ],
        features: [
          'Step-by-step biomechanical breakdown of complex asanas',
          'Live coaching on joint safety during advanced inversions',
          'Dedicated international practitioners cohort',
        ],
      },
    },
    gallery: [
      { src: '/images/offline-aerial-yoga.jpg', alt: 'Advanced student practicing aerial yoga' },
      { src: '/images/corporate-studio-group.jpg', alt: 'Group deep in an advanced sequence in the studio' },
      { src: '/images/home-partner-boat-pose.jpg', alt: 'Instructor assisting an advanced partner pose' },
    ],
  },
};