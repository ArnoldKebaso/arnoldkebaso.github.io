// src/components/sections/Experience.jsx
import { experience } from '../../data/experience';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface/90">
      {/* heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-100 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      {/* timeline container */}
      <div className="relative container flex flex-col items-center">
        {/* vertical accent bar */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-brand/20 rounded-full hidden lg:block" />

        <div className="w-full max-w-4xl space-y-14">
          {experience.map((job, i) => (
            <motion.article
              key={job.role}
              className="relative rounded-2xl bg-surface/80 ring-1 ring-white/5 backdrop-blur p-8 shadow-lg lg:w-1/2 lg:mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {/* dot on the timeline (desktop only) */}
              <span className="hidden lg:block absolute -left-8 top-8 h-4 w-4 rounded-full bg-brand shadow-lg" />

              <header className="mb-4">
                <h3 className="text-xl font-semibold text-brand">
                  {job.role}{' '}
                  <span className="text-gray-300 font-normal">
                    @ {job.company}
                  </span>
                </h3>
                <p className="text-sm text-gray-400">{job.period}</p>
              </header>

              <ul className="list-disc pl-5 space-y-2 text-gray-200 text-base leading-relaxed">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
