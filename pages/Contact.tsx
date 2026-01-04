import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('success');
    };

    return (
        <div className="relative min-h-screen bg-[#0b0b0b] pt-32 pb-24 px-4 overflow-hidden">
            {/* Large background decorative circle */}
            <div className="absolute top-[20%] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-[#c1ff23]/5 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-4xl glass-card rounded-[3.5rem] bg-black/40 p-12 md:p-20">
                <header className="mb-16 text-center">
                    <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#c1ff23]/10 text-[#c1ff23]">
                        <Mail className="h-10 w-10" />
                    </div>
                    <h1 className="mb-4 text-5xl font-black uppercase tracking-tighter text-white md:text-7xl">
                        Contact <span className="text-[#c1ff23]">Support</span>
                    </h1>
                    <p className="text-lg font-bold tracking-tight text-zinc-400">
                        24/7 Institutional Support for Protocol Members
                    </p>
                </header>

                {status === 'success' ? (
                    <div className="rounded-[2.5rem] border border-[#c1ff23]/20 bg-[#c1ff23]/5 p-12 text-center text-[#c1ff23]">
                        <MessageSquare className="mx-auto mb-6 h-16 w-16" />
                        <h3 className="mb-3 text-3xl font-black text-white uppercase tracking-tighter">Transmission Sent</h3>
                        <p className="font-bold tracking-tight text-zinc-400">We'll bridge to you within 24 hours.</p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="mt-8 font-black uppercase tracking-widest text-white hover:text-[#c1ff23] underline transition-colors"
                        >
                            New Transmission
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-10 max-w-xl mx-auto">
                        <div className="grid gap-8 md:grid-cols-2">
                            <div className="space-y-3">
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#c1ff23]">
                                    Access Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full rounded-2xl bg-black/40 border border-white/10 p-5 text-white placeholder-white/10 focus:border-[#c1ff23] focus:outline-none transition-all"
                                    placeholder="analyst@kickoff.com"
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#c1ff23]">
                                    Priority Axis
                                </label>
                                <select className="w-full rounded-2xl bg-black/40 border border-white/10 p-5 text-white focus:border-[#c1ff23] focus:outline-none appearance-none [&>option]:bg-zinc-900">
                                    <option>Membership Inbound</option>
                                    <option>Technical Protocol</option>
                                    <option>Alpha Application</option>
                                    <option>Miscellaneous</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#c1ff23]">
                                Signal Message
                            </label>
                            <textarea
                                required
                                rows={5}
                                className="w-full rounded-2xl bg-black/40 border border-white/10 p-5 text-white placeholder-white/10 focus:border-[#c1ff23] focus:outline-none transition-all"
                                placeholder="State your objective..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="flex w-full items-center justify-center gap-3 rounded-full bg-white py-6 text-center text-[11px] font-black uppercase tracking-[0.3em] text-black transition-all hover:bg-[#c1ff23] hover:scale-[1.02] active:scale-95 shadow-xl"
                        >
                            Broadcast Signal <Send className="h-4 w-4" />
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Contact;