import { useReducedMotion } from '../../hooks/useReducedMotion';

const SNOWFLAKES = Array.from({ length: 8 }, (_, i) => {
  const seed = (i + 1) * 7;
  return {
    id: i,
    size: 8 + (seed % 17),                     // 8-24px
    left: `${5 + ((seed * 13) % 90)}%`,         // spread across container
    delay: `${(seed % 40) / 10}s`,              // 0-4s delay
    duration: `${8 + (seed % 7)}s`,             // 8-15s fall time
    drift: (seed % 2 === 0 ? 1 : -1) * (10 + (seed % 30)), // horizontal drift px
    opacity: 0.08 + ((seed % 8) / 100),         // 0.08-0.15
  };
});

export default function Snowfall() {
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10vh) translateX(0);
          }
          100% {
            transform: translateY(110vh) var(--snow-drift);
          }
        }
      `}</style>

      {SNOWFLAKES.map((flake) => (
        <svg
          key={flake.id}
          className="absolute"
          width={flake.size}
          height={flake.size}
          viewBox="0 0 24 24"
          fill="white"
          style={{
            left: flake.left,
            top: '-10vh',
            opacity: flake.opacity,
            '--snow-drift': `translateX(${flake.drift}px)`,
            animation: `snowfall ${flake.duration} ${flake.delay} linear infinite`,
          }}
        >
          {/* Six-pointed snowflake */}
          <circle cx="12" cy="12" r="2" />
          <line x1="12" y1="2" x2="12" y2="22" stroke="white" strokeWidth="1.5" />
          <line x1="3.34" y1="7" x2="20.66" y2="17" stroke="white" strokeWidth="1.5" />
          <line x1="3.34" y1="17" x2="20.66" y2="7" stroke="white" strokeWidth="1.5" />
          <circle cx="12" cy="4" r="1" />
          <circle cx="12" cy="20" r="1" />
          <circle cx="5" cy="8" r="1" />
          <circle cx="19" cy="16" r="1" />
          <circle cx="5" cy="16" r="1" />
          <circle cx="19" cy="8" r="1" />
        </svg>
      ))}
    </div>
  );
}
