import { Container } from '@/components/ui';

export default function Team() {
  const team = [
    {
      name: 'Yogacharya Gyan Prakash',
      role: 'Founder & Yoga Teacher',
      certification: 'Certified from Uttarakhand University Sanskrit',
      image: '🧘‍♂️',
    },
    {
      name: 'Yogacharya Rita',
      role: 'Co-Founder & Yoga Teacher',
      certification: 'Certified from Shri Guru Ram Rai University',
      image: '/images/about-instructor.jpg',
    },
    {
      name: 'Yogi Anuj',
      role: 'Yoga Instructor',
      certification: 'Certified by Yoga Certification Board Ministry of AYUSH.',
      image: '/images/about-instructor.jpg',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-semibold text-primary md:text-5xl">
            Our Key People
          </h2>
          <p className="mt-4 text-base text-dark/70 md:text-lg">
            Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border bg-gradient-to-br from-white to-primary/5 p-8 text-center transition-all duration-300 hover:shadow-lg hover:border-primary/30"
            >
              <div className="mx-auto mb-6 h-48 w-full overflow-hidden rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                {member.name}
              </h3>
              <p className="text-primary/80 font-medium mb-3">{member.role}</p>
              <p className="text-dark/60 text-sm leading-relaxed">
                {member.certification}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}