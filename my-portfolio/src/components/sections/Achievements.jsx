/*  src/components/sections/Achievements.jsx  –  v2
 *  • auto-fitting grid that grows gracefully (CSS grid repeat auto-fit)
 *  • clearly visible card outline (brand-tinted ring + subtle backdrop blur)
 *  • hover raises & glows; focus-visible outline for keyboard users
 *  • Heroicons CheckCircle as badge
 */

import { certs } from '../../data/certs';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@heroicons/react/24/solid/CheckCircleIcon';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-surface">
      {/* heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-100 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Certifications
      </motion.h2>

      {/* auto-fit grid: cards keep ± 280 px, wrap as needed */}
      <div className="container grid gap-8 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {certs.map((c, i) => (
          <motion.a
            key={c.name}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            className="relative block rounded-2xl bg-surface/80 backdrop-blur
                       ring-2 ring-brand/30 hover:ring-brand transition
                       p-8 shadow-md hover:shadow-brand/40
                       focus-visible:outline-none focus-visible:ring-4
                       focus-visible:ring-brand/60"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.96 }}
          >
            {/* badge icon */}
            <CheckCircleIcon className="absolute -top-4 -left-4 h-10 w-10 text-brand" />

            <p className="font-semibold text-brand mb-2 leading-snug">
              {c.name}
            </p>
            <p className="text-sm text-gray-300 group-hover:underline">
              View credential →
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
