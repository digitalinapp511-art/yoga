import { useState } from 'react';
import { motion } from 'framer-motion';
import usePageMeta from '@/hooks/usePageMeta';
import { Container, Button } from '@/components/ui';
import { api } from '@/lib/api';
import { HiArrowRight } from 'react-icons/hi2';
import { GiLotus } from 'react-icons/gi';
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
  IoTimeOutline,
  IoCheckmarkCircle,
} from 'react-icons/io5';

/* ===== Animation variants ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

/* ===== Contact details — two studio locations ===== */
const locations = [
  {
    name: 'GMS Road',
    address:
      '27, Main Lane, Mohit Nagar, Opp. Wadia Institute, GMS Road, Dehradun, Uttarakhand 248001',
    phone: '+91 90266 12796',
    phoneHref: 'tel:+919026612796',
  },
  {
    name: 'Dalanwala',
    address:
      '10A, Inder Road, Dalanwala, Euro Kids School Campus, Near Nanhi Duniya School, Dehradun, Uttarakhand',
    phone: '7351317975',
    phoneHref: 'tel:7351317975',
  },
];

// Kept for the mailto: fallback in handleSubmit and as the primary studio
// address referenced elsewhere on the page.
const ADDRESS = locations[0].address;

const contactCards = [
  {
    title: 'Visit Us',
    icon: IoLocationOutline,
    lines: locations.map((loc) => `${loc.name} — ${loc.address}`),
  },
  {
    title: 'Call Us',
    icon: IoCallOutline,
    lines: locations.map((loc) => `${loc.name} — ${loc.phone}`),
    hrefs: locations.map((loc) => loc.phoneHref),
  },
  {
    title: 'Mail Us',
    icon: IoMailOutline,
    lines: ['info@vimokshayogshala.in', 'vimokshayogshala@gmail.com'],
    hrefs: ['mailto:info@vimokshayogshala.in', 'mailto:vimokshayogshala@gmail.com'],
  },
  {
    title: 'Opening Hours',
    icon: IoTimeOutline,
    lines: ['Mon – Fri : 5:00 AM – 8:00 PM', 'Saturday : 5:00 AM – 12:00 PM'],
  },
];

