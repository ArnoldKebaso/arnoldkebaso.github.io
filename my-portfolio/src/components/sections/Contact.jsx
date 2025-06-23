import { motion } from 'framer-motion';

export default function Contact(){
  return(
    <section id="contact" className="py-16 bg-surface">
      <motion.div className="container mx-auto max-w-md p-4"
        initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:.6}}
      >
        <h2 className="text-4xl font-bold text-center mb-6">Get In Touch</h2>
        <form className="space-y-4" onSubmit={e=>e.preventDefault()}>
          <input placeholder="Name"   className="w-full p-3 rounded bg-surface/80 focus:outline-none"/>
          <input placeholder="Email"  className="w-full p-3 rounded bg-surface/80 focus:outline-none"/>
          <textarea rows="4" placeholder="Message" className="w-full p-3 rounded bg-surface/80 focus:outline-none"/>
          <button className="w-full bg-brand text-surface py-3 rounded-full font-semibold hover:bg-brand-dark transition">
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
