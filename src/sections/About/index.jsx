import { motion as Motion } from 'framer-motion';
import profileImg from '../../assets/profile.jpeg';

const skills = ['React', 'Node.js', 'Spring Boot', 'MongoDB', 'Java', 'Tailwind CSS'];

const About = () => {
  return (
    <section id="about" className="border-b border-[#223042] py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[280px_1fr] lg:items-center lg:px-8">
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative h-64 w-64 rounded-full border border-[#31d7ff]/60 p-2 shadow-[0_0_0_1px_rgba(49,215,255,0.14),0_0_50px_rgba(49,215,255,0.1)]">
            <div className="absolute inset-0 rounded-full border border-[#31d7ff]/20" />
            <img
              src={profileImg}
              alt="Deneshkar Punyamoorthy"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </Motion.div>

        <div>
          <Motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-[#31d7ff]"
          >
            // 01. About Me
          </Motion.p>

          <Motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mt-3 text-[clamp(2rem,5vw,3.4rem)] font-display font-black leading-none text-[#f5f8fc]"
          >
            The Path of Precision
          </Motion.h2>

          <p className="mt-5 max-w-3xl text-[15px] leading-8 text-[#9fb0c6]">
            I am a 3rd-year BSc (Hons) IT student at SLIIT, building full-stack web applications with a focus on clean user
            experiences, strong foundations, and maintainable code. I enjoy turning ideas into interfaces that feel deliberate
            and work reliably.
          </p>

          <p className="mt-4 max-w-3xl text-[15px] leading-8 text-[#9fb0c6]">
            Currently looking for internship opportunities where I can contribute, learn from experienced teams, and keep
            improving the systems I build.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#2d394a] bg-[#0d1521] px-3 py-1 text-xs text-[#c9d4e5]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;