import { motion } from 'framer-motion';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Wave from '@mui/icons-material/Waves';   // fun placeholder for Twitter

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center hero-bg">
      <motion.div
        className="container mx-auto grid md:grid-cols-2 gap-14 items-center px-4"
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: .8 }}
      >
        {/* text */}
        <div>
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6">
            Hello, I’m <span className="text-brand">Arnold</span><br/>Kebaso
          </h1>

          <p className="text-2xl mb-6">
            Full-Stack&nbsp;Developer • AWS Cloud Practitioner • IoT Builder
          </p>

          <p className="max-w-xl mb-8">
            I craft scalable web, mobile and IoT solutions that make a positive impact—
            from real-time flood alerts to AI-driven mentorship platforms.
          </p>

          <div className="flex gap-6 text-4xl mb-8">
            <a href="https://github.com/ArnoldKebaso" target="_blank" rel="noreferrer" className="hover:text-brand"><GitHub fontSize="inherit" /></a>
            <a href="https://www.linkedin.com/in/arnold-kebaso-505982256/" target="_blank" rel="noreferrer" className="hover:text-brand"><LinkedIn fontSize="inherit" /></a>
            <Wave fontSize="inherit" className="opacity-40" />
          </div>

          <a
            href="/Arnold_Kebaso_Onchieku_CV.pdf" download
            className="inline-block bg-brand text-surface px-8 py-3 rounded-full font-semibold hover:bg-brand-dark transition"
          >
            Download CV
          </a>
        </div>

        {/* photo */}
        <motion.img
          src="/assets/headshot.webp"
          alt="Arnold Kebaso"
          className="rounded-2xl shadow-xl w-full"
          initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: .8 }}
        />
      </motion.div>
    </section>
  );
}
