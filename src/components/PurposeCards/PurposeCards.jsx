import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";

import EnrichingLives from "../../assets/OurPurpose/1.webp";
import DynamicHeart from "../../assets/OurPurpose/2.webp";
import ResponsibleReverence from "../../assets/our purpose responsible reverence.JPG";
import TrustCore from "../../assets/OurPurpose/Trusted.webp";

const purposeItems = [
    {
        img: EnrichingLives,
        title: "Enriching Lives",
        description: `Empowering people, uplifting communities, and shaping better futures that sustains ecosystems, anticipates new lifestyles, and supports the aspirations of every member of our team.`,
        link: "/ourpurpose"
    },
    {
        img: DynamicHeart,
        title: "Dynamic Heart",
        description: `Agile, bold, and ever-evolving with ideas, technology, and learning. We acquire new capabilities, master fresh capacities, and continuously innovate to pioneer and reinvent the future.`,
        link: "/ourpurpose"
    },
    {
        img: TrustCore,
        title: "Trusted at Core",
        description: `Reliability and intent define every product, partnership, and promise. Trust is our greatest currency—built in every interaction, upheld in all circumstances, and strengthened over time through our products, services, and unwavering intent.`,
        link: "/ourpurpose"
    },
    {
        img: ResponsibleReverence,
        title: "Responsible Reverence",
        description: `Committed to people, planet, and purpose—balancing profit with progress. We foster a culture where every decision is thoughtful, accountable, and value-driven. Advancing the circular economy, and creating capacity through smart resource use and ethical governance.`,
        link: "/ourpurpose"
    },
];

const PurposeCards = () => {
    // Triplicate items for infinite feel
    const items = [...purposeItems, ...purposeItems, ...purposeItems];
    const [currentIndex, setCurrentIndex] = useState(purposeItems.length);
    const controls = useAnimation();
    const [isAnimating, setIsAnimating] = useState(false);
    
    const [cardWidth, setCardWidth] = useState(404);
    const indexRef = useRef(purposeItems.length);

    // Sync ref with index for resize calculations
    useEffect(() => {
        indexRef.current = currentIndex;
    }, [currentIndex]);

    // Handle width measurement and resize repositioning
    useEffect(() => {
        const calculateWidth = () => {
            let width = 404; // default md+
            if (window.innerWidth < 640) width = 304; // mobile
            else if (window.innerWidth < 768) width = 344; // sm
            return width;
        };

        // Initial setup
        const initialWidth = calculateWidth();
        setCardWidth(initialWidth);
        controls.set({ x: -(purposeItems.length * initialWidth) });

        // Handle window resize
        const onResize = () => {
            const nextWidth = calculateWidth();
            setCardWidth(nextWidth);
            // Reposition to maintain current item view
            controls.set({ x: -(indexRef.current * nextWidth) });
        };

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [controls]); 

    const handleScroll = async (direction) => {
        if (isAnimating) return;
        
        setIsAnimating(true);
        const newIndex = direction === 'right' ? currentIndex + 1 : currentIndex - 1;
        
        // Update local state for index
        setCurrentIndex(newIndex);

        // Perform the smooth animation
        await controls.start({
            x: -(newIndex * cardWidth),
            transition: { 
                type: "tween", 
                duration: 1.2, 
                ease: [0.32, 0.72, 0, 1] 
            }
        });

        setIsAnimating(false);
        checkLoop(newIndex);
    };

    const checkLoop = (index) => {
        let jumpIndex = index;
        
        if (index <= 0) {
            jumpIndex = index + purposeItems.length;
        } else if (index >= purposeItems.length * 2) {
            jumpIndex = index - purposeItems.length;
        }

        if (jumpIndex !== index) {
            controls.set({ x: -(jumpIndex * cardWidth) });
            setCurrentIndex(jumpIndex);
        }
    };

    return (
        <section className="bg-white py-16 lg:py-24 overflow-hidden font-outfit relative">
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes meshGradient {
                    0% { background-position: 0% 0%; }
                    25% { background-position: 100% 0%; }
                    50% { background-position: 100% 100%; }
                    75% { background-position: 0% 100%; }
                    100% { background-position: 0% 0%; }
                }
                .heritage-mesh {
                    background-color: #01276a;
                    background-image: 
                        radial-gradient(at 0% 0%, #003399 0, transparent 50%),
                        radial-gradient(at 50% 0%, #01276a 0, transparent 50%),
                        radial-gradient(at 100% 0%, #001a4d 0, transparent 50%),
                        radial-gradient(at 0% 50%, #01276a 0, transparent 50%),
                        radial-gradient(at 50% 50%, #001233 0, transparent 50%),
                        radial-gradient(at 100% 50%, #01276a 0, transparent 50%),
                        radial-gradient(at 0% 100%, #001a4d 0, transparent 50%),
                        radial-gradient(at 50% 100%, #01276a 0, transparent 50%),
                        radial-gradient(at 100% 100%, #003399 0, transparent 50%);
                    background-size: 200% 200%;
                    animation: meshGradient 20s ease infinite;
                }
                .cloth-texture::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background-image: 
                        repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0px, rgba(255, 255, 255, 0.08) 1px, transparent 1px, transparent 4px),
                        repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.08) 0px, rgba(255, 255, 255, 0.08) 1px, transparent 1px, transparent 4px);
                    mix-blend-mode: overlay;
                    pointer-events: none;
                    z-index: 1;
                }
            ` }} />

            <div className="w-[90%] mx-auto px-2 sm:px-6 md:px-10 lg:px-20 mb-16">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
                    <div className="flex-1">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-[#01276a] mb-4">
                            Our Purpose
                        </h2>
                        <p className="text-sm md:text-lg text-gray-600 font-light max-w-2xl text-justify">
                            To enrich lives by building a dynamic, responsible, and trusted global enterprise.
                        </p>
                    </div>
                </div>
            </div>

            {/* Carousel Container with Side Arrows */}
            <div className="relative w-full px-4 md:px-12 max-w-[1400px] mx-auto group/container">
                {/* Navigation Arrows - Side Positioned */}
                <button 
                    onClick={() => handleScroll('left')}
                    disabled={isAnimating}
                    className="absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 z-30 w-12 md:w-14 h-12 md:h-14 flex items-center justify-center rounded-full bg-white border border-[#01276a]/20 text-[#01276a] shadow-lg hover:bg-[#01276a] hover:text-white transition-all duration-500 group disabled:opacity-30 disabled:cursor-not-allowed md:opacity-0 group-hover/container:opacity-100"
                    aria-label="Previous"
                >
                    <IoArrowForward className="rotate-180 group-hover:-translate-x-1 transition-transform text-xl" />
                </button>
                
                <button 
                    onClick={() => handleScroll('right')}
                    disabled={isAnimating}
                    className="absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 z-30 w-12 md:w-14 h-12 md:h-14 flex items-center justify-center rounded-full bg-white border border-[#01276a]/20 text-[#01276a] shadow-lg hover:bg-[#01276a] hover:text-white transition-all duration-500 group disabled:opacity-30 disabled:cursor-not-allowed md:opacity-0 group-hover/container:opacity-100"
                    aria-label="Next"
                >
                    <IoArrowForward className="group-hover:translate-x-1 transition-transform text-xl" />
                </button>

                {/* Viewport Window - Shows exactly 3 cards on MD+, 2 on SM, 1 on Mobile */}
                <div className="relative overflow-hidden mx-auto w-[280px] sm:w-[664px] md:w-[1188px] z-20">
                    <motion.div 
                        className="flex gap-6"
                        animate={controls}
                    >
                        {items.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex-none w-[280px] sm:w-[320px] md:w-[380px] group heritage-mesh cloth-texture shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(1,39,106,0.25)] transition-all duration-700 flex flex-col relative overflow-hidden"
                            >
                                {/* Image Container */}
                                <div className="relative overflow-hidden aspect-[4/3] z-10">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-110"
                                    />
                                    </div>

                                {/* Content Container */}
                                <div className="p-8 md:p-10 flex flex-col flex-1 relative z-10">
                                    <h3 className="text-xl md:text-2xl font-medium text-white mb-4 tracking-tight leading-tight group-hover:text-[#ffd700] transition-colors duration-500">
                                        {item.title}
                                    </h3>
                                    <p className="text-[0.95rem] md:text-[1rem] text-gray-300 leading-relaxed text-left font-light transition-colors duration-500 group-hover:text-white">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Heritage Accent Bar - Gold */}
                                <div className="absolute bottom-0 left-0 h-[3px] bg-[#ffd700] w-12 group-hover:w-full transition-all duration-700 ease-in-out z-20"></div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PurposeCards;

