import { projects } from '../../data/projects';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-surface/95">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: .5 }}
      >
        Latest Work
      </motion.h2>

      <div className="container mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <motion.div key={p.title} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 200 }}>
            <Card sx={{ bgcolor: '#1e2538', color: 'white', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia component="img" height="160" image={p.img} alt={p.title}/>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6">{p.title}</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>{p.blurb}</Typography>
              </CardContent>
              <Button
                href={p.live || p.repo} target="_blank"
                sx={{
                  bgcolor: 'brand.main', color: 'surface.main', m: 2,
                  ':hover': { bgcolor: 'brand.dark' }
                }}
                variant="contained"
              >
                {p.live ? 'Live Site' : 'GitHub'}
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
