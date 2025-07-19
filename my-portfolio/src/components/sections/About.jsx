/**
 *  src/cimport GlowCard from '../ui/GlowCard';

/* ─── About.jsx – Enhanced version ─── 
 *  • diagonal gradient backdrop
 *  • larger, bolder heading on desktop
 *  • mobile-first order (image first, text second)
 *  • stagger-in bullet list
 *  • teal "halo" + subtle hover tilt on photo
 */ts/sections/About.jsx  –  v3 Enhanced
 *  • Enhanced animations and visual effects
 *  • Gradient text effects
 *  • Improved interactive elements
 *  • Better responsive design
 */

import { motion } from 'framer-motion';
import SparklesIcon from '@heroicons/react/24/solid/SparklesIcon';
import LightBulbIcon from '@heroicons/react/24/outline/LightBulbIcon';
import CubeTransparentIcon from '@heroicons/react/24/outline/CubeTransparentIcon';
import FloatingElement from '../ui/FloatingElement';
import GradientText from '../ui/GradientText';
import GlowCard from '../ui/GlowCard';components/sections/About.jsx  –  v2
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
    text: 'Thriving at the intersection of IoT, Cloud & Data Pipelines',
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
      {/* Enhanced background effects */}
      <div className="pointer-events-none absolute -top-1/3 right-1/2 h-[40rem] w-[70rem] -rotate-12 translate-x-1/2 bg-brand/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/4 -left-1/4 h-[30rem] w-[30rem] rounded-full bg-accent-purple/10 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-1/4 -right-1/4 h-[25rem] w-[25rem] rounded-full bg-accent-pink/10 blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <motion.div
        className="container grid md:grid-cols-2 gap-14 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* ───── image column (mobile first) ───── */}
        <FloatingElement 
          direction="right" 
          delay={0.2}
          className="order-1 md:order-2 relative flex justify-center md:justify-end"
        >
          <motion.div
            className="relative group"
            whileHover={{ rotate: 2, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
          >
            {/* Multiple glow layers */}
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-brand via-accent-purple to-brand blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute -inset-4 rounded-3xl bg-brand/10 blur-xl" />
            
            {hasPhoto ? (
              <div className="relative">
                <img
                  src="/assets/about.webp"
                  alt="Arnold at work"
                  className="relative rounded-3xl shadow-2xl w-full max-w-sm object-cover border border-brand/20"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-brand/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ) : (
              <CubeTransparentIcon className="relative h-48 w-48 text-brand/70" />
            )}
          </motion.div>
        </FloatingElement>

        {/* ───── text column ───── */}
        <FloatingElement direction="left" delay={0.1} className="order-2 md:order-1">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-100 mb-8">
            About <GradientText gradient="rainbow">Me</GradientText>
          </h2>

          <motion.p 
            className="mb-8 leading-relaxed text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Full stack developer with a passion for technology, secure DevOps and data-driven innovation. Designed full
            stack solutions that ingest, analyze and visualize real-time data for disaster-response, fintech and IoT use
            cases. Adept at evaluating control gaps, automating tests and translating complex technical findings into clear 
            business language. I have been: 
          </motion.p>

          <div className="space-y-5">
            {bullets.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.15 }}
                viewport={{ once: true }}
              >
                <GlowCard 
                  className="flex gap-4 items-center p-4 hover:scale-105 transition-transform duration-300"
                  glowColor="brand"
                  hoverEffect={false}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="h-7 w-7 text-brand shrink-0" />
                  </motion.div>
                  <span className="text-base sm:text-lg text-gray-200">{text}</span>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </FloatingElement>
      </motion.div>
    </section>
  );
}
