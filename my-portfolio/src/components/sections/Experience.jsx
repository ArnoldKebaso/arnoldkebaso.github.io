import { experience } from '../../data/experience';
import { motion } from 'framer-motion';

export default function Experience(){
  return(
    <section id="experience" className="py-16 bg-surface/90">
      <motion.h2 className="text-4xl font-bold text-center mb-12"
        initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:.5}}
      >Experience</motion.h2>

      <div className="container mx-auto space-y-8 p-4">
        {experience.map((e,i)=>(
          <motion.div key={i} className="bg-surface rounded-xl p-6 shadow-lg"
            initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.15}}
          >
            <h3 className="text-xl font-semibold">{e.role} @ {e.company}</h3>
            <p className="text-sm text-gray-400 mb-3">{e.period}</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              {e.bullets.map((b,j)=><li key={j}>{b}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
