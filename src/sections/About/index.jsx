import { motion as Motion } from 'framer-motion';
import profileImg from '../../assets/profile.jpeg';

const stats = [
  { value: '5',  label: 'Projects Built',  icon: '🤠' },
  { value: '4+', label: 'Technologies',    icon: '⚡' },
  { value: '2028', label: 'Graduating',    icon: '🎓' },
];

const quickSkills = ['React', 'Node.js', 'Spring Boot', 'MongoDB', 'Java', 'TypeScript', 'Flutter'];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-900/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14"
        >
          <p className="section-label mb-3">About Me</p>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-black text-parchment leading-none">
            Crafting Digital{' '}
            <span className="text-gradient">Experiences</span>
          </h2>
        </Motion.div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-center">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full border border-amber-700/15 animate-rotate-slow" />
              <div className="absolute -inset-8 rounded-full border border-red-800/8" style={{ animationDelay: '-5s' }} />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-amber-600/40 via-red-700/30 to-orange-700/20 blur-sm" />
              <div className="relative h-64 w-64 rounded-full overflow-hidden border-2 border-amber-700/30">
                <img
                  src={profileImg}
                  alt="Deneshkar Punyamoorthy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full px-4 py-1.5 bg-[#1a1208]/90 border border-amber-700/20 backdrop-blur-xl whitespace-nowrap shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sage" />
                </span>
                <span className="font-mono text-[10px] text-sage font-semibold">Open to Work</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 w-full max-w-xs lg:max-w-none">
              {stats.map(({ value, label, icon }) => (
                <div
                  key={label}
                  className="group relative flex flex-col items-center gap-1.5 rounded-2xl border border-amber-700/10 bg-amber-700/5 px-3 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-700/30 hover:shadow-[0_8px_30px_rgba(200,155,60,0.15)]"
                >
                  <span className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                  <span className="text-lg leading-none">{icon}</span>
                  <p className="font-display text-2xl font-black text-gradient leading-none">{value}</p>
                  <p className="w-full text-center font-mono text-[9px] uppercase tracking-[0.16em] text-muted/60 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-[16px] leading-8 text-muted/80">
              I'm a <span className="text-gold-light font-semibold">3rd-year BSc (Hons) IT student</span> at SLIIT,
              passionate about building full-stack web applications that combine beautiful design with
              solid engineering. I care deeply about developer experience, code quality, and creating
              interfaces that feel deliberate and reliable.
            </p>

            <p className="text-[16px] leading-8 text-muted/80">
              Currently seeking <span className="text-sunset-light font-semibold">internship opportunities</span> for 2026
              where I can contribute to real-world projects, learn from experienced engineers, and keep
              leveling up the systems I build.
            </p>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/60 mb-3">Quick Skills</p>
              <div className="flex flex-wrap gap-2">
                {quickSkills.map((skill) => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a href="#contact" data-cursor className="btn-primary inline-flex">
                Let's Connect
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
