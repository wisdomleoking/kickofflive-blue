import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Star, Layout } from 'lucide-react';

interface NavbarProps {
  isPremium: boolean;
  onScrollTo: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isPremium, onScrollTo }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
      // The onScrollTo will be handled by a useEffect in the Home component often,
      // but here we can try to find the element after a short delay if needed.
    } else {
      onScrollTo(id);
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 z-[100] w-full max-w-5xl -translate-x-1/2 px-4 transition-all duration-500">
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-8 py-3 backdrop-blur-2xl transition-all hover:bg-black/60">
        <div
          onClick={() => navigate('/')}
          className="flex cursor-pointer items-center gap-2 text-xl font-black tracking-tighter text-white"
        >
          KICKOFF<span className="text-[#c1ff23]">.</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {[
            { label: 'Ledger', id: 'slips' },
            { label: 'Analytics', id: 'features' },
            { label: 'Premium', id: 'pricing' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase transition-all hover:text-[#c1ff23] hover:scale-110"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNavigation('pricing')}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-[10px] font-black tracking-widest uppercase transition-all hover:scale-105 active:scale-95 ${isPremium
              ? 'bg-[#c1ff23] text-black shadow-[0_0_20px_rgba(193,255,35,0.4)]'
              : 'bg-white text-black hover:bg-[#c1ff23]'
              }`}
          >
            {isPremium ? <Star className="h-3 w-3 fill-black" /> : null}
            {isPremium ? 'PRO DASHBOARD' : 'Get Access'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;