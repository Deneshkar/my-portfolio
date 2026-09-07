import { motion as Motion } from 'framer-motion';

export const ProjectCard = ({ project, index: cardIndex }) => {
  const displayIndex = project.index || String(cardIndex + 1).padStart(2, '0');

  return (
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
        {displayIndex}
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

      <h3 className="mt-4 text-[1.25rem] font-sans font-bold text-parchment leading-tight group-hover:text-gradient transition-all duration-300">
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

      <div className="mx-6 h-px bg-gradient-to-r from-transparent via-amber-700/15 to-transparent mt-4" />

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
};
