// src/components/sections/Hero.jsx
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import GitHubIcon    from '@mui/icons-material/GitHub';
import LinkedInIcon  from '@mui/icons-material/LinkedIn';

// words that cycle after “I’m…”
const roles = [
  'Full-Stack Developer',
  'AWS Cloud Practitioner',
  'IoT Builder',
  'Open-Source Contributor',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-hero-dots bg-surface"
    >
      <motion.div
        className="container grid md:grid-cols-2 gap-12 p-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* ─────────────── text column ─────────────── */}
        <div>
          <h1 className="text-6xl font-extrabold leading-tight mb-6">
            Hello, I’m <span className="text-brand">Arnold Kebaso</span>
          </h1>

          {/* floating / typed subtitle */}
          <p className="text-2xl font-semibold h-10 mb-6 text-brand">
            <Typewriter
              words={roles}
              loop={0}               /* 0 = infinite */
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>

          <p className="mb-8 max-w-xl text-gray-300">
            I build scalable web, mobile &amp; IoT solutions—from real-time flood
            alerts to AI-driven mentorship platforms—always aiming for impact and clarity.
          </p>

          <div className="flex gap-6 text-4xl mb-8">
            <a
              href="https://github.com/ArnoldKebaso"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand"
            >
              <GitHubIcon fontSize="inherit" />
            </a>
            <a
              href="https://linkedin.com/in/arnold-kebaso-505982256/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand"
            >
              <LinkedInIcon fontSize="inherit" />
            </a>
          </div>

          <a
            href="/Arnold_Kebaso_Onchieku_CV.pdf"
            download
            className="inline-block bg-brand text-surface px-8 py-3 rounded-full font-semibold hover:bg-brand-dark transition"
          >
            Download CV
          </a>
        </div>

        {/* ─────────────── image column ─────────────── */}
        <motion.img
          src="/assets/headshot.webp"
          alt="Arnold Kebaso"
          className="rounded-3xl shadow-xl w-full object-cover"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onError={(e) => {
            /* hide img gracefully if the file is missing */
            e.currentTarget.style.display = 'none';
          }}
        />
      </motion.div>
    </section>
  );
}
