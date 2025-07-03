import { useState } from 'react';
import { motion } from 'framer-motion';

/* replace with your Apps-Script endpoint, or keep env-var */
const ENDPOINT = "https://script.google.com/macros/s/AKfycbwXuhMpNjHac3fo0In4zqHburIpFlThJwraBBGT4Mm-xegwm6ug7kOUZuHHII5k_kbd2A/exec";

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | ok | err

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  /* send to Google Sheets */
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!ENDPOINT) return alert('Missing Google Sheet endpoint');
    try {
      setStatus('sending');
      await fetch(ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
      });
      setStatus('ok');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('err');
    }
  };

  return (
    <section id="contact" className="py-28 bg-surface relative overflow-hidden">
      {/* decorative bubble */}
      <div className="pointer-events-none absolute -bottom-40 right-1/2 h-[35rem] w-[50rem] translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />

      <motion.div
        className="relative z-10 container max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-100 mb-12">
          Get In Touch
        </h2>

        <form
          onSubmit={onSubmit}
          className="grid gap-8 bg-surface/80 backdrop-blur ring-1 ring-white/10 rounded-3xl p-8 shadow-lg"
        >
          {/* NAME + EMAIL side-by-side on md+ */}
          <div className="grid sm:grid-cols-2 gap-6">
            <label className="w-full">
              <span className="block mb-1 text-gray-300">Name</span>
              <input
                required
                name="name"
                value={form.name}
                onChange={onChange}
                className="w-full rounded-lg bg-surface/60 p-3 ring-1 ring-white/10 focus:ring-brand outline-none"
              />
            </label>

            <label className="w-full">
              <span className="block mb-1 text-gray-300">Email</span>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                className="w-full rounded-lg bg-surface/60 p-3 ring-1 ring-white/10 focus:ring-brand outline-none"
              />
            </label>
          </div>

          <label className="block">
            <span className="block mb-1 text-gray-300">Message</span>
            <textarea
              required
              rows={6}
              name="message"
              value={form.message}
              onChange={onChange}
              className="w-full rounded-lg bg-surface/60 p-3 ring-1 ring-white/10 focus:ring-brand outline-none resize-y text-gray-100 placeholder-gray-500"
            />
          </label>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="rounded-full bg-brand py-3 font-semibold text-surface hover:bg-brand-dark transition disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'ok' && (
            <p className="text-center text-brand">Thank you! I’ll reply soon.</p>
          )}
          {status === 'err' && (
            <p className="text-center text-red-400">
              Oops – something went wrong. Try again later.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
