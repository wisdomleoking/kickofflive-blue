import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, TrendingUp, Zap, ChevronRight, ArrowRight } from 'lucide-react';
import { MouseParallax } from './MouseParallax';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-transparent pt-32 pb-20"
    >
      {/* Cinematic Background Orbs */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-[#c1ff23]/10 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] -right-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px]"
        />
      </div>

      <motion.div
        style={{ opacity, scale, y: y1 }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center"
      >
        {/* New Feature Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 py-1.5 pr-4 pl-1.5 backdrop-blur-md"
        >
          <span className="flex h-6 items-center rounded-full bg-[#c1ff23] px-3 text-[9px] font-black tracking-widest text-black uppercase">
            New
          </span>
          <span className="text-[10px] font-bold tracking-widest text-zinc-300 uppercase">
            V3 Prediction Intelligence Active
          </span>
          <ChevronRight className="h-3 w-3 text-zinc-500" />
        </motion.div>

        {/* Hero Heading */}
        <div className="relative mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center text-6xl font-black leading-[0.95] tracking-tighter text-white md:text-[10rem]"
          >
            PRECISION<br />
            <span className="text-[#c1ff23] text-glow">INTELLIGENCE</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12 max-w-2xl text-lg font-medium leading-relaxed text-zinc-400 md:text-xl"
        >
          Institutional-grade sports analytics for the modern bettor.
          Analyze market shifts, track win streaks, and unlock deep insights.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col items-center gap-6 sm:flex-row"
        >
          <button className="group relative flex items-center gap-3 rounded-full bg-white px-10 py-5 text-[11px] font-black tracking-[0.2em] text-black uppercase transition-all hover:bg-[#c1ff23] hover:scale-105 active:scale-95">
            Get Started Free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-10 py-5 text-[11px] font-black tracking-[0.2em] text-white uppercase backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/30">
            View Ledger
          </button>
        </motion.div>
      </motion.div>

      {/* Hero Visual: 3D Parallax Graphic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-24 w-full px-4"
      >
        <MouseParallax intensity={25} className="mx-auto flex max-w-6xl justify-center">
          <div className="relative h-[400px] w-full max-w-4xl overflow-hidden rounded-[3rem] border border-white/10 bg-black/40 shadow-2xl backdrop-blur-xl md:h-[600px]">
            {/* Background Grid inside the card */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(193,255,35,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(193,255,35,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30" />

            {/* Central Glow */}
            <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c1ff23]/20 blur-[100px]" />

            {/* Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: 360,
                  y: [0, -20, 0]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="relative z-10 flex h-64 w-64 items-center justify-center rounded-full border border-[#c1ff23]/30 bg-black shadow-[0_0_50px_rgba(193,255,35,0.2)] md:h-96 md:w-96"
              >
                <div className="text-[120px] md:text-[200px]">âš½</div>
                {/* Floating Rings */}
                <div className="absolute h-[110%] w-[110%] rounded-full border border-[#c1ff23]/10" />
                <div className="absolute h-[130%] w-[130%] rounded-full border border-white/5" />
              </motion.div>

              {/* Data Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10], x: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-1/4 z-20 rounded-2xl border border-white/10 bg-black/80 px-6 py-4 backdrop-blur-md"
              >
                <div className="text-[10px] font-bold text-zinc-500 uppercase">Current ROI</div>
                <div className="text-2xl font-black text-[#c1ff23]">+24.5%</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10], x: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 left-1/4 z-20 rounded-2xl border border-white/10 bg-black/80 px-6 py-4 backdrop-blur-md"
              >
                <div className="text-[10px] font-bold text-zinc-500 uppercase">Volume</div>
                <div className="text-2xl font-black text-white">4.2M</div>
              </motion.div>
            </div>
          </div>
        </MouseParallax>
      </motion.div>

      {/* Perspective Line Separator */}
      <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default Hero;