import { skills } from '../../data/skills';
import { motion } from 'framer-motion';
import FloatingElement from '../ui/FloatingElement';
import GradientText from '../ui/GradientText';
import GlowCard from '../ui/GlowCard';

/* Enhanced CSS ring component with animations */
function Ring({ pct, label }) {
  return (
    <FloatingElement scale rotate delay={Math.random() * 0.5}>
      <GlowCard className="flex flex-col items-center gap-4 p-6" glowColor="brand">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32">
          {/* Animated background ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(#18e8ff ${pct * 3.6}deg, #2f374a 0deg)`,
            }}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Static progress ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(#18e8ff ${pct * 3.6}deg, transparent 0deg)`,
            }}
          />
          
          {/* Inner hole with glow */}
          <div className="absolute inset-3 rounded-full bg-surface-dark shadow-inner-glow" />
          
          {/* Animated percentage text */}
          <motion.span 
            className="absolute inset-0 grid place-content-center font-bold text-gray-100 text-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            {pct}%
          </motion.span>
        </div>
        
        <motion.p 
          className="text-gray-200 text-sm sm:text-base text-center font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <GradientText gradient="brand">{label}</GradientText>
        </motion.p>
      </GlowCard>
    </FloatingElement>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface relative overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-[30rem] w-[30rem] rounded-full bg-brand/5 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[25rem] w-[25rem] rounded-full bg-accent-purple/5 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <FloatingElement direction="up" delay={0.1}>
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center text-gray-100 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GradientText gradient="rainbow">Skills</GradientText>
        </motion.h2>
      </FloatingElement>

      <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: i * 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 100
            }}
          >
            <Ring pct={skill.pct} label={skill.label} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
