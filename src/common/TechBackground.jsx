import { useEffect, useRef } from 'react';

// ── Code rain symbols (mix of programming constructs) ──────────────────────
const CODE_SYMBOLS = [
  'const', 'let', '=>', '{}', '[]', '()', 'async', 'await',
  'return', 'import', 'export', 'class', 'function', 'if()', 'for()',
  'React', 'useState', '&&', '===', '!==',
  'null', 'true', 'false', 'map()', '.then()', 'try{}',
  '01010', '11001', '10110',
  'API', 'GET', 'POST', 'JSON', 'npm', 'git', 'push()',
  '0xFF', '0x1A', '0b1010', 'NaN', 'void', 'typeof',
  'new', 'this', 'super', 'extends', 'interface', 'enum',
];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

// ── Node connection graph ──────────────────────────────────────────────────
class Node {
  constructor(w, h) {
    this.reset(w, h);
  }
  reset(w, h) {
    this.x = randomBetween(0, w);
    this.y = randomBetween(0, h);
    this.vx = randomBetween(-0.18, 0.18);
    this.vy = randomBetween(-0.18, 0.18);
    this.r = randomBetween(1.5, 3.2);
    const types = ['violet', 'cyan', 'fuchsia'];
    this.type = types[Math.floor(Math.random() * types.length)];
  }
  update(w, h) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > w) this.vx *= -1;
    if (this.y < 0 || this.y > h) this.vy *= -1;
  }
}

// ── Floating code particle ────────────────────────────────────────────────
class CodeParticle {
  constructor(w, h, init = false) {
    this.w = w;
    this.h = h;
    this.reset(init);
  }
  reset(init = false) {
    this.x = randomBetween(0, this.w);
    this.y = init ? randomBetween(0, this.h) : this.h + 60;
    this.text = CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)];
    this.speed = randomBetween(0.2, 0.65);
    this.opacity = 0;
    this.targetOpacity = randomBetween(0.05, 0.18);
    this.size = randomBetween(9, 16);
    this.drift = randomBetween(-0.1, 0.1);
    const colors = [
      'rgba(139,92,246,',
      'rgba(56,189,248,',
      'rgba(52,211,153,',
      'rgba(99,102,241,',
      'rgba(168,85,247,',
    ];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  update() {
    this.y -= this.speed;
    this.x += this.drift;
    if (this.opacity < this.targetOpacity) {
      this.opacity = Math.min(this.opacity + 0.002, this.targetOpacity);
    }
    if (this.y < -60) this.reset(false);
  }
  draw(ctx) {
    ctx.save();
    ctx.font = `${this.size}px 'JetBrains Mono', monospace`;
    ctx.fillStyle = `${this.color}${this.opacity})`;
    ctx.fillText(this.text, this.x, this.y);
    ctx.restore();
  }
}

// ── Matrix-style column rain ───────────────────────────────────────────────
class MatrixColumn {
  constructor(x, h) {
    this.x = x;
    this.h = h;
    this.y = randomBetween(-h, 0);
    this.speed = randomBetween(1.2, 3.5);
    this.chars = [];
    this.length = Math.floor(randomBetween(6, 20));
    this.opacity = randomBetween(0.025, 0.07);
    this.isViolet = Math.random() > 0.8;
  }
  update() {
    this.y += this.speed;
    if (this.y > this.h + this.length * 16) {
      this.y = randomBetween(-this.h * 0.5, 0);
      this.speed = randomBetween(1.2, 3.5);
      this.isViolet = Math.random() > 0.8;
    }
    if (Math.random() < 0.15) {
      this.chars = Array.from({ length: this.length }, () =>
        String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))
      );
    }
  }
  draw(ctx, CELL) {
    for (let i = 0; i < this.length; i++) {
      const alpha = ((this.length - i) / this.length) * this.opacity;
      const isHead = i === 0;
      if (isHead) {
        ctx.fillStyle = this.isViolet
          ? `rgba(196,181,253,${alpha * 2.5})`
          : `rgba(180,255,220,${alpha * 3})`;
      } else {
        ctx.fillStyle = this.isViolet
          ? `rgba(139,92,246,${alpha})`
          : `rgba(52,211,153,${alpha})`;
      }
      const char = this.chars[i] || '0';
      ctx.font = `${CELL}px 'JetBrains Mono', monospace`;
      ctx.fillText(char, this.x, this.y - i * CELL);
    }
  }
}

const TechBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // ── Node graph setup ──────────────────────────────────────────────
    const NODE_COUNT = Math.max(Math.floor((width * height) / 25000), 18);
    const nodes = Array.from({ length: NODE_COUNT }, () => new Node(width, height));
    const CONNECTION_DIST = Math.min(width, height) * 0.22;

    // ── Code particles setup ──────────────────────────────────────────
    const particles = Array.from({ length: 42 }, () => new CodeParticle(width, height, true));

    // ── Matrix columns setup ──────────────────────────────────────────
    const CELL = 14;
    const colCount = Math.floor(width / (CELL * 2.5));
    const matrixCols = Array.from({ length: colCount }, (_, i) =>
      new MatrixColumn(i * CELL * 2.5 + CELL, height)
    );

    let animId;
    let frame = 0;

    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Draw matrix rain (subtle, bottom layer)
      matrixCols.forEach(col => {
        col.update();
        col.draw(ctx, CELL);
      });

      // Update nodes
      nodes.forEach(n => n.update(width, height));

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.09;
            const bothViolet = nodes[i].type === 'violet' && nodes[j].type === 'violet';
            const bothCyan = nodes[i].type === 'cyan' && nodes[j].type === 'cyan';
            let lineColor;
            if (bothViolet) lineColor = `rgba(139,92,246,${alpha})`;
            else if (bothCyan) lineColor = `rgba(56,189,248,${alpha})`;
            else lineColor = `rgba(168,85,247,${alpha * 0.7})`;

            ctx.beginPath();
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.6;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach(n => {
        let color;
        if (n.type === 'violet') color = 'rgba(139,92,246,0.45)';
        else if (n.type === 'cyan') color = 'rgba(56,189,248,0.4)';
        else color = 'rgba(217,70,239,0.35)';

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        if (frame % 120 < 40 && n.type === 'cyan') {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + 3, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(56,189,248,0.15)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      // Draw floating code particles
      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      particles.forEach(p => { p.w = width; p.h = height; });
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep dark base */}
      <div className="absolute inset-0 bg-[#05030f]" />

      {/* Fine grid + macro grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px),
            linear-gradient(rgba(56,189,248,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px, 80px 80px, 20px 20px, 20px 20px',
        }}
      />

      {/* Circuit corner accent — top-left */}
      <svg
        className="absolute top-0 left-0 w-[480px] h-[480px] opacity-[0.065]"
        viewBox="0 0 480 480"
        fill="none"
      >
        <path d="M0 80 L80 80 L80 0" stroke="rgba(139,92,246,1)" strokeWidth="1"/>
        <path d="M0 160 L160 160 L160 0" stroke="rgba(139,92,246,0.6)" strokeWidth="0.5"/>
        <path d="M0 240 L120 240 L120 120 L240 120 L240 0" stroke="rgba(56,189,248,0.8)" strokeWidth="0.7"/>
        <circle cx="80" cy="80" r="3" fill="rgba(139,92,246,1)"/>
        <circle cx="160" cy="160" r="2" fill="rgba(139,92,246,0.6)"/>
        <circle cx="120" cy="240" r="3" fill="rgba(56,189,248,0.8)"/>
        <circle cx="240" cy="120" r="2" fill="rgba(56,189,248,0.6)"/>
        <path d="M0 320 L60 320 L60 200 L200 200 L200 60 L320 60 L320 0" stroke="rgba(139,92,246,0.3)" strokeWidth="0.4"/>
      </svg>

      {/* Circuit corner accent — bottom-right */}
      <svg
        className="absolute bottom-0 right-0 w-[420px] h-[420px] opacity-[0.065] rotate-180"
        viewBox="0 0 480 480"
        fill="none"
      >
        <path d="M0 80 L80 80 L80 0" stroke="rgba(217,70,239,1)" strokeWidth="1"/>
        <path d="M0 160 L160 160 L160 0" stroke="rgba(99,102,241,0.7)" strokeWidth="0.5"/>
        <path d="M0 240 L120 240 L120 120 L240 120 L240 0" stroke="rgba(139,92,246,0.8)" strokeWidth="0.7"/>
        <circle cx="80" cy="80" r="3" fill="rgba(217,70,239,1)"/>
        <circle cx="160" cy="160" r="2" fill="rgba(99,102,241,0.6)"/>
        <circle cx="120" cy="240" r="3" fill="rgba(139,92,246,0.8)"/>
        <circle cx="240" cy="120" r="2" fill="rgba(56,189,248,0.6)"/>
      </svg>

      {/* Ambient glow blobs */}
      <div className="absolute top-[-12%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-violet-700/8 blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-[-8%] right-[-8%] w-[50vw] h-[50vw] rounded-full bg-indigo-700/7 blur-[130px] animate-pulse-slow-delay" />
      <div className="absolute top-[38%] left-[45%] w-[40vw] h-[40vw] rounded-full bg-fuchsia-700/5 blur-[120px]" />
      <div className="absolute top-[12%] right-[10%] w-[28vw] h-[28vw] rounded-full bg-sky-600/6 blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-[10%] left-[5%] w-[20vw] h-[20vw] rounded-full bg-cyan-600/4 blur-[80px]" />

      {/* Diagonal accent lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-[0.06]">
        <div className="absolute top-[-20%] left-[-5%] w-[1px] h-[200%] bg-gradient-to-b from-transparent via-violet-400 to-transparent rotate-12" />
        <div className="absolute top-[-20%] right-[18%] w-[1px] h-[200%] bg-gradient-to-b from-transparent via-cyan-400 to-transparent -rotate-8" />
        <div className="absolute top-[-20%] left-[55%] w-[1px] h-[200%] bg-gradient-to-b from-transparent via-fuchsia-500 to-transparent rotate-6" />
      </div>

      {/* Canvas: matrix rain + node graph + code particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Scanline overlay — subtle terminal feel */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139,92,246,0.15) 2px, rgba(139,92,246,0.15) 4px)',
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(5,3,15,0.75)_100%)]" />
    </div>
  );
};

export default TechBackground;
