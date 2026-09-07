import { useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { projects } from '../data/projectsData.js';
import { ProjectCard } from '../sections/Projects/ProjectCard.jsx';
import CustomCursor from '../common/CustomCursor.jsx';
import TechBackground from '../common/TechBackground.jsx';
import ScrollProgress from '../common/ScrollProgress.jsx';

export default function AllProjects() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'All Projects — Deneshkar Punyamoorthy';
  }, []);

  const handleBack = () => {
    window.location.hash = 'projects';
  };

  return (
    <div className="relative min-h-screen bg-[#0a0806] text-[#f5e6c8] overflow-hidden">
      <CustomCursor />
      <ScrollProgress />
      <TechBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-5 lg:px-8 py-16 sm:py-24">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between pb-8 border-b border-amber-700/15 mb-12">
          <a
            href={import.meta.env.BASE_URL}
            onClick={(e) => {
              if (window.location.hash.includes('all-projects')) {
                e.preventDefault();
                window.location.hash = '';
              }
            }}
            className="flex items-center gap-2 font-display text-lg font-bold text-parchment hover:text-amber-400 transition-colors"
            data-cursor
          >
            <span>Deneshkar</span>
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={handleBack}
              data-cursor
              className="btn-secondary !py-2 !px-4 !text-[11px] inline-flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </button>
            <a
              href="https://github.com/Deneshkar"
              target="_blank"
              rel="noreferrer"
              data-cursor
              className="btn-primary !py-2 !px-4 !text-[11px] inline-flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Page Header */}
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center max-w-2xl mx-auto"
        >
          <p className="section-label mb-3">Portfolio Archives</p>
          <h1 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-black text-parchment leading-tight">
            All <span className="text-gradient-warm">Projects</span>
          </h1>
          <p className="mt-4 text-sm text-muted/70 leading-relaxed">
            A comprehensive showcase of all my engineered projects — ranging from AI & machine learning systems to full-stack web platforms and mobile applications.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-700/20 bg-amber-700/10 px-3.5 py-1 text-xs font-mono text-amber-400">
            <span>Showing all {projects.length} projects</span>
          </div>
        </Motion.div>

        {/* Projects Grid */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-2">
          {projects.map((item, i) => (
            <ProjectCard key={item.title} project={item} index={i} />
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-16 text-center border-t border-amber-700/15 pt-10">
          <p className="text-xs text-muted/60 font-mono mb-4">
            Looking for more repositories and open-source contributions?
          </p>
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
        </div>
      </div>
    </div>
  );
}
