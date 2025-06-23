import { skills } from '../../data/skills';
import { motion } from 'framer-motion';

/* CSS ring component — bigger, responsive */
function Ring({ pct, label }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28">
        {/* progress arc */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(#18e8ff ${pct * 3.6}deg,#2f374a 0deg)`,
          }}
        />
        {/* inner hole */}
        <div className="absolute inset-2 rounded-full bg-surface" />
        {/* percentage text */}
        <span className="absolute inset-0 grid place-content-center font-semibold text-gray-100 text-sm">
          {pct}%
        </span>
      </div>
      <p className="text-gray-200 text-sm sm:text-base text-center max-w-[10ch]">
        {label}
      </p>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface">
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-100 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <div className="container grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Ring {...s} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
