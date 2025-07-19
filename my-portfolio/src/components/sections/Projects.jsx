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
              <Thumb img={project.image} alt={project.title} />
              
              <div className="p-6 space-y-4">
                <motion.h3 
                  className="text-xl font-bold text-gray-100 group-hover:text-brand transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <GradientText gradient="brand">{project.title}</GradientText>
                </motion.h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech stack tags */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 text-xs bg-brand/20 text-brand rounded-full border border-brand/30"
                        whileHover={{ scale: 1.1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                )}
                
                <div className="flex gap-3 pt-4">
                  {project.liveUrl && (
                    <GlowButton
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="sm"
                      className="flex-1"
                    >
                      Live Site
                    </GlowButton>
                  )}
                  {project.githubUrl && (
                    <GlowButton
                      href={project.githubUrl}
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
            className="rounded-2xl bg-surface/80 ring-1 ring-white/5 backdrop-blur shadow-lg flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6, boxShadow: '0 15px 30px rgba(0,0,0,0.25)' }}
            whileTap={{ scale: 0.95 }}
          >
            {/* thumbnail */}
            <Thumb img={p.img} alt={p.title} />

            {/* body */}
            <div className="flex flex-col flex-grow p-6">
              <h3 className="text-lg font-semibold text-brand mb-1">
                {p.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                {p.blurb}
              </p>
            </div>

            {/* action */}
            <Button
              href={p.live || p.repo}
              target="_blank"
              rel="noreferrer"
              variant="contained"
              sx={{
                bgcolor: 'brand.main',
                '&:hover': { bgcolor: 'brand.dark' },
                mx: 2,
                mb: 3,
                textTransform: 'none',
                fontWeight: 600,
              }}
              fullWidth
            >
              {p.live ? 'Live Site' : 'GitHub'}
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
