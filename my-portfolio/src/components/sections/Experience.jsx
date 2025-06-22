    import { experience } from '../../data/experience';
    import { motion } from 'framer-motion';

    export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-surface/90">
        <motion.h2
            className="text-4xl sm:text-5xl font-extrabold text-center text-gray-100 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            Experience
        </motion.h2>

        <div className="container space-y-10">
            {experience.map((job, i) => (
            <motion.article
                key={job.role}
                className="rounded-2xl bg-surface/75 ring-1 ring-white/5 backdrop-blur p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
            >
                <header className="mb-3">
                <h3 className="text-lg sm:text-xl font-semibold text-brand">
                    {job.role} <span className="text-gray-300">@ {job.company}</span>
                </h3>
                <p className="text-sm text-gray-400">{job.period}</p>
                </header>

                <ul className="list-disc pl-5 space-y-2 text-gray-200 text-[0.95rem] sm:text-base leading-relaxed">
                {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                ))}
                </ul>
            </motion.article>
            ))}
        </div>
        </section>
    );
    }
