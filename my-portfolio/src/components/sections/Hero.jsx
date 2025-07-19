// src/components/sections/Hero.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ClipLoader from 'react-spinners/ClipLoader';
import ParticleBackground from '../ui/ParticleBackground';
import FloatingElement from '../ui/FloatingElement';
import GlowButton from '../ui/GlowButton';
import GradientText from '../ui/GradientText';

const CV_URL = '/assets/Arnold_Kebaso-CV.pdf';

const roles = [
  'Full-Stack Developer',
  'AWS Cloud Practitioner',
  'Mobile App Developer',
  'UI/UX Enthusiast',
  'DevOps Engineer',
  'Open-Source Contributor',
]

export default function Hero() {
  const [loading, setLoading] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 bg-surface overflow-hidden"
    >
      <ParticleBackground />
      
      <div className="pointer-events-none absolute -top-40 right-1/2 h-[40rem] w-[50rem] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl animate-pulse-slow" />
      <div className="pointer-events-none absolute top-1/4 -left-20 h-[30rem] w-[30rem] rounded-full bg-accent-purple/10 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-1/4 -right-20 h-[25rem] w-[25rem] rounded-full bg-accent-pink/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="absolute inset-0 bg-hero-dots" />

      <motion.div
        className="relative z-10 mx-auto max-w-screen-xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <FloatingElement direction="left" delay={0.2}>
          <div className="text-center lg:text-left">
            <motion.h1 
              className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-tight mb-4 text-gray-100"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hello, I'm <GradientText gradient="rainbow" animate>Arnold Kebaso</GradientText>
            </motion.h1>

            <motion.div 
              className="text-2xl sm:text-3xl font-semibold h-12 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <GradientText gradient="brand">
                <Typewriter
                  words={roles}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </GradientText>
            </motion.div>

            <motion.p 
              className="mb-8 max-w-lg mx-auto lg:mx-0 text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              I build scalable web, mobile & IoT solutions—from real-time flood
              alerts to AI-powered mentorship platforms—always chasing impact & clarity.
            </motion.p>

            <motion.div 
              className="flex justify-center lg:justify-start gap-6 text-4xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.a
                href="https://github.com/ArnoldKebaso"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand transition-colors transform hover:scale-110"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <GitHubIcon fontSize="inherit" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/arnold-kebaso-505982256/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand transition-colors transform hover:scale-110"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <LinkedInIcon fontSize="inherit" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <GlowButton
                href={CV_URL}
                download="Arnold_Kebaso_Onchieku_CV.pdf"
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => setLoading(false), 1500);
                }}
                size="lg"
              >
                {loading ? <ClipLoader size={20} color="#101625" /> : 'Download CV'}
              </GlowButton>
            </motion.div>
          </div>
        </FloatingElement>

        <FloatingElement direction="right" delay={0.4}>
          <motion.div
            className="mx-auto w-64 sm:w-80 lg:w-full max-w-sm relative"
            whileHover={{ rotate: 2, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 120, damping: 10 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-brand via-accent-purple to-brand rounded-3xl blur opacity-30 hover:opacity-75 transition duration-1000 animate-tilt"></div>
            <div className="relative">
              <img
                src="/assets/me.jpg"
                alt="Arnold Kebaso"
                className="rounded-3xl shadow-2xl w-full object-cover relative z-10"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-brand/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>
        </FloatingElement>
      </motion.div>

      <motion.div
        className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 text-brand"
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [0, 10, 0], opacity: 1 }}
        transition={{ 
          y: { repeat: Infinity, duration: 2 },
          opacity: { delay: 1.5, duration: 0.5 }
        }}
      >
        <ArrowDownwardIcon fontSize="large" />
      </motion.div>
    </section>
  );
}
