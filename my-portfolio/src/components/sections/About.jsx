import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-800">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <p className="mb-4">
          I have completed my B.Sc in Computer Science at Egerton University. Over the past 3&nbsp;years
          I’ve interned at SpearheadINC decoding NB-IoT data, tested software at Applause uTest,
          and led my award-winning Flood Alert &amp; Monitoring System (2nd Runner-Up, Kenya Red Cross Symposium).
        </p>
        <p className="mb-4">
          My strengths lie in full-stack development (React, Node, NestJS), database optimisation
          (MySQL, PostgreSQL), CI/CD automation (Jenkins, Docker, Kubernetes) and cloud deployments on AWS.
        </p>
        <a
          href="#skills"
          className="inline-block bg-cyan-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-cyan-500 transition"
        >
          See My Skills
        </a>
      </motion.div>
    </section>
  );
}