export default function ContactPage() {
  usePageMeta('contact');

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status.message) setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name and phone number.' });
      return;
    }

    setSubmitting(true);
    try {
      await api.createBooking({
        name: form.name,
        phone: form.phone,
        email: form.email,
        preferredBatch: 'General Contact',
        message: form.message,
      });

      setStatus({
        type: 'success',
        message: "Thank you for reaching out! Your message has been sent, and we'll contact you shortly.",
      });
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or call us directly.',
      });
    }
    setSubmitting(false);
  };

  return (
    <div data-page="contact">
      {/* ===== 1. Hero Banner (Framed Luxury Sanctuary Aesthetic) ===== */}
      <section className="relative overflow-hidden bg-background pt-[115px] pb-12 sm:pt-[135px] sm:pb-16 md:pt-[145px] md:pb-20">
        {/* Subtle ambient decorative lighting */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

        <Container className="max-w-[1320px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
            {/* Left Column: Text Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start"
            >
              {/* Badge */}
              <motion.div variants={fadeUp} className="mb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/8 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                  <GiLotus className="text-sm text-primary" />
                  <span>Get In Touch • Welcome to Vimoksha</span>
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={fadeUp}
                className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[54px] leading-[1.15] tracking-tight text-dark"
              >
                Let's Start Your <span className="italic text-primary">Sacred Journey</span> Together
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="mt-5 text-sm sm:text-base md:text-lg font-normal leading-relaxed text-muted max-w-xl"
              >
                Visit our Dehradun studios, call us, or send a message — our master teachers and team are here to help you choose the right yoga practice, therapy, or teacher training path.
              </motion.p>

              {/* Feature Highlights Pills */}
              <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2.5">
                {[
                  '2 Studios: GMS Road & Dalanwala',
                  'Personalized Consultation',
                  'Open 6 Days a Week',
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-medium text-dark shadow-xs border border-border/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </span>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4"
              >
                <motion.a
                  href="#contact-form"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-white shadow-soft transition-all hover:bg-primary-dark hover:shadow-elevated"
                >
                  Send a Message <HiArrowRight className="h-4 w-4" />
                </motion.a>

                <motion.a
                  href="tel:+919026612796"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-white px-6 text-sm font-semibold text-dark shadow-xs transition-all hover:border-primary hover:text-primary"
                >
                  <IoCallOutline className="text-base text-primary" />
                  Call: +91 90266 12796
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column: Framed Luxury Hero Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative w-full"
            >
              {/* Decorative accent ring */}
              <div className="pointer-events-none absolute -left-4 -top-4 -z-10 h-28 w-28 rounded-full border border-secondary/30" />

              {/* Main Photo Frame */}
              <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] border-[8px] sm:border-[10px] border-white bg-white shadow-elevated">
                <img
                  src="/images/contact/contact-hero.jpg"
                  alt="Vimoksha Yogshala sanctuary reception and welcoming wellness hall in Dehradun"
                  fetchPriority="high"
                  className="h-[340px] sm:h-[410px] md:h-[450px] lg:h-[480px] w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-dark/20 to-transparent pointer-events-none" />

                {/* Floating Tagline & Quote Overlay */}
                <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                  <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-[11px] uppercase tracking-wider font-bold text-white border border-white/30 mb-2">
                    Dehradun Sanctuaries
                  </span>
                  <p className="font-heading text-base sm:text-lg italic font-medium text-white drop-shadow-md leading-snug">
                    &ldquo;A sacred, welcoming space dedicated to your peace, health &amp; liberation.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ===== Contact cards ===== */}
      <section className="bg-white pb-[40px] md:pb-[60px]">
        <Container className="max-w-[1320px]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="flex flex-col items-center gap-3 rounded-[24px] border border-border bg-white p-7 text-center shadow-soft transition-shadow duration-300 hover:shadow-elevated"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-dark">
                    {card.title}
                  </h3>
                  <div className="flex flex-col gap-1">
                    {card.lines.map((line, i) =>
                      card.href || card.hrefs ? (
                        <a
                          key={line}
                          href={card.hrefs ? card.hrefs[i] : card.href}
                          className="text-sm leading-relaxed text-muted transition-colors hover:text-primary"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="text-sm leading-relaxed text-muted">
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* ===== Map + Form ===== */}
      <section className="bg-background py-[60px] md:py-[100px]">
        <Container className="max-w-[1320px]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch"
          >
            {/* Maps — one per location */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              {locations.map((loc) => (
                <div key={loc.name}>
                  <h3 className="mb-2 font-heading text-sm font-semibold uppercase tracking-wide text-dark">
                    {loc.name}
                  </h3>
                  <div className="overflow-hidden rounded-[28px] border border-border shadow-soft min-h-[200px] sm:min-h-[280px]">
                    <iframe
                      title={`Vimoksha Yogshala — ${loc.name} studio location`}
                      src={`https://www.google.com/maps?q=${encodeURIComponent(
                        loc.address
                      )}&output=embed`}
                      className="h-full w-full min-h-[200px] sm:min-h-[280px]"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div
              id="contact-form"
              variants={fadeUp}
              className="scroll-mt-28 rounded-[28px] border border-border bg-white p-8 shadow-soft md:p-10"
            >
              <h2 className="font-heading text-xl font-semibold text-dark sm:text-2xl md:text-3xl">
                Send a Message
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Fill this in and we'll get back to you — or it'll open your
                email app with everything prefilled.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-body text-xs font-semibold uppercase tracking-wide text-muted">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-dark outline-none transition-colors focus:border-primary"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="font-body text-xs font-semibold uppercase tracking-wide text-muted">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-dark outline-none transition-colors focus:border-primary"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-body text-xs font-semibold uppercase tracking-wide text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com (optional)"
                    className="rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-dark outline-none transition-colors focus:border-primary"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-body text-xs font-semibold uppercase tracking-wide text-muted">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're looking for — class type, timing, experience level..."
                    className="resize-none rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-dark outline-none transition-colors focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  variant="primary"
                  size="lg"
                  icon={<HiArrowRight className="h-4 w-4" />}
                  className="mt-2 h-[56px] rounded-full px-8 text-base disabled:opacity-60"
                >
                  {submitting ? 'Sending…' : 'Send Message'}
                </Button>

                {status.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 text-sm font-medium ${
                      status.type === 'error' ? 'text-red-600' : 'text-primary'
                    }`}
                  >
                    <IoCheckmarkCircle className="h-4 w-4 shrink-0" />
                    {status.message}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}