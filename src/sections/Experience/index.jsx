import { motion as Motion } from 'framer-motion';

const experiences = [
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2024 – Present',
    desc: 'Building modern, performance-first websites and web applications for clients. Delivering clean architectures, pixel-perfect UIs, and cutting-edge web standards.',
    tags: ['React', 'Node.js', 'TailwindCSS'],
    color: '#64ffda',
  },
  {
    role: 'Junior Developer',
    company: 'Collaborative Academic Projects',
    period: '2023 – 2024',
    desc: 'Led frontend and backend development lifecycles in team-based university environments. Built full-stack apps using React and Node.js while embracing Agile workflows.',
    tags: ['React', 'Node.js', 'MongoDB', 'Git'],
    color: '#bd93f9',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-32 bg-navy overflow-hidden">
      <div className="section-line" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/4 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-end gap-6 mb-20">
          <div>
            <Motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-accent text-sm tracking-widest mb-3"
            >
              04. Experience
            </Motion.p>
            <Motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] text-cream"
            >
              WHERE<br />
              <span className="text-gradient">I'VE WORKED</span>
            </Motion.h2>
          </div>
          <Motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 h-px bg-gradient-to-r from-accent/40 to-transparent mb-4 origin-left"
          />
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent2/30 to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-10 group"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[-6px] top-1.5 w-3 h-3 rounded-full border-2 border-navy transition-all duration-300 group-hover:scale-125"
                  style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}80` }}
                />

                {/* Period badge */}
                <p
                  className="font-mono text-xs tracking-widest uppercase mb-2"
                  style={{ color: `${exp.color}99` }}
                >
                  {exp.period}
                </p>

                {/* Role + Company */}
                <h3 className="font-display font-bold text-2xl md:text-3xl text-cream mb-1 leading-tight">
                  {exp.role}
                </h3>
                <p className="font-mono text-sm text-cream/40 uppercase tracking-wider mb-4">
                  @ {exp.company}
                </p>

                {/* Description */}
                <p className="font-sans text-cream/65 leading-relaxed mb-5">
                  {exp.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-3 py-1 rounded tracking-wider"
                      style={{ color: exp.color, background: `${exp.color}12`, border: `1px solid ${exp.color}25` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;