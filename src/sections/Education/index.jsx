import { motion as Motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="border-b border-[#223042] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-[#31d7ff]"
        >
          // 04. Education
        </Motion.p>

        <Motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mt-3 text-[clamp(2rem,5vw,3.4rem)] font-display font-black leading-none text-[#f5f8fc]"
        >
          Academic Journey
        </Motion.h2>

        <Motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mt-10 overflow-hidden rounded-2xl border border-[#223042] bg-[#0d1521] shadow-[0_16px_50px_rgba(0,0,0,0.22)]"
        >
          <div className="border-b border-[#223042] bg-[linear-gradient(135deg,rgba(49,215,255,0.12),rgba(8,17,29,0.92)_60%)] p-6 md:p-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#31d7ff]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#31d7ff]" />
              Currently Enrolled
            </div>

            <h3 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-display font-black leading-tight text-[#f5f8fc]">
              BSc (Hons) in
              <span className="block text-[#31d7ff]">Software Engineering</span>
            </h3>

            <p className="mt-4 text-base text-[#9fb0c6]">
              Sri Lanka Institute of Information Technology
            </p>
            <p className="mt-1 text-sm text-[#9fb0c6]">
              Colombo, Sri Lanka
            </p>
          </div>

          <div className="grid gap-4 p-6 md:grid-cols-3 md:p-8">
            <div className="rounded-xl border border-[#223042] bg-[#08111d] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#31d7ff]">Batch</p>
              <p className="mt-3 text-lg font-semibold text-[#f5f8fc]">2024 — 2028</p>
            </div>

            <div className="rounded-xl border border-[#223042] bg-[#08111d] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#31d7ff]">Expected Graduation</p>
              <p className="mt-3 text-lg font-semibold text-[#f5f8fc]">2028</p>
            </div>

            <div className="rounded-xl border border-[#223042] bg-[#08111d] p-5">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#31d7ff]">Qualification</p>
              <p className="mt-3 text-lg font-semibold text-[#f5f8fc]">BSc Honours</p>
            </div>
          </div>
        </Motion.article>
      </div>
    </section>
  );
};

export default Education;