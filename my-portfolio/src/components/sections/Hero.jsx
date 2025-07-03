// src/components/sections/Hero.jsx
import React, { useState }        from 'react';
import { motion }                 from 'framer-motion';
import { Typewriter }             from 'react-simple-typewriter';
import GitHubIcon                from '@mui/icons-material/GitHub';
import LinkedInIcon              from '@mui/icons-material/LinkedIn';
import ArrowDownwardIcon         from '@mui/icons-material/ArrowDownward';
import ClipLoader                from 'react-spinners/ClipLoader';

// note: PDF now lives in public/assets, so we reference it by URL
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
      {/* decorative blur */}
      <div className="pointer-events-none absolute -top-40 right-1/2 h-[40rem] w-[50rem] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl" />
      {/* dotted texture */}
      <div className="absolute inset-0 bg-hero-dots" />

      <motion.div
        className="relative z-10 mx-auto max-w-screen-xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* TEXT COLUMN */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-tight mb-4 text-gray-100">
            Hello, I’m <span className="text-brand">Arnold Kebaso</span>
          </h1>

          <p className="text-2xl sm:text-3xl font-semibold h-12 mb-6 text-brand">
            <Typewriter
              words={roles}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <p className="mb-8 max-w-lg mx-auto lg:mx-0 text-gray-300 leading-relaxed">
            I build scalable web, mobile &amp; IoT solutions—from real-time flood
            alerts to AI-powered mentorship platforms—always chasing impact & clarity.
          </p>

          <div className="flex justify-center lg:justify-start gap-6 text-4xl mb-8 text-gray-200">
            <a
              href="https://github.com/ArnoldKebaso"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand transition-colors"
            >
              <GitHubIcon fontSize="inherit" />
            </a>
            <a
              href="https://linkedin.com/in/arnold-kebaso-505982256/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand transition-colors"
            >
              <LinkedInIcon fontSize="inherit" />
            </a>
          </div>

          {/* Download CV */}
          <a
            href={CV_URL}
            download="Arnold_Kebaso_Onchieku_CV.pdf"
            onClick={() => {
              setLoading(true);
              // simulate a bit of delay so spinner shows up
              setTimeout(() => setLoading(false), 1500);
            }}
            className="inline-flex items-center justify-center bg-brand text-surface px-8 py-3 rounded-full font-semibold hover:bg-brand-dark transition shadow-md shadow-brand/30"
          >
            {loading
              ? <ClipLoader size={20} color="#0DF" />
              : 'Download CV'}
          </a>
        </div>

        {/* IMAGE COLUMN */}
        <motion.div
          className="mx-auto w-64 sm:w-80 lg:w-full max-w-sm"
          whileHover={{ rotate: 2 }}
          transition={{ type: 'spring', stiffness: 120, damping: 10 }}
        >
          <img
            src="/assets/me.jpg"
            alt="Arnold Kebaso"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* SCROLL CUE FOR DESKTOP */}
      <motion.div
        className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 text-brand"
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDownwardIcon fontSize="large" />
      </motion.div>
    </section>
  );
}
