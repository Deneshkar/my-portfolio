import { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#projects',   label: 'Projects'   },
  { href: '#skills',     label: 'Skills'     },
  { href: '#experience', label: 'Experience' },
  { href: '#education',  label: 'Education'  },
  { href: '#contact',    label: 'Contact'    },
];

const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

const Navbar = () => {
  const [isOpen,     setIsOpen]     = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
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
            ? 'py-3 glass border-b border-accent/10'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative group flex items-center gap-3" data-cursor>
            <div className="relative w-9 h-9 flex items-center justify-center border border-accent/40 group-hover:border-accent transition-colors duration-300">
              <span className="text-accent font-display font-black text-lg leading-none">D</span>
              <div className="absolute inset-0 bg-accent/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>
            <span className="hidden sm:block font-mono text-xs tracking-widest text-cream/50 group-hover:text-accent transition-colors duration-300 uppercase">
              Deneshkar
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }, i) => (
              <a
                key={href}
                href={href}
                data-cursor
                className="relative font-mono text-xs tracking-widest uppercase text-cream/60 hover:text-accent transition-colors duration-300 group"
              >
                <span className="text-accent/40 mr-1">0{i + 1}.</span>
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            <a
              href={resumeHref}
              download="resume.pdf"
              data-cursor
              className="btn-primary ml-4"
            >
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            data-cursor
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-cream transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-6 h-px bg-cream transition-all duration-300 ${isOpen ? 'opacity-0 translate-x-2' : ''}`} />
            <span className={`block w-6 h-px bg-cream transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </Motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{   opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 glass flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map(({ href, label }, i) => (
              <Motion.a
                key={href}
                href={href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setIsOpen(false)}
                className="font-display text-4xl font-bold text-cream/80 hover:text-accent transition-colors"
              >
                {label}
              </Motion.a>
            ))}
            <a
              href={resumeHref}
              download="resume.pdf"
              onClick={() => setIsOpen(false)}
              data-cursor
              className="btn-primary mt-2"
            >
              Resume
            </a>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;