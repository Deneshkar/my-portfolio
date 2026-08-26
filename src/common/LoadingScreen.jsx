import { motion as Motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#05030f] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-violet-600/10 blur-[100px] animate-pulse-slow" />
      </div>

      <Motion.div
        initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-6 relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Animated logo with 3D rings */}
        <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
          <Motion.div
            animate={{ rotateX: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-6 rounded-full border border-violet-500/20"
            style={{ transformStyle: 'preserve-3d' }}
          />
          <Motion.div
            animate={{ rotateY: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-4 rounded-full border border-fuchsia-500/15"
          />
          <Motion.div
            animate={{ rotateX: 360, rotateY: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-2 rounded-full border border-sky-500/10"
          />
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white font-display font-black text-2xl shadow-2xl shadow-violet-500/40 relative"
               style={{ transform: 'translateZ(20px)' }}>
            D
          </div>
        </div>

        {/* Loading bar with depth */}
        <div className="w-40 h-0.5 rounded-full bg-violet-500/10 overflow-hidden relative">
          <Motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full w-full bg-gradient-to-r from-transparent via-violet-400 to-transparent"
          />
          <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.3)]" />
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-violet-400/50">
          Loading
        </p>
      </Motion.div>

      {/* Split reveal overlay - will be animated out when loading completes */}
      <Motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.8, delay: 1.0, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 bg-[#05030f] origin-top"
        style={{ transformOrigin: 'top' }}
      />
    </div>
  );
};

export default LoadingScreen;
