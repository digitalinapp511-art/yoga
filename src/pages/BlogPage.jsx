import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { api } from '@/lib/api';
import { Container } from '@/components/ui';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getPublishedPosts()
      .then((data) => setPosts(Array.isArray(data) ? data : []))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-20">
      <Container className="max-w-[1200px]">
        <div className="mb-12 text-center">
          <h1 className="font-heading text-4xl font-semibold text-dark md:text-5xl">
            From Our Blog
          </h1>
          <p className="mt-3 text-muted">Wellness tips, yoga guidance, and studio updates.</p>
        </div>

        {loading && <p className="text-center text-muted">Loading posts…</p>}
        {!loading && posts.length === 0 && (
          <p className="text-center text-muted">No posts published yet — check back soon.</p>
        )}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {(Array.isArray(posts) ? posts : []).map((post, i) => (
            <motion.div
              key={post._id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border transition-shadow duration-300 hover:shadow-elevated"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={
                      post.coverImage ||
                      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80'
                    }
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <h2 className="font-heading text-xl font-semibold text-dark group-hover:text-primary">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="line-clamp-3 text-sm text-muted">{post.excerpt}</p>
                  )}
                  <span className="mt-auto pt-3 text-xs uppercase tracking-wider text-secondary">
                    {new Date(post.createdAt).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
