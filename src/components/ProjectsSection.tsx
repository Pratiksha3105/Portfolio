'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'EcoBuddy',
    subtitle: 'Smart Waste Management Platform',
    description: 'Flask-based AI platform classifying waste types and suggesting eco-friendly disposal methods using computer vision. Achieved ~80% classification accuracy.',
    tech: ['Python', 'Flask', 'OpenCV', 'HTML/CSS', 'JavaScript'],
    color: '#00ff88',
    gradient: 'from-green-500/20 to-cyan-500/10',
    icon: '♻️',
    github: 'https://github.com',
    live: '#',
    featured: true,
  },
  {
    title: 'Real-time Collab Editor',
    subtitle: 'CRDT-Powered AI Editor',
    description: 'Built with Next.js, Node.js, and Socket.IO featuring CRDT sync algorithms, MongoDB + Redis for persistence, and OpenAI API integration for intelligent writing assistance.',
    tech: ['Next.js', 'Socket.IO', 'MongoDB', 'Redis', 'OpenAI', 'CRDT'],
    color: '#9d00ff',
    gradient: 'from-purple-500/20 to-pink-500/10',
    icon: '✍️',
    github: 'https://github.com',
    live: '#',
    featured: true,
  },
  {
    title: 'Little Signs',
    subtitle: 'Sign Language AI Recognition',
    description: 'AI-based sign language recognition system using TensorFlow/Keras and OpenCV for real-time gesture translation. Includes a React web interface for accessibility.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Keras', 'Flask', 'React'],
    color: '#ff00aa',
    gradient: 'from-pink-500/20 to-red-500/10',
    icon: '🤟',
    github: 'https://github.com',
    live: '#',
    featured: true,
  },
  {
    title: 'Crypto API Scraper',
    subtitle: 'Real-time Data Analysis',
    description: 'Python pipeline scraping live cryptocurrency data, performing statistical analysis, cleaning, and generating interactive visualizations using pandas, NumPy, matplotlib, and seaborn.',
    tech: ['Python', 'pandas', 'NumPy', 'matplotlib', 'seaborn'],
    color: '#00f5ff',
    gradient: 'from-cyan-500/20 to-blue-500/10',
    icon: '₿',
    github: 'https://github.com',
    live: null,
    featured: false,
  },
  {
    title: 'Car Renta',
    subtitle: 'Car Booking System',
    description: 'Full-featured web application for car rentals with admin dashboard, user authentication, booking management, and database persistence via XAMPP/PHP/SQL.',
    tech: ['PHP', 'MySQL', 'XAMPP', 'HTML', 'CSS', 'JavaScript'],
    color: '#ffa500',
    gradient: 'from-orange-500/20 to-yellow-500/10',
    icon: '🚗',
    github: 'https://github.com',
    live: null,
    featured: false,
  },
];

function TiltCard({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (y - 0.5) * -15, y: (x - 0.5) * 15 });
    setGlare({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovering(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
      className="relative cursor-hover"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovering ? 1.02 : 1})`,
        transition: hovering ? 'transform 0.1s ease' : 'transform 0.4s ease',
      }}
    >
      <div
        className="relative h-full rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: `1px solid ${hovering ? project.color + '40' : 'rgba(255,255,255,0.07)'}`,
          boxShadow: hovering ? `0 20px 40px ${project.color}20, 0 0 0 1px ${project.color}20` : 'none',
          transition: 'border-color 0.3s, box-shadow 0.3s',
        }}
      >
        {/* Glare effect */}
        {hovering && (
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.06), transparent 60%)`,
            }}
          />
        )}

        {/* Gradient header */}
        <div
          className={`h-40 relative overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
        >
          <span className="text-6xl">{project.icon}</span>

          {/* Neon border bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
          />

          {/* Top-right badge */}
          {project.featured && (
            <div
              className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-mono"
              style={{
                background: `${project.color}20`,
                border: `1px solid ${project.color}40`,
                color: project.color,
                fontFamily: 'var(--font-mono)',
              }}
            >
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3
            className="text-xl font-bold text-white mb-1"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {project.title}
          </h3>
          <p
            className="text-sm mb-3 font-mono"
            style={{ color: project.color, fontFamily: 'var(--font-mono)' }}
          >
            {project.subtitle}
          </p>
          <p
            className="text-slate-400 text-sm leading-relaxed mb-5"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-xs font-mono"
                style={{
                  background: `${project.color}10`,
                  border: `1px solid ${project.color}25`,
                  color: project.color,
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <motion.a
              href={project.github}
              target="_blank"
              className="flex-1 py-2.5 rounded-xl text-sm text-center font-medium flex items-center justify-center gap-2 cursor-hover"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#94a3b8',
                fontFamily: 'var(--font-body)',
              }}
              whileHover={{
                background: 'rgba(255,255,255,0.09)',
                color: '#fff',
              }}
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </motion.a>

            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                className="flex-1 py-2.5 rounded-xl text-sm text-center font-medium flex items-center justify-center gap-2 cursor-hover"
                style={{
                  background: `${project.color}15`,
                  border: `1px solid ${project.color}35`,
                  color: project.color,
                  fontFamily: 'var(--font-body)',
                }}
                whileHover={{
                  background: `${project.color}25`,
                  boxShadow: `0 0 15px ${project.color}30`,
                }}
              >
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background blobs */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: '#9d00ff' }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
        style={{ background: '#ff00aa' }}
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
            style={{ color: '#9d00ff', fontFamily: 'var(--font-mono)' }}
          >
            03. PROJECTS
          </span>
          <h2
            className="text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            What I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-slate-400 max-w-lg" style={{ fontFamily: 'var(--font-body)' }}>
            Real-world projects combining AI, full-stack engineering, and data science to solve meaningful problems.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <TiltCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
