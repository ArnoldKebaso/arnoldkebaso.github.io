import { projects } from '../../data/projects';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CodeBracketIcon from '@heroicons/react/24/outline/CodeBracketIcon';

function FallbackThumb() {
  return (
    <div className="flex h-40 items-center justify-center bg-surface/60">
      <CodeBracketIcon className="h-16 w-16 text-brand" />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-surface/95">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Latest Work
      </motion.h2>

      <div className="container grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
              }}
            >
              {p.img ? (
                <CardMedia component="img" height="160" image={p.img} alt={p.title} />
              ) : (
                <FallbackThumb />
              )}

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{p.title}</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
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
