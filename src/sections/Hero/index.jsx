import { motion as Motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const ROLES = ['MERN Stack Developer', 'Frontend Engineer', 'Problem Solver', 'Full-Stack Builder'];
const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

// Animated orbit tech icons
const TECH_ICONS = ['⚛', '🟢', '🍃', '☕', '🐳', '⚡'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef(null);

  // Typewriter effect with backspace
  useEffect(() => {
    const activeRole = ROLES[roleIndex];
    let timer;
    if (!isDeleting && typedRole === activeRole) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && typedRole === '') {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((v) => (v + 1) % ROLES.length);
      }, 0);
    } else {
      timer = setTimeout(() => {
        setTypedRole(isDeleting
          ? activeRole.slice(0, typedRole.length - 1)
          : activeRole.slice(0, typedRole.length + 1));
      }, isDeleting ? 45 : 75);
    }
    return () => clearTimeout(timer);
  }, [roleIndex, typedRole, isDeleting]);

  // Mouse parallax
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const move = (e) => {
      const { clientX, clientY } = e;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (clientX - cx) / cx;
      const dy = (clientY - cy) / cy;
      el.style.setProperty('--px', dx.toFixed(3));
      el.style.setProperty('--py', dy.toFixed(3));
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12"
    >
      {/* Hero-specific glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(217,70,239,0.06) 40%, transparent 70%)',
          transform: `translate(calc(-50% + calc(var(--px, 0) * 18px)), calc(-50% + calc(var(--py, 0) * 18px)))`,
        }}
      />

      {/* Orbiting decorative ring */}
      <div className="absolute top-1/2 right-[8%] -translate-y-1/2 hidden lg:block pointer-events-none">
        <div className="relative w-[420px] h-[420px]">
          {/* Rings */}
          <div className="absolute inset-0 rounded-full border border-violet-500/10" />
          <div className="absolute inset-[15%] rounded-full border border-fuchsia-500/8" />
          <div className="absolute inset-[30%] rounded-full border border-violet-400/10" />

          {/* Orbiting dots */}
          {TECH_ICONS.map((icon, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                animation: `orbit ${8 + i * 2}s linear ${i % 2 === 0 ? '' : 'reverse'} infinite`,
                '--radius': `${170 - i * 15}px`,
              }}
            >
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-base bg-[#0e0920]/80 border border-violet-500/20 shadow-lg shadow-violet-900/40 backdrop-blur-sm">
                {icon}
              </div>
            </div>
          ))}

          {/* Center avatar placeholder */}
          <div className="absolute inset-[38%] rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-display font-black text-2xl shadow-2xl shadow-violet-500/40">
            D
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-5 lg:px-8 w-full">
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Top label */}
          <Motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <span className="relative flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]">
              <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 opacity-75" />
            </span>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-emerald-400">
              Available for internship · 2026
            </span>
          </Motion.div>

          {/* Main heading */}
          <Motion.div variants={fadeUp}>
            <h1 className="font-display font-black leading-[0.9] text-[clamp(3.2rem,9vw,7rem)] text-white">
              Hi, I'm{' '}
              <span
                className="inline-block text-gradient"
                data-text="Deneshkar"
              >
                Deneshkar
              </span>
            </h1>
          </Motion.div>

          {/* Role typewriter */}
          <Motion.div
            variants={fadeUp}
            className="mt-6 flex items-center gap-3"
          >
            <div className="h-px w-8 bg-gradient-to-r from-violet-500 to-transparent" />
            <span className="font-display text-[clamp(1.1rem,2.5vw,1.7rem)] font-semibold text-[#c4b5fd]">
              {typedRole}
              <span className="inline-block w-[2px] h-[1.1em] bg-violet-400 ml-1 align-middle animate-blink" />
            </span>
          </Motion.div>

          {/* Description */}
          <Motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-[15px] leading-8 text-[#a78bfa]/80"
          >
            I craft <span className="text-violet-300 font-semibold">clean, performant</span> web experiences
            with React, Node.js, MongoDB, and Spring Boot. Passionate about turning ideas into polished,
            reliable applications that <span className="text-fuchsia-300 font-semibold">feel great</span> to use.
          </Motion.p>

          {/* CTA buttons */}
          <Motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" data-cursor className="btn-primary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View My Work
            </a>
            <a href={resumeHref} download="resume.pdf" data-cursor className="btn-secondary">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </Motion.div>

          {/* Social links */}
          <Motion.div variants={fadeUp} className="mt-10 flex items-center gap-5">
            {[
              { label: 'GitHub',   href: 'https://github.com/Deneshkar',   icon: 'GH' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/deneshkar-punyamoorthy-450931350', icon: 'LI' },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                data-cursor
                className="group flex items-center gap-2.5 text-[#7c3aed]/70 hover:text-violet-300 transition-colors text-sm"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-violet-500/20 bg-violet-500/5 font-mono text-[10px] font-bold group-hover:border-violet-500/40 group-hover:bg-violet-500/10 transition-all">
                  {icon}
                </span>
                {label}
              </a>
            ))}
            <span className="h-px w-12 bg-gradient-to-r from-violet-500/40 to-transparent" />
          </Motion.div>
        </Motion.div>

        {/* Code card (desktop) */}
        <Motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-10 right-6 lg:right-[3%] hidden lg:block"
        >
          <div className="relative w-[320px] rounded-2xl border border-violet-500/15 bg-[#0e0920]/90 backdrop-blur-xl shadow-2xl shadow-violet-900/30 overflow-hidden">
            {/* title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-violet-500/10 bg-[#110c28]/60">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-[10px] text-violet-400/50">developer.js</span>
            </div>
            <pre className="p-5 text-[12px] leading-6 font-mono">
              <span className="text-[#c084fc]">const</span>
              <span className="text-white"> developer </span>
              <span className="text-[#f472b6]">=</span>
              <span className="text-white"> {'{'}</span>{'\n'}
              <span className="text-[#67e8f9]">  name</span>
              <span className="text-white">: </span>
              <span className="text-[#86efac]">'Deneshkar'</span>
              <span className="text-white">,</span>{'\n'}
              <span className="text-[#67e8f9]">  stack</span>
              <span className="text-white">: </span>
              <span className="text-[#86efac]">['MERN', 'Spring Boot']</span>
              <span className="text-white">,</span>{'\n'}
              <span className="text-[#67e8f9]">  open</span>
              <span className="text-white">: </span>
              <span className="text-[#a5b4fc]">true</span>
              <span className="text-white">,</span>{'\n'}
              <span className="text-[#67e8f9]">  coffee</span>
              <span className="text-white">: </span>
              <span className="text-[#a5b4fc]">Infinity</span>
              <span className="text-white">,</span>{'\n'}
              <span className="text-white">{'}'}</span>
              <span className="text-[#f472b6]">;</span>
            </pre>
            {/* bottom glow */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-sky-500" />
          </div>
        </Motion.div>

        {/* Scroll indicator */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-violet-400/40">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-violet-500/40 to-transparent" />
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;