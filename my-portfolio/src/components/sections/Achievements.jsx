/*  src/components/sections/Achievements.jsx  –  v3 Enhanced
 *  • Enhanced visual effects and animations
 *  • Gradient text and glow effects
 *  • Better interactive elements
 *  • Improved responsive design
 */

import { certs } from '../../data/certs';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@heroicons/react/24/solid/CheckCircleIcon';
import FloatingElement from '../ui/FloatingElement';
import GradientText from '../ui/GradientText';
import GlowCard from '../ui/GlowCard';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-surface relative overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute top-0 left-1/3 h-[40rem] w-[40rem] rounded-full bg-accent-purple/5 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-0 right-1/3 h-[35rem] w-[35rem] rounded-full bg-brand/5 blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      {/* heading */}
      <FloatingElement direction="up" delay={0.1}>
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center text-gray-100 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GradientText gradient="rainbow">Certifications</GradientText>
        </motion.h2>
      </FloatingElement>

      {/* Enhanced grid with better spacing */}
      <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {certs.map((cert, i) => (
          <FloatingElement 
            key={cert.name}
            direction="up"
            delay={i * 0.1}
            scale
          >
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="block group"
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <GlowCard 
                className="relative p-6 h-full hover:shadow-2xl transition-all duration-500"
                glowColor="brand"
              >
                {/* Enhanced badge icon with animation */}
                <motion.div
                  className="absolute -top-3 -right-3"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircleIcon className="h-8 w-8 text-brand drop-shadow-lg" />
                </motion.div>

                <div className="space-y-4">
                  <motion.h3 
                    className="font-bold text-lg leading-tight group-hover:text-brand transition-colors duration-300"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <GradientText gradient="brand">{cert.name}</GradientText>
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-400 text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    View credential →
                  </motion.p>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/5 via-transparent to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </GlowCard>
            </motion.a>
          </FloatingElement>
        ))}
      </div>
    </section>
  );
}
           