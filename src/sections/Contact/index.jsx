import { motion as Motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="border-b border-[#223042] py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(2.2rem,6vw,4rem)] font-display font-black leading-none text-[#f5f8fc]"
        >
          Get In Touch
        </Motion.h2>

        <Motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#9fb0c6]"
        >
          I&apos;m open to internship opportunities for 2026. If you want to talk about a role, a project, or an idea, send a message.
        </Motion.p>

        <Motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-10 rounded-2xl border border-[#223042] bg-[#0d1521] p-5 text-left shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-[#9fb0c6]">Your Name</span>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-lg border border-[#223042] bg-[#08111d] px-4 py-3 text-sm text-[#f5f8fc] outline-none transition-colors placeholder:text-[#5f6f86] focus:border-[#31d7ff]"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-[#9fb0c6]">Email Address</span>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-lg border border-[#223042] bg-[#08111d] px-4 py-3 text-sm text-[#f5f8fc] outline-none transition-colors placeholder:text-[#5f6f86] focus:border-[#31d7ff]"
              />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-[#9fb0c6]">Message</span>
            <textarea
              rows="6"
              placeholder="Let's build something amazing..."
              className="w-full resize-none rounded-lg border border-[#223042] bg-[#08111d] px-4 py-3 text-sm text-[#f5f8fc] outline-none transition-colors placeholder:text-[#5f6f86] focus:border-[#31d7ff]"
            />
          </label>

          <button
            type="button"
            data-cursor
            className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[#31d7ff] px-5 py-3 text-sm font-semibold text-[#06111d] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </Motion.form>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-[#9fb0c6]">
          <a href="https://github.com/Deneshkar" target="_blank" rel="noreferrer" data-cursor className="hover:text-[#31d7ff]">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/deneshkar-punyamoorthy-450931350" target="_blank" rel="noreferrer" data-cursor className="hover:text-[#31d7ff]">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;