import { motion as Motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Frontend',
    icon: '⌘',
    items: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: '◉',
    items: ['Node.js', 'Express.js', 'Spring Boot'],
  },
  {
    title: 'Database',
    icon: '◫',
    items: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Programming Languages',
    icon: '◌',
    items: ['Python', 'Java', 'C', 'C++'],
  },
  {
    title: 'Tools',
    icon: '⌁',
    items: ['Git & GitHub', 'Figma' , 'Postman', 'VS Code', 'IntelliJ IDEA' , 'Docker'],
  },
];

const SkillCard = ({ title, icon, items, index }) => (
  <Motion.article
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.35 }}
    transition={{ duration: 0.5, delay: index * 0.06 }}
    className="rounded-xl border border-[#223042] bg-[#0d1521] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.18)]"
  >
    <div className="flex items-center gap-3 text-[#31d7ff]">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#31d7ff]/25 bg-[#08111d] text-lg">
        {icon}
      </div>
      <h3 className="font-display text-2xl font-bold text-[#f5f8fc]">{title}</h3>
    </div>

    <ul className="mt-5 space-y-3 text-sm leading-6 text-[#c9d4e5]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#31d7ff]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </Motion.article>
);

const Skills = () => {
  return (
    <section id="skills" className="border-b border-[#223042] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-[#31d7ff]"
        >
          // 03. Expertise
        </Motion.p>

        <Motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mt-3 text-[clamp(2rem,5vw,3.4rem)] font-display font-black leading-none text-[#f5f8fc]"
        >
          Technical Arsenal
        </Motion.h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} {...group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;