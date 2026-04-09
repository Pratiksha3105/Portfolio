'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const highlights = [
  { icon: '🧠', title: 'AI & Machine Learning', desc: 'TensorFlow, PyTorch, scikit-learn, OpenCV for real-world intelligent systems' },
  { icon: '⚡', title: 'Full Stack Dev', desc: 'Next.js, React, Node.js, MongoDB — end-to-end product engineering' },
  { icon: '📊', title: 'Data Science', desc: 'Python, pandas, NumPy, matplotlib, Seaborn for data-driven insights' },
  { icon: '☁️', title: 'Cloud & Tools', desc: 'Git, Linux, SQL, PowerBI, Tableau, Jupyter Notebook workflows' },
];

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: '#00f5ff' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span
            className="text-xs font-mono mb-3 block"
            style={{ color: '#00f5ff', fontFamily: 'var(--font-mono)' }}
          >
            01. ABOUT ME
          </span>
          <h2
            className="text-5xl font-bold text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-5 text-slate-400 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              <p>
                I'm a <span className="text-white font-medium">Computer Engineering student</span> at AISSMS Institute of Information Technology, Pune (CGPA: 8.15), passionate about building intelligent software systems that solve real-world problems.
              </p>
              <p>
                My expertise spans across <span style={{ color: '#00f5ff' }}>AI/ML engineering</span>, full-stack web development, and data science. I've worked on projects ranging from sign language recognition using computer vision to real-time collaborative text editors with CRDT synchronization.
              </p>
              <p>
                Beyond code, I'm an active hackathon participant — recognized at national events like Smart India Hackathon, Microsoft Hack for Green Bharat, and NHAI Road Safety Hackathon.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Python', 'React', 'TensorFlow', 'Next.js', 'OpenCV', 'MongoDB'].map((tech) => (
                <motion.span
                  key={tech}
                  className="px-4 py-1.5 rounded-lg text-sm font-mono"
                  style={{
                    background: 'rgba(0,245,255,0.06)',
                    border: '1px solid rgba(0,245,255,0.15)',
                    color: '#00f5ff',
                    fontFamily: 'var(--font-mono)',
                  }}
                  whileHover={{
                    background: 'rgba(0,245,255,0.12)',
                    borderColor: 'rgba(0,245,255,0.4)',
                    scale: 1.05,
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <motion.a
              href="mailto:pratikshaubale05@gmail.com"
              className="mt-8 inline-flex items-center gap-2 text-sm cursor-hover"
              style={{ color: '#00f5ff', fontFamily: 'var(--font-mono)' }}
              whileHover={{ x: 5 }}
            >
              <span>Let's work together</span>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.a>
          </motion.div>

          {/* Right: Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl glass cursor-hover"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{
                  background: 'rgba(0,245,255,0.04)',
                  borderColor: 'rgba(0,245,255,0.2)',
                  y: -4,
                  boxShadow: '0 8px 30px rgba(0,245,255,0.1)',
                }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4
                  className="text-white font-semibold mb-2 text-sm"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {item.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
