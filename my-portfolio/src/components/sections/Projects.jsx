import { projects } from '../../data/projects';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CodeBracketIcon from '@heroicons/react/24/outline/CodeBracketIcon';

function Thumb({ img, alt }) {
  if (img) {
    return <CardMedia component="img" height="180" image={img} alt={alt} />;
  }
  return (
    <div className="flex h-44 items-center justify-center bg-surface/60">
      <CodeBracketIcon className="h-16 w-16 text-brand/80" />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-surface/95">
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-100 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Latest Work
      </motion.h2>

      <div className="container grid gap-10 sm:grid-cols-2 xl:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Card
              sx={{
                bgcolor: '#1e2538',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                borderRadius: '1rem',
              }}
            >
              <Thumb img={p.img} alt={p.title} />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600 }}>
                  {p.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ opacity: 0.8, fontSize: '0.9rem' }}
                >
                  {p.blurb}
                </Typography>
              </CardContent>

              <Button
                href={p.live || p.repo}
                target="_blank"
                variant="contained"
                sx={{
                  bgcolor: 'brand.main',
                  '&:hover': { bgcolor: 'brand.dark' },
                  m: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                }}
                fullWidth
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
