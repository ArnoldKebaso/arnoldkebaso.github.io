import { skills } from '../../data/skills';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

function Ring({pct,label}){
  return(
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <div
          className="absolute inset-0 rounded-full"
          style={{background:`conic-gradient(#18e8ff ${pct*3.6}deg,#2f374a 0deg)`}}
        />
        <div className="absolute inset-2 rounded-full bg-surface"/>
        <span className="absolute inset-0 flex items-center justify-center font-semibold">{pct}%</span>
      </div>
      <p className="mt-3">{label}</p>
    </div>
  );
}

export default function Skills(){
  return(
    <section id="skills" className="py-20 bg-surface">
      <motion.h2 className="text-4xl font-bold text-center mb-12"
        initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:.5}}
      >Skills</motion.h2>

      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
        {skills.map((s,i)=>(
          <motion.div key={s.label} initial={{opacity:0,scale:.8}}
            whileInView={{opacity:1,scale:1}} transition={{delay:i*0.1}}
          >
            <Ring {...s}/>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
