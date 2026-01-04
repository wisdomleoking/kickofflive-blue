import React, { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight, TrendingUp, CheckCircle } from 'lucide-react';
import './Testimonials.css';

const TESTIMONIALS = [
    {
        id: 0,
        name: 'Marcus T.',
        role: 'Premier League Analyst',
        avatar: 'https://picsum.photos/seed/marcus/200/200',
        quote:
            'This platform changed how I approach my betting strategy. Being able to see exactly where my wrong bets were versus the correct ones has improved my ROI significantly. The transparency is unmatched.',
        stats: {
            accuracy: '68% Accuracy',
            roi: 'ROI +12.4%',
        },
    },
    {
        id: 1,
        name: 'Sarah Jenkins',
        role: 'Accumulator Specialist',
        avatar: 'https://picsum.photos/seed/sarah/200/200',
        quote:
            'I love posting my slips here before kickoff. It keeps me accountable and looks incredibly professional. Watching the correct bets turn green on the dashboard is the best feeling.',
        stats: {
            accuracy: '55% Accuracy',
            roi: 'ROI +5.1%',
        },
    },
    {
        id: 2,
        name: 'David K.',
        role: 'Pro Tipster',
        avatar: 'https://picsum.photos/seed/david/200/200',
        quote:
            'Finally, a premium place to track my record without the noise. The distinction between correct and wrong predictions is clear, helping me refine my strategy week over week.',
        stats: {
            accuracy: '72% Accuracy',
            roi: 'ROI +18.2%',
        },
    },
    {
        id: 3,
        name: 'James O.',
        role: 'Sports Investor',
        avatar: 'https://picsum.photos/seed/james/200/200',
        quote:
            'The analytics dashboard is top-tier. It separates the lucky gamblers from the serious analysts. I post my bets here to prove my track record to my followers.',
        stats: {
            accuracy: '60% Accuracy',
            roi: 'ROI +8.9%',
        },
    },
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, [isPaused, nextSlide]);

    const getCardClass = (index: number) => {
        const total = TESTIMONIALS.length;
        if (index === currentIndex) return 'active';
        if (index === (currentIndex - 1 + total) % total) return 'prev';
        if (index === (currentIndex + 1) % total) return 'next';
        return 'hidden-card';
    };

    return (
        <section className="testimonials-section relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-24 px-4">
            {/* Background with user's specific gradient */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background: '#0b0b0b'
                }}
            />
            {/* Pitch/Light effect */}
            <div
                className="absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(193, 255, 35, 0.08) 0%, rgba(0,0,0,0) 70%)'
                }}
            />

            {/* Header */}
            <header className="mb-12 text-center">
                <h2
                    className="mb-2 bg-gradient-to-r from-white to-[#bbf7d0] bg-clip-text text-4xl font-black uppercase tracking-tighter text-transparent md:text-5xl"
                    style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }} // Keeping app font but applying style
                >
                    Trusted by Tipsters & Analysts
                </h2>
                <p className="text-[1.15rem] font-medium tracking-wide uppercase text-[#a7f3d0]">
                    Real Slips. Real Results. Zero Bias.
                </p>
            </header>

            {/* 3D Stacked Slider */}
            <div
                className="testimonials-wrapper testimonial-card-container relative mb-8 flex h-[440px] w-full max-w-[840px] items-center justify-center"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="group absolute left-0 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-[#c1ff23] hover:bg-[#c1ff23] hover:text-black hover:scale-110 md:-left-5 top-1/2"
                    aria-label="Previous"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="group absolute right-0 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-[#c1ff23] hover:bg-[#c1ff23] hover:text-black hover:scale-110 md:-right-5 top-1/2"
                    aria-label="Next"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>

                {/* Cards */}
                {TESTIMONIALS.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className={`testimonial-card ${getCardClass(index)}`}
                        onClick={() => {
                            // Allow clicking side cards to navigate
                            if (getCardClass(index) === 'prev') prevSlide();
                            if (getCardClass(index) === 'next') nextSlide();
                        }}
                    >
                        <Quote className="mb-2 block text-4xl text-[#a7f3d0] opacity-50" />

                        {/* Stats Badges */}
                        <div className="mb-5 flex gap-4">
                            <div className="flex items-center gap-1.5 rounded-md border border-[#c1ff23]/20 bg-white/5 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#c1ff23]">
                                <CheckCircle className="h-3 w-3" />
                                {testimonial.stats.accuracy}
                            </div>
                            <div className="flex items-center gap-1.5 rounded-md border border-green-400/20 bg-white/5 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-green-400">
                                <TrendingUp className="h-3 w-3" />
                                {testimonial.stats.roi}
                            </div>
                        </div>

                        <div className="mb-4 flex items-center border-b border-white/5 pb-4">
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="mr-4 h-14 w-14 rounded-full border-2 border-[#c1ff23] object-cover"
                            />
                            <div>
                                <h3 className="text-lg font-bold leading-tight text-white">{testimonial.name}</h3>
                                <span className="text-sm font-medium text-[#a7f3d0]">{testimonial.role}</span>
                            </div>
                        </div>

                        <p className="text-xl font-normal leading-relaxed text-slate-200">
                            {testimonial.quote}
                        </p>
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="dots-container relative z-20 mb-10 flex gap-2.5">
                {TESTIMONIALS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'w-7 bg-[#facc15]'
                            : 'w-2 bg-white/20 hover:bg-white/40'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center animate-fade-in-up">
                <p className="mb-6 text-[1.35rem] font-medium text-[#a7f3d0]">
                    Join <strong className="font-bold text-white">10,000+ bettors</strong> tracking their winning slips this season.
                </p>
                <button
                    onClick={() => document.getElementById('slips')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-block transform rounded bg-gradient-to-r from-yellow-500 to-yellow-600 px-10 py-4 text-lg font-extrabold uppercase tracking-wider text-black shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all hover:-translate-y-1 hover:bg-[#fde047] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]"
                >
                    Post Your Slip
                </button>
            </div>
        </section>
    );
};

export default Testimonials;