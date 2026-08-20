const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-violet-500/10 py-10 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-900/5 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-2" data-cursor>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white font-bold text-sm shadow-lg shadow-violet-500/25 transition-all group-hover:scale-110">
              D
            </div>
            <span className="font-display text-base font-bold text-white/70 group-hover:text-white transition-colors">
              Deneshkar
            </span>
          </a>

          {/* Center text */}
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-violet-400/30 text-center">
            © {year} Deneshkar Punyamoorthy · Built with React & Passion
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { label: 'GH', href: 'https://github.com/Deneshkar', title: 'GitHub' },
              { label: 'LI', href: 'https://www.linkedin.com/in/deneshkar-punyamoorthy-450931350', title: 'LinkedIn' },
              { label: 'TW', href: 'https://twitter.com', title: 'Twitter' },
            ].map(({ label, href, title }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={title}
                data-cursor
                className="flex h-8 w-8 items-center justify-center rounded-full border border-violet-500/15 bg-violet-500/5 font-mono text-[10px] font-bold text-violet-400/60 transition-all hover:border-violet-500/35 hover:text-violet-300 hover:bg-violet-500/10 hover:scale-110"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;