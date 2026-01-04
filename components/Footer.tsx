import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-white/5 bg-[#0b0b0b] py-24">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-4 md:flex-row">
                <div className="text-2xl font-black tracking-tighter text-white">
                    Kickoff<span className="text-[#c1ff23]">.</span>
                </div>
                <div className="flex gap-12 text-xs font-bold tracking-widest text-zinc-500 uppercase">
                    <Link to="/terms" className="transition-colors hover:text-[#c1ff23]">
                        Terms
                    </Link>
                    <Link to="/privacy" className="transition-colors hover:text-[#c1ff23]">
                        Privacy
                    </Link>
                    <Link to="/contact" className="transition-colors hover:text-[#c1ff23]">
                        Contact
                    </Link>
                </div>
                <p className="text-xs font-bold tracking-widest text-[#a7f3d0] opacity-50 uppercase">
                    Â© 2024 KickoffLive. 18+ Responsible Gaming.
                </p>
            </div>
        </footer>
    );
};

export default Footer;