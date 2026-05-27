const Footer = () => {
  return (
    <footer className="border-t border-[#223042] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-[#9fb0c6] md:flex-row lg:px-8">
        <a href="#" className="font-display text-lg font-bold tracking-tight text-[#31d7ff]">
          &lt;Deneshkar /&gt;
        </a>

        <p className="text-xs uppercase tracking-[0.3em] text-[#7f91a8]">
          © 2026 Deneshkar Punyamoorthy. Built with precision.
        </p>

        <div className="flex items-center gap-5 text-xs uppercase tracking-[0.25em] text-[#c9d4e5]">
          <a href="https://github.com/Deneshkar" target="_blank" rel="noreferrer" data-cursor className="hover:text-[#31d7ff]">GitHub</a>
          <a href="https://www.linkedin.com/in/deneshkar-punyamoorthy-450931350" target="_blank" rel="noreferrer" data-cursor className="hover:text-[#31d7ff]">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" data-cursor className="hover:text-[#31d7ff]">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;