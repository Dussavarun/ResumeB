export default function BackgroundAnimation({ mousePosition, isClient }) {
  const particles = [
    { width: 4, height: 4, left: 15, top: 25, delay: 0 },
    { width: 6, height: 6, left: 85, top: 70, delay: 2 },
    { width: 3, height: 3, left: 25, top: 45, delay: 4 },
    { width: 5, height: 5, left: 75, top: 15, delay: 1 },
    { width: 4, height: 4, left: 45, top: 80, delay: 3 },
    { width: 3, height: 3, left: 65, top: 35, delay: 5 },
    { width: 5, height: 5, left: 35, top: 60, delay: 2.5 },
    { width: 4, height: 4, left: 55, top: 20, delay: 3.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
          transition: 'background 0.3s ease',
        }}
      />
      
      {isClient && particles.map((particle, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white opacity-10"
          style={{
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}