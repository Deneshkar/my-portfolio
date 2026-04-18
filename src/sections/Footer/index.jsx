const Footer = () => {
  return (
    <footer className="relative bg-navy border-t border-cream/5 py-10 overflow-hidden">
      {/* Subtle gradient line top */}
      <div className="section-line absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border border-accent/30 flex items-center justify-center">
            <span className="text-accent font-display font-black text-xs">D</span>
          </div>
          <p className="font-mono text-xs text-cream/30 tracking-widest uppercase">
            © 2026 Deneshkar Punyamoorthy
          </p>
        </div>

        <p className="font-mono text-xs text-cream/20 tracking-widest uppercase">
          Built with React + Tailwind + Framer Motion
        </p>

        <a
          href="#"
          className="font-mono text-xs text-cream/30 hover:text-accent transition-colors tracking-widest uppercase flex items-center gap-1"
        >
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;