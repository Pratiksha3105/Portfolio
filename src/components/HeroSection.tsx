'use client';

import { Suspense, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import dynamic from 'next/dynamic';

const Canvas = dynamic(() => import('@react-three/fiber').then(m => m.Canvas), { ssr: false });
const ParticleField = dynamic(() => import('./ParticleField'), { ssr: false });

const stats = [
  { value: '8.15', label: 'CGPA', suffix: '' },
  { value: '5', label: 'Projects', suffix: '+' },
  { value: '4', label: 'Hackathons', suffix: '+' },
  { value: '2', label: 'Internships', suffix: '' },
];

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
          <Suspense fallback={null}>
            <ParticleField />
          </Suspense>
        </Canvas>
      </div>

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00f5ff, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #9d00ff, transparent)' }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ff00aa, transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono border"
              style={{
                background: 'rgba(0,245,255,0.05)',
                borderColor: 'rgba(0,245,255,0.2)',
                color: '#00f5ff',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Internships & Hackathons
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-6xl lg:text-8xl font-bold leading-none mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-white">Pratiksha</span>
              <br />
              <span className="gradient-text">Ubale</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl lg:text-2xl mb-6 font-medium"
              style={{ fontFamily: 'var(--font-mono)', color: '#94a3b8' }}
            >
              <span style={{ color: '#00f5ff' }}>$ </span>
              <TypeAnimation
                sequence={[
                  'AI/ML Engineer',
                  1500,
                  'Full Stack Developer',
                  1500,
                  'Data Science Enthusiast',
                  1500,
                  'Hackathon Champion',
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              <span className="animate-pulse" style={{ color: '#00f5ff' }}>_</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Computer Engineering undergrad at AISSMS IOIT Pune. Building intelligent systems at the intersection of AI, ML, and full-stack engineering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-8 py-3.5 rounded-xl font-semibold text-sm cursor-hover flex items-center gap-2"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,245,255,0.15) 0%, rgba(157,0,255,0.15) 100%)',
                  border: '1px solid rgba(0,245,255,0.4)',
                  color: '#00f5ff',
                  fontFamily: 'var(--font-body)',
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(0,245,255,0.4), 0 0 60px rgba(0,245,255,0.15)',
                  borderColor: 'rgba(0,245,255,0.7)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                View Projects
              </motion.a>

              <motion.a
                href="mailto:pratikshaubale05@gmail.com"
                className="px-8 py-3.5 rounded-xl font-semibold text-sm cursor-hover flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  fontFamily: 'var(--font-body)',
                }}
                whileHover={{
                  scale: 1.05,
                  background: 'rgba(255,255,255,0.07)',
                  borderColor: 'rgba(255,255,255,0.2)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-4 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: i === 0 ? '#00f5ff' : i === 1 ? '#9d00ff' : i === 2 ? '#ff00aa' : '#00ff88',
                    }}
                  >
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs text-slate-500" style={{ fontFamily: 'var(--font-mono)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: 3D Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative"
            >
              {/* Holographic card */}
              <div
                className="relative w-80 rounded-3xl p-8 glass-strong"
                style={{
                  boxShadow: '0 0 40px rgba(0,245,255,0.15), 0 0 80px rgba(157,0,255,0.1)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Avatar placeholder */}
                <div
                  className="w-24 h-24 rounded-2xl mx-auto mb-6 flex items-center justify-center text-4xl font-bold relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,245,255,0.3), rgba(157,0,255,0.3))',
                    border: '2px solid rgba(0,245,255,0.4)',
                    fontFamily: 'var(--font-display)',
                    color: '#00f5ff',
                    boxShadow: '0 0 30px rgba(0,245,255,0.3)',
                  }}
                >
                  <span style={{ transform: 'translateZ(20px)' }}>PU</span>
                  {/* Shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
                </div>

                <h3
                  className="text-center text-xl font-bold text-white mb-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Pratiksha Ubale
                </h3>
                <p className="text-center text-sm text-slate-400 mb-6" style={{ fontFamily: 'var(--font-mono)' }}>
                  AISSMS IOIT Pune • CGPA 8.15
                </p>

                <div className="space-y-3">
                  {[
                    { label: 'Python / TensorFlow', pct: 88, color: '#00f5ff' },
                    { label: 'React / Next.js', pct: 82, color: '#9d00ff' },
                    { label: 'ML / Computer Vision', pct: 78, color: '#ff00aa' },
                    { label: 'Node.js / MongoDB', pct: 75, color: '#00ff88' },
                  ].map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-400" style={{ fontFamily: 'var(--font-mono)' }}>{skill.label}</span>
                        <span style={{ color: skill.color, fontFamily: 'var(--font-mono)' }}>{skill.pct}%</span>
                      </div>
                      <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: skill.color, boxShadow: `0 0 8px ${skill.color}` }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.pct}%` }}
                          transition={{ duration: 1, delay: 1 + i * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-6">
                  {[
                    { icon: 'github', href: 'https://github.com' },
                    { icon: 'linkedin', href: 'https://linkedin.com' },
                    { icon: 'mail', href: 'mailto:pratikshaubale05@gmail.com' },
                  ].map((social) => (
                    <motion.a
                      key={social.icon}
                      href={social.href}
                      target="_blank"
                      className="w-10 h-10 rounded-xl flex items-center justify-center cursor-hover"
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#94a3b8',
                      }}
                      whileHover={{
                        scale: 1.15,
                        color: '#00f5ff',
                        borderColor: 'rgba(0,245,255,0.4)',
                        background: 'rgba(0,245,255,0.1)',
                      }}
                    >
                      {social.icon === 'github' && (
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      )}
                      {social.icon === 'linkedin' && (
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      )}
                      {social.icon === 'mail' && (
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                        </svg>
                      )}
                    </motion.a>
                  ))}
                </div>

                {/* Decorative corners */}
                <div className="absolute top-3 left-3 w-4 h-4 border-l border-t" style={{ borderColor: 'rgba(0,245,255,0.5)' }} />
                <div className="absolute top-3 right-3 w-4 h-4 border-r border-t" style={{ borderColor: 'rgba(0,245,255,0.5)' }} />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-l border-b" style={{ borderColor: 'rgba(0,245,255,0.5)' }} />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b" style={{ borderColor: 'rgba(0,245,255,0.5)' }} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-hover"
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs text-slate-500 font-mono">scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
