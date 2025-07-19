// src/components/sections/Experience.jsx
import { experience } from '../../data/experience';
import { motion } from 'framer-motion';
import FloatingElement from '../ui/FloatingElement';
import GradientText from '../ui/GradientText';
import GlowCard from '../ui/GlowCard';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-surface/90 relative overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-[35rem] w-[35rem] rounded-full bg-brand/5 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/4 h-[30rem] w-[30rem] rounded-full bg-accent-purple/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      {/* heading */}
      <FloatingElement direction="up" delay={0.1}>
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center text-gray-100 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GradientText gradient="rainbow">Experience</GradientText>
        </motion.h2>
      </FloatingElement>

      {/* timeline container */}
      <div className="relative container flex flex-col items-center">
        {/* Enhanced vertical accent bar */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-brand via-accent-purple to-brand rounded-full hidden lg:block opacity-30" />

        <div className="w-full max-w-4xl space-y-14">
          {experience.map((job, i) => (
            <FloatingElement 
              key={job.role}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.2}
            >
              <GlowCard 
                className={`relative p-8 lg:w-1/2 ${i % 2 === 0 ? 'lg:ml-auto lg:mr-8' : 'lg:mr-auto lg:ml-8'}`}
                glowColor="brand"
              >
                {/* Enhanced dot on the timeline (desktop only) */}
                <motion.span 
                  className={`hidden lg:block absolute top-8 h-6 w-6 rounded-full bg-gradient-to-r from-brand to-accent-purple shadow-glow border-2 border-surface ${
                    i % 2 === 0 ? '-left-12' : '-right-12'
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                />

                <motion.header 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold mb-1">
                    <GradientText gradient="brand">{job.role}</GradientText>
                    <span className="text-gray-300 font-medium text-lg">
                      {' '}@ {job.company}
                    </span>
                  </h3>
                  <motion.p 
                    className="text-sm text-gray-400 font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {job.period}
                  </motion.p>
                </motion.header>

                <motion.ul 
                  className="space-y-3 text-gray-200 text-base leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {job.bullets.map((bullet, j) => (
                    <motion.li 
                      key={j}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + j * 0.1 }}
                    >
                      <span className="block w-2 h-2 rounded-full bg-brand mt-2 flex-shrink-0"></span>
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </GlowCard>
            </FloatingElement>
          ))}
        </div>
      </div>
    </section>
  );
}
