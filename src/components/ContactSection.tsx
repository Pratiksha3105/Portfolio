'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const contactLinks = [
  {
    label: 'Email',
    value: 'pratikshaubale05@gmail.com',
    href: 'mailto:pratikshaubale05@gmail.com',
    color: '#00f5ff',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/pratiksha-ubale-897b862a3/',
    href: 'https://linkedin.com',
    color: '#0A66C2',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/pratikshaubale',
    href: 'https://github.com/Pratiksha3105',
    color: '#f0f6fc',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 9588415343',
    href: 'tel:+919588415343',
    color: '#00ff88',
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.23h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.15 6.15l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
];

export default function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const inputClass = `
    w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white
    placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.06]
    transition-all duration-300 text-sm
  `;

  return (
    <section id="contact" ref={ref} className="py-32 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #00f5ff, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-mono mb-3 block" style={{ color: '#ff00aa', fontFamily: 'var(--font-mono)' }}>
            06. CONTACT
          </span>
          <h2 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Open to internships, hackathon collaborations, and exciting projects. Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Get in touch
            </h3>
            <div className="space-y-4 mb-10">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl group cursor-hover"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{
                    background: `${link.color}08`,
                    borderColor: `${link.color}30`,
                    x: 4,
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${link.color}15`, color: link.color }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5" style={{ fontFamily: 'var(--font-mono)' }}>
                      {link.label}
                    </p>
                    <p className="text-sm text-white font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                      {link.value}
                    </p>
                  </div>
                  <motion.div
                    className="ml-auto"
                    style={{ color: link.color, opacity: 0 }}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </motion.div>
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(0,245,255,0.04)', border: '1px solid rgba(0,245,255,0.1)' }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">📍</span>
                <span className="text-white font-semibold text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                  Pune, Maharashtra, India
                </span>
              </div>
              <p className="text-slate-500 text-xs ml-9" style={{ fontFamily: 'var(--font-body)' }}>
                Open to remote opportunities & onsite internships
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-8 rounded-2xl glass-strong"
            style={{ border: '1px solid rgba(0,245,255,0.1)' }}
          >
            <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Send a message
            </h3>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 font-mono" style={{ fontFamily: 'var(--font-mono)' }}>
                    Your Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass}
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 font-mono" style={{ fontFamily: 'var(--font-mono)' }}>
                    Email
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass}
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-500 mb-1.5 font-mono" style={{ fontFamily: 'var(--font-mono)' }}>
                  Subject
                </label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship opportunity / Collaboration"
                  className={inputClass}
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>

              <div>
                <label className="block text-xs text-slate-500 mb-1.5 font-mono" style={{ fontFamily: 'var(--font-mono)' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  className={`${inputClass} resize-none`}
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>

              <motion.button
                onClick={handleSubmit}
                disabled={sending || sent}
                className="w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 cursor-hover"
                style={{
                  background: sent
                    ? 'linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,255,136,0.1))'
                    : 'linear-gradient(135deg, rgba(0,245,255,0.2) 0%, rgba(157,0,255,0.2) 100%)',
                  border: sent ? '1px solid rgba(0,255,136,0.4)' : '1px solid rgba(0,245,255,0.4)',
                  color: sent ? '#00ff88' : '#00f5ff',
                  fontFamily: 'var(--font-body)',
                }}
                whileHover={!sent && !sending ? {
                  boxShadow: '0 0 30px rgba(0,245,255,0.4)',
                  scale: 1.02,
                } : {}}
                whileTap={{ scale: 0.98 }}
              >
                {sending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-t-transparent rounded-full"
                      style={{ borderColor: '#00f5ff', borderTopColor: 'transparent' }}
                    />
                    Sending...
                  </>
                ) : sent ? (
                  <>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Send Message
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
