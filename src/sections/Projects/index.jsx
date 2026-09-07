import { motion as Motion } from 'framer-motion';
import { projects } from '../../data/projectsData.js';
import { ProjectCard } from './ProjectCard.jsx';

const Projects = () => {
  const displayedProjects = projects.slice(0, 4);
  const hasMoreProjects = projects.length > 4;

  const handleViewAll = (e) => {
    e.preventDefault();
    window.location.hash = '/all-projects';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          {displayedProjects.map((item, i) => (
            <ProjectCard key={item.title} project={item} index={i} />
          ))}
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 text-center"
        >
          {hasMoreProjects && (
            <button
              type="button"
              onClick={handleViewAll}
              data-cursor
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              View All Projects ({projects.length})
            </button>
          )}

          <a
            href="https://github.com/Deneshkar"
            target="_blank"
            rel="noreferrer"
            data-cursor
            className="btn-secondary inline-flex items-center gap-2"
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
