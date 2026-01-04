import React, { useState, useMemo, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Slip, UserState } from './types';
import { INITIAL_SLIPS } from './constants';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import Ticker from './components/Ticker';
import AdModal from './components/AdModal';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [userState, setUserState] = useState<UserState>({
    isPremium: false,
    unlockedIds: [],
  });
  const [slips, setSlips] = useState<Slip[]>(INITIAL_SLIPS);
  const [adTargetId, setAdTargetId] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = useCallback((message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }, []);

  const handleUnlock = (id: string) => {
    if (userState.isPremium) return;
    setAdTargetId(id);
  };

  const finalizeUnlock = useCallback(
    (id: string) => {
      setUserState((prev) => ({
        ...prev,
        unlockedIds: [...prev.unlockedIds, id],
      }));
      showToast('Slip Unlocked!');
      setAdTargetId(null);
    },
    [showToast]
  );

  const handleSubscribe = () => {
    setTimeout(() => {
      setUserState((prev) => ({ ...prev, isPremium: true }));
      showToast('Elite Membership Active!');
    }, 1500);
  };

  const stats = useMemo(() => {
    const total = slips.length;
    const wins = slips.filter((s) => s.status === 'won').length;
    const winRate = total > 0 ? (wins / total) * 100 : 0;
    return { total, wins, winRate };
  }, [slips]);

  const handlePostSlip = (title: string) => {
    const newSlip: Slip = {
      id: Date.now().toString(),
      title,
      date: 'Just Now',
      status: 'pending',
      totalOdds: 5.45,
      games: [
        { id: 'n1', match: 'Dortmund vs Real Madrid', pick: 'BTTS', odds: 1.85 },
        { id: 'n2', match: 'Inter vs Benfica', pick: 'Inter Win', odds: 1.6 },
        { id: 'n3', match: 'Lazio vs Celtic', pick: 'Over 2.5', odds: 1.84 },
      ],
    };
    setSlips((prev) => [newSlip, ...prev]);
    showToast('Slip Posted!');
  };

  return (
    <Router>
      <div className="relative min-h-screen bg-[#0b0b0b] selection:bg-[#c1ff23] selection:text-black">
        <BackgroundEffects />

        <Ticker slips={slips} />

        <Navbar
          isPremium={userState.isPremium}
          onScrollTo={(id) => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <main className="relative z-10 pt-20">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  userState={userState}
                  slips={slips}
                  stats={stats}
                  onUnlock={handleUnlock}
                  onPostSlip={handlePostSlip}
                  onSubscribe={handleSubscribe}
                />
              }
            />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        <AnimatePresence>
          {adTargetId && (
            <AdModal
              onClose={() => setAdTargetId(null)}
              onComplete={() => finalizeUnlock(adTargetId)}
            />
          )}

          {toast && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className={`fixed bottom-8 left-8 z-[200] flex items-center gap-3 rounded-3xl border border-white/10 bg-[#0b0b0b] px-8 py-4 text-white shadow-2xl`}
            >
              <div className={`h-2.5 w-2.5 rounded-full bg-[#c1ff23]`} />
              <span className="text-xs font-bold tracking-widest uppercase">{toast.message}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;