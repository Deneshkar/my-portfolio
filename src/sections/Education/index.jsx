import { motion as Motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="relative py-32 bg-navy-light overflow-hidden">
      <div className="section-line" />

      {/* Ambient */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[400px] rounded-full bg-accent2/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-end gap-6 mb-16">
          <div>
            <Motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-accent text-sm tracking-widest mb-3"
            >
              05. Education
            </Motion.p>
            <Motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] text-cream"
            >
              MY<br />
              <span className="text-gradient">EDUCATION</span>
            </Motion.h2>
          </div>
          <Motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 h-px bg-gradient-to-r from-accent2/40 to-transparent mb-4 origin-left"
          />
        </div>

        {/* Education Card */}
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative group max-w-3xl"
        >
          {/* Gradient border wrapper */}
          <div className="relative p-px rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #64ffda22, #bd93f922, #ff79c611)' }}
          >
            <div className="relative glass-card rounded-2xl p-10 md:p-14 overflow-hidden">
              {/* Huge watermark */}
              <div className="absolute -right-6 -top-6 font-display font-black text-[9rem] text-cream/[0.03] leading-none select-none pointer-events-none">
                SLIIT
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Status */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="font-mono text-accent text-xs tracking-widest uppercase">
                    Currently Enrolled
                  </span>
                </div>

                <h3 className="font-display font-black text-3xl md:text-5xl text-cream leading-tight mb-4">
                  BSc (Hons) in<br />
                  <span className="text-gradient">Software Engineering</span>
                </h3>

                <p className="font-sans text-cream/60 text-lg mb-2">
                  Sri Lanka Institute of Information Technology
                </p>
                <p className="font-mono text-cream/35 text-sm tracking-widest uppercase mb-8">
                  Colombo, Sri Lanka
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="glass-card px-5 py-3 rounded-xl">
                    <p className="font-mono text-xs text-cream/40 tracking-widest uppercase mb-1">Batch</p>
                    <p className="font-display font-bold text-cream">2024 — 2028</p>
                  </div>
                  <div className="glass-card px-5 py-3 rounded-xl">
                    <p className="font-mono text-xs text-cream/40 tracking-widest uppercase mb-1">Expected Graduation</p>
                    <p className="font-display font-bold text-accent">2028</p>
                  </div>
                  <div className="glass-card px-5 py-3 rounded-xl">
                    <p className="font-mono text-xs text-cream/40 tracking-widest uppercase mb-1">Qualification</p>
                    <p className="font-display font-bold text-cream">BSc Honours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Education;