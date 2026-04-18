import { motion as Motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative py-40 bg-navy overflow-hidden">
      <div className="section-line" />

      {/* Ambient orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-accent3/6 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Number label */}
        <Motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-accent text-sm tracking-widest mb-6"
        >
          06. Contact
        </Motion.p>

        {/* Headline */}
        <Motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-[clamp(3rem,10vw,8rem)] leading-[0.88] text-cream mb-6"
        >
          LET'S<br />
          <span className="text-gradient">COLLABORATE</span>
        </Motion.h2>

        {/* Sub */}
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto font-sans text-cream/55 text-lg leading-relaxed mb-14"
        >
          Open to internships, freelance projects, and exciting engineering challenges.
          My inbox is always open — let's create something great together.
        </Motion.p>

        {/* Email CTA */}
        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-6"
        >
          <a
            href="mailto:deneshkar015@gmail.com"
            id="contact-email-btn"
            aria-label="Send an email to Deneshkar"
            data-cursor
            className="btn-primary text-base"
          >
            <span>Say Hello ↗</span>
          </a>

          {/* Email display */}
          <a
            href="mailto:deneshkar015@gmail.com"
            data-cursor
            className="font-mono text-sm text-cream/35 hover:text-accent transition-colors duration-300 tracking-widest"
          >
            deneshkar015@gmail.com
          </a>
        </Motion.div>

        {/* Social Links */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-8"
        >
          {[
            { href: 'https://github.com/Deneshkar', label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/deneshkar-punyamoorthy-450931350', label: 'LinkedIn' },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              data-cursor
              className="font-mono text-xs tracking-widest uppercase text-cream/40 hover:text-accent transition-colors duration-300 flex items-center gap-2"
            >
              {label}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Contact;