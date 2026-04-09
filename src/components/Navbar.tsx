'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'glass-strong shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 cursor-hover"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold"
              style={{
                background: 'linear-gradient(135deg, rgba(0,245,255,0.2), rgba(157,0,255,0.3))',
                border: '1px solid rgba(0,245,255,0.4)',
                color: '#00f5ff',
                fontFamily: 'var(--font-display)',
              }}
            >
              PU
            </div>
            <span
              className="font-semibold text-white hidden sm:block"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Pratiksha<span className="text-cyan-400">.</span>
            </span>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="relative px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors cursor-hover"
                style={{ fontFamily: 'var(--font-body)' }}
                whileHover={{ y: -1 }}
              >
                <span className="relative z-10">{link.label}</span>
                <motion.span
                  className="absolute inset-0 rounded-lg"
                  style={{ background: 'rgba(0,245,255,0.07)' }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="mailto:pratikshaubale05@gmail.com"
              className="px-5 py-2 rounded-xl text-sm font-medium transition-all cursor-hover"
              style={{
                background: 'linear-gradient(135deg, rgba(0,245,255,0.15), rgba(157,0,255,0.15))',
                border: '1px solid rgba(0,245,255,0.3)',
                color: '#00f5ff',
                fontFamily: 'var(--font-body)',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 20px rgba(0,245,255,0.3)',
                borderColor: 'rgba(0,245,255,0.6)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-white block"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white block"
              animate={{ opacity: menuOpen ? 0 : 1 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white block"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mx-6 mt-2 rounded-2xl glass-strong p-4"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
