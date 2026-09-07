import { motion as Motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'AI & Machine Learning',
    icon: '🧠',
    items: ['Python', 'Scikit-learn', 'XGBoost', 'SHAP (Explainable AI)', 'Pandas & NumPy', 'Streamlit', 'Data Preprocessing'],
  },
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
    items: ['Python', 'Java', 'JavaScript', 'C', 'C++'],
  },
  {
    title: 'Mobile',
    icon: '📱',
    items: ['Flutter', 'Dart'],
  },
  {
    title: 'Tools & DevOps',
    icon: '🛠️',
    items: ['Git & GitHub', 'Docker', 'Google Colab', 'Postman', 'VS Code', 'IntelliJ IDEA'],
  },
];

const SkillCard = ({ title, icon, items, index }) => (
  <Motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.07 }}
    className="rounded-2xl border border-amber-700/10 bg-[#1a1208]/80 p-6"
  >
    <div className="flex items-center gap-3 mb-4">
      <span className="text-xl">{icon}</span>
      <h3 className="font-sans text-lg font-bold text-parchment">{title}</h3>
    </div>

    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-lg border border-amber-700/15 bg-amber-700/5 px-3 py-1.5 text-[12px] font-medium text-muted/80"
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

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <p className="section-label mb-3">Expertise</p>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-black text-parchment leading-none">
            Technical{' '}
            <span className="text-gradient-cool">Arsenal</span>
          </h2>
        </Motion.div>

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
