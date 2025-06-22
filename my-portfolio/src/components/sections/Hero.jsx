import { motion } from 'framer-motion';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';

export default function Hero(){
  return(
    <section id="home" className="min-h-screen flex items-center hero-bg">
      <motion.div
        className="container mx-auto grid md:grid-cols-2 gap-12 p-4"
        initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.8}}
      >
        {/* text */}
        <div>
          <h1 className="text-6xl font-extrabold leading-tight mb-6">
            Hello, I’m <span className="text-brand">Arnold</span><br/>Kebaso
          </h1>
          <p className="text-2xl mb-6">
            Full-Stack Developer • AWS Cloud Practitioner
          </p>
          <p className="mb-8 max-w-xl">
            I build scalable web, mobile &amp; IoT solutions—from real-time flood alerts
            to AI-driven mentorship—for impact across Kenya and beyond.
          </p>
          <div className="flex gap-6 text-4xl mb-8">
            <a href="https://github.com/ArnoldKebaso" className="hover:text-brand" target="_blank"><GitHub/></a>
            <a href="https://linkedin.com/in/arnold-kebaso-505982256/" target="_blank" className="hover:text-brand"><LinkedIn/></a>
          </div>
          <a href="/Arnold_Kebaso_Onchieku_CV.pdf" download
            className="inline-block bg-brand text-surface px-8 py-3 rounded-full font-semibold hover:bg-brand-dark transition"
          >
            Download CV
          </a>
        </div>

        {/* photo */}
        <motion.img
          src="/assets/headshot.webp" alt="Arnold Kebaso"
          className="rounded-3xl shadow-xl"
          initial={{opacity:0,x:60}} animate={{opacity:1,x:0}} transition={{duration:.8}}
        />
      </motion.div>
    </section>
  );
}
