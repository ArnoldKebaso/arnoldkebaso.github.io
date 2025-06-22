import { motion } from 'framer-motion';

export default function About(){
  return(
    <section id="about" className="py-16 bg-surface">
      <motion.div
        className="container mx-auto grid md:grid-cols-2 gap-8 p-4"
        initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:.6}}
      >
        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="mb-4">
            I’m a graduant Computer Science student from Egerton University who loves
            turning complex problems into elegant code. Whether orchestrating Docker
            containers on AWS or decoding NB-IoT payloads, I focus on impact &amp; clarity.
          </p>
        </div>
        <img src="/assets/about.webp" alt="About" className="rounded-xl shadow-lg"/>
      </motion.div>
    </section>
  );
}
