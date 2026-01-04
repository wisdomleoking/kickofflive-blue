import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowUpRight } from 'lucide-react';

interface PricingProps {
  isPremium: boolean;
  onSubscribe: () => void;
}

const Pricing: React.FC<PricingProps> = ({ isPremium, onSubscribe }) => {
  return (
    <section id="pricing" className="bg-transparent px-4 py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-6 inline-block rounded-full border border-[#c1ff23]/20 bg-[#c1ff23]/5 px-6 py-2 text-[10px] font-black tracking-[0.3em] text-[#c1ff23] uppercase"
          >
            Institutional Tiers
          </motion.div>
          <h2 className="mb-6 text-5xl font-black tracking-tighter text-white md:text-7xl">
            ELITE <span className="text-[#c1ff23] text-glow">CAPITAL</span> ACCESS
          </h2>
          <p className="mx-auto max-w-xl text-lg font-medium leading-relaxed text-zinc-400">
            Unleash the full spectrum of prediction intelligence. Zero friction, instant execution, and proprietary market signals.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={`relative w-full max-w-2xl overflow-hidden glass-card rounded-[3.5rem] bg-black/40 p-12 md:p-16 transition-all duration-500 ${isPremium ? 'border-[#c1ff23] shadow-[0_0_50px_rgba(193,255,35,0.15)]' : 'hover:border-white/20'}`}
        >
          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 bg-[#c1ff23]/10 blur-[100px]" />

          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-5xl font-black tracking-tighter text-white uppercase">
                PRO <span className="text-[#c1ff23]">ELITE</span>
              </h3>
              <p className="mt-2 text-zinc-500 font-bold tracking-widest uppercase text-[10px]">Highest tier analytics</p>
            </div>
            <div className="flex flex-col md:items-end">
              <div className="flex items-baseline gap-2">
                <span className="text-6xl font-black text-white">$12</span>
                <span className="text-xl font-bold text-zinc-600">/mo</span>
              </div>
              <div className="mt-1 text-[10px] font-black tracking-widest text-[#c1ff23] uppercase">
                Billed Monthly
              </div>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <ul className="space-y-6">
              {[
                'Instant Global Access',
                'Proprietary Alpha Signals',
                'Neural Odds Analysis',
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c1ff23]/10">
                    <Check className="h-3 w-3 text-[#c1ff23]" />
                  </div>
                  <span className="text-sm font-bold tracking-tight text-white/80">{feature}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-6">
              {[
                'Bankroll Management V3',
                'Direct Signal Direct',
                'Priority Processing',
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(255,255,255,0.05)]">
                    <Check className="h-3 w-3 text-zinc-400" />
                  </div>
                  <span className="text-sm font-bold tracking-tight text-white/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            disabled={isPremium}
            onClick={onSubscribe}
            className={`mt-16 flex w-full items-center justify-center gap-3 rounded-full py-6 text-[11px] font-black tracking-[0.3em] uppercase transition-all active:scale-95 ${isPremium
              ? 'cursor-default border border-[#c1ff23]/30 bg-[#c1ff23]/10 text-[#c1ff23]'
              : 'bg-white text-black shadow-2xl hover:bg-[#c1ff23] hover:scale-[1.02]'
              }`}
          >
            {isPremium ? (
              <>
                <Star className="h-4 w-4 fill-current" />
                DASHBOARD UNLOCKED
              </>
            ) : (
              <>
                Initialize Membership Access
                <ArrowUpRight className="h-4 w-4" />
              </>
            )}
          </button>

          <div className="mt-8 flex items-center justify-center gap-4 opacity-40">
            <div className="h-px w-10 bg-white" />
            <p className="text-[9px] font-black tracking-widest text-white uppercase">
              Secure Cloud Processing
            </p>
            <div className="h-px w-10 bg-white" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;