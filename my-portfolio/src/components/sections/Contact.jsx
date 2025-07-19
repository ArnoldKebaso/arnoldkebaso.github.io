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

  const handleFocus = () => setIsFocused(true)
  const handleBlur = (e) => {
    setIsFocused(false)
    setHasValue(e.target.value.length > 0)
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
          placeholder=" "
          className={`w-full px-4 pt-6 pb-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 hover:border-gray-600/50 backdrop-blur-sm resize-none ${
            rows ? 'min-h-[120px]' : ''
          }`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder=" "
          className="w-full px-4 pt-6 pb-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 hover:border-gray-600/50 backdrop-blur-sm"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      )}
      <label className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${
        isFocused || hasValue 
          ? 'top-2 text-xs text-blue-400 font-medium transform scale-90' 
          : rows 
            ? 'top-4 text-gray-400 text-base'
            : 'top-1/2 -translate-y-1/2 text-gray-400 text-base'
      }`}>
        {label}
      </label>
      
      {/* Animated border effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 -z-10 blur-sm"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: isFocused ? 1 : 0,
          scale: isFocused ? 1 : 0.95
        }}
        transition={{ duration: 0.3 }}
      />
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
            className="text-center mb-12"
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
              I'm always excited to discuss new opportunities, collaborate on projects, 
              or simply chat about technology and innovation. Don't hesitate to reach out!
            </motion.p>
          </motion.div>
        </FloatingElement>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <FloatingElement delay={0.3}>
            <div className="space-y-8">
              <div className="grid gap-6">
                <ContactInfo
                  icon={EnvelopeIcon}
                  title="Email"
                  content="arnoldkebaso8@gmail.com"
                  delay={0.1}
                />
                <ContactInfo
                  icon={PhoneIcon}
                  title="Phone"
                  content="+254 758 132 658"
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
                <div className="flex gap-4 flex-wrap">
                  {[
                    { 
                      name: 'LinkedIn', 
                      url: 'https://linkedin.com/in/arnold-kebaso', 
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      )
                    },
                    { 
                      name: 'Twitter/X', 
                      url: 'https://x.com/arnoldonchi', 
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      )
                    },
                    { 
                      name: 'GitHub', 
                      url: 'https://github.com/ArnoldKebaso', 
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      )
                    },
                    { 
                      name: 'Instagram', 
                      url: 'https://instagram.com/arnoldkebaso', 
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      )
                    },
                    { 
                      name: 'Facebook', 
                      url: 'https://web.facebook.com/travis.nonini/', 
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      )
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:border-blue-500/50"
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
