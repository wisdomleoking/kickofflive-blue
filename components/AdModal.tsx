import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Play, Volume2, ShieldAlert } from 'lucide-react';

interface AdModalProps {
  onClose: () => void;
  onComplete: () => void;
}

const AdModal: React.FC<AdModalProps> = ({ onClose, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(5); // Accelerated for demo

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [timeLeft, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/95 backdrop-blur-3xl" onClick={onClose} />

      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="relative aspect-video w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl"
      >
        {/* Ad Video Simulator */}
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 bg-gradient-to-br from-zinc-800 to-black p-12">
          <div className="absolute top-4 left-6 flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-zinc-500" />
            <span className="text-[8px] font-bold tracking-widest text-zinc-500 uppercase">
              Sponsored Content
            </span>
          </div>

          <div className="flex h-20 w-20 animate-bounce items-center justify-center rounded-full bg-[#c1ff23] shadow-[0_0_30px_rgba(193,255,35,0.3)]">
            <Play className="h-8 w-8 fill-black text-black" />
          </div>

          <div className="text-center">
            <h3 className="mb-2 text-2xl font-bold tracking-tight">
              Analyzing Premium Insights...
            </h3>
            <p className="mx-auto max-w-xs text-sm text-zinc-400">
              Please wait while we verify the data streams and unlock your breakdown.
            </p>
          </div>

          <div className="absolute right-6 bottom-6 flex items-center gap-4">
            <button
              onClick={onClose}
              className="rounded-lg bg-white/5 p-2 text-zinc-500 transition-all hover:bg-white/10"
            >
              <Volume2 className="h-4 w-4" />
            </button>
            <div className="rounded-xl bg-[#c1ff23] px-6 py-3 text-xs font-black tracking-widest text-black uppercase shadow-xl">
              Unlocking in {timeLeft}s
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black"
        >
          <X className="h-4 w-4" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default AdModal;