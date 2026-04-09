'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    label: 'Languages',
    color: '#00f5ff',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'C++', level: 72 },
      { name: 'SQL', level: 78 },
      { name: 'PHP', level: 60 },
    ],
  },
  {
    label: 'AI / ML',
    color: '#9d00ff',
    skills: [
      { name: 'TensorFlow / Keras', level: 82 },
      { name: 'PyTorch', level: 68 },
      { name: 'OpenCV', level: 80 },
      { name: 'scikit-learn', level: 78 },
      { name: 'pandas / NumPy', level: 88 },
    ],
  },
  {
    label: 'Web Dev',
    color: '#ff00aa',
    skills: [
      { name: 'React / Next.js', level: 85 },
      { name: 'Node.js', level: 76 },
      { name: 'MongoDB', level: 74 },
      { name: 'Socket.IO', level: 70 },
      { name: 'Tailwind CSS', level: 88 },
    ],
  },
];

const techIcons = [
  { name: 'Python', color: '#3776AB', bg: 'rgba(55,118,171,0.15)' },
  { name: 'React', color: '#61DAFB', bg: 'rgba(97,218,251,0.1)' },
  { name: 'TF', color: '#FF6F00', bg: 'rgba(255,111,0,0.1)' },
  { name: 'Node', color: '#339933', bg: 'rgba(51,153,51,0.1)' },
  { name: 'CV', color: '#5C3EE8', bg: 'rgba(92,62,232,0.1)' },
  { name: 'Next', color: '#ffffff', bg: 'rgba(255,255,255,0.08)' },
  { name: 'SQL', color: '#00758F', bg: 'rgba(0,117,143,0.1)' },
  { name: 'Git', color: '#F05032', bg: 'rgba(240,80,50,0.1)' },
];

export default function SkillsSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="skills" ref={ref} className="py-32 relative overflow-hidden">
      <div
        className="absolute top-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: '#00f5ff' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span
            className="text-xs font-mono mb-3 block"
            style={{ color: '#ff00aa', fontFamily: 'var(--font-mono)' }}
          >
            04. SKILLS
          </span>
          <h2
            className="text-5xl font-bold text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
        </motion.div>

        {/* Tech Icon Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16 overflow-hidden"
        >
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...techIcons, ...techIcons].map((icon, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl flex-shrink-0"
                style={{
                  background: icon.bg,
                  border: `1px solid ${icon.color}30`,
                }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: icon.color, boxShadow: `0 0 6px ${icon.color}` }}
                />
                <span
                  className="text-sm font-mono font-medium"
                  style={{ color: icon.color, fontFamily: 'var(--font-mono)' }}
                >
                  {icon.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + catIndex * 0.15 }}
              className="p-6 rounded-2xl glass"
              style={{ border: `1px solid ${cat.color}15` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}` }}
                />
                <h3
                  className="text-lg font-bold text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {cat.label}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-300" style={{ fontFamily: 'var(--font-body)' }}>
                        {skill.name}
                      </span>
                      <span
                        className="font-mono text-xs"
                        style={{ color: cat.color, fontFamily: 'var(--font-mono)' }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full relative overflow-hidden"
                        style={{
                          background: `linear-gradient(90deg, ${cat.color}aa, ${cat.color})`,
                          boxShadow: `0 0 8px ${cat.color}60`,
                        }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + catIndex * 0.15 + i * 0.08, ease: 'easeOut' }}
                      >
                        {/* Shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 p-6 rounded-2xl glass"
          style={{ border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-sm text-slate-500 mb-4 font-mono" style={{ fontFamily: 'var(--font-mono)' }}>
            // Additional tools & platforms
          </p>
          <div className="flex flex-wrap gap-3">
            {['PowerBI', 'Tableau', 'Jupyter', 'VSCode', 'Git', 'Linux', 'Canva', 'Excel', 'Postman', 'XAMPP', 'Redis', 'Docker'].map((tool) => (
              <motion.span
                key={tool}
                className="px-3 py-1.5 rounded-lg text-xs text-slate-400"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  fontFamily: 'var(--font-mono)',
                }}
                whileHover={{
                  color: '#00f5ff',
                  borderColor: 'rgba(0,245,255,0.3)',
                  background: 'rgba(0,245,255,0.05)',
                }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
