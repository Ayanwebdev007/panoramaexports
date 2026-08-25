import React from "react";
import AutoPlayVideo from "../../components/AutoPlayVideo";

import video from "../../assets/QUALITY ASSURANCE/Quality Assurance Hero section.mp4";
import aet1 from "../../assets/QUALITY ASSURANCE/Art in every thread.png";
import aet2 from "../../assets/QUALITY ASSURANCE/CM100146.JPG";
import aet3 from "../../assets/QUALITY ASSURANCE/3.png";

function ExactingStandards() {
    return (
        <div className="bg-[#fafafa] min-h-screen font-outfit text-gray-900 pb-20">
            {/* Header Spacer to account for fixed navbar */}
            <div className="w-full h-12 md:h-16 lg:h-20 bg-[#fafafa]"></div>
            
            <main className="max-w-[1700px] mx-auto px-4 md:px-8 lg:px-12">
                {/* Header Section */}
                <header className="flex flex-col items-center justify-center text-center mt-6 md:mt-12 mb-10 md:mb-16 w-full overflow-hidden">
                    <h1 
                        className="text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] font-light italic tracking-tight text-gray-700 mb-4 md:mb-6"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Quality Assurance
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-light text-[#AD1E1E] max-w-4xl tracking-wide leading-relaxed">
                        Quality assurance at Panorama Exports is driven by precision, consistency, and strong attention to detail.
                    </p>
                </header>

                {/* Video Section */}
                <div className="w-full mx-auto mb-16 md:mb-28 rounded-2xl overflow-hidden shadow-md aspect-video relative group">
                    <AutoPlayVideo
                        src={video}
                        loopTime={5000}
                        className="w-full h-full"
                        videoClassName="w-full h-full object-cover"
                        bgColor="#f3f4f6"
                    />
                </div>

                {/* Main Text Section */}
                <div className="flex justify-center mb-16 md:mb-28">
                    <p className="text-base md:text-lg lg:text-[1.35rem] font-light text-gray-800 text-justify max-w-[1400px] leading-[1.8] tracking-wide">
                        Our dedicated experts carry out detailed inspections, precision testing, and continuous evaluations to ensure every garment meets the highest standards of quality and consistency. From fabric and stitching to fit, finishing, colour accuracy, and durability, each product is carefully assessed before reaching our clients. By combining skilled craftsmanship with structured quality management practices, we maintain reliability and attention to detail across every collection.
                    </p>
                </div>

                {/* Three Images Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16 md:mb-28">
                    <div className="overflow-hidden rounded-xl shadow-sm group h-full">
                        <img src={aet1} alt="Premium Quality Fabric 1" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                    <div className="overflow-hidden rounded-xl shadow-sm group h-full">
                        <img src={aet2} alt="Premium Quality Fabric 2" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                    <div className="overflow-hidden rounded-xl shadow-sm group h-full">
                        <img src={aet3} alt="Premium Quality Fabric 3" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                </div>

                {/* Bottom Text Section */}
                <div className="flex justify-center mb-12">
                    <p className="text-base md:text-lg lg:text-xl font-light text-gray-600 text-center max-w-4xl leading-relaxed tracking-wide">
                        At Panorama, quality is not simply about meeting expectations — it is about delivering products our partners can rely on and building long-term relationships through trust, consistency, and dependable craftsmanship.
                    </p>
                </div>
            </main>
        </div>
    );
}

// ==========================================
// LEGACY CONTENT - Preserved for future use
// ==========================================

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// const mfgImages = [
//     {
//         title: "manufacturing excellence",
//         img: aet,
//     },
// ];

function LegacyExactingStandards() {
    const swiperRef = useRef(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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

        // Handle slide change for mfgImages................
        const handleSlideChange = () => {
            const newIndex = swiper.realIndex;
            setCurrentSlideIndex(newIndex);

            // Announce slide changes for screen readers
            const activeSlide = mfgImages[newIndex];
            if (activeSlide) {
                const announcement = document.createElement("div");
                announcement.setAttribute("aria-live", "polite");
                announcement.setAttribute("aria-atomic", "true");
                announcement.className = "sr-only";
                announcement.textContent = `Slide ${newIndex + 1} of ${mfgImages.length
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

    return (
        <>
            <section className="bg-white">
                <div className="w-full h-10 md:h-12 lg:h-20 bg-gray-900"></div>
                <div className="w-[90%] mx-auto lg:py-16 md:py-12 sm:py-10 py-5 px-2 sm:px-6 md:px-10 lg:px-20">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-light font-outfit text-[#AD1E1E]">
                            Exacting Standards
                        </h1>
                    </div>
                </div>
                <div className="md:mb-10 w-[90%] mx-auto">
                    <AutoPlayVideo
                        src={video}
                        loopTime={5000}
                        className="md:mb-10 rounded-[2rem] overflow-hidden"
                        bgColor="#5b4e39"
                    />
                </div>
                <div className="lg:my-16 md:my-10 my-5 text-justify md:w-[70%] w-[95%] mx-auto px-4 text-sm md:text-xl text-gray-700 font-light font-outfit">
                    {/* <p className="font-bold text-xl md:text-2xl my-2 text-center">
                        Exacting Standards
                    </p> */}
                    Every garment embodies a story of precision and
                    accountability—crafted from responsibly sourced materials
                    and guided through a meticulously monitored production
                    journey. At each stage, rigorous inspections ensure flawless
                    consistency, reflecting our enduring commitment to
                    excellence.
                </div>
            </section>
            {/* Images Area */}
            <section className="w-[90%] mx-auto grid md:grid-cols-3 grid-cols-1 2xl:gap-5 lg:gap-4 md:gap-3 gap-2">
                <div className="overflow-hidden rounded-[2rem]">
                    <img src={aet1} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-[2rem]">
                    <img src={aet2} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="overflow-hidden rounded-[2rem]">
                    <img src={aet3} alt="" className="w-full h-full object-cover" />
                </div>
            </section>
            <div className="lg:my-16 md:my-10 my-5 text-justify md:w-[70%] w-[95%] mx-auto px-4 text-sm md:text-xl text-gray-700 font-light font-outfit">
                Through the harmony of cutting-edge technology and artisanal
                finesse, each creation achieves a level of refinement that
                defines modern luxury.
            </div>
        </>
    );
}

export default ExactingStandards;
