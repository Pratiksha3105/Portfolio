'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const achievements = [
  {
    title: 'Road Safety Hackathon',
    org: 'NHAI & HOAI — National Hackathon',
    result: 'Top 50 — Selected for 2nd Phase',
    year: '2024',
    color: '#00f5ff',
    icon: '🚦',
    badge: 'National',
  },
  {
    title: 'Smart India Hackathon 2025',
    org: 'Government of India',
    result: 'Qualified at College Level',
    year: '2025',
    color: '#ff8c00',
    icon: '🇮🇳',
    badge: 'SIH',
  },
  {
    title: 'Sinrem Hackathon',
    org: 'Sinrem — Inter-College Event',
    result: 'Runner-Up — Top 10 / 100+ Teams',
    year: '2024',
    color: '#9d00ff',
    icon: '🥈',
    badge: 'Runner-Up',
  },
  {
    title: 'Hack for Green Bharat',
    org: 'Microsoft',
    result: 'Top 40 — Selected for 2nd Phase',
    year: '2024',
    color: '#00ff88',
    icon: '🌿',
    badge: 'Microsoft',
  },
  {
    title: 'ML Internship',
    org: 'Internship Studio',
    result: 'Completed Machine Learning Internship',
    year: '2024',
    color: '#ff00aa',
    icon: '🎓',
    badge: 'Experience',
  },
  {
    title: 'Director of IT',
    org: 'CyberShield Committee, AISSMS IOIT',
    result: 'Leading information technology operations',
    year: '2023–Now',
    color: '#00f5ff',
    icon: '🛡️',
    badge: 'Leadership',
  },
];

const workshops = [
  { title: 'Innovation in Cyber Security', org: 'COEP, Pune', duration: '5-day workshop', color: '#00f5ff' },
  { title: 'ISRO — Exploring Earth', org: 'Through Chandrayaan', duration: 'Technical Workshop', color: '#9d00ff' },
];

export default function AchievementsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="achievements" ref={ref} className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00f5ff, #9d00ff, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-xs font-mono mb-3 block" style={{ color: '#00ff88', fontFamily: 'var(--font-mono)' }}>
            05. ACHIEVEMENTS
          </span>
          <h2 className="text-5xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
            Milestones & <span className="gradient-text">Wins</span>
          </h2>
        </motion.div>

        {/* Achievement Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative p-6 rounded-2xl overflow-hidden group cursor-hover"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: `1px solid rgba(255,255,255,0.06)`,
              }}
              whileHover={{
                borderColor: `${item.color}35`,
                background: `${item.color}06`,
                y: -4,
                boxShadow: `0 12px 40px ${item.color}15`,
              }}
            >
              {/* Corner accent */}
              <div
                className="absolute top-0 left-0 w-20 h-1 rounded-b-full"
                style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }}
              />

              {/* Year */}
              <div
                className="absolute top-4 right-4 text-xs font-mono px-2 py-0.5 rounded-md"
                style={{
                  background: `${item.color}15`,
                  color: item.color,
                  fontFamily: 'var(--font-mono)',
                  border: `1px solid ${item.color}25`,
                }}
              >
                {item.year}
              </div>

              <div className="text-4xl mb-4">{item.icon}</div>

              <div
                className="inline-block px-2 py-0.5 rounded-md text-xs font-mono mb-3"
                style={{
                  background: `${item.color}15`,
                  color: item.color,
                  border: `1px solid ${item.color}25`,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {item.badge}
              </div>

              <h3
                className="text-white font-bold text-base mb-1"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {item.title}
              </h3>
              <p className="text-slate-500 text-xs mb-3" style={{ fontFamily: 'var(--font-body)' }}>
                {item.org}
              </p>
              <p className="text-sm font-medium" style={{ color: item.color, fontFamily: 'var(--font-body)' }}>
                {item.result}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Workshops */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <h3
            className="text-xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Workshops & Learning
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {workshops.map((w, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 p-5 rounded-2xl glass cursor-hover"
                style={{ border: `1px solid ${w.color}20` }}
                whileHover={{ borderColor: `${w.color}45`, y: -2, background: `${w.color}05` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
                  style={{ background: `${w.color}15`, border: `1px solid ${w.color}30` }}
                >
                  🔬
                </div>
                <div>
                  <h4
                    className="text-white font-semibold text-sm mb-0.5"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {w.title}
                  </h4>
                  <p className="text-slate-500 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
                    {w.org} · {w.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
