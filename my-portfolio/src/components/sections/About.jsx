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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <FloatingElement delay={0.4}>
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/assets/me.jpg"
                  alt="Arnold Kebaso"
                  className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                {/* Multi-layer glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
              </div>
              
              {/* Floating glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          </FloatingElement>

          {/* Content Section */}
          <FloatingElement delay={0.6}>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  <GradientText text="Hi! I'm Arnold Kebaso" />
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  A passionate full-stack developer with a love for creating innovative web solutions. 
                  I specialize in React, Node.js, and modern web technologies, always striving to build 
                  applications that make a meaningful impact.
                </p>
              </motion.div>

              <motion.div
                className="space-y-4"
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
                    <GlowCard className="p-4 bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300">
                      <div className="flex items-start gap-3">
                        <motion.div
                          className="mt-1 text-blue-400"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {index === 0 && <SparklesIcon className="w-5 h-5" />}
                          {index === 1 && <LightBulbIcon className="w-5 h-5" />}
                          {index === 2 && <CubeTransparentIcon className="w-5 h-5" />}
                          {index === 3 && <SparklesIcon className="w-5 h-5" />}
                        </motion.div>
                        <p className="text-gray-300 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    </GlowCard>
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
