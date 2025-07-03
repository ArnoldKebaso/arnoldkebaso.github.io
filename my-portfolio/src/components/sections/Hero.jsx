/* ──────────────────────────────────────────────────────────
   src/components/sections/Hero.jsx
   A refreshed hero banner with:
     • extra top-padding so it doesn’t collide with the header
     • subtle parallax glow + gradient overlay
     • type-writer subtitle
     • floating head-shot that tilts on hover
     • animated “scroll-down” cue for large screens
   Tailwind + Framer-Motion only. Copy-paste & save.
   ────────────────────────────────────────────────────────── */

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import meIMG from '/assets/me.jpg'; // Adjust the path as necessary
import myCV from '/assets/Arnold _Kebaso-CV.pdf'; // Adjust the path as necessary

const roles = [
  'Full-Stack Developer',
  'AWS Cloud Practitioner',
  'Mobile App Developer',
  'UI/UX Enthusiast',
  'Devops Engineer',
  'Open-Source Contributor',

];

export default function Hero() {
  return (
    <section
      id="home"
      /* extra pt-32 pushes content below the fixed header */
      className="relative min-h-screen flex items-center pt-32 bg-surface overflow-hidden"
    >
      {/* decorative gradient blob */}
      <div className="pointer-events-none absolute -top-40 right-1/2 h-[40rem] w-[50rem] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl" />

      {/* dotted texture overlay */}
      <div className="absolute inset-0 bg-hero-dots" />

      {/* CONTENT GRID */}
      <motion.div
        className="relative z-10 container grid lg:grid-cols-2 gap-14 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* ─── Text column ───────────────────────────────────── */}
        <div>
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 text-gray-100">
            Hello, I’m <span className="text-brand">Arnold&nbsp;Kebaso</span>
          </h1>

          {/* Typed subtitle */}
          <p className="text-2xl sm:text-3xl font-semibold h-12 mb-8 text-brand">
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

          <p className="mb-10 max-w-xl text-gray-300 leading-relaxed">
            I build scalable web, mobile &amp; IoT solutions—from real-time flood
            alerts to AI-powered mentorship platforms—always chasing impact &
            clarity.
          </p>

          <div className="flex gap-6 text-4xl mb-8 text-gray-200">
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

          <a
            href= {myCV}
            download
            className="inline-block bg-brand text-surface px-8 py-3 rounded-full font-semibold hover:bg-brand-dark transition shadow-md shadow-brand/30"
          >
            Download CV
          </a>
        </div>

        {/* ─── Image column ─────────────────────────────────── */}
        <motion.div
          whileHover={{ rotate: 2 }}
          transition={{ type: 'spring', stiffness: 120, damping: 10 }}
          className="mx-auto w-64 sm:w-80 lg:w-full max-w-sm"
        >
          <img
            src={meIMG}
            onError={(e) => (e.currentTarget.style.display = 'none')}
            alt="Arnold Kebaso"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* scroll-down cue (hidden on small screens) */}
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
