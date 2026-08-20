import { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#about',     label: 'About'    },
  { href: '#projects',  label: 'Projects'  },
  { href: '#skills',    label: 'Skills'    },
  { href: '#education', label: 'Education' },
  { href: '#contact',   label: 'Contact'   },
];

const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

const Navbar = () => {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#070412]/90 backdrop-blur-2xl border-b border-violet-500/10'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2" data-cursor>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30 text-white font-bold text-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-violet-500/50">
              D
            </div>
            <span className="font-display text-lg font-bold text-white tracking-tight">
              eneshkar
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                data-cursor
                onClick={() => setActive(href)}
                className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 rounded-full ${
                  active === href
                    ? 'text-violet-300'
                    : 'text-[#c4b5fd]/70 hover:text-violet-300'
                }`}
              >
                <span className="relative z-10">{label}</span>
                {active === href && (
                  <Motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-violet-500/15 border border-violet-500/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}

            <a
              href={resumeHref}
              download="resume.pdf"
              data-cursor
              className="ml-4 btn-primary !text-[11px] !py-2 !px-5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            data-cursor
            className="md:hidden relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-violet-500/20 bg-violet-500/5"
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-5 bg-violet-300 transition-all duration-300 ${isOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`block h-px w-5 bg-violet-300 transition-all duration-300 ${isOpen ? 'opacity-0 translate-x-2' : ''}`} />
            <span className={`block h-px w-5 bg-violet-300 transition-all duration-300 ${isOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </button>
        </div>
      </Motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: 'rgba(7,4,18,0.97)', backdropFilter: 'blur(24px)' }}
          >
            {/* Decorative glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-violet-600/15 blur-[80px]" />

            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map(({ href, label }, i) => (
                <Motion.a
                  key={href}
                  href={href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-4xl font-black text-white/80 transition-colors hover:text-violet-300"
                >
                  {label}
                </Motion.a>
              ))}
              <Motion.a
                href={resumeHref}
                download="resume.pdf"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 + 0.05 }}
                onClick={() => setIsOpen(false)}
                data-cursor
                className="btn-primary mt-4"
              >
                Download Resume
              </Motion.a>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;