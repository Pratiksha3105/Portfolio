'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold"
              style={{
                background: 'linear-gradient(135deg, rgba(0,245,255,0.2), rgba(157,0,255,0.3))',
                border: '1px solid rgba(0,245,255,0.3)',
                color: '#00f5ff',
                fontFamily: 'var(--font-display)',
              }}
            >
              PU
            </div>
            <span className="text-slate-400 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Pratiksha Ubale · AI/ML & Full Stack
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {['GitHub', 'LinkedIn', 'Email'].map((link) => (
              <motion.a
                key={link}
                href={
                  link === 'Email'
                    ? 'mailto:pratikshaubale05@gmail.com'
                    : link === 'GitHub'
                    ? 'https://github.com/Pratiksha3105'
                    : 'https://www.linkedin.com/in/pratiksha-ubale-897b862a3/'
                }
                target={link !== 'Email' ? '_blank' : undefined}
                className="text-sm text-slate-500 hover:text-white transition-colors cursor-hover"
                style={{ fontFamily: 'var(--font-body)' }}
                whileHover={{ y: -1 }}
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p
            className="text-slate-600 text-xs"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            © {new Date().getFullYear()} Pratiksha Ubale.❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
