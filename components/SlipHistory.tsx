import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Slip, UserState } from '../types';
import { Play, Lock, CheckCircle2, XCircle, Clock, Plus } from 'lucide-react';

interface SlipHistoryProps {
  slips: Slip[];
  userState: UserState;
  onUnlock: (id: string) => void;
  onPostSlip: (title: string) => void;
}

const SlipHistory: React.FC<SlipHistoryProps> = ({ slips, userState, onUnlock, onPostSlip }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  return (
    <div className="space-y-12">
      <div className="flex flex-col justify-between gap-6 border-b border-white/5 pb-8 md:flex-row md:items-end">
        <div>
          <h2 className="mb-2 text-4xl font-bold tracking-tighter text-white md:text-5xl">
            MY BET <span className="text-[#c1ff23]">HISTORY</span>
          </h2>
          <p className="max-w-md font-medium text-[#a7f3d0]">
            Unfiltered performance tracking. Free users can unlock breakdown details by viewing
            sponsored content.
          </p>
        </div>

        <button
          onClick={() => setIsFormOpen(!isFormOpen)}
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-6 py-3 transition-colors hover:border-[#c1ff23]/50"
        >
          <Plus className="h-4 w-4 text-[#c1ff23]" />
          <span className="text-xs font-bold tracking-widest text-white uppercase">New Entry</span>
        </button>
      </div>

      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mb-12 overflow-hidden"
          >
            <div className="glass-card rounded-[2.5rem] p-10">
              <label className="mb-4 block text-[10px] font-black tracking-widest text-[#a7f3d0] uppercase">
                Entry Name / Tournament
              </label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="e.g. Champions League Final Multi"
                className="mb-6 w-full rounded-2xl border border-white/10 bg-black/20 p-4 text-white transition-colors outline-none placeholder:text-white/30 focus:border-[#c1ff23]"
              />
              <button
                onClick={() => {
                  if (!newTitle) return;
                  onPostSlip(newTitle);
                  setNewTitle('');
                  setIsFormOpen(false);
                }}
                className="w-full rounded-2xl bg-[#c1ff23] py-4 text-xs font-black tracking-widest text-black uppercase transition-all hover:brightness-110"
              >
                Publish to Ledger
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {slips.map((slip) => {
          const isUnlocked = userState.isPremium || userState.unlockedIds.includes(slip.id);
          const StatusIcon =
            slip.status === 'won' ? CheckCircle2 : slip.status === 'lost' ? XCircle : Clock;
          const statusColor =
            slip.status === 'won'
              ? 'text-[#c1ff23]'
              : slip.status === 'lost'
                ? 'text-red-400'
                : 'text-amber-400';

          return (
            <motion.div
              layout
              key={slip.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="group relative flex flex-col overflow-hidden rounded-[2.5rem] glass-card transition-all hover:border-[#c1ff23]/30"
            >
              {/* Header */}
              <div className="border-b border-white/5 p-8">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-black tracking-widest text-[#a7f3d0] uppercase">
                      {slip.date}
                    </span>
                    <h4 className="mt-1 text-xl font-bold tracking-tight text-white">
                      {slip.title}
                    </h4>
                  </div>
                  <div
                    className={`flex items-center gap-1.5 rounded-full border border-white/5 bg-white/5 px-3 py-1 ${statusColor}`}
                  >
                    <StatusIcon className="h-3 w-3" />
                    <span className="text-[9px] font-black tracking-tighter uppercase">
                      {slip.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="oswald text-3xl font-bold text-[#c1ff23]">
                    @{slip.totalOdds.toFixed(2)}
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-[#a7f3d0] uppercase">
                    Aggregate
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="relative flex-1 bg-white/[0.01] p-8">
                <ul
                  className={`space-y-4 transition-all duration-700 ${!isUnlocked ? 'opacity-20 blur-xl select-none' : ''}`}
                >
                  {slip.games.map((game) => (
                    <li key={game.id} className="group/item flex items-center justify-between py-1">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-white">{game.match}</span>
                        <span className="text-xs text-[#a7f3d0]">{game.pick}</span>
                      </div>
                      <span className="oswald text-sm font-bold text-[#c1ff23]">
                        @{game.odds.toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>

                {!isUnlocked && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 p-6 text-center backdrop-blur-sm">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c1ff23] shadow-[0_0_20px_rgba(193,255,35,0.3)]">
                      <Lock className="h-5 w-5 text-black" />
                    </div>
                    <p className="mb-6 text-sm font-black tracking-tight text-white uppercase">
                      BREAKDOWN LOCKED
                    </p>
                    <button
                      onClick={() => onUnlock(slip.id)}
                      className="group/btn flex items-center gap-3 rounded-full bg-white px-8 py-3 text-[10px] font-black tracking-widest text-black uppercase shadow-xl transition-all hover:scale-105"
                    >
                      <Play className="h-3 w-3 fill-black" />
                      Watch Ad to Reveal
                    </button>
                    <p className="mt-4 text-[9px] font-bold tracking-widest text-[#a7f3d0] uppercase">
                      Sponsored Unlock â€¢ 15s
                    </p>
                  </div>
                )}

                {userState.isPremium && (
                  <div className="absolute top-4 right-4 z-20 rounded border border-[#c1ff23]/20 bg-[#c1ff23]/10 px-2 py-0.5 text-[8px] font-black tracking-[0.2em] text-[#c1ff23] uppercase">
                    VIP Verified
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SlipHistory;