import { useEffect, useRef } from 'react';

const TechBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, particles, animId;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Dust/ember particles
    class DustParticle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * w;
        this.y = h + Math.random() * 100;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedY = -(Math.random() * 0.4 + 0.1);
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.02 + 0.005;
        // Warm color palette: gold, amber, orange, soft red
        const colors = [
          [200, 155, 60],   // gold
          [224, 192, 104],  // light gold
          [212, 118, 60],   // sunset orange
          [180, 120, 40],   // amber
          [179, 58, 0],     // rust
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.wobble += this.wobbleSpeed;
        this.x += this.speedX + Math.sin(this.wobble) * 0.3;
        this.y += this.speedY;
        if (this.y < -20) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color[0]},${this.color[1]},${this.color[2]},${this.opacity})`;
        ctx.fill();
        // Glow effect
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color[0]},${this.color[1]},${this.color[2]},${this.opacity * 0.15})`;
        ctx.fill();
      }
    }

    // Firefly particles (brighter, slower, pulsing)
    class Firefly {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 1.5 + 0.8;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.opacity = 0;
        this.maxOpacity = Math.random() * 0.6 + 0.2;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.03 + 0.01;
        this.color = Math.random() > 0.5
          ? [200, 155, 60]   // gold
          : [224, 192, 104]; // light gold
      }
      update() {
        this.pulse += this.pulseSpeed;
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity = this.maxOpacity * (0.5 + 0.5 * Math.sin(this.pulse));
        if (this.x < -20 || this.x > w + 20 || this.y < -20 || this.y > h + 20) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color[0]},${this.color[1]},${this.color[2]},${this.opacity})`;
        ctx.fill();
        // Outer glow
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 8);
        grad.addColorStop(0, `rgba(${this.color[0]},${this.color[1]},${this.color[2]},${this.opacity * 0.3})`);
        grad.addColorStop(1, `rgba(${this.color[0]},${this.color[1]},${this.color[2]},0)`);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 8, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }
    }

    // Initialize particles
    particles = [];
    const dustCount = Math.min(80, Math.floor(w * h / 15000));
    const fireflyCount = Math.min(15, Math.floor(w * h / 80000));
    for (let i = 0; i < dustCount; i++) {
      const p = new DustParticle();
      p.y = Math.random() * h; // Spread across screen initially
      particles.push(p);
    }
    for (let i = 0; i < fireflyCount; i++) {
      particles.push(new Firefly());
    }

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.update();
        p.draw();
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base fill */}
      <div className="absolute inset-0 bg-[#0a0806]" />

      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Subtle grid overlay - warm amber */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(200,155,60,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,155,60,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Western ornamental corners - Top Left */}
      <svg className="absolute top-0 left-0 w-[300px] h-[300px] opacity-[0.06]" viewBox="0 0 300 300" fill="none">
        <path d="M0 0 L100 0 L100 8 L8 8 L8 100 L0 100 Z" fill="#c89b3c" />
        <path d="M20 0 L20 20 L0 20" stroke="#c89b3c" strokeWidth="1" fill="none" />
        <circle cx="50" cy="50" r="3" fill="#c89b3c" />
        <circle cx="50" cy="50" r="8" stroke="#c89b3c" strokeWidth="0.5" fill="none" />
        <path d="M80 0 L80 40" stroke="#d4763c" strokeWidth="0.5" opacity="0.6" />
        <path d="M0 80 L40 80" stroke="#d4763c" strokeWidth="0.5" opacity="0.6" />
        {/* Decorative diamond */}
        <path d="M50 20 L60 30 L50 40 L40 30 Z" stroke="#c89b3c" strokeWidth="0.5" fill="none" opacity="0.5" />
      </svg>

      {/* Western ornamental corners - Bottom Right */}
      <svg className="absolute bottom-0 right-0 w-[300px] h-[300px] opacity-[0.06]" viewBox="0 0 300 300" fill="none">
        <path d="M300 300 L200 300 L200 292 L292 292 L292 200 L300 200 Z" fill="#c89b3c" />
        <path d="M280 300 L280 280 L300 280" stroke="#c89b3c" strokeWidth="1" fill="none" />
        <circle cx="250" cy="250" r="3" fill="#c89b3c" />
        <circle cx="250" cy="250" r="8" stroke="#c89b3c" strokeWidth="0.5" fill="none" />
        <path d="M220 300 L220 260" stroke="#d4763c" strokeWidth="0.5" opacity="0.6" />
        <path d="M300 220 L260 220" stroke="#d4763c" strokeWidth="0.5" opacity="0.6" />
        <path d="M250 280 L240 270 L250 260 L260 270 Z" stroke="#c89b3c" strokeWidth="0.5" fill="none" opacity="0.5" />
      </svg>

      {/* Warm ambient glow blobs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-amber-900/[0.06] blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-900/[0.05] blur-[130px] animate-pulse-slow-delay" />
      <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full bg-red-950/[0.04] blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-yellow-900/[0.04] blur-[100px] animate-pulse-slow-delay" />

      {/* Diagonal accent lines */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[15%] left-0 w-[40%] h-px bg-gradient-to-r from-transparent via-amber-700/[0.08] to-transparent rotate-12 origin-left" />
        <div className="absolute top-[45%] right-0 w-[35%] h-px bg-gradient-to-l from-transparent via-orange-700/[0.06] to-transparent -rotate-8 origin-right" />
        <div className="absolute bottom-[20%] left-[10%] w-[30%] h-px bg-gradient-to-r from-transparent via-yellow-700/[0.05] to-transparent rotate-6 origin-left" />
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 35%, rgba(10,8,6,0.8) 100%)',
        }}
      />

      {/* Film grain overlay */}
      <div className="film-grain" />
    </div>
  );
};

export default TechBackground;
