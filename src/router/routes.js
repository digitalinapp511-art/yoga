import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import BeginnerClassesPage from '@/pages/BeginnerClassesPage';
import IntermediateClassesPage from '@/pages/IntermediateClassesPage';
import AdvanceClassesPage from '@/pages/AdvanceClassesPage';
import TherapiesPage from '@/pages/TherapiesPage';
import CoursesPage from '@/pages/CoursesPage';
import TeacherTrainingPage from '@/pages/TeacherTrainingPage';
import Ttc200Page from '@/pages/Ttc200Page';
import Ttc300Page from '@/pages/Ttc300Page';
import TtcAerialPage from '@/pages/TtcAerialPage';
import GalleryPage from '@/pages/GalleryPage';
import BlogPage from '@/pages/BlogPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';

export const navigationLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Classes',
    path: '/classes',
    children: [
      { label: 'Beginner', path: '/classes/beginner' },
      { label: 'Intermediate', path: '/classes/intermediate' },
      { label: 'Advance', path: '/classes/advance' },
    ],
  },
  {
    label: 'Teacher Training',
    path: '/teacher-training',
    children: [
      { label: '200-Hour TTC', path: '/teacher-training/200-hour' },
      { label: '300-Hour TTC', path: '/teacher-training/300-hour' },
      { label: '50-Hour Aerial TTC', path: '/teacher-training/50-hour-aerial' },
    ],
  },
  { label: 'Therapies', path: '/therapies' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Blogs', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const routeMeta = {
  home: { title: 'Home', description: 'Vimoksha Yogshala — Premium yoga & wellness in Dehradun.' },
  about: { title: 'About', description: 'Learn about Vimoksha Yogshala and our philosophy.' },
  classes: { title: 'Classes', description: 'Explore our yoga classes and schedules.' },
  classesBeginner: {
    title: 'Beginner Yoga Classes',
    description: 'Build your foundation with proper alignment, gentle breathwork, and injury-free movement.',
  },
  classesIntermediate: {
    title: 'Intermediate Yoga Classes',
    description: 'Dynamic flowing sequences, deeper breathwork, and strength-building holds.',
  },
  classesAdvance: {
    title: 'Advance Yoga Classes',
    description: 'High-intensity flows, inversions, arm balances, and peak conditioning.',
  },
  therapies: { title: 'Therapies', description: 'Yoga Therapy, Naturopathy, Acupressure and Cupping Therapy at Vimoksha Yogshala.' },
  courses: { title: 'Courses', description: 'Yoga Teacher Training Courses in Dehradun.' },
  teacherTraining: { title: 'Teacher Training', description: 'Yoga Teacher Training programs in Dehradun at Vimoksha Yogshala.' },
  ttc200: {
    title: '200-Hour Yoga Teacher Training',
    description: '200-Hour Yoga Teacher Training in Dehradun — Yoga Alliance RYS 200 certified foundational residential program.',
  },
  ttc300: {
    title: '300-Hour Advanced Yoga Teacher Training',
    description: '300-Hour Advanced Yoga Teacher Training in Dehradun — Yoga Alliance RYS 300 master certification.',
  },
  ttcAerial: {
    title: '50-Hour Aerial Yoga Teacher Training',
    description: '50-Hour Aerial Yoga Teacher Training in Dehradun — Specialized 7-day intensive silk certification.',
  },
  gallery: { title: 'Gallery', description: 'Moments from Vimoksha Yogshala.' },
  blog: { title: 'Blog', description: 'Wellness insights and yoga articles.' },
  contact: { title: 'Contact', description: 'Get in touch with Vimoksha Yogshala.' },
  notFound: { title: 'Page Not Found', description: 'The page you are looking for does not exist.' },
};

/* ===== Single source of truth: path -> page component -> meta key =====
   AppRoutes.jsx renders <Route> elements straight from this list, so
   registering a page here is the only step needed to make it live.
   Each classes and TTC page has its own dedicated view and content
   without clutter or in-page switcher buttons. */
export const appRoutes = [
  { path: '/', component: HomePage, metaKey: 'home' },
  { path: '/about', component: AboutPage, metaKey: 'about' },
  { path: '/classes/beginner', component: BeginnerClassesPage, metaKey: 'classesBeginner' },
  { path: '/classes/intermediate', component: IntermediateClassesPage, metaKey: 'classesIntermediate' },
  { path: '/classes/advance', component: AdvanceClassesPage, metaKey: 'classesAdvance' },
  { path: '/therapies', component: TherapiesPage, metaKey: 'therapies' },
  { path: '/courses', component: CoursesPage, metaKey: 'courses' },
  { path: '/teacher-training', component: Ttc200Page, metaKey: 'ttc200' },
  { path: '/teacher-training/200-hour', component: Ttc200Page, metaKey: 'ttc200' },
  { path: '/teacher-training/300-hour', component: Ttc300Page, metaKey: 'ttc300' },
  { path: '/teacher-training/50-hour-aerial', component: TtcAerialPage, metaKey: 'ttcAerial' },
  { path: '/gallery', component: GalleryPage, metaKey: 'gallery' },
  { path: '/blog', component: BlogPage, metaKey: 'blog' },
  { path: '/contact', component: ContactPage, metaKey: 'contact' },
];

export { NotFoundPage };