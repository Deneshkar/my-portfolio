import { motion as Motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Frontend',
    icon: '⚛️',
    items: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: '⚡',
    items: ['Node.js', 'Express.js', 'Spring Boot'],
  },
  {
    title: 'Database',
    icon: '🗄️',
    items: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Languages',
    icon: '💻',
    items: ['Java', 'Python', 'C', 'C++'],
  },
  {
    title: 'Mobile',
    icon: '📱',
    items: ['Flutter', 'Dart'],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    items: ['Git & GitHub', 'Figma', 'Postman', 'Docker', 'VS Code', 'IntelliJ IDEA'],
  },
];

const SkillCard = ({ title, icon, items, index }) => (
  <Motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.07 }}
    className="rounded-2xl border border-violet-500/10 bg-[#0e0920]/80 p-6"
  >
    <div className="flex items-center gap-3 mb-4">
      <span className="text-xl">{icon}</span>
      <h3 className="font-display text-lg font-bold text-white">{title}</h3>
    </div>

    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-lg border border-violet-500/15 bg-violet-500/5 px-3 py-1.5 text-[12px] font-medium text-[#c4b5fd]/80"
        >
          {item}
        </span>
      ))}
    </div>
  </Motion.article>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">

        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <p className="section-label mb-3">Expertise</p>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-none">
            Technical{' '}
            <span className="text-gradient-cool">Arsenal</span>
          </h2>
        </Motion.div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.title} {...group} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;