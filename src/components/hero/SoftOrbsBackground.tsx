"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function SoftOrbsBackground() {
    const shouldReduceMotion = useReducedMotion();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <motion.div
                animate={
                    shouldReduceMotion
                        ? {}
                        : {
                            x: [0, 50, -30, 0],
                            y: [0, 30, 60, 0],
                        }
                }
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -top-[10%] -left-[10%] h-[60%] w-[60%] rounded-full bg-cyan-500/10 blur-[120px]"
            />
            <motion.div
                animate={
                    shouldReduceMotion
                        ? {}
                        : {
                            x: [0, -40, 40, 0],
                            y: [0, 60, -20, 0],
                        }
                }
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute top-[20%] -right-[10%] h-[50%] w-[50%] rounded-full bg-violet-600/10 blur-[120px]"
            />
            <motion.div
                animate={
                    shouldReduceMotion
                        ? {}
                        : {
                            x: [0, 30, -50, 0],
                            y: [0, -40, 20, 0],
                        }
                }
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute -bottom-[10%] left-[20%] h-[45%] w-[45%] rounded-full bg-fuchsia-500/5 blur-[100px]"
            />
        </div>
    );
}
