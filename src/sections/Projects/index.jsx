import { motion as Motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    num: '01',
    title: "Bakery Management System",
    desc: "Complete web-based bakery management platform featuring real-time inventory tracking, automated sales reporting, and a responsive admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/Deneshkar/Web-Based-Bakery-Management-.git",
    tag: "FULL-STACK",
    color: "#64ffda",
  },
  {
    num: '02',
    title: "Food Order App — Frontend",
    desc: "Sleek, animated food ordering interface with cart management, menu browsing, and seamless checkout experience built with modern React patterns.",
    tech: ["React", "Tailwind CSS", "Context API"],
    link: "https://github.com/Deneshkar/Food-Order-Frontend.git",
    tag: "FRONTEND",
    color: "#bd93f9",
  },
  {
    num: '03',
    title: "Food Order App — Backend",
    desc: "Robust RESTful API architecture with JWT authentication, granular order management, and optimized MongoDB data pipelines.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    link: "https://github.com/Deneshkar/Food-Order-backend.git",
    tag: "BACKEND",
    color: "#ff79c6",
  },
];

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor
      className="group relative"
    >
      <div
        className="relative glass-card rounded-2xl overflow-hidden transition-all duration-500"
        style={{
          borderColor: hovered ? `${project.color}30` : 'rgba(240,235,224,0.07)',
          boxShadow: hovered ? `0 20px 60px ${project.color}15, 0 0 0 1px ${project.color}20` : 'none',
        }}
      >
        {/* Number + Tag header */}
        <div className="relative h-44 overflow-hidden"
          style={{ background: `radial-gradient(ellipse at 50% 80%, ${project.color}12 0%, transparent 70%)` }}
        >
          {/* Big background number */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[8rem] leading-none select-none transition-all duration-500 pointer-events-none"
            style={{ color: `${project.color}15`, transform: hovered ? 'translate(-50%, -55%) scale(1.1)' : 'translate(-50%, -50%)' }}
          >
            {project.num}
          </div>

          {/* Tag badge */}
          <div className="absolute top-4 left-4">
            <span
              className="font-mono text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 rounded-full border text-xs"
              style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}10` }}
            >
              {project.tag}
            </span>
          </div>

          {/* GitHub arrow */}
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            data-cursor
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full border transition-all duration-300"
            style={{ borderColor: `${project.color}40`, color: project.color }}
            aria-label={`GitHub: ${project.title}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        {/* Card body */}
        <div className="p-6">
          <h3 className="font-display font-bold text-xl text-cream mb-3 leading-tight group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="font-sans text-cream/55 text-sm leading-relaxed mb-5">
            {project.desc}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] tracking-wider px-2.5 py-1 rounded text-cream/50"
                style={{ background: `${project.color}0d`, border: `1px solid ${project.color}20` }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom hover line */}
        <div
          className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
        />
      </div>
    </Motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 bg-navy-light overflow-hidden">
      <div className="section-line" />

      {/* Ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent3/4 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex items-end gap-6 mb-16">
          <div>
            <Motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-accent text-sm tracking-widest mb-3"
            >
              03. Projects
            </Motion.p>
            <Motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-black text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] text-cream"
            >
              FEATURED<br />
              <span className="text-gradient-reverse">WORK</span>
            </Motion.h2>
          </div>
          <Motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 h-px bg-gradient-to-r from-accent3/40 to-transparent mb-4 origin-left"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.num} project={p} index={i} />
          ))}
        </div>

        {/* CTA */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Deneshkar"
            target="_blank"
            rel="noreferrer"
            data-cursor
            className="btn-secondary inline-block"
          >
            View All on GitHub ↗
          </a>
        </Motion.div>
      </div>
    </section>
  );
};

export default Projects;