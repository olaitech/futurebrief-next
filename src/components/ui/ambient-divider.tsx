export default function AmbientDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full py-10 ${className}`}>
      {/* Soft gradient wash */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[260px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 blur-3xl" />
      </div>

      {/* Hairline + glow */}
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="relative h-px w-full overflow-hidden rounded-full bg-white/10">
          <div className="absolute inset-0 ambient-shine bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </div>

        {/* Soft “nodes” */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/60 blur-[0.2px]" />
          <span className="h-1.5 w-1.5 rounded-full bg-blue-300/60 blur-[0.2px]" />
          <span className="h-1.5 w-1.5 rounded-full bg-violet-300/60 blur-[0.2px]" />
        </div>
      </div>
    </div>
  );
}
