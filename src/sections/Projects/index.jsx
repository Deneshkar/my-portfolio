import { motion as Motion } from 'framer-motion';

const projects = [
  {
    index: '01',
    label: 'Full-Stack',
    accent: '#31d7ff',
    title: 'Food Order App',
    desc: 'A simple food ordering app with a separate frontend and backend, built to make browsing, ordering, and managing data straightforward.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    type: 'split',
    frontendHref: 'https://github.com/Deneshkar/Food-Order-Frontend.git',
    backendHref: 'https://github.com/Deneshkar/Food-Order-backend.git',
  },
  {
    index: '02',
    label: 'Java',
    accent: '#8e6cff',
    title: 'Library Management System',
    desc: 'A Spring Boot library system for managing books, borrowers, issuing, returns, and admin tasks in one place.',
    tech: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL'],
    type: 'single',
    repoHref: 'https://github.com/Deneshkar/Library-Management-System.git',
  },
  {
    index: '03',
    label: 'Full-Stack',
    accent: '#ff8d4d',
    title: 'Web-Based Bakery Management System',
    desc: 'A bakery management system for handling orders, inventory, and sales with a clear daily workflow.',
    tech: ['Java', 'Spring Boot', 'Inventory', 'Sales Tracking'],
    type: 'single',
    repoHref: 'https://github.com/Deneshkar/Web-Based-Bakery-Management-.git',
  },
  {
    index: '04',
    label: 'MERN',
    accent: '#ff6fb0',
    title: 'Rice Mill Management System',
    desc: 'A rice mill system with separate frontend and backend repos for managing operations, records, and workflow.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    type: 'split',
    frontendHref: 'https://github.com/Deneshkar/Rice-Mill-Management-Frontend.git',
    backendHref: 'https://github.com/Deneshkar/Rice-Mill-Management-Backend.git',
  },
];

const ProjectCard = ({ project }) => (
  <Motion.article
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.55 }}
    className="flex h-full min-h-[430px] flex-col overflow-hidden rounded-2xl border border-[#223042] bg-[#0b1420] shadow-[0_16px_50px_rgba(0,0,0,0.22)]"
  >
    <div
      className="relative h-48 border-b border-[#223042] bg-[linear-gradient(180deg,rgba(10,18,30,1)_0%,rgba(12,22,34,1)_100%)]"
      style={{ boxShadow: `inset 0 1px 0 ${project.accent}15` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(49,215,255,0.14),transparent_55%)]" />
      <div
        className="absolute left-4 top-4 rounded-full border px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.3em]"
        style={{ borderColor: `${project.accent}55`, color: project.accent, backgroundColor: `${project.accent}10` }}
      >
        {project.label}
      </div>
      <div
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border transition-transform duration-300 group-hover:scale-105"
        style={{ borderColor: `${project.accent}55`, color: project.accent, backgroundColor: `${project.accent}10` }}
      >
        ↗
      </div>
      <div className="absolute left-4 top-10 select-none font-display font-black leading-none text-[6.5rem] tracking-tight text-white/5 md:text-[7.5rem]">
        {project.index}
      </div>
      <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-[#223042] bg-[#08111d]/75 p-3">
        <div className="h-2 w-[72%] rounded-full bg-white/10" />
        <div className="mt-2 h-2 w-[88%] rounded-full bg-white/5" />
        <div className="mt-2 h-2 w-[64%] rounded-full bg-white/5" />
      </div>
    </div>

    <div className="flex flex-1 flex-col p-5 md:p-6">
      <div className="flex-1">
        <h3 className="text-[1.3rem] font-bold leading-tight text-[#f5f8fc] lg:text-[1.45rem]">{project.title}</h3>
        <p className="mt-2.5 text-[12.5px] leading-6 text-[#9fb0c6]">{project.desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full border border-[#223042] bg-[#08111d] px-2.5 py-1 text-[10px] text-[#c9d4e5]">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 border-t border-[#223042] pt-3.5">
        {project.type === 'split' ? (
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={project.frontendHref}
              target="_blank"
              rel="noreferrer"
              data-cursor
              className="inline-flex items-center justify-center rounded-md border border-[#31d7ff] bg-[#31d7ff] px-4 py-2.5 text-[11px] font-semibold text-[#06111d] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Frontend Repo
            </a>
            <a
              href={project.backendHref}
              target="_blank"
              rel="noreferrer"
              data-cursor
              className="inline-flex items-center justify-center rounded-md border border-[#223042] bg-transparent px-4 py-2.5 text-[11px] font-semibold text-[#f5f8fc] transition-colors duration-300 hover:border-[#31d7ff] hover:text-[#31d7ff]"
            >
              Backend Repo
            </a>
          </div>
        ) : (
          <a
            href={project.repoHref}
            target="_blank"
            rel="noreferrer"
            data-cursor
            className="inline-flex w-full items-center justify-center rounded-md border border-[#31d7ff] bg-[#31d7ff] px-4 py-2.5 text-[11px] font-semibold text-[#06111d] transition-transform duration-300 hover:-translate-y-0.5"
          >
            View Repository
          </a>
        )}
      </div>
    </div>
  </Motion.article>
);

const Projects = () => {
  return (
    <section id="projects" className="border-b border-[#223042] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-[#31d7ff]"
        >
          // 02. Portfolio
        </Motion.p>

        <Motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mt-3 text-[clamp(2rem,5vw,3.4rem)] font-display font-black leading-none text-[#f5f8fc]"
        >
          Selected Work
        </Motion.h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#9fb0c6]">
          A simple overview of the projects I’ve built. Each card gives you a quick summary and direct access to the code.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {projects.map((item) => (
            <ProjectCard key={item.title} project={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;