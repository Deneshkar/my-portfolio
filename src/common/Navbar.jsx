import { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#about',     label: 'About'     },
  { href: '#projects',   label: 'Projects'   },
  { href: '#skills',     label: 'Skills'     },
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
            ? 'py-3 bg-[#08111d]/88 backdrop-blur-xl border-b border-[#223042]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <a href="#" className="relative group flex items-center gap-3" data-cursor>
            <span className="font-display text-lg font-bold tracking-tight text-[#31d7ff] sm:text-xl">
              &lt;Deneshkar /&gt;
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                data-cursor
                className="text-[13px] text-[#c9d4e5] transition-colors duration-300 hover:text-[#31d7ff]"
              >
                {label}
              </a>
            ))}

            <a
              href={resumeHref}
              download="resume.pdf"
              data-cursor
              className="inline-flex items-center justify-center rounded-md border border-[#31d7ff] bg-[#31d7ff] px-4 py-2 text-xs font-semibold text-[#06111d] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Download CV
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            data-cursor
            className="md:hidden relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md border border-[#223042]"
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-5 bg-[#e9eef5] transition-all duration-300 ${isOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`block h-px w-5 bg-[#e9eef5] transition-all duration-300 ${isOpen ? 'opacity-0 translate-x-2' : ''}`} />
            <span className={`block h-px w-5 bg-[#e9eef5] transition-all duration-300 ${isOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </button>
        </div>
      </Motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[#08111d]/96 backdrop-blur-2xl md:hidden"
          >
            {navLinks.map(({ href, label }, i) => (
              <Motion.a
                key={href}
                href={href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setIsOpen(false)}
                className="font-display text-3xl font-bold text-[#e9eef5] transition-colors hover:text-[#31d7ff]"
              >
                {label}
              </Motion.a>
            ))}
            <a
              href={resumeHref}
              download="resume.pdf"
              onClick={() => setIsOpen(false)}
              data-cursor
              className="inline-flex items-center justify-center rounded-md border border-[#31d7ff] bg-[#31d7ff] px-5 py-3 text-xs font-semibold text-[#06111d]"
            >
              Download CV
            </a>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;