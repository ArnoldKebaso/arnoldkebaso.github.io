// src/components/sections/Projects.jsx
import { projects } from '../../data/projects';
import { motion } from 'framer-motion';
import CodeBracketIcon from '@heroicons/react/24/outline/CodeBracketIcon';
import Button from '@mui/material/Button';

/* ─── Thumbnail with 16:9 aspect ratio ───────────────────── */
function Thumb({ img, alt }) {
  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
      {img ? (
        <motion.img
          src={img}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover object-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      ) : (
        <div className="absolute inset-0 grid place-content-center bg-surface/60">
          <CodeBracketIcon className="h-16 w-16 text-brand/80" />
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface/95">
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-100 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Latest Work
      </motion.h2>

      <div className="container grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="rounded-2xl bg-surface/80 ring-1 ring-white/5 backdrop-blur shadow-lg flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6, boxShadow: '0 15px 30px rgba(0,0,0,0.25)' }}
            whileTap={{ scale: 0.95 }}
          >
            {/* thumbnail */}
            <Thumb img={p.img} alt={p.title} />

            {/* body */}
            <div className="flex flex-col flex-grow p-6">
              <h3 className="text-lg font-semibold text-brand mb-1">
                {p.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                {p.blurb}
              </p>
            </div>

            {/* action */}
            <Button
              href={p.live || p.repo}
              target="_blank"
              rel="noreferrer"
              variant="contained"
              sx={{
                bgcolor: 'brand.main',
                '&:hover': { bgcolor: 'brand.dark' },
                mx: 2,
                mb: 3,
                textTransform: 'none',
                fontWeight: 600,
              }}
              fullWidth
            >
              {p.live ? 'Live Site' : 'GitHub'}
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
