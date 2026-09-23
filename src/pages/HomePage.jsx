import usePageMeta from '@/hooks/usePageMeta';
import { Container } from '@/components/ui';
import PathwaysSection from '@/components/sections/PathwaysSection';
import { Link } from 'react-router-dom';
import {
  HeroSection,
  WhyChooseUs,
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
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
            <span className="inline-block rounded-full border border-secondary/30 bg-secondary/5 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-3">
              Ancient Yogic Wisdom
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-dark">
              Our <span className="text-primary">Philosophy</span>
            </h2>
          </div>

          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column: Photo matching the exact height & size of the shlok card */}
            <div className="overflow-hidden rounded-[24px] border border-border/80 shadow-xs bg-background h-full min-h-[350px] sm:min-h-[400px]">
              <img
                src="/images/abouthome.jpg"
                alt="Yogacharya Gyan Prakash at Vimoksha Yogshala"
                className="w-full h-full object-cover object-center block"
                loading="lazy"
              />
            </div>

            {/* Right Column: Single Shlok + About Us CTA Button */}
            <div className="h-full">
              <div className="rounded-[24px] bg-background p-7 sm:p-8 md:p-10 border border-border/80 shadow-xs h-full flex flex-col justify-between">
                <div>
                  <div className="border-l-4 border-primary pl-4 mb-5">
                    <span className="inline-block rounded-full bg-primary/10 text-primary px-3.5 py-1 text-xs font-semibold uppercase tracking-wider mb-2">
                      Core Yogic Philosophy
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-dark tracking-wide">
                      समत्वं योग उच्यते
                    </h3>
                    <p className="text-sm sm:text-base italic font-medium text-primary mt-1.5">
                      samatvaṁ yoga ucyate — &ldquo;Equanimity is Yoga.&rdquo;
                    </p>
                  </div>

                  <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-muted">
                    <p>
                      At Vimoksha Yogshala, we believe yoga is not just about flexibility, strength, or physical postures. It is a journey towards balance within — bringing harmony to the body, awareness to the breath, clarity to the mind, and steadiness to everyday life.
                    </p>
                    <p>
                      Inspired by the timeless wisdom of <em>&ldquo;Samatvam Yoga Uchyate,&rdquo;</em> we see yoga as the cultivation of inner balance — learning to remain steady through both comfort and discomfort, success and failure, activity and rest.
                    </p>
                    <p>
                      We bring together the traditional wisdom of Asana, Pranayama, Shatkriya, Meditation, and Yoga Philosophy with a practical approach to modern wellness.
                    </p>
                  </div>
                </div>

                {/* About Us Button */}
                <div className="mt-8 pt-2">
                  <Link
                    to="/about#about-philosophy"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 font-body text-sm font-bold uppercase tracking-[0.14em] text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-elevated"
                  >
                    About Us &rarr;
                  </Link>
                </div>
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
      {/* Why Choose Us Section with Mandala Photo */}
      <WhyChooseUs />
      <Services />
      <ProgramsSection />
      <TestimonialsSection />
      <GallerySection />
      <BlogsSection />
      <FAQSection />
      <ContactCTASection />
    </>
  );
}