/// VisionMission.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bgImage from "../../assets/OurStory/visionMission/main_bg.webp";
import CoreValues from "./CoreValues";


import MissionImage from "../../assets/OurStory/visionMission/Mission.webp";
import FabricTexture from "../../assets/backgrounds/fabric-texture.webp";

const labels = {
    "#vision-values": "VisionValues",
    "#core-values": "CoreValues",
};





export default function VisionMission() {
    const swiperRef = useRef(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [currentSlideIndex1, setCurrentSlideIndex1] = useState(0);
    const location = useLocation();
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });



    // Smooth scroll on hash change
    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const section = document.querySelector(location.hash);
                if (section) {
                    const yOffset = -80; // adjust based on your navbar/breadcrumb height
                    const y =
                        section.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    // swiper for directors...........
    useEffect(() => {
        const swiper = swiperRef.current?.swiper;
        if (!swiper) return;

        // Set initial slide index
        setCurrentSlideIndex(0);

        // Initialize autoplay with a slight delay
        const autoplayTimer = setTimeout(() => {
            if (swiper.autoplay) {
                swiper.autoplay.start();
            }
        }, 100);

        // Handle slide change for directors................
        const handleSlideChange = () => {
            const newIndex = swiper.realIndex;
            setCurrentSlideIndex(newIndex);

            // Announce slide changes for screen readers
            const activeSlide = directors[newIndex];
            if (activeSlide) {
                const announcement = document.createElement("div");
                announcement.setAttribute("aria-live", "polite");
                announcement.setAttribute("aria-atomic", "true");
                announcement.className = "sr-only";
                announcement.textContent = `Slide ${newIndex + 1} of ${directors.length
                    }: PANORAMA ${activeSlide.dynamicText}`;
                document.body.appendChild(announcement);

                // Clean up announcement after screen reader has time to read it
                setTimeout(() => {
                    if (document.body.contains(announcement)) {
                        document.body.removeChild(announcement);
                    }
                }, 1000);
            }
        };

        swiper.on("slideChange", handleSlideChange);

        // Cleanup function
        return () => {
            clearTimeout(autoplayTimer);
            swiper.off("slideChange", handleSlideChange);
        };
    }, []);

    // swiper for executive-directors...........
    useEffect(() => {
        const swiper = swiperRef.current?.swiper;
        if (!swiper) return;

        // Set initial slide index
        setCurrentSlideIndex1(0);

        // Initialize autoplay with a slight delay
        const autoplayTimer = setTimeout(() => {
            if (swiper.autoplay) {
                swiper.autoplay.start();
            }
        }, 100);

        // Handle slide change for executive-directors................
        const handleSlideChange1 = () => {
            const newIndex = swiper.realIndex;
            setCurrentSlideIndex1(newIndex);

            // Announce slide changes for screen readers
            const activeSlide = executiveDirectors[newIndex];
            if (activeSlide) {
                const announcement = document.createElement("div");
                announcement.setAttribute("aria-live", "polite");
                announcement.setAttribute("aria-atomic", "true");
                announcement.className = "sr-only";
                announcement.textContent = `Slide ${newIndex + 1} of ${executiveDirectors.length
                    }: PANORAMA ${activeSlide.dynamicText}`;
                document.body.appendChild(announcement);

                // Clean up announcement after screen reader has time to read it
                setTimeout(() => {
                    if (document.body.contains(announcement)) {
                        document.body.removeChild(announcement);
                    }
                }, 1000);
            }
        };

        swiper.on("slideChange", handleSlideChange1);

        // Cleanup function
        return () => {
            clearTimeout(autoplayTimer);
            swiper.off("slideChange", handleSlideChange1);
        };
    }, []);

    return (
        <>
            <div className="sm:hidden w-full h-10 bg-gray-900"></div>
            
            {/* Refined Modern Hero Section */}
            <section className="relative bg-white pt-16 pb-12 sm:pt-24 sm:pb-20 font-outfit overflow-hidden">
                <div className="relative z-10 max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-light text-[#AD1E1E] mb-6 tracking-[0.3em] uppercase">
                            Woven into Every Thread
                        </h1>
                        <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed tracking-wide max-w-[800px] mx-auto mb-16">
                            Our vision shapes the future of fashion; our values
                            guide every stitch. We don’t just make clothing — we build
                            trust, innovate with intent, and create with heart.
                        </p>

                        {/* Featured Hero Image with Premium Treatment */}
                        <div className="relative w-full max-w-[1400px] mx-auto aspect-[21/10] overflow-hidden shadow-sm group border border-gray-100">
                            <img 
                                src={bgImage} 
                                alt="Hero" 
                                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/5"></div>
                        </div>
                    </motion.div>
                </div>
            </section>



            {/* Redesigned Mission & Vision Section */}
            <section id="vision-values" className="bg-[#AD1E1E] py-16 md:py-24 font-outfit text-white">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                        {/* Left Column: Mission Image */}
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="w-full md:w-1/2"
                        >
                            <div className="overflow-hidden rounded-[20px] border-[4px] border-white shadow-2xl aspect-[16/10] bg-white/10">
                                <img
                                    src={MissionImage}
                                    alt="Panorama Mission"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Right Column: Mission & Vision Text */}
                        <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="w-full md:w-1/2 flex flex-col justify-center text-left"
                        >
                            {/* Mission */}
                            <div className="mb-12">
                                <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-[0.1em] uppercase mb-2">
                                    Mission
                                </h3>
                                <div className="w-20 h-[1.5px] bg-white/30 mb-4"></div>
                                <p className="text-white/95 text-base md:text-lg leading-relaxed font-light max-w-xl">
                                    To exceed expectations through innovation, efficiency, and a people-first culture — redefining global apparel manufacturing.
                                </p>
                            </div>

                            {/* Vision */}
                            <div>
                                <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-[0.1em] uppercase mb-2">
                                    Vision
                                </h3>
                                <div className="w-20 h-[1.5px] bg-white/30 mb-4"></div>
                                <p className="text-white/95 text-base md:text-lg leading-relaxed font-light max-w-xl">
                                    To be the world’s most trusted apparel partner, championing technology, sustainability, and design excellence.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Values Sections */}
            <section
                id="core-values"
                className="w-full bg-[#F9F6F1] pt-10 pb-8 md:pt-16 md:pb-12"
            >
                <CoreValues />
            </section>
        </>
    );
}
