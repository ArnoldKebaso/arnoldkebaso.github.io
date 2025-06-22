import { projects } from '../../data/projects';
import { motion } from 'framer-motion';
import Card           from '@mui/material/Card';
import CardMedia      from '@mui/material/CardMedia';
import CardContent    from '@mui/material/CardContent';
import Typography     from '@mui/material/Typography';
import Button         from '@mui/material/Button';

export default function Projects(){
  return(
    <section id="projects" className="py-20 bg-surface/95">
      <motion.h2 className="text-4xl font-bold text-center mb-12"
        initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:.5}}
      >Latest Work</motion.h2>

      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
        {projects.map((p,i)=>(
          <motion.div key={p.title} whileHover={{y:-8}} transition={{type:'spring',stiffness:200}}>
            <Card sx={{bgcolor:'#1e2538',color:'white',display:'flex',flexDirection:'column',height:'100%'}}>
              <CardMedia component="img" height="160" image={p.img} alt={p.title}/>
              <CardContent sx={{flexGrow:1}}>
                <Typography variant="h6">{p.title}</Typography>
                <Typography variant="body2" sx={{opacity:.8}}>{p.blurb}</Typography>
              </CardContent>
              <Button href={p.live||p.repo} target="_blank"
                variant="contained"
                sx={{bgcolor:'brand.main','&:hover':{bgcolor:'brand.dark'},m:2}}
              >{p.live?'Live Site':'GitHub'}</Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
