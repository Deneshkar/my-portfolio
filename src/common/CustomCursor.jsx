import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    let mouse = { x: 0, y: 0 };
    let pos   = { x: 0, y: 0 };
    let raf;

    const move = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      dot.style.left = mouse.x + 'px';
      dot.style.top  = mouse.y + 'px';
    };

    const lerp = (a, b, n) => a + (b - a) * n;

    const animate = () => {
      pos.x = lerp(pos.x, mouse.x, 0.14);
      pos.y = lerp(pos.y, mouse.y, 0.14);
      ring.style.left = pos.x + 'px';
      ring.style.top  = pos.y + 'px';
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => ring.classList.add('hovered');
    const onLeave = () => ring.classList.remove('hovered');

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default CustomCursor;
