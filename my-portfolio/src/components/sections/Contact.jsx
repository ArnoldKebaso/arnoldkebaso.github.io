import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'
import { ClipLoader } from 'react-spinners'
import FloatingElement from '../ui/FloatingElement'
import GlowCard from '../ui/GlowCard'
import GlowButton from '../ui/GlowButton'
import GradientText from '../ui/GradientText'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwgJMgF_NAQF5jLkePD3v8mVXqgJMOJUcdqp9Fh5Oz9hB8oKrfWEu-1Obu5SHHWm_Ap/exec'

const AnimatedInput = ({ label, type = 'text', name, placeholder, rows, required, onChange }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)

  const handleChange = (e) => {
    setHasValue(e.target.value.length > 0)
    if (onChange) onChange(e)
  }

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {rows ? (
        <textarea
          name={name}
          rows={rows}
          required={required}
          placeholder={placeholder}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 hover:border-gray-600/50 backdrop-blur-sm"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 hover:border-gray-600/50 backdrop-blur-sm"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleChange}
        />
      )}
      <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${
        isFocused || hasValue 
          ? 'top-2 text-xs text-blue-400 font-medium' 
          : 'top-1/2 -translate-y-1/2 text-gray-400'
      }`}>
        {label}
      </label>
    </motion.div>
  )
}

const ContactInfo = ({ icon: Icon, title, content, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    <GlowCard className="p-6 bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 group hover:border-blue-500/30 transition-all duration-300">
      <motion.div 
        className="flex items-center gap-4"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
            {content}
          </p>
        </div>
      </motion.div>
    </GlowCard>
  </motion.div>
)

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('loading')

    const formData = new URLSearchParams(new FormData(form)).toString()

    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData,
      })
      const json = await res.json()

      if (json.result === 'success') {
        form.reset()
        setFormData({ name: '', email: '', message: '' })
        setStatus('success')
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        console.error('Sheets error:', json.error)
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <FloatingElement delay={0.1}>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <GradientText 
              text="Let's Connect" 
              className="text-4xl md:text-6xl font-bold mb-6"
            />
            <motion.p 
              className="text-gray-400 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to bring your ideas to life? Let's start a conversation and create something amazing together.
            </motion.p>
          </motion.div>
        </FloatingElement>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <FloatingElement delay={0.3}>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  <GradientText text="Get in Touch" />
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, collaborate on projects, 
                  or simply chat about technology and innovation. Don't hesitate to reach out!
                </p>
              </motion.div>

              <div className="grid gap-6">
                <ContactInfo
                  icon={EnvelopeIcon}
                  title="Email"
                  content="hello@arnoldkebaso.dev"
                  delay={0.1}
                />
                <ContactInfo
                  icon={PhoneIcon}
                  title="Phone"
                  content="+254 712 345 678"
                  delay={0.2}
                />
                <ContactInfo
                  icon={MapPinIcon}
                  title="Location"
                  content="Nairobi, Kenya"
                  delay={0.3}
                />
              </div>

              {/* Social links */}
              <motion.div
                className="pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {[
                    { name: 'GitHub', url: 'https://github.com/ArnoldKebaso', icon: '🐙' },
                    { name: 'LinkedIn', url: 'https://linkedin.com/in/arnold-kebaso', icon: '💼' },
                    { name: 'Twitter', url: 'https://twitter.com/arnoldkebaso', icon: '🐦' },
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 rounded-xl flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:border-blue-500/50"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </FloatingElement>

          {/* Enhanced Contact Form */}
          <FloatingElement delay={0.5}>
            <GlowCard className="p-8 bg-gray-800/30 backdrop-blur-lg border border-gray-700/50">
              <motion.form
                onSubmit={onSubmit}
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.h3
                  className="text-2xl font-bold text-white mb-6 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <GradientText text="Send a Message" />
                </motion.h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <AnimatedInput
                      label="Your Name"
                      name="name"
                      placeholder="John Doe"
                      required
                      onChange={handleInputChange}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <AnimatedInput
                      label="Your Email"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      onChange={handleInputChange}
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <AnimatedInput
                    label="Your Message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    onChange={handleInputChange}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <GlowButton
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 text-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300"
                  >
                    <AnimatePresence mode="wait">
                      {status === 'loading' ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex items-center gap-2"
                        >
                          <ClipLoader size={20} color="#ffffff" />
                          <span>Sending...</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="send"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex items-center gap-2"
                        >
                          <PaperAirplaneIcon className="w-5 h-5" />
                          <span>Send Message</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </GlowButton>
                </motion.div>
              </motion.form>

              {/* Enhanced status messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center gap-3"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircleIcon className="w-6 h-6 text-green-400" />
                    </motion.div>
                    <div>
                      <h4 className="text-green-400 font-semibold">Message Sent!</h4>
                      <p className="text-green-300 text-sm">Thank you for reaching out. I'll get back to you soon!</p>
                    </div>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.9 }}
                    className="mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center gap-3"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <ExclamationTriangleIcon className="w-6 h-6 text-red-400" />
                    </motion.div>
                    <div>
                      <h4 className="text-red-400 font-semibold">Oops! Something went wrong</h4>
                      <p className="text-red-300 text-sm">Please try again later or contact me directly.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlowCard>
          </FloatingElement>
        </div>
      </div>
    </section>
  )
}
