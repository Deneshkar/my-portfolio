import { motion as Motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const ROLES = ['MERN Stack Developer', 'Frontend Engineer', 'Problem Solver', 'Full-Stack Builder'];
const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

const TECH_ICONS = ['⚛', '🟢', '🍃', '☕', '🐳', '⚡'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef(null);

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
      {/* Hero-specific warm glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,155,60,0.10) 0%, rgba(139,37,0,0.05) 40%, transparent 70%)',
          transform: `translate(calc(-50% + calc(var(--px, 0) * 18px)), calc(-50% + calc(var(--py, 0) * 18px)))`,
        }}
      />

      {/* Orbiting decorative ring - Western style */}
      <div className="absolute top-1/2 right-[8%] -translate-y-1/2 hidden lg:block pointer-events-none">
        <div className="relative w-[420px] h-[420px]">
          <div className="absolute inset-0 rounded-full border border-amber-700/10" />
          <div className="absolute inset-[15%] rounded-full border border-red-800/8" />
          <div className="absolute inset-[30%] rounded-full border border-orange-700/10" />

          {TECH_ICONS.map((icon, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                animation: `orbit ${8 + i * 2}s linear ${i % 2 === 0 ? '' : 'reverse'} infinite`,
                '--radius': `${170 - i * 15}px`,
              }}
            >
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-base bg-[#1a1208]/80 border border-amber-700/20 shadow-lg shadow-amber-900/40 backdrop-blur-sm">
                {icon}
              </div>
            </div>
          ))}

          <div className="absolute inset-[32%] rounded-full bg-gradient-to-br from-amber-600 to-red-700 flex items-center justify-center text-parchment font-display font-black text-3xl shadow-2xl shadow-amber-600/40 z-20 ring-4 ring-[#1a1208]/80">
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
          <Motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <span className="relative flex h-2.5 w-2.5 rounded-full bg-sage shadow-[0_0_10px_rgba(90,122,58,0.8)]">
              <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-sage opacity-75" />
            </span>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-sage">
              Available for internship · 2026
            </span>
          </Motion.div>

          <Motion.div variants={fadeUp}>
            <h1 className="font-display font-black leading-[0.9] text-[clamp(3.2rem,9vw,7rem)] text-parchment">
              Hi, I'm{' '}
              <span
                className="inline-block text-gradient"
                data-text="Deneshkar"
              >
                Deneshkar
              </span>
            </h1>
          </Motion.div>

          <Motion.div
            variants={fadeUp}
            className="mt-6 flex items-center gap-3"
          >
            <div className="h-px w-8 bg-gradient-to-r from-gold to-transparent" />
            <span className="font-display text-[clamp(1.1rem,2.5vw,1.7rem)] font-semibold text-muted">
              {typedRole}
              <span className="inline-block w-[2px] h-[1.1em] bg-gold ml-1 align-middle animate-blink" />
            </span>
          </Motion.div>

          <Motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-[15px] leading-8 text-muted/80"
          >
            I craft <span className="text-gold-light font-semibold">clean, performant</span> web experiences
            with React, Node.js, MongoDB, and Spring Boot. Passionate about turning ideas into polished,
            reliable applications that <span className="text-sunset-light font-semibold">feel great</span> to use.
          </Motion.p>

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
                className="group flex items-center gap-2.5 text-muted/60 hover:text-gold-light transition-colors text-sm"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-700/20 bg-amber-700/5 font-mono text-[10px] font-bold group-hover:border-amber-700/40 group-hover:bg-amber-700/10 transition-all">
                  {icon}
                </span>
                {label}
              </a>
            ))}
            <span className="h-px w-12 bg-gradient-to-r from-amber-700/40 to-transparent" />
          </Motion.div>
        </Motion.div>

        {/* Developer Profile Card (desktop) */}
        <Motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-10 right-6 lg:right-[3%] hidden lg:block"
        >
          <div className="relative w-[320px] rounded-2xl border border-amber-700/20 bg-[#1a1208]/90 backdrop-blur-xl shadow-2xl shadow-amber-900/30 overflow-hidden">
            {/* Top accent bar */}
            <div className="h-[3px] bg-gradient-to-r from-gold via-rust to-sunset" />

            <div className="p-6">
              {/* Profile row */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-600 to-red-700 flex items-center justify-center text-parchment font-display font-black text-xl shadow-lg shadow-amber-600/30 ring-2 ring-amber-700/30">
                    D
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-sage border-2 border-[#1a1208]" />
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-parchment">Deneshkar</p>
                  <p className="font-mono text-[10px] text-muted/60 uppercase tracking-wider">Software Engineer</p>
                </div>
              </div>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {['React', 'Node.js', 'MongoDB', 'Spring Boot'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md bg-amber-700/10 border border-amber-700/15 font-mono text-[9px] font-semibold text-gold-light uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Projects', value: '5+' },
                  { label: 'Stack', value: 'MERN' },
                  { label: 'Status', value: 'OPEN' },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center">
                    <p className="font-display text-lg font-black text-gradient leading-none">{value}</p>
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-muted/50 mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Motion.div>

        {/* Scroll indicator */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gold/40">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/40 to-transparent" />
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
