import React from 'react';
import { Lock, Eye, ShieldCheck } from 'lucide-react';

const Privacy: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-[#0b0b0b] pt-32 pb-24 px-4 overflow-hidden">
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#c1ff23]/5 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-4xl glass-card rounded-[3rem] bg-black/40 p-12 md:p-20">
                <header className="mb-16 text-center">
                    <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#c1ff23]/10 text-[#c1ff23]">
                        <Lock className="h-10 w-10" />
                    </div>
                    <h1 className="mb-4 text-5xl font-black uppercase tracking-tighter text-white md:text-7xl">
                        Privacy <span className="text-[#c1ff23]">Policy</span>
                    </h1>
                    <p className="text-lg font-medium text-[#a7f3d0]">
                        Your data is encrypted and secure.
                    </p>
                </header>

                <div className="space-y-12 text-zinc-400">
                    <section>
                        <h2 className="mb-6 flex items-center gap-4 text-2xl font-black uppercase tracking-tight text-white">
                            <Eye className="h-6 w-6 text-[#c1ff23]" /> Data Collection
                        </h2>
                        <p className="leading-relaxed opacity-80">
                            We collect minimal data required to provide our services, including account preferences and analytics history.
                            We never sell your personal information to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-6 flex items-center gap-4 text-2xl font-black uppercase tracking-tight text-white">
                            <ShieldCheck className="h-6 w-6 text-[#c1ff23]" /> Security
                        </h2>
                        <p className="leading-relaxed opacity-80">
                            All transactions are processed through secure, PCI-compliant payment processors.
                            Our database utilizes end-to-end encryption for sensitive user data.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-4 text-xl font-bold uppercase tracking-wide text-white">Cookies</h2>
                        <p className="leading-relaxed opacity-80">
                            We use cookies to enhance your browsing experience and analyze site traffic.
                            You can control cookie settings through your browser preferences.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Privacy;