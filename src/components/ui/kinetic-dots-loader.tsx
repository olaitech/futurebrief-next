"use client";

export default function KineticDotsLoader() {
  const dots = 4;

  return (
    <div className="flex items-center justify-center py-10">
      <div className="flex gap-5">
        {[...Array(dots)].map((_, i) => {
          const delay = `${i * 0.15}s`;

          return (
            <div
              key={i}
              className="relative flex h-20 w-6 flex-col items-center justify-end"
            >
              {/* Bouncing dot */}
              <div
                className="relative z-10 h-5 w-5 animate-gravity-bounce"
                style={{ animationDelay: delay, willChange: "transform" }}
              >
                <div
                  className="h-full w-full rounded-full bg-gradient-to-b from-cyan-300 to-blue-600 shadow-[0_0_15px_rgba(6,182,212,0.6)] animate-rubber-morph"
                  style={{ animationDelay: delay, willChange: "transform" }}
                />
                <div className="absolute left-1 top-1 h-1.5 w-1.5 rounded-full bg-white/60 blur-[0.5px]" />
              </div>

              {/* Ripple */}
              <div
                className="absolute bottom-0 h-3 w-10 rounded-[100%] border border-cyan-500/30 opacity-0 animate-ripple-expand"
                style={{ animationDelay: delay }}
              />

              {/* Shadow */}
              <div
                className="absolute -bottom-1 h-1.5 w-5 rounded-[100%] bg-cyan-500/40 blur-sm animate-shadow-breathe"
                style={{ animationDelay: delay }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
