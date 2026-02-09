import Link from "next/link";

interface ExperimentLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function ExperimentLayout({
  title,
  description,
  children,
}: ExperimentLayoutProps) {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Dark gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black opacity-90" />

      {/* Soft radial glow */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-block mb-10 text-sm text-neutral-400 hover:text-white transition"
        >
          ← Back to Projects
        </Link>

        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            {title}
          </h1>

          <p className="text-neutral-400 max-w-2xl">
            {description}
          </p>
        </div>

        {/* Demo content */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-2xl">
          {children}
        </div>
      </div>
    </main>
  );
}
