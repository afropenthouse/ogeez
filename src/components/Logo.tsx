export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="16" fill="none" stroke="url(#og)" strokeWidth="3" strokeLinecap="round" strokeDasharray="78 100" transform="rotate(-45 20 20)" />
        <circle cx="30" cy="11" r="3" fill="oklch(0.62 0.22 25)" />
        <defs>
          <linearGradient id="og" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="oklch(0.85 0.20 125)" />
            <stop offset="100%" stopColor="oklch(0.78 0.18 95)" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-display text-2xl font-bold tracking-tight">
        Og<span className="text-primary">ee</span>z
      </span>
    </div>
  );
}
