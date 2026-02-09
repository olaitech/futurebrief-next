export function TrustStrip() {
  return (
    <section className="relative border-y border-white/10 bg-white/[0.02] backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-wrap items-center justify-between gap-6 text-xs tracking-wide text-white/60">
          
          <div className="flex items-center gap-3">
            <span className="text-white/40">Built with</span>
            <span className="font-medium text-white/80">Next.js</span>
            <span className="font-medium text-white/80">Vercel</span>
            <span className="font-medium text-white/80">AI SDK</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-white/40">Focus</span>
            <span className="font-medium text-white/80">Prototypes</span>
            <span className="font-medium text-white/80">Marketplaces</span>
            <span className="font-medium text-white/80">Utility Systems</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-white/40">Location</span>
            <span className="font-medium text-white/80">Norway / EU</span>
          </div>

        </div>
      </div>
    </section>
  );
}
