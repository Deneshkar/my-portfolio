import { motion as Motion } from 'framer-motion';

const skills = [
  { name: 'React',        icon: '⚛',  color: '#61dafb', level: 90 },
  { name: 'JavaScript',  icon: 'JS', color: '#f7df1e', level: 88 },
  { name: 'TypeScript',  icon: 'TS', color: '#3178c6', level: 72 },
  { name: 'Python',      icon: 'Py', color: '#3776ab', level: 78 },
  { name: 'Java',        icon: 'Jv', color: '#f89820', level: 80 },
  { name: 'Node.js',     icon: '⬡',  color: '#68a063', level: 82 },
  { name: 'Spring Boot', icon: 'SB', color: '#6db33f', level: 75 },
  { name: 'MongoDB',     icon: '🍃', color: '#47a248', level: 78 },
  { name: 'MySQL',       icon: 'MY', color: '#00758f', level: 82 },
  { name: 'C',           icon: 'C',  color: '#a8b9cc', level: 70 },
  { name: 'C++',         icon: 'C+', color: '#00599c', level: 72 },
  { name: 'Express.js',  icon: '⚡', color: '#888888', level: 80 },
  { name: 'Next.js',     icon: '▲',  color: '#ffffff', level: 68 },
  { name: 'Tailwind CSS',icon: '🌊', color: '#38bdf8', level: 92 },
  { name: 'Git & GitHub',icon: '🔀', color: '#f05032', level: 85 },
  { name: 'Figma',       icon: '🎨', color: '#f24e1e', level: 65 },
];

const SkillCard = ({ name, icon, color, level, index }) => (
  <Motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -6 }}
    data-cursor
    className="glass-card rounded-xl p-6 flex flex-col items-center gap-4 group hover:border-accent/20 transition-all duration-300"
  >
    {/* Ring progress */}
    <div className="relative w-16 h-16">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
        <Motion.circle
          cx="28" cy="28" r="24"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 24}`}
          initial={{ strokeDashoffset: 2 * Math.PI * 24 }}
          whileInView={{ strokeDashoffset: 2 * Math.PI * 24 * (1 - level / 100) }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.06 + 0.3, ease: 'easeOut' }}
          style={{ filter: `drop-shadow(0 0 6px ${color}80)` }}
        />
      </svg>
      {/* Icon in center */}
      <div
        className="absolute inset-0 flex items-center justify-center font-bold text-lg"
        style={{ color }}
      >
        {icon}
      </div>
    </div>

    <p className="font-sans text-sm font-semibold text-cream/80 group-hover:text-cream transition-colors text-center">
      {name}
    </p>
    <p className="font-mono text-xs" style={{ color: `${color}aa` }}>
      {level}%
    </p>
  </Motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 bg-navy overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-accent2/4 blur-[120px]" />
      </div>

      {/* Section line */}
      <div className="section-line" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-end gap-6 mb-16">
          <div>
            <Motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-accent text-sm tracking-widest mb-3"
            >
              02. Skills
            </Motion.p>
            <Motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] text-cream"
            >
              CORE<br />
              <span className="text-gradient">EXPERTISE</span>
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

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;