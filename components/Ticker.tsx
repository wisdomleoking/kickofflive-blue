import React from 'react';
import { Slip } from '../types';

interface TickerProps {
  slips: Slip[];
}

const Ticker: React.FC<TickerProps> = ({ slips }) => {
  const wonSlips = slips.filter((s) => s.status === 'won');

  return (
    <div className="fixed top-0 left-0 z-[110] flex h-8 w-full items-center overflow-hidden border-b border-white/5 bg-black/90 backdrop-blur-md">
      <div className="flex animate-[ticker_60s_linear_infinite] whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-16 px-8">
            {wonSlips.map((s, idx) => (
              <div
                key={`${i}-${idx}`}
                className="flex items-center gap-3 text-[9px] font-black tracking-[0.2em] uppercase"
              >
                <span className="text-[#c1ff23]">PROFIT ALERT</span>
                <span className="text-zinc-500">{s.title}</span>
                <span className="text-white">@{s.totalOdds.toFixed(2)}</span>
              </div>
            ))}
            {wonSlips.length === 0 && (
              <div className="text-[9px] font-bold tracking-[0.2em] text-[#a7f3d0] uppercase">
                Analyzing Live Markets... Tracking Current Volume... Data Inbound...
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Ticker;