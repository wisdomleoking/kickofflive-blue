import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import SlipHistory from '../components/SlipHistory';
import Pricing from '../components/Pricing';
import StatsOverview from '../components/StatsOverview';
import Testimonials from '../components/Testimonials';
import { Slip, UserState } from '../types';

interface HomeProps {
    userState: UserState;
    slips: Slip[];
    stats: { total: number; wins: number; winRate: number };
    onUnlock: (id: string) => void;
    onPostSlip: (title: string) => void;
    onSubscribe: () => void;
}

const Home: React.FC<HomeProps> = ({
    userState,
    slips,
    stats,
    onUnlock,
    onPostSlip,
    onSubscribe,
}) => {
    return (
        <div className="relative z-10">
            <section id="hero">
                <Hero />
            </section>

            <div className="border-t border-white/5 bg-transparent">
                <Features />
                <Testimonials />

                <section id="slips" className="px-4 py-24">
                    <div className="mx-auto max-w-7xl">
                        <StatsOverview stats={stats} />
                        <SlipHistory
                            slips={slips}
                            userState={userState}
                            onUnlock={onUnlock}
                            onPostSlip={onPostSlip}
                        />
                    </div>
                </section>

                <section id="pricing">
                    <Pricing isPremium={userState.isPremium} onSubscribe={onSubscribe} />
                </section>
            </div>
        </div>
    );
};

export default Home;