const TechBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(49,215,255,0.08),transparent_22%),radial-gradient(circle_at_80%_18%,rgba(73,108,255,0.06),transparent_26%),linear-gradient(to_bottom,rgba(3,7,13,0.2),rgba(3,7,13,0.88))]" />
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '42px 42px',
        }}
      />
      <div className="absolute top-20 left-[-10rem] h-80 w-80 rounded-full bg-[#31d7ff]/10 blur-[120px]" />
      <div className="absolute top-[18rem] right-[-6rem] h-72 w-72 rounded-full bg-[#496cff]/10 blur-[120px]" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)', backgroundSize: '7px 7px' }}
      />
    </div>
  );
};

export default TechBackground;
