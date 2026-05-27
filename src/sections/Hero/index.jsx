import { motion as Motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ROLES = ['MERN Stack Developer', 'Frontend Developer', 'Problem Solver'];
const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');

  useEffect(() => {
    const activeRole = ROLES[roleIndex];

    if (typedRole === activeRole) {
      const pauseTimer = setTimeout(() => {
        setTypedRole('');
        setRoleIndex((value) => (value + 1) % ROLES.length);
      }, 1300);

      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      setTypedRole(activeRole.slice(0, typedRole.length + 1));
    }, 70);

    return () => clearTimeout(timer);
  }, [roleIndex, typedRole]);

  return (
    <section className="relative overflow-hidden border-b border-[#223042] pt-28 pb-20 lg:pt-32 lg:pb-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <Motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-[#31d7ff]"
          >
            A Web Developer Portfolio
          </Motion.p>

          <Motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,8vw,5.8rem)] font-display font-black leading-[0.92] text-[#f5f8fc]"
          >
            Hi, I&apos;m
            <span className="block text-[#31d7ff]">Deneshkar</span>
          </Motion.h1>

          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-5 flex items-center gap-2 text-[clamp(1.1rem,2vw,1.6rem)] font-display font-semibold text-[#dbe6f1]"
          >
            <span>{typedRole || 'MERN S'}</span>
            <span className="inline-block h-6 w-[2px] bg-[#31d7ff] animate-pulse" />
          </Motion.div>

          <Motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
            className="mt-6 max-w-xl text-[15px] leading-7 text-[#9fb0c6]"
          >
            I build clean, responsive web experiences with React, Node.js, MongoDB, and modern UI systems.
            Focused on shipping polished work that feels fast, readable, and practical.
          </Motion.p>

          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#projects" data-cursor className="btn-primary">
              View My Work
            </a>
            <a href={resumeHref} download="resume.pdf" data-cursor className="btn-secondary">
              Download CV
            </a>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55 }}
            className="mt-8 flex items-center gap-4 text-[#c9d4e5]"
          >
            {[
              { label: 'GitHub', href: 'https://github.com/Deneshkar' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/deneshkar-punyamoorthy-450931350' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                data-cursor
                className="text-sm text-[#9fb0c6] transition-colors hover:text-[#31d7ff]"
              >
                {label}
              </a>
            ))}
          </Motion.div>
        </div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto mt-8 w-full max-w-[420px] lg:mt-40"
        >
          <div className="absolute inset-0 mx-auto h-56 w-56 rounded-full border border-[#31d7ff]/20" />
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#31d7ff]/10" />
          <div className="relative ml-auto w-full max-w-[330px] rounded-2xl border border-[#2a384b] bg-[#0d1521]/95 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <pre className="overflow-hidden text-[12px] leading-6 text-[#dce7f3]">
{`const developer = {
  name: 'Deneshkar',
  stack: ['MERN', 'Spring Boot'],
  focus: 'creating polished web apps',
  coding: () => 'coffee & logic',
};`}
            </pre>
          </div>
          <div className="absolute -bottom-6 left-6 right-6 h-10 rounded-full bg-[#31d7ff]/10 blur-2xl" />
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;