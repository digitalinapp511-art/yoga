import usePageMeta from '@/hooks/usePageMeta';
import { Container } from '@/components/ui';
import PathwaysSection from '@/components/sections/PathwaysSection';
import {
  HeroSection,
  Services,
  ProgramsSection,
  TestimonialsSection,
  GallerySection,
  BlogsSection,
  FAQSection,
  ContactCTASection,
} from '@/components/sections';

/* ===== Our Philosophy Section ===== */
function PhilosophySection() {
  return (
    <section className="bg-background py-8 md:py-14">
      {/* Full width 1320px to match Hero & Pathways */}
      <Container className="max-w-[1320px]">
        <div className="bg-white rounded-[28px] p-6 sm:p-8 md:p-12 border border-border shadow-soft">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-3">
              Ancient Yogic Wisdom
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-dark">
              Our <span className="text-primary">Philosophy</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Shloka 1 */}
            <div className="rounded-2xl bg-background p-6 md:p-8 border border-border/80 flex flex-col justify-between">
              <div>
                <div className="border-l-4 border-primary pl-4 mb-4">
                  <p className="font-heading text-xl md:text-2xl font-bold text-dark">
                    समत्वं योग उच्यते
                  </p>
                  <p className="text-sm italic font-medium text-primary mt-1">
                    &ldquo;Equanimity is Yoga.&rdquo;
                  </p>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-muted mt-4">
                  At Vimoksha Yogshala, we believe yoga is not just about flexibility, strength, or physical postures. It is a journey towards balance within — bringing harmony to the body, awareness to the breath, clarity to the mind, and steadiness to everyday life.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-muted mt-3">
                  Inspired by the timeless wisdom of <em>&ldquo;Samatvam Yoga Uchyate,&rdquo;</em> we see yoga as the cultivation of inner balance — learning to remain steady through both comfort and discomfort, success and failure, activity and rest.
                </p>
              </div>
            </div>

            {/* Shloka 2 */}
            <div className="rounded-2xl bg-background p-6 md:p-8 border border-border/80 flex flex-col justify-between">
              <div>
                <div className="border-l-4 border-secondary pl-4 mb-4">
                  <p className="font-heading text-xl md:text-2xl font-bold text-dark">
                    ततो द्वन्द्वानभिघातः
                  </p>
                  <p className="text-sm italic font-medium text-secondary mt-1">
                    tato dvandva-anabhighātaḥ — &ldquo;Then, one is no longer disturbed by the pairs of opposites.&rdquo;
                  </p>
                </div>
                <p className="text-sm md:text-base leading-relaxed text-muted mt-4">
                  Through consistent practice, yoga helps us develop a more stable relationship with life&apos;s changing experiences. Rather than being constantly affected by stress, discomfort, or external circumstances, we learn to respond with greater awareness, resilience, and calmness.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-muted mt-3">
                  We bring together the traditional wisdom of Asana, Pranayama, Shatkriya, Meditation, and Yoga Philosophy with a practical approach to modern wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function HomePage() {
  usePageMeta('home');
  return (
    <>
      <HeroSection />
      {/* Our Philosophy: Perfectly placed between Hero Banner and Explore Our Pathways */}
      <PhilosophySection />
      <PathwaysSection />
      <Services />
      {/* Yoga Features Section - 100% Responsive Full Width */}
      <section className="w-full overflow-hidden">
        <img
          src="/images/yoga-features.jpg"
          alt="Why Choose Us Features"
          className="w-full h-auto block"
          loading="lazy"
        />
      </section>
      <ProgramsSection />
      <TestimonialsSection />
      <GallerySection />
      <BlogsSection />
      <FAQSection />
      <ContactCTASection />
    </>
  );
}