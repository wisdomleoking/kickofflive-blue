import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const items = [
    {
      icon: <Zap className="h-8 w-8 text-[#c1ff23]" />,
      title: 'Precision Intelligence',
      description:
        'Advanced neural models processing market shifts, liquidity changes, and referee patterns in real-time.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-[#c1ff23]" />,
      title: 'Immutable Ledger',
      description:
        'Transparency via verification. Every prediction is permanently anchored in our historical engine, win or loss.',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#c1ff23]" />,
      title: 'Probabilistic Alpha',
      description:
        'Quant-driven approach to identifying expected value (EV+) across obscure and major sport markets.',
    },
  ];

  return (
    <section id="features" className="relative px-4 py-32">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="group glass-card rounded-[3rem] bg-black/40 p-12 transition-all hover:bg-black/60 hover:border-[#c1ff23]/30"
          >
            <div className="mb-8 inline-block rounded-3xl bg-[#c1ff23]/10 p-5 transition-all group-hover:scale-110 group-hover:bg-[#c1ff23]/20">
              {item.icon}
            </div>
            <h3 className="mb-5 text-2xl font-black tracking-tight text-white">{item.title}</h3>
            <p className="text-zinc-400 font-medium leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;