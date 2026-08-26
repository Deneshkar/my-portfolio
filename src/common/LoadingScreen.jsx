import { motion as Motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0a0806] overflow-hidden">
      {/* Warm ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-amber-800/8 blur-[120px]" />
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,8,6,0.85) 100%)' }}
      />

      {/* Main content */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative flex flex-col items-center"
      >
        {/* Top ornamental line */}
        <Motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-48 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-6"
        />

        {/* Top ornament diamond */}
        <Motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-4"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L18 12L12 22L6 12L12 2Z" stroke="#c89b3c" strokeWidth="1" opacity="0.6" />
            <circle cx="12" cy="12" r="2" fill="#c89b3c" opacity="0.4" />
          </svg>
        </Motion.div>

        {/* Main title */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-black text-parchment tracking-[0.15em] leading-none">
            DENESHKAR
          </h1>
        </Motion.div>

        {/* Ornamental divider */}
        <Motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-3 my-4"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/40" />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6L8 0Z" fill="#c89b3c" opacity="0.5" />
          </svg>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/40" />
        </Motion.div>

        {/* Subtitle */}
        <Motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.5em] text-gold/60">
            Software Engineer & Developer
          </p>
        </Motion.div>

        {/* Bottom ornamental line */}
        <Motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="w-48 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mt-6"
        />

        {/* Loading indicator */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          {/* Animated dots */}
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <Motion.div
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                className="w-1.5 h-1.5 rounded-full bg-gold/60"
              />
            ))}
          </div>

          <p className="font-mono text-[9px] uppercase tracking-[0.6em] text-gold/30">
            Loading
          </p>
        </Motion.div>
      </Motion.div>

      {/* Reveal overlay - splits open from center */}
      <Motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.0, delay: 1.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute inset-0 bg-[#0a0806] origin-top"
        style={{ transformOrigin: 'top' }}
      />
    </div>
  );
};

export default LoadingScreen;
