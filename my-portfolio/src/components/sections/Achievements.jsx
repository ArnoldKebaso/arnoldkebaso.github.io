import { certs } from '../../data/certs';
import { motion } from 'framer-motion';
import BadgeCheckIcon from '@heroicons/react/24/solid/BadgeCheckIcon';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-surface">
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-100 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Certifications
      </motion.h2>

      <div className="container grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <motion.a
            key={c.name}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            className="relative block rounded-2xl bg-surface/75 ring-1 ring-white/5 p-8 shadow-lg hover:shadow-brand/40 transition group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <BadgeCheckIcon className="absolute -top-4 -left-4 h-10 w-10 text-brand" />
            <p className="font-semibold text-brand mb-2">{c.name}</p>
            <p className="text-sm text-gray-400 group-hover:underline">
              View credential →
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
