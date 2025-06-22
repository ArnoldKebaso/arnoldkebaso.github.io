import { skills } from '../../data/skills';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Chart from 'chart.js/auto';

function Radial({ label, pct, color }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [label, ''],
        datasets: [{
          data: [pct, 100 - pct],
          backgroundColor: [color, '#2f374a'],
          borderWidth: 0
        }]
      },
      options: {
        cutout: '70%', responsive: true,
        plugins: { legend: { display: false }, tooltip: { enabled: false } }
      }
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <canvas ref={canvasRef} width="120" height="120" />
      <span className="mt-2">{label}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-surface">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: .5 }}
      >
        Skills
      </motion.h2>

      <div className="container mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {skills.map(s => <Radial key={s.label} {...s} />)}
      </div>
    </section>
  );
}
