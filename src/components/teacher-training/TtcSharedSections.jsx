import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Flower2,
  Users,
  Plus,
  Minus,
  Star,
  MessageCircle,
  Phone,
  CalendarCheck,
  ImageIcon,
} from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import {
  accommodation,
  whyChoose,
  faculty,
  faqs,
} from '@/data/ttcData';

/* ===== Image Slot Component ===== */
export function ImageSlot({ src, alt = '', label, className = '', focus = 'center' }) {
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
export function LotusMark({ className = '' }) {
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
export function RibbonLabel({ children, tone = 'dark', icon: Icon }) {
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
export function Panel({ children, className = '' }) {
  return (
    <div
      className={`bg-surface rounded-[26px] border border-border/80 shadow-soft p-6 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

/* ===== 1. STAY & SATVIK FOOD SECTION ===== */
export function StayAndFoodSection() {
  return (
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
  );
}

/* ===== 2. MEET YOUR MENTORS / FACULTY SECTION ===== */
export function FacultyMentorsSection() {
  return (
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
  );
}

/* ===== 3. FAQS & WHY CHOOSE US SECTION ===== */
export function FaqAndWhyChooseSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
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
  );
}

/* ===== 4. BOTTOM ENROLLMENT CTA BANNER ===== */
export function BottomCtaSection({ onEnroll }) {
  return (
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
            className="inline-flex items-center gap-2 bg-[#25D366] hover:opacity-90 transition-opacity text-white font-semibold text-sm px-5 py-3 rounded-full shadow-soft"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="flex flex-col items-start leading-tight">
              Chat on WhatsApp
              <span className="text-[10px] font-normal opacity-90">+91 9026612796</span>
            </span>
          </a>
          <a
            href="tel:+919026612796"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light transition-colors text-white font-semibold text-sm px-5 py-3 rounded-full shadow-soft"
          >
            <Phone className="w-4 h-4" />
            <span className="flex flex-col items-start leading-tight">
              Call Now
              <span className="text-[10px] font-normal opacity-90">+91 9026612796</span>
            </span>
          </a>
          <button
            type="button"
            onClick={onEnroll}
            className="inline-flex items-center gap-2 bg-white text-primary-dark hover:bg-surface transition-colors font-semibold text-sm px-6 py-3 rounded-full shadow-soft"
          >
            <CalendarCheck className="w-4 h-4 text-primary" />
            Enroll / Reserve Seat
          </button>
        </div>
      </div>
    </section>
  );
}
