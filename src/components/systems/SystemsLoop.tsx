"use client";

import { motion } from "framer-motion";

type Step = {
    id: string;
    title: string;
    subtitle: string;
};

type SystemsLoopProps = {
    steps: Step[];
};

export function SystemsLoop({ steps }: SystemsLoopProps) {
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="my-12">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                {steps.map((step, index) => (
                    <div key={step.id} className="relative group">
                        <button
                            onClick={() => handleScroll(step.id)}
                            className="w-full text-left p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 group-hover:translate-y-[-2px]"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-[10px] font-bold text-white/50 border border-white/10">
                                    {index + 1}
                                </span>
                                <span className="text-xs font-bold uppercase tracking-widest text-white/40">
                                    Step
                                </span>
                            </div>
                            <h4 className="text-sm font-semibold text-white mb-1">
                                {step.title}
                            </h4>
                            <p className="text-xs text-white/50 leading-relaxed font-medium">
                                {step.subtitle}
                            </p>
                        </button>

                        {index < steps.length - 1 && (
                            <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    className="text-white/20"
                                >
                                    <path
                                        d="M6 12L10 8L6 4"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
