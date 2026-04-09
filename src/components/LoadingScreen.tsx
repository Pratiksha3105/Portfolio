'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);

  const phases = ['Initializing AI...', 'Loading Neural Nets...', 'Building Universe...'];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1.5;
      });
    }, 25);

    const phaseInterval = setInterval(() => {
      setPhase(p => (p + 1) % phases.length);
    }, 900);

    return () => {
      clearInterval(interval);
      clearInterval(phaseInterval);
    };
  }, []);

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Animated bg circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${(i + 1) * 120}px`,
              height: `${(i + 1) * 120}px`,
              border: `1px solid rgba(0,245,255,${0.1 - i * 0.015})`,
              left: '50%',
              top: '50%',
              x: '-50%',
              y: '-50%',
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      {/* Main loader */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
          className="mb-8 relative"
        >
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-bold"
            style={{
              background: 'linear-gradient(135deg, rgba(0,245,255,0.2), rgba(157,0,255,0.2))',
              border: '2px solid rgba(0,245,255,0.5)',
              boxShadow: '0 0 40px rgba(0,245,255,0.3)',
              fontFamily: 'var(--font-display)',
              color: '#00f5ff',
            }}
          >
            PU
          </div>

          {/* Orbiting dot */}
          <motion.div
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: '#ff00aa',
              boxShadow: '0 0 10px #ff00aa',
              top: '50%',
              left: '50%',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            transformTemplate={({ rotate }) =>
              `translate(-50%, -50%) rotate(${rotate}) translateX(54px)`
            }
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold mb-2 gradient-text"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Pratiksha Ubale
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.5 }}
          className="text-sm mb-10 text-slate-400 font-mono"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {phases[phase]}
        </motion.p>

        {/* Progress bar */}
        <div className="w-64 h-0.5 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #00f5ff, #9d00ff, #ff00aa)',
              width: `${progress}%`,
            }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <motion.p
          className="mt-3 text-xs font-mono text-slate-500"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {Math.min(Math.round(progress), 100)}%
        </motion.p>
      </div>
    </motion.div>
  );
}
