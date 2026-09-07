import { motion as Motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { projects } from '../../data/projectsData.js';

const ROLES = [
  'AI & ML Engineer',
  'Full-Stack Developer',
  'MERN Stack Specialist',
  'Data Science Enthusiast',
  'Problem Solver'
];
const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

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

      {/* Orbiting decorative planetary tech system - Western/Steampunk Astrolabe Style */}
      <div className="absolute top-1/2 right-[5%] xl:right-[8%] -translate-y-1/2 hidden lg:block pointer-events-none select-none">
        <div className="relative w-[460px] h-[460px] flex items-center justify-center">
          {/* Ambient background glow */}
          <div className="absolute inset-[15%] rounded-full bg-gradient-to-tr from-amber-600/10 via-amber-500/15 to-transparent blur-2xl" />

          {/* Outer Orbit Track (Radius: 210px) */}
          <div className="absolute w-[420px] h-[420px] rounded-full border border-dashed border-amber-500/30 shadow-[0_0_20px_rgba(200,155,60,0.12)]" />
          
          {/* Middle Orbit Track (Radius: 155px) */}
          <div className="absolute w-[310px] h-[310px] rounded-full border border-amber-600/35 shadow-[0_0_15px_rgba(212,118,60,0.10)]" />
          
          {/* Inner Safety Boundary Ring */}
          <div className="absolute w-[200px] h-[200px] rounded-full border border-amber-400/20" />

          {/* Outer Orbit Icons (4 icons evenly spaced on 210px radius) */}
          {[
            { icon: '🧠', name: 'AI / ML', color: '#a78bfa' },
            { icon: '⚛', name: 'React', color: '#38bdf8' },
            { icon: '🐍', name: 'Python', color: '#facc15' },
            { icon: '🍃', name: 'MongoDB', color: '#4ade80' },
          ].map((item, i) => (
            <div
              key={item.name}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
              style={{
                animation: `orbit 24s linear infinite`,
                animationDelay: `-${(24 / 4) * i}s`,
                '--radius': '210px',
              }}
            >
              <div
                className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-[#150e07] border border-amber-500/50 shadow-[0_0_15px_rgba(200,155,60,0.3)] backdrop-blur-md transition-transform hover:scale-110"
              >
                <span className="text-lg leading-none">{item.icon}</span>
                <span
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold tracking-wider uppercase whitespace-nowrap opacity-75"
                  style={{ color: item.color }}
                >
                  {item.name}
                </span>
              </div>
            </div>
          ))}

          {/* Middle Orbit Icons (3 icons evenly spaced on 155px radius, revolving reverse) */}
          {[
            { icon: '📊', name: 'Data / SHAP', color: '#60a5fa' },
            { icon: '🟢', name: 'Node.js', color: '#22c55e' },
            { icon: '☕', name: 'Java', color: '#f97316' },
          ].map((item, i) => (
            <div
              key={item.name}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
              style={{
                animation: `orbit 16s linear reverse infinite`,
                animationDelay: `-${(16 / 3) * i}s`,
                '--radius': '155px',
              }}
            >
              <div
                className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-[#150e07] border border-amber-600/60 shadow-[0_0_12px_rgba(212,118,60,0.35)] backdrop-blur-md transition-transform hover:scale-110"
              >
                <span className="text-base leading-none">{item.icon}</span>
                <span
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold tracking-wider uppercase whitespace-nowrap opacity-75"
                  style={{ color: item.color }}
                >
                  {item.name}
                </span>
              </div>
            </div>
          ))}

          {/* Core Center "D" Monogram Astrolabe Badge */}
          <div className="relative z-10 w-[124px] h-[124px] rounded-full p-[2px] bg-gradient-to-tr from-amber-600 via-amber-400 to-red-600 shadow-[0_0_40px_rgba(200,155,60,0.45)]">
            <div className="w-full h-full rounded-full bg-[#120b04] border border-amber-500/30 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(200,155,60,0.25),transparent_70%)]" />
              
              <span className="font-display font-black text-4xl text-gradient-warm leading-none drop-shadow-[0_2px_10px_rgba(200,155,60,0.5)]">
                D
              </span>
              <span className="text-[8px] font-mono uppercase tracking-[0.25em] text-amber-400/70 mt-1">
                AI · DEV
              </span>
            </div>
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
            Building intelligent full-stack systems — bridging <span className="text-gold-light font-semibold">Machine Learning & AI pipelines</span> (Python, XGBoost, SHAP) with <span className="text-sunset-light font-semibold">robust modern web architectures</span> (React, Node.js, MongoDB, Spring Boot).
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
                  <p className="font-mono text-[10px] text-muted/60 uppercase tracking-wider">AI & Software Engineer</p>
                </div>
              </div>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {['Python', 'Scikit-learn', 'React', 'Node.js', 'Spring Boot'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md bg-amber-700/10 border border-amber-700/15 font-mono text-[9px] font-semibold text-gold-light uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Projects', value: String(projects.length) },
                  { label: 'Domains', value: 'AI + Web' },
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
