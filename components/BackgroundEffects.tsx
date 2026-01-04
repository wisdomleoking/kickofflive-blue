import React from 'react';

const BackgroundEffects: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050505]">
      {/* Soft Ambient Light */}
      <div className="absolute top-0 right-0 h-[80%] w-[80%] animate-pulse rounded-full bg-[#ccff00]/5 blur-[150px]" />
      <div className="absolute bottom-0 left-0 h-[40%] w-[40%] rounded-full bg-blue-500/5 blur-[100px]" />

      {/* Noise Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
      ></div>
    </div>
  );
};

export default BackgroundEffects;