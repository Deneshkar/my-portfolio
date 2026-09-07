import { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Systems...');

  useEffect(() => {
    // Stage-based realistic progress calculation - smooth cinematic pacing (~3.5s)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smooth pacing increments
        const increment = prev < 30 ? Math.floor(Math.random() * 3) + 2
          : prev < 70 ? Math.floor(Math.random() * 4) + 2
          : prev < 90 ? Math.floor(Math.random() * 3) + 1
          : 1;
        return Math.min(100, prev + increment);
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 25) {
      setStatusText('Initializing Core Architecture...');
    } else if (progress < 55) {
      setStatusText('Loading AI & ML Models...');
    } else if (progress < 85) {
      setStatusText('Rendering Design System...');
    } else if (progress < 100) {
      setStatusText('Preparing Experience...');
    } else {
      setStatusText('System Ready');
      const timer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <Motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0a0806] text-[#f5e6c8] overflow-hidden select-none"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(200,155,60,0.14)_0%,rgba(139,37,0,0.06)_45%,transparent_70%)] blur-2xl" />
      </div>

      {/* Western grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,155,60,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,155,60,0.6) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
        {/* Animated Central Emblem */}
        <Motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          {/* Rotating outer ring */}
          <div className="w-24 h-24 rounded-full border border-dashed border-amber-500/40 animate-rotate-slow flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border border-amber-600/30" />
          </div>

          {/* Central Monogram */}
          <div className="absolute inset-0 m-auto w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#c89b3c] via-[#b33a00] to-[#8b2500] shadow-[0_0_30px_rgba(200,155,60,0.45)]">
            <div className="w-full h-full rounded-full bg-[#120b04] flex items-center justify-center">
              <span className="font-display font-black text-2xl text-gradient-warm leading-none">
                D
              </span>
            </div>
          </div>
        </Motion.div>

        {/* Brand Name */}
        <Motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-2"
        >
          <h1 className="font-display text-2xl sm:text-3xl font-black tracking-[0.25em] text-parchment leading-none">
            DENESHKAR
          </h1>
        </Motion.div>

        {/* Subtitle / Role */}
        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-mono text-[10px] uppercase tracking-[0.35em] text-amber-400/80 mb-8"
        >
          AI & Software Engineer
        </Motion.p>

        {/* Progress Bar Container */}
        <div className="w-64 sm:w-72">
          {/* Top progress metrics */}
          <div className="flex justify-between items-center text-[10px] font-mono text-muted/70 mb-2">
            <span className="tracking-wider uppercase">{statusText}</span>
            <span className="text-amber-400 font-bold">{progress}%</span>
          </div>

          {/* Bar track */}
          <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-amber-950/40 border border-amber-700/25 p-[1px]">
            <Motion.div
              className="h-full rounded-full bg-gradient-to-r from-gold via-sunset to-rust shadow-[0_0_12px_rgba(200,155,60,0.8)] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Bottom micro quote */}
        <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.3em] text-muted/40">
          Crafting Intelligent Experiences
        </p>
      </div>
    </Motion.div>
  );
};

export default LoadingScreen;
