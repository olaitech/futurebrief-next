import * as React from "react";
import { Mail, Linkedin, Rss } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative w-full bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Card container */}
        <div
          className="relative overflow-hidden rounded-3xl border border-white/10
                     bg-gradient-to-br from-gray-800/80 to-gray-900/90 p-12
                     backdrop-blur-2xl glass-card-shadow"
        >
          {/* Animated backdrop (must be BEFORE content) */}
          <div className="glassy-backdrop" aria-hidden="true" />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Contact
            </h2>

            <p className="mt-4 max-w-2xl text-white/70 text-lg">
              Want to collaborate, give feedback, or just say hi? Reach out through any of the channels below.
            </p>

            <div className="mt-10 flex flex-wrap gap-6">
              {/* Email */}
              <a
                href="mailto:kewinolaisen@yahoo.no"
                className="group flex items-center gap-3 rounded-full
                           border border-white/15 bg-white/5 px-6 py-4
                           text-white/90 backdrop-blur-md
                           transition-all duration-300
                           hover:bg-white/15 hover:border-white/30
                           hover:shadow-[0_0_24px_rgba(255,255,255,0.25)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="font-medium">Email</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kewin-olaisen-287204338"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-full
                           border border-white/15 bg-white/5 px-6 py-4
                           text-white/90 backdrop-blur-md
                           transition-all duration-300
                           hover:bg-[#0A66C2]/15 hover:border-[#0A66C2]/40
                           hover:shadow-[0_0_26px_rgba(10,102,194,0.45)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2]/20">
                  <Linkedin className="h-5 w-5" />
                </span>
                <span className="font-medium">LinkedIn</span>
              </a>

              {/* Substack */}
              <a
                href="https://substack.com/@kewinolaisen"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-full
                           border border-white/15 bg-white/5 px-6 py-4
                           text-white/90 backdrop-blur-md
                           transition-all duration-300
                           hover:bg-orange-500/15 hover:border-orange-400/40
                           hover:shadow-[0_0_26px_rgba(249,115,22,0.45)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20">
                  <Rss className="h-5 w-5" />
                </span>
                <span className="font-medium">Substack</span>
              </a>
            </div>

            <div className="mt-12 text-sm text-white/40">© 2026 Built by futurebrief.no</div>
          </div>
        </div>
      </div>
    </section>
  );
}
