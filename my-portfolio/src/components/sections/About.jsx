// src/components/sections/About.jsx
import { motion } from 'framer-motion';
import SparklesIcon from '@heroicons/react/24/solid/SparklesIcon';
import LightBulbIcon from '@heroicons/react/24/outline/LightBulbIcon';
import CubeTransparentIcon from '@heroicons/react/24/outline/CubeTransparentIcon';
import FloatingElement from '../ui/FloatingElement';
import GradientText from '../ui/GradientText';
import GlowCard from '../ui/GlowCard';

export default function About() {
  const bulletList = [
    "Full-stack developer with expertise in React, Node.js, and modern web technologies",
    "Passionate about creating innovative solutions that make a real-world impact",
    "Experience in building scalable applications and leading development teams",
    "Committed to continuous learning and staying current with emerging technologies"
  ];

  return (
    <section id="about" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <FloatingElement delay={0.2}>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GradientText 
              text="About Me" 
              className="text-4xl md:text-5xl font-bold mb-4"
            />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Passionate developer creating innovative solutions with modern technologies
            </p>
          </motion.div>
        </FloatingElement>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Image Section - Smaller */}
          <FloatingElement delay={0.4} className="lg:col-span-2">
            <motion.div 
              className="relative group max-w-sm mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src="/assets/me.jpg"
                  alt="Arnold Kebaso"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                {/* Multi-layer glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
              </div>
              
              {/* Floating glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500/20 rounded-full blur-sm"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </FloatingElement>

          {/* Content Section - Larger */}
          <FloatingElement delay={0.6} className="lg:col-span-3">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  <GradientText text="Hi! I'm Arnold Kebaso" />
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  A passionate full-stack developer with a love for creating innovative web solutions. 
                  I specialize in React, Node.js, and modern web technologies, always striving to build 
                  applications that make a meaningful impact.
                </p>
              </motion.div>

              <motion.div
                className="grid gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {bulletList.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlowCard className="p-4 bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <motion.div
                          className="mt-0.5 text-blue-400 flex-shrink-0"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          {index === 0 && <SparklesIcon className="w-5 h-5" />}
                          {index === 1 && <LightBulbIcon className="w-5 h-5" />}
                          {index === 2 && <CubeTransparentIcon className="w-5 h-5" />}
                          {index === 3 && <SparklesIcon className="w-5 h-5" />}
                        </motion.div>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                          {item}
                        </p>
                      </div>
                    </GlowCard>
                  </motion.div>
                ))}
              </motion.div>

              {/* Additional stats or highlights */}
              <motion.div
                className="grid grid-cols-3 gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[
                  { number: "5+", label: "Years Experience" },
                  { number: "50+", label: "Projects Completed" },
                  { number: "∞", label: "Lines of Code" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 rounded-xl bg-gray-800/20 border border-gray-700/20"
                    whileHover={{ scale: 1.05, borderColor: "rgb(59 130 246 / 0.5)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-2xl font-bold text-white mb-1">
                      <GradientText text={stat.number} />
                    </div>
                    <div className="text-gray-400 text-xs">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </FloatingElement>
        </div>
      </div>
    </section>
  );
}