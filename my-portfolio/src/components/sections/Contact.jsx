// src/components/sections/Contact.jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ClipLoader from 'react-spinners/ClipLoader'
import FloatingElement from '../ui/FloatingElement'
import GradientText from '../ui/GradientText'
import GlowCard from '../ui/GlowCard'
import GlowButton from '../ui/GlowButton'

// your Apps-Script URL
const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxCBrj4vJsThwXiNd34UsjFEnVnYovApx2GD9rC1mVPGj5Ruz5jeqmJshRZE7YzjZiEbQ/exec'

export default function Contact() {
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget            // grab the form element
    setStatus('loading')

    // serialize form as x-www-form-urlencoded
    const formData = new URLSearchParams(new FormData(form)).toString()

    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData,
      })
      const json = await res.json()

      if (json.result === 'success') {
        form.reset()                         // reset the form
        setStatus('success')
      } else {
        console.error('Sheets error:', json.error)
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden">
      <motion.div
        className="container max-w-lg mx-auto bg-surface/50 ring-1 ring-white/10 backdrop-blur rounded-3xl p-8 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-100">
          Get In Touch
        </h2>

        <form onSubmit={onSubmit} className="grid gap-6 text-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label>
              <span className="text-gray-200 mb-1 block">Name</span>
              <input
                name="name"
                required
                placeholder="Your Name"
                className="
                  w-full rounded-lg bg-surface/70 p-3 ring-1 ring-white/10
                  text-gray-100 placeholder-gray-400
                  focus:ring-brand outline-none
                "
              />
            </label>

            <label>
              <span className="text-gray-200 mb-1 block">Email</span>
              <input
                name="email"
                type="email"
                required
                placeholder="you@domain.com"
                className="
                  w-full rounded-lg bg-surface/70 p-3 ring-1 ring-white/10
                  text-gray-100 placeholder-gray-400
                  focus:ring-brand outline-none
                "
              />
            </label>
          </div>

          <label>
            <span className="text-gray-200 mb-1 block">Message</span>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your message..."
              className="
                w-full rounded-lg bg-surface/70 p-3 ring-1 ring-white/10
                text-gray-100 placeholder-gray-400
                focus:ring-brand outline-none resize-y
              "
            />
          </label>

          <button
            type="submit"
            disabled={status === 'loading'}
            className={`
              flex items-center justify-center gap-2 w-full rounded-full
              bg-brand py-3 font-semibold text-surface transition
              ${status === 'loading' ? 'cursor-wait opacity-80' : 'hover:bg-brand-dark'}
            `}
          >
            <ClipLoader size={20} color="#ffffff" loading={status === 'loading'} />
            {status === 'loading' ? 'Sending…' : 'Send Message'}
          </button>
        </form>

        {status === 'success' && (
          <p className="text-center text-brand mt-4">
            🎉 Thank you! I’ll reply soon.
          </p>
        )}
        {status === 'error' && (
          <p className="text-center text-red-400 mt-4">
            ⚠️ Oops—something went wrong. Try again later.
          </p>
        )}
      </motion.div>
    </section>
  )
}
