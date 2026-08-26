const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-amber-700/10 py-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-900/5 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="group flex items-center" data-cursor>
            <span className="font-display text-base font-bold tracking-tight transition-colors">
              <span className="text-parchment/70 group-hover:text-parchment">Deneshkar</span>
            </span>
          </a>

          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted/30 text-center">
            © {year} Deneshkar Punyamoorthy · Built with React & Passion
          </p>

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
                className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-700/15 bg-amber-700/5 font-mono text-[10px] font-bold text-muted/60 transition-all hover:border-gold/35 hover:text-gold-light hover:bg-amber-700/10 hover:scale-110"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;
