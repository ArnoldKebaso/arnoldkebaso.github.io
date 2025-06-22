import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <motion.div
        className="container mx-auto px-4 max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>
        <form onSubmit={e => e.preventDefault()} className="space-y-4">
          <input
            placeholder="Name"
            className="w-full px-4 py-2 bg-gray-800 rounded border border-gray-700 focus:border-cyan-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-gray-800 rounded border border-gray-700 focus:border-cyan-400"
            required
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full px-4 py-2 bg-gray-800 rounded border border-gray-700 focus:border-cyan-400"
            required
          />
          <button
            type="submit"
            className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-cyan-500 transition w-full"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
