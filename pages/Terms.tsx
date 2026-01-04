import React from 'react';
import { Shield, Lock, FileText, CheckCircle } from 'lucide-react';

const Terms: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-[#0b0b0b] pt-32 pb-24 px-4 overflow-hidden">
            {/* Subtle Background Orb */}
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#c1ff23]/5 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-4xl glass-card rounded-[3rem] bg-black/40 p-12 md:p-20">
                <header className="mb-16 text-center">
                    <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#c1ff23]/10 text-[#c1ff23]">
                        <FileText className="h-10 w-10" />
                    </div>
                    <h1 className="mb-4 text-5xl font-black uppercase tracking-tighter text-white md:text-7xl">
                        Terms of <span className="text-[#c1ff23]">Service</span>
                    </h1>
                    <p className="text-lg font-medium text-[#a7f3d0]">
                        Last updated: January 2024
                    </p>
                </header>

                <div className="space-y-12 text-zinc-400">
                    <section>
                        <h2 className="mb-6 text-2xl font-black uppercase tracking-tight text-white">1. Acceptance of Terms</h2>
                        <p className="leading-relaxed text-lg">
                            By accessing and using KickoffLive, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>
                    </section>

                    <section className="rounded-[2rem] border border-white/5 bg-white/5 p-8 md:p-12">
                        <h2 className="mb-8 text-2xl font-black uppercase tracking-tight text-white">2. Elite Membership</h2>
                        <ul className="grid gap-6 md:grid-cols-2">
                            {[
                                'Premium tips are for personal use only.',
                                'Sharing slips voids your membership.',
                                'No refunds on digital subscriptions.',
                                'Results are verified but not guaranteed.'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <CheckCircle className="h-5 w-5 shrink-0 text-[#c1ff23]" />
                                    <span className="font-bold tracking-tight">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-4 text-xl font-bold uppercase tracking-wide text-white">3. Responsible Gaming</h2>
                        <p className="leading-relaxed opacity-80">
                            We strictly enforce 18+ regulations. Betting involves risk. Only bet what you can afford to lose.
                            KickoffLive is an analytical tool, not a bookmarking service.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Terms;