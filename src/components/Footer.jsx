import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowUp, Youtube, Twitter, Linkedin } from "lucide-react";

const LETTERS = "REACH US".split("");

export default function Footer({ setIsNewsletterOpen }) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const sectionRef = useRef(null);
    const [animKey, setAnimKey] = useState(0);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimKey(k => k + 1);
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <footer className="bg-[#01276a] text-white">
            {/* 'Smart Techy but Smooth': Cyber-Scan Decode Animation */}
            <style>{`
                @keyframes techResolve {
                    0% { 
                        opacity: 0; 
                        transform: scale(1.1) translateY(10px);
                        filter: blur(15px) brightness(2);
                        text-shadow: 0 0 20px rgba(255, 204, 0, 0.4);
                    }
                    50% {
                        opacity: 0.7;
                        filter: blur(4px) brightness(1.5);
                    }
                    100% { 
                        opacity: 1; 
                        transform: scale(1) translateY(0);
                        filter: blur(0px) brightness(1);
                        text-shadow: 0 0 0px transparent;
                    }
                }
                .tech-letter {
                    display: inline-block;
                    opacity: 0;
                    transform-origin: center;
                }
                .tech-letter.animate {
                    animation: techResolve 0.9s cubic-bezier(0.19, 1, 0.22, 1) both;
                }
                .tech-letter:hover {
                    color: #ffcc00;
                    text-shadow: 0 0 15px rgba(255, 204, 0, 0.5);
                    transition: all 0.3s ease;
                }
            `}</style>

            {/* Top Section: Three Main Modules */}
            <div className="flex flex-col lg:flex-row border-b border-white/10">

                {/* Module 1: Who We Are */}
                <div className="lg:w-[30%] p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">WHO WE ARE</h2>
                    <p className="text-[#b89d6d] font-light leading-relaxed text-base md:text-lg max-w-md">
                        Since 1973, Panorama Exports has transformed fabric into global fashion, blending timeless craftsmanship with modern precision. From India to the world, every garment reflects creativity, technology, and decades of dedication.
                    </p>
                </div>

                {/* Module 2: Social Tabs */}
                <div className="lg:w-1/6 flex flex-col border-b lg:border-b-0 lg:border-r border-white/10 min-w-[180px]">
                    <a href="#" className="flex-1 flex items-center gap-4 p-6 md:px-8 hover:bg-white/5 transition-colors border-b border-white/10 group">
                        <Youtube className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <span className="font-bold tracking-widest text-sm uppercase">YouTube</span>
                    </a>
                    <a href="#" className="flex-1 flex items-center gap-4 p-6 md:px-8 hover:bg-white/5 transition-colors border-b border-white/10 group">
                        <Twitter className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <span className="font-bold tracking-widest text-sm uppercase">Twitter</span>
                    </a>
                    <a href="#" className="flex-1 flex items-center gap-4 p-6 md:px-8 hover:bg-white/5 transition-colors group">
                        <Linkedin className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <span className="font-bold tracking-widest text-sm uppercase">LinkedIn</span>
                    </a>
                </div>

                {/* Module 3: Reach Us */}
                <div
                    ref={sectionRef}
                    className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-white/5"
                >
                    <div className="absolute top-0 right-0 p-8">
                        <Link to="/contactus">
                            <button className="bg-[#ffcc00] p-4 rounded-sm shadow-xl hover:bg-white hover:text-[#01276a] transition-all transform hover:scale-110 active:scale-95 group">
                                <Mail className="w-6 h-6 stroke-[2.5]" />
                            </button>
                        </Link>
                    </div>
                    <div className="mt-12 lg:mt-0 select-none overflow-visible h-full flex items-center">
                        <h1
                            key={animKey}
                            className="text-5xl md:text-6xl lg:text-[clamp(3.5rem,8.5vw,7.5rem)] font-bold tracking-tighter leading-[1.1] whitespace-nowrap"
                            style={{ display: "flex", flexWrap: "wrap" }}
                        >
                            {LETTERS.map((letter, i) =>
                                letter === " " ? (
                                    <span key={`space-${i}-${animKey}`} style={{ display: "inline-block", width: "0.25em" }}>&nbsp;</span>
                                ) : (
                                    <span
                                        key={`${i}-${animKey}`}
                                        className={`tech-letter ${animKey > 0 ? "animate" : ""}`}
                                        style={{
                                            animationDelay: `${i * 0.04}s`,
                                        }}
                                    >
                                        {letter}
                                    </span>
                                )
                            )}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="px-8 md:px-12 lg:px-16 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-xs md:text-sm text-gray-400 space-y-1">
                        <p>© 2025 – 2026 | All rights reserved by Panorama Exports Pvt Ltd</p>
                    </div>
                    <nav className="flex flex-wrap justify-center gap-6 md:gap-12">
                        <Link to="/ourstory" className="text-xs md:text-sm font-bold tracking-wider hover:text-[#b89d6d] transition-colors">About</Link>
                        <Link to="/peoples" className="text-xs md:text-sm font-bold tracking-wider hover:text-[#b89d6d] transition-colors">Career</Link>
                        <Link to="/responsibility" className="text-xs md:text-sm font-bold tracking-wider hover:text-[#b89d6d] transition-colors">Sustainability</Link>
                        <button 
                            onClick={() => setIsNewsletterOpen(true)}
                            className="text-xs md:text-sm font-bold tracking-wider hover:text-[#b89d6d] transition-colors"
                        >
                            Newsletter
                        </button>
                        <Link to="/contactus" className="text-xs md:text-sm font-bold tracking-wider hover:text-[#b89d6d] transition-colors">Contact</Link>
                    </nav>
                    <button
                        onClick={scrollToTop}
                        className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-[#01276a] transition-all"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </footer>
    );
}