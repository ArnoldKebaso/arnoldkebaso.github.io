import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface">
      <motion.div
        className="container max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-100 mb-10">
          Get In Touch
        </h2>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6 text-gray-100"
        >
          <label className="block">
            <span className="mb-1 block">Name</span>
            <input
              required
              className="w-full rounded-lg bg-surface/70 p-3 ring-1 ring-white/10 focus:ring-brand outline-none"
            />
          </label>

          <label className="block">
            <span className="mb-1 block">Email</span>
            <input
              type="email"
              required
              className="w-full rounded-lg bg-surface/70 p-3 ring-1 ring-white/10 focus:ring-brand outline-none"
            />
          </label>

          <label className="block">
            <span className="mb-1 block">Message</span>
            <textarea
              rows={5}
              required
              className="w-full rounded-lg bg-surface/70 p-3 ring-1 ring-white/10 focus:ring-brand outline-none resize-y"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-brand py-3 font-semibold text-surface hover:bg-brand-dark transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
