/**
 *  src/components/sections/About.jsx
 *  ——————————————————————————————————
 *  Polished “About Me” section:
 *   • two-column layout that collapses on mobile
 *   • framer-motion fade / slide reveal
 *   • teal halo blur behind the image / icon
 *   • accessible text colours that pop on the dark surface background
 */

import { motion } from 'framer-motion';
import SparklesIcon from '@heroicons/react/24/solid/SparklesIcon';
import LightBulbIcon from '@heroicons/react/24/outline/LightBulbIcon';
import CubeTransparentIcon from '@heroicons/react/24/outline/CubeTransparentIcon';

const bullets = [
  {
    icon: SparklesIcon,
    text: 'Translating complex ideas into elegant, maintainable code',
  },
  {
    icon: LightBulbIcon,
    text: 'Thrives at the intersection of IoT, Cloud & Data Pipelines',
  },
  {
    icon: CubeTransparentIcon,
    text: 'Loves mentoring & fostering inclusive engineering culture',
  },
];

export default function About() {
  /* vite’s glob check—if about.webp exists we show it, else fallback icon */
  const hasPhoto = !!import.meta.glob('../../../assets/*', { eager: true })[
    '/assets/about.webp'
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <motion.div
        className="container grid md:grid-cols-2 gap-14 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* ───────────── text column ───────────── */}
        <div>
          <h2 className="text-4xl font-bold text-gray-100 mb-6">
            About <span className="text-brand">Me</span>
          </h2>

          <p className="mb-6 leading-relaxed text-gray-400">
            I’m a final-year Computer Science student at Egerton University who
            enjoys turning real-world pain-points into delightful digital
            experiences. Over the past three years I’ve:
          </p>

          <ul className="space-y-4 text-gray-200">
            {bullets.map(({ icon: Icon, text }) => (
              <li key={text} className="flex gap-3">
                <Icon className="h-6 w-6 text-brand shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ───────────── image / icon column ───────────── */}
        <motion.div
          className="relative flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* teal “halo” blur */}
          <div className="absolute -inset-4 rounded-3xl bg-brand/10 blur-2xl" />

          {hasPhoto ? (
            <img
              src="/assets/about.webp"
              alt="Arnold at work"
              className="relative rounded-3xl shadow-2xl w-full max-w-sm object-cover"
            />
          ) : (
            <CubeTransparentIcon className="relative h-48 w-48 text-brand/70" />
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
