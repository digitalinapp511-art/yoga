import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui';
import { useState } from 'react';
import { Star, ExternalLink, Quote } from 'lucide-react';

/* ===== Animation variants ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
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

/* Points to Vimoksha Yogshala's Google Maps listing, where visitors can
   tap "Write a review". Once you have your Google Business Profile's
   short review link (Business Profile > Ask for reviews > Share link),
   swap it in here for a more direct one-click experience. */
const GOOGLE_REVIEW_URL =
  'https://www.google.com/maps/search/?api=1&query=Vimoksha+Yogshala+27+Mohit+Nagar+GMS+Road+Dehradun';

const STARTER_REVIEWS = [
  {
    id: 'seed-1',
    name: 'Ananya Sharma',
    role: 'Hatha Yoga Student',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    message:
      'The instructors genuinely care about how you progress. I went from a complete beginner to feeling confident in a few months.',
  },
  {
    id: 'seed-2',
    name: 'Rohit Verma',
    role: 'Morning Batch Student',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    message:
      'Friendly staff, clean facility, and a schedule that actually works around my job. Would recommend to anyone starting out.',
  },
  {
    id: 'seed-3',
    name: 'Priya Nair',
    role: 'Yoga Therapy Student',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    message:
      'Small batch sizes mean the teacher actually corrects your form. Best decision I made this year.',
  },
  {
    id: 'seed-4',
    name: 'Karan Mehta',
    role: 'TTC 200-Hour Graduate',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    message:
      'Great variety of classes and the teacher training program is genuinely thorough and well structured.',
  },
];

/* ===== Star rating input ===== */
function StarRatingInput({ value, onChange }) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex items-center gap-1" role="radiogroup" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = (hovered || value) >= star;
        return (
          <button
            key={star}
            type="button"
            role="radio"
            aria-checked={value === star}
            aria-label={`${star} star${star > 1 ? 's' : ''}`}
            onClick={() => onChange(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            className="p-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            <Star
              size={26}
              className={
                filled
                  ? 'fill-secondary text-secondary transition-colors'
                  : 'fill-transparent text-muted/50 transition-colors'
              }
              strokeWidth={1.5}
            />
          </button>
        );
      })}
    </div>
  );
}

/* ===== Static star display (read-only) ===== */
function StarDisplay({ rating }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={
            star <= rating
              ? 'fill-secondary text-secondary drop-shadow-[0_1px_3px_rgba(246,145,22,0.35)]'
              : 'fill-transparent text-border'
          }
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

/* ===== Review card ===== */
function ReviewCard({ review }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      layout
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="group relative flex h-full flex-col justify-between rounded-[24px] border border-border/80 bg-white p-6 sm:p-7 shadow-soft transition-all duration-300 hover:border-secondary/40 hover:shadow-card"
    >
      {/* Top Header: Star rating + Elegant Quote Badge */}
      <div className="flex items-center justify-between mb-4">
        <StarDisplay rating={review.rating} />
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
          <Quote size={15} className="rotate-180" />
        </div>
      </div>

      {/* Review text */}
      <p className="flex-1 font-body text-sm leading-relaxed text-dark/80 italic mb-6">
        &ldquo;{review.message}&rdquo;
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
              {review.role || 'Verified Student'}
            </span>
          </div>
        </div>

        {/* Small Verified Badge */}
        <div className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50/90 px-2.5 py-1 rounded-full border border-emerald-200/60">
          <span className="text-xs">✓</span>
          <span>Verified</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ===== Review submission form ===== */
function ReviewForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !message.trim() || rating === 0) {
      setError('Please add your name, a rating, and a short review before sending.');
      return;
    }

    onSubmit({
      id: `review-${Date.now()}`,
      name: name.trim(),
      rating,
      message: message.trim(),
      role: 'Student Practitioner',
      avatar: '',
    });

    setName('');
    setRating(0);
    setMessage('');
    setError('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-[24px] border border-border/80 bg-white p-6 sm:p-7 shadow-soft"
    >
      <div>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary">
          Your Feedback Matters
        </span>
        <h3 className="font-heading text-2xl font-bold text-dark mt-1">Share your experience</h3>
        <p className="mt-1 text-xs leading-relaxed text-muted">
          Your review will appear in the list below.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="review-name" className="text-sm font-medium text-dark">
          Your name
        </label>
        <input
          id="review-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          className="rounded-xl border border-dark/10 bg-background/50 px-4 py-2.5 text-sm text-dark placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-dark">Your rating</span>
        <StarRatingInput value={rating} onChange={setRating} />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="review-message" className="text-sm font-medium text-dark">
          Your review
        </label>
        <textarea
          id="review-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what stood out about your experience..."
          rows={4}
          className="resize-none rounded-xl border border-dark/10 bg-background/50 px-4 py-2.5 text-sm text-dark placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
        />
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <AnimatePresence>
        {submitted && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-100"
          >
            ✓ Thanks! Your review has been posted.
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-body text-xs font-bold uppercase tracking-wider text-white shadow-soft transition-all duration-300 hover:bg-primary-dark hover:shadow-card"
      >
        Submit review
      </button>
    </form>
  );
}

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState(STARTER_REVIEWS);

  function handleNewReview(review) {
    setReviews((prev) => [review, ...prev]);
  }

  return (
    <section id="testimonials" className="bg-background py-[120px]">
      <Container className="max-w-[1320px]">
        {/* ===== Section Heading ===== */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-14 flex max-w-[700px] flex-col items-center gap-0 text-center"
        >
          <span className="inline-block rounded-full border border-secondary/35 bg-white/80 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-primary shadow-soft backdrop-blur-sm mb-4">
            Testimonials & Love
          </span>

          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl font-semibold leading-tight text-dark md:text-5xl"
          >
            What Our Students
            <br />
            <span className="text-primary">Say About Us</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-[640px] text-base leading-relaxed text-muted md:text-lg"
          >
            Read what students are saying, or leave a review of your own.
          </motion.p>

          <motion.a
            variants={fadeUp}
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-dark shadow-soft transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-card"
          >
            Leave us a review on Google
            <ExternalLink size={15} strokeWidth={2} className="text-secondary" />
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_400px]">
          {/* ===== Review cards (2x2 grid) ===== */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            <AnimatePresence>
              {reviews.slice(0, 4).map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* ===== Manual review submission form ===== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
          >
            <ReviewForm onSubmit={handleNewReview} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}