// src/components/sections/Projects.jsx
import { projects } from '../../data/projects';
import { motion } from 'framer-motion';
import CodeBracketIcon from '@heroicons/react/24/outline/CodeBracketIcon';
import Button from '@mui/material/Button';
import FloatingElement from '../ui/FloatingElement';
import GradientText from '../ui/GradientText';
import GlowCard from '../ui/GlowCard';
import GlowButton from '../ui/GlowButton';

/* ─── Enhanced Thumbnail with multiple effects ───────────────────── */
function Thumb({ img, alt }) {
  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl group">
      {img ? (
        <>
          <motion.img
            src={img}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
            animate={{
              translateX: ['100%', '200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          />
        </>
      ) : (
        <div className="absolute inset-0 grid place-content-center bg-surface/60">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            <CodeBracketIcon className="h-16 w-16 text-brand/80" />
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface/95 relative overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-[40rem] w-[40rem] rounded-full bg-brand/5 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[30rem] w-[30rem] rounded-full bg-accent-purple/5 blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <FloatingElement direction="up" delay={0.1}>
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center text-gray-100 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GradientText gradient="rainbow">Latest Work</GradientText>
        </motion.h2>
      </FloatingElement>

      <div className="container grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <FloatingElement 
            key={project.title}
            direction="up"
            delay={i * 0.2}
            scale
          >
            <GlowCard 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500"
              glowColor="brand"
            >
              <Thumb img={project.img} alt={project.title} />
              
              <div className="p-6 space-y-4">
                <motion.h3 
                  className="text-xl font-bold text-gray-100 group-hover:text-brand transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <GradientText gradient="brand">{project.title}</GradientText>
                </motion.h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.blurb}
                </p>
                
                <div className="flex gap-3 pt-4">
                  {project.live && (
                    <GlowButton
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="sm"
                      className="flex-1"
                    >
                      Live Demo
                    </GlowButton>
                  )}
                  {project.repo && (
                    <GlowButton
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                      size="sm"
                      className="flex-1"
                    >
                      GitHub
                    </GlowButton>
                  )}
                </div>
              </div>
            </GlowCard>
          </FloatingElement>
        ))}
      </div>
    </section>
  );
}
