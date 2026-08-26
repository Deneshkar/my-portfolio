import { motion as Motion } from 'framer-motion';

const projects = [
  {
    index: '01',
    label: 'Full-Stack · MERN',
    accentFrom: '#c89b3c',
    accentTo: '#8b2500',
    title: 'Food Order App',
    desc: 'A modern food ordering platform with a separate frontend & backend, featuring real-time cart management, JWT auth, and a clean UI.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    type: 'split',
    frontendHref: 'https://github.com/Deneshkar/Food-Order-Frontend.git',
    backendHref:  'https://github.com/Deneshkar/Food-Order-backend.git',
    icon: '🍕',
  },
  {
    index: '02',
    label: 'Java · Backend',
    accentFrom: '#d4763c',
    accentTo: '#c89b3c',
    title: 'Library Management',
    desc: 'A Spring Boot library system for managing books, borrowers, issuing, returns, and admin tasks with a clean dashboard.',
    tech: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL'],
    type: 'single',
    repoHref: 'https://github.com/Deneshkar/Library-Management-System.git',
    icon: '📚',
  },
  {
    index: '03',
    label: 'Full-Stack · Java',
    accentFrom: '#b33a00',
    accentTo: '#c89b3c',
    title: 'Bakery Management',
    desc: 'A complete bakery management system for handling orders, inventory tracking, and sales reporting with a daily workflow.',
    tech: ['Java', 'Spring Boot', 'Inventory', 'Sales Tracking'],
    type: 'single',
    repoHref: 'https://github.com/Deneshkar/Web-Based-Bakery-Management-.git',
    icon: '🥐',
  },
  {
    index: '04',
    label: 'Full-Stack · MERN',
    accentFrom: '#5a7a3a',
    accentTo: '#c89b3c',
    title: 'Rice Mill System',
    desc: 'A rice mill management platform with separate frontend & backend repos for managing operations, records, and workflow.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    type: 'split',
    frontendHref: 'https://github.com/Deneshkar/Rice-Mill-Management-Frontend.git',
    backendHref:  'https://github.com/Deneshkar/Rice-Mill-Management-Backend.git',
    icon: '🌾',
  },
  {
    index: '05',
    label: 'Mobile App · Flutter',
    accentFrom: '#e0c068',
    accentTo: '#d4763c',
    title: 'Monthly Expense Tracker',
    desc: 'A Flutter app for effortless personal finance management — track monthly spending, set budget goals, manage loans, analyze expenses with pie charts, and export detailed PDF reports.',
    tech: ['Flutter', 'Dart', 'SQLite'],
    type: 'single',
    repoHref: 'https://github.com/Deneshkar/Monthly-Expense-Tracker.git',
    demoHref: 'https://deneshkar.github.io/Monthly-Expense-Tracker/',
    icon: '💰',
  },
];

const ProjectCard = ({ project, index: cardIndex }) => (
  <Motion.article
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.6, delay: cardIndex * 0.08 }}
    whileHover={{ y: -6, transition: { duration: 0.3 } }}
    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-amber-700/10 bg-[#1a1208]/80 backdrop-blur-sm shadow-xl"
  >
    <div
      className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300 group-hover:opacity-100 opacity-60"
      style={{ background: `linear-gradient(90deg, ${project.accentFrom}, ${project.accentTo})` }}
    />

    <div className="relative p-6 pb-4">
      <span className="absolute top-4 right-5 font-display font-black text-7xl text-parchment/4 leading-none select-none">
        {project.index}
      </span>

      <div className="flex items-center gap-3">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl border border-amber-700/15 bg-amber-700/8 shadow-lg transition-all duration-300 group-hover:scale-110"
          style={{ boxShadow: `0 8px 30px ${project.accentFrom}25` }}
        >
          {project.icon}
        </div>

        <span
          className="rounded-full px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-[0.25em] border whitespace-nowrap overflow-hidden"
          style={{
            color: project.accentFrom,
            borderColor: `${project.accentFrom}40`,
            background: `${project.accentFrom}12`,
          }}
        >
          {project.label}
        </span>
      </div>

      <h3 className="mt-4 text-[1.25rem] font-display font-bold text-parchment leading-tight group-hover:text-gradient transition-all duration-300">
        {project.title}
      </h3>
      <p className="mt-2 text-[13px] leading-6 text-muted/65">
        {project.desc}
      </p>
    </div>

    <div className="mt-auto flex flex-col">
      <div className="px-6 flex flex-wrap gap-1.5">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-amber-700/15 bg-amber-700/5 px-2.5 py-0.5 text-[10px] font-mono text-muted/60"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="mx-6 h-px bg-gradient-to-r from-transparent via-amber-700/15 to-transparent" />

    <div className="p-5">
      {project.type === 'split' ? (
        <div className="grid grid-cols-2 gap-2">
          <a
            href={project.frontendHref}
            target="_blank"
            rel="noreferrer"
            data-cursor
            className="flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-[11px] font-mono font-bold text-[#0a0806] transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})`, boxShadow: `0 4px 20px ${project.accentFrom}35` }}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            Frontend
          </a>
          <a
            href={project.backendHref}
            target="_blank"
            rel="noreferrer"
            data-cursor
            className="flex items-center justify-center gap-1.5 rounded-xl border border-amber-700/20 bg-amber-700/5 py-2.5 text-[11px] font-mono font-bold text-muted transition-all duration-300 hover:border-amber-700/40 hover:-translate-y-0.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
            </svg>
            Backend
          </a>
        </div>
      ) : project.demoHref ? (
        <div className="grid grid-cols-2 gap-2">
          <a
            href={project.repoHref}
            target="_blank"
            rel="noreferrer"
            data-cursor
            className="flex items-center justify-center gap-1.5 rounded-xl py-2.5 text-[11px] font-mono font-bold text-[#0a0806] transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})`, boxShadow: `0 4px 20px ${project.accentFrom}35` }}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Repository
          </a>
          <a
            href={project.demoHref}
            target="_blank"
            rel="noreferrer"
            data-cursor
            className="flex items-center justify-center gap-1.5 rounded-xl border border-amber-700/20 bg-amber-700/5 py-2.5 text-[11px] font-mono font-bold text-muted transition-all duration-300 hover:border-amber-700/40 hover:-translate-y-0.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-4-4 4M6 16l-4-4 4-4" />
            </svg>
            Live Demo
          </a>
        </div>
      ) : (
        <a
          href={project.repoHref}
          target="_blank"
          rel="noreferrer"
          data-cursor
          className="flex items-center justify-center gap-2 w-full rounded-xl py-2.5 text-[11px] font-mono font-bold text-[#0a0806] transition-all duration-300 hover:-translate-y-0.5"
          style={{ background: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})`, boxShadow: `0 4px 20px ${project.accentFrom}35` }}
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          View Repository
        </a>
      )}
    </div>
    </div>
  </Motion.article>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] rounded-full bg-red-950/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6"
        >
          <div>
            <p className="section-label mb-3">Portfolio</p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-black text-parchment leading-none">
              Selected{' '}
              <span className="text-gradient-warm">Work</span>
            </h2>
          </div>
          <p className="text-sm text-muted/60 max-w-sm">
            Projects built from scratch — each one solving a real problem with clean code and thoughtful design.
          </p>
        </Motion.div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-2">
          {projects.map((item, i) => (
            <ProjectCard key={item.title} project={item} index={i} />
          ))}
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/Deneshkar"
            target="_blank"
            rel="noreferrer"
            data-cursor
            className="btn-secondary inline-flex"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View All on GitHub
          </a>
        </Motion.div>
      </div>
    </section>
  );
};

export default Projects;
