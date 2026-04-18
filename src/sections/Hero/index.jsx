import { motion as Motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import profileImg from '../../assets/profile.jpeg';

const ROLES = [
  'Full-Stack Developer',
  'UI/UX Enthusiast',
  'MERN Stack Builder',
  'Passionate Coder',
];

const Hero = () => {
  const [roleIdx, setRoleIdx]   = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  /* Typing effect */
  useEffect(() => {
    const current = ROLES[roleIdx];
    const atEnd = displayed === current;
    const atStart = displayed === '';
    const speed = isDeleting ? 45 : 80;

    const delay = !isDeleting && atEnd ? 1600 : speed;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (atEnd) {
          setIsDeleting(true);
          return;
        }
        setDisplayed(current.slice(0, displayed.length + 1));
        return;
      }

      if (atStart) {
        setIsDeleting(false);
        setRoleIdx((prev) => (prev + 1) % ROLES.length);
        return;
      }

      setDisplayed(current.slice(0, displayed.length - 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, roleIdx]);

  return (
    <section className="relative w-full min-h-screen bg-navy flex items-center overflow-hidden pt-24">
      {/* ── Ambient blobs ── */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent2/5 blur-[100px] animate-pulse-glow pointer-events-none" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-accent3/4 blur-[80px] animate-pulse-glow pointer-events-none" style={{ animationDelay: '4s' }} />

      {/* ── Grid decoration ── */}
      <div className="grid-line-v left-[10%]" />
      <div className="grid-line-v right-[10%]" />

      {/* ── Side social links ── */}
      <Motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="hidden xl:flex fixed left-8 bottom-0 z-30 flex-col items-center gap-4"
      >
        <a href="https://github.com/Deneshkar" target="_blank" rel="noreferrer" data-cursor
           style={{ writingMode: 'vertical-rl' }}
           className="text-cream/40 hover:text-accent transition-colors duration-300 font-mono text-[11px] tracking-widest py-2">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/deneshkar-punyamoorthy-450931350" target="_blank" rel="noreferrer" data-cursor
           style={{ writingMode: 'vertical-rl' }}
           className="text-cream/40 hover:text-accent transition-colors duration-300 font-mono text-[11px] tracking-widest py-2">
          LinkedIn
        </a>
        <div className="w-px h-20 bg-gradient-to-b from-accent/30 to-transparent" />
      </Motion.div>

      {/* ── Email side link ── */}
      <Motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="hidden xl:flex fixed right-8 bottom-0 z-30 flex-col items-center gap-4"
      >
        <a href="mailto:deneshkar015@gmail.com" data-cursor
           style={{ writingMode: 'vertical-rl' }}
           className="text-cream/40 hover:text-accent transition-colors duration-300 font-mono text-[11px] tracking-widest whitespace-nowrap py-2">
          deneshkar015@gmail.com
        </a>
        <div className="w-px h-20 bg-gradient-to-b from-accent/30 to-transparent" />
      </Motion.div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24 w-full">
        <div className="relative z-10 max-w-3xl xl:max-w-4xl pt-10 xl:pt-0">

          {/* Profile Mobile */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden flex items-center mb-10 mt-8"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 pointer-events-auto">
              {/* Rotating border */}
              <div className="absolute inset-0 rounded-full border border-accent/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-accent2/10 animate-[spin_30s_linear_infinite_reverse]" />
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-accent/5 blur-2xl" />
              {/* Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent/30 hover:border-accent/60 transition-colors duration-500">
                <img
                  src={profileImg}
                  alt="Deneshkar Punyamoorthy"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-accent/10 mix-blend-color-dodge pointer-events-none" />
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 glass-card border border-accent/20 rounded-full whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="font-mono text-xs text-cream/70">Available to work</span>
                </div>
              </div>
            </div>
          </Motion.div>

          {/* Greeting */}
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-accent text-sm tracking-widest mb-5"
          >
            Hi, my name is
          </Motion.p>

          {/* Name — Glitch */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            <h1
              className="glitch font-display font-black text-[clamp(2rem,10vw,6rem)] leading-[0.92] text-cream mb-2 w-fit pr-2 md:pr-10 inline-block"
              data-text="Deneshkar"
            >
              Deneshkar
            </h1>
            <br />
            <h1 className="font-display font-black text-[clamp(2rem,10vw,6rem)] leading-[0.92] text-gradient mb-8 w-fit pr-2 md:pr-10 inline-block">
              Punyamoorthy
            </h1>
          </Motion.div>

          {/* Typing role */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-2 md:gap-3 mb-8"
          >
            <span className="text-[clamp(1rem,3vw,1.75rem)] font-display text-cream/60">
              &nbsp;
            </span>
            <span className="text-[clamp(1rem,3vw,1.75rem)] font-display text-accent type-cursor">
              {displayed}
            </span>
          </Motion.div>

          {/* Description */}
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="max-w-2xl font-sans text-cream/55 text-base md:text-lg leading-relaxed mb-12"
          >
            Software Engineering undergraduate at{' '}
            <span className="text-accent font-semibold">SLIIT</span>, crafting high-performance,
            accessible web experiences with modern JavaScript ecosystems.
          </Motion.p>

          {/* CTAs */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects" data-cursor className="btn-primary">
              <span>Explore Work</span>
            </a>
            <a href="#contact" data-cursor className="btn-secondary">
              Get In Touch
            </a>
          </Motion.div>
        </div>

        {/* ── Profile image (right side) ── */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block z-0 pointer-events-none"
          style={{ right: '8%' }}
        >
          <div className="relative w-64 h-64 pointer-events-auto">
            {/* Rotating border */}
            <div className="absolute inset-0 rounded-full border border-accent/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute -inset-4 rounded-full border border-accent2/10 animate-[spin_30s_linear_infinite_reverse]" />
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-accent/5 blur-2xl" />
            {/* Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent/30 hover:border-accent/60 transition-colors duration-500">
              <img
                src={profileImg}
                alt="Deneshkar Punyamoorthy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-color-dodge pointer-events-none" />
            </div>
            {/* Status badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 glass-card border border-accent/20 rounded-full whitespace-nowrap">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-mono text-xs text-cream/70">Available to work</span>
              </div>
            </div>
          </div>
        </Motion.div>

        {/* ── Scroll indicator ── */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-6 lg:left-24 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-cream/30">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-accent/40 to-transparent" />
        </Motion.div>
      </div>

      {/* ── Marquee strip ── */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-cream/5 overflow-hidden py-3">
        <div className="flex animate-ticker whitespace-nowrap">
          {Array(8).fill(['React', '•', 'Node.js', '•', 'MongoDB', '•', 'TypeScript', '•', 'Next.js', '•', 'Tailwind', '•', 'Express', '•', 'Git']).flat().map((word, i) => (
            <span key={i} className={`font-mono text-[10px] tracking-widest uppercase mx-4 ${word === '•' ? 'text-accent/40' : 'text-cream/20'}`}>
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;