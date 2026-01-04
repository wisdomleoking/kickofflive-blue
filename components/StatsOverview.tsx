import React from 'react';
import { motion } from 'framer-motion';

interface StatsOverviewProps {
  stats: { total: number; wins: number; winRate: number };
}

const StatsOverview: React.FC<StatsOverviewProps> = ({ stats }) => {
  const metrics = [
    { label: 'Total Slips', value: stats.total.toString() },
    { label: 'Profit Units', value: '+24.8' },
    { label: 'Avg Odds', value: '2.10' },
    { label: 'Win Rate', value: `${stats.winRate.toFixed(1)}%` },
  ];

  return (
    <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
      {metrics.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="group glass-card flex flex-col justify-center gap-1 rounded-3xl border border-white/5 bg-black/40 p-8 text-center transition-all hover:border-[#c1ff23]/20"
        >
          <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
            {m.label}
          </span>
          <span className="font-oswald text-3xl font-bold tracking-tight text-white transition-colors group-hover:text-[#c1ff23]">
            {m.value}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsOverview;