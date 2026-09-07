import { motion as Motion } from 'framer-motion';

const milestones = [
  { year: '2024', event: 'Joined SLIIT', desc: 'Started BSc (Hons) Software Engineering program.' },
  { year: '2025', event: 'Full-Stack & AI Systems', desc: 'Engineered MERN platforms and end-to-end Machine Learning pipelines with SHAP explainability.' },
  { year: '2026', event: 'Seeking Internship', desc: 'Open to real-world AI & Software Engineering opportunities.' },
  { year: '2028', event: 'Graduation Target', desc: 'Expected completion of honours degree.' },
];

const Education = () => {
  return (
    <section id="education" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[400px] rounded-full bg-amber-900/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Education</p>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-black text-parchment leading-none">
            Academic{' '}
            <span className="text-gradient">Journey</span>
          </h2>
        </Motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-8">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-amber-700/15 bg-[#1a1208]/80 backdrop-blur-xl shadow-2xl"
          >
            <div
              className="relative p-8 pb-6 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(200,155,60,0.18) 0%, rgba(139,37,0,0.08) 50%, transparent 100%)' }}
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gold/15 blur-2xl" />

              <div className="flex items-center gap-2 mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold" />
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-gold-light">Currently Enrolled</span>
              </div>

              <h3 className="font-display font-black text-[clamp(1.8rem,4vw,2.8rem)] text-parchment leading-tight">
                BSc (Hons) in{' '}
                <span className="text-gradient">Software Engineering</span>
              </h3>
            </div>

            <div className="px-8 py-6 border-t border-amber-700/10">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-700/10 border border-amber-700/20 text-base">
                  🎓
                </div>
                <div>
                  <p className="font-semibold text-parchment text-sm">Sri Lanka Institute of Information Technology</p>
                  <p className="text-[12px] text-muted/60">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-0 border-t border-amber-700/10">
              {[
                { label: 'Batch', value: '2024' },
                { label: 'Year', value: '3rd' },
                { label: 'Graduating', value: '2028' },
              ].map(({ label, value }, i) => (
                <div
                  key={label}
                  className={`p-5 text-center ${i < 2 ? 'border-r border-amber-700/10' : ''}`}
                >
                  <p className="font-display text-2xl font-black text-gradient">{value}</p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.25em] text-muted/50">{label}</p>
                </div>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted/50 mb-7">Timeline</p>

            <div className="relative space-y-0">
              <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-gold/30 via-rust/20 to-transparent" />

              {milestones.map(({ year, event, desc }, i) => (
                <Motion.div
                  key={year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex gap-5 pb-8 last:pb-0"
                >
                  <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-amber-700/30 bg-[#1a1208] shadow-lg shadow-amber-900/30">
                    <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-gold to-sunset" />
                  </div>

                  <div className="pt-1.5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-[11px] font-bold text-gold-light">{year}</span>
                      <div className="h-px w-4 bg-gold/30" />
                    </div>
                    <h4 className="font-display font-bold text-parchment text-base">{event}</h4>
                    <p className="text-[13px] text-muted/60 mt-0.5">{desc}</p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
