import { certs } from '../../data/certs';
import { motion } from 'framer-motion';

export default function Achievements(){
  return(
    <section id="achievements" className="py-16 bg-surface">
      <motion.h2 className="text-4xl font-bold text-center mb-12"
        initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:.5}}
      >Certifications</motion.h2>

      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {certs.map((c,i)=>(
          <motion.a key={c.name} href={c.link} target="_blank" rel="noreferrer"
            className="block bg-surface rounded-xl p-6 shadow-lg hover:shadow-brand/50 transition"
            initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.1}}
          >
            <p className="font-semibold text-brand mb-2">{c.name}</p>
            <p className="text-sm text-gray-400">View credential →</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
