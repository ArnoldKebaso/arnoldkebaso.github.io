/**
 *  src/components/sections/About.jsx  –  v2
 *  • diagonal gradient backdrop
 *  • larger, bolder heading on desktop
 *  • mobile-first order (image first, text second)
 *  • stagger-in bullet list
 *  • teal “halo” + subtle hover tilt on photo
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
    text: 'Fostering inclusive engineering culture & mentorship',
  },
];

export default function About() {
  const hasPhoto = !!import.meta.glob('../../../assets/*', { eager: true })[
    '/assets/about.webp'
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-surface py-24">
      {/* diagonal glow */}
      <div className="pointer-events-none absolute -top-1/3 right-1/2 h-[40rem] w-[70rem] -rotate-12 translate-x-1/2 bg-brand/15 blur-3xl" />

      <motion.div
        className="container grid md:grid-cols-2 gap-14 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* ───── image column (mobile first) ───── */}
        <motion.div
          className="order-1 md:order-2 relative flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ rotate: 2 }}
        >
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

        {/* ───── text column ───── */}
        <div className="order-2 md:order-1">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-100 mb-8">
            About <span className="text-brand">Me</span>
          </h2>

          <p className="mb-8 leading-relaxed text-gray-400">
            Full stack developer with a passion for technology, secure DevOps and data-driven innovation. Designed full
            stack solutions that ingest, analyze and visualize real-time data for disaster-response, fintech and IoT use
            cases. Adept at evaluating control gaps, automating tests and translating complex technical findings into clear 
            business language. 
            Over the past three years I’ve:
          </p>

          <ul className="space-y-5 text-gray-200">
            {bullets.map(({ icon: Icon, text }, i) => (
              <motion.li
                key={text}
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.15 }}
                viewport={{ once: true }}
              >
                <Icon className="h-7 w-7 text-brand shrink-0" />
                <span className="text-base sm:text-lg">{text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
