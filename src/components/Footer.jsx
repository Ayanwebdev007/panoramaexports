import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowUp, Youtube, Instagram, Linkedin } from "lucide-react";

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
        <footer className="bg-[#F9F6F1] text-[#1a1a1a] border-t border-[#AD1E1E]/10">
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
                    color: #AD1E1E;
                    text-shadow: 0 0 15px rgba(173, 30, 30, 0.3);
                    transition: all 0.3s ease;
                }
            `}</style>

            {/* Top Section: Three Main Modules */}
            <div className="flex flex-col lg:flex-row border-b border-white/10">

                {/* Module 1: Who We Are */}
                <div className="lg:w-[30%] p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-[#AD1E1E]/10 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-[#AD1E1E] font-outfit uppercase">WHO WE ARE</h2>
                    <p className="text-[#4b5563] font-light leading-relaxed text-lg md:text-xl max-w-lg">
                        Since 1973, Panorama Exports has transformed fabric into global fashion, blending timeless craftsmanship with modern precision. From India to the world, every garment reflects creativity, technology, and decades of dedication.
                    </p>
                </div>

                {/* Module 2: Social Tabs */}
                <div className="lg:w-1/6 flex flex-col border-b lg:border-b-0 lg:border-r border-[#AD1E1E]/10 min-w-[180px]">
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center gap-4 p-6 md:px-8 hover:bg-black/5 transition-colors border-b border-[#AD1E1E]/10 group">
                        <Youtube className="w-6 h-6 text-[#AD1E1E] opacity-80 group-hover:opacity-100 transition-opacity" />
                        <span className="font-bold tracking-widest text-base md:text-lg uppercase text-[#1a1a1a] group-hover:text-[#AD1E1E] transition-colors">YouTube</span>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center gap-4 p-6 md:px-8 hover:bg-black/5 transition-colors border-b border-[#AD1E1E]/10 group">
                        <Instagram className="w-6 h-6 text-[#AD1E1E] opacity-80 group-hover:opacity-100 transition-opacity" />
                        <span className="font-bold tracking-widest text-base md:text-lg uppercase text-[#1a1a1a] group-hover:text-[#AD1E1E] transition-colors">Instagram</span>
                    </a>
                    <a href="https://www.linkedin.com/company/panorama-exports/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center gap-4 p-6 md:px-8 hover:bg-black/5 transition-colors group">
                        <Linkedin className="w-6 h-6 text-[#AD1E1E] opacity-80 group-hover:opacity-100 transition-opacity" />
                        <span className="font-bold tracking-widest text-base md:text-lg uppercase text-[#1a1a1a] group-hover:text-[#AD1E1E] transition-colors">LinkedIn</span>
                    </a>
                </div>

                {/* Module 3: Reach Us */}
                <div
                    ref={sectionRef}
                    className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-black/[0.02]"
                >
                    <div className="absolute top-0 right-0 p-8">
                        <Link to="/contactus">
                            <button className="bg-[#AD1E1E] p-4 rounded-sm shadow-xl hover:bg-[#1a1a1a] text-white transition-all transform hover:scale-110 active:scale-95 group">
                                <Mail className="w-6 h-6 stroke-[2.5]" />
                            </button>
                        </Link>
                    </div>
                    <div className="mt-12 lg:mt-0 select-none overflow-visible h-full flex items-center">
                        <h1
                            key={animKey}
                            className="text-4xl md:text-5xl lg:text-[clamp(2.5rem,5.5vw,5rem)] font-bold tracking-tighter leading-[1.1] whitespace-nowrap"
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
                    <div className="text-xs md:text-sm text-gray-500 space-y-1">
                        <p>© 2025 – 2026 | All rights reserved by Panorama Exports Pvt Ltd</p>
                    </div>
                    <nav className="flex flex-wrap justify-center gap-6 md:gap-12">
                        <Link to="/ourstory" className="text-xs md:text-sm font-bold tracking-wider hover:text-[#AD1E1E] transition-colors text-[#1a1a1a]">About</Link>
                        <Link to="/peoples" className="text-xs md:text-sm font-bold tracking-wider hover:text-[#AD1E1E] transition-colors text-[#1a1a1a]">Career</Link>
                        <Link to="/responsibility" className="text-xs md:text-sm font-bold tracking-wider hover:text-[#AD1E1E] transition-colors text-[#1a1a1a]">Sustainability</Link>
                        <button 
                            onClick={() => setIsNewsletterOpen(true)}
                            className="text-xs md:text-sm font-bold tracking-wider hover:text-[#AD1E1E] transition-colors text-[#1a1a1a]"
                        >
                            Newsletter
                        </button>
                        <Link to="/contactus" className="text-xs md:text-sm font-bold tracking-wider hover:text-[#AD1E1E] transition-colors text-[#1a1a1a]">Contact</Link>
                    </nav>
                    <button
                        onClick={scrollToTop}
                        className="bg-black/5 p-3 rounded-full hover:bg-[#AD1E1E] hover:text-white transition-all text-[#1a1a1a]"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </footer>
    );
}