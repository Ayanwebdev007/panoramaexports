import React from "react";
import AutoPlayVideo from "../../components/AutoPlayVideo";

import video from "../../assets/DESIGN & DEVELOPMENT/Weaving Excellence.mp4";
import aet1 from "../../assets/DESIGN & DEVELOPMENT/S1.JPG";
import aet2 from "../../assets/DESIGN & DEVELOPMENT/S2.JPG";
import aet3 from "../../assets/DESIGN & DEVELOPMENT/P3 (1).png";

function CraftedPrecision() {
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
                        Design & Development
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-light text-[#AD1E1E] max-w-4xl tracking-wide leading-relaxed">
                        At Panorama Exports, design and development are driven by a deep understanding of evolving fashion, functionality, and consumer expectations.
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
                        From trend research and fabric selection to sampling and fit refinement, each stage of design and development is carefully considered to ensure every detail feels right. Our team works closely with brands and partners to transform concepts into thoughtfully developed garments that combine style, comfort, and functionality. By blending innovative thinking with technical precision, we create products that not only look refined but are designed to perform in everyday life.
                    </p>
                </div>

                {/* Three Images Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16 md:mb-28">
                    <div className="overflow-hidden rounded-xl shadow-sm group">
                        <img src={aet1} alt="Premium Quality Fabric 1" className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                    <div className="overflow-hidden rounded-xl shadow-sm group">
                        <img src={aet2} alt="Premium Quality Fabric 2" className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                    <div className="overflow-hidden rounded-xl shadow-sm group">
                        <img src={aet3} alt="Premium Quality Fabric 3" className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                </div>

                {/* Bottom Text Section */}
                <div className="flex justify-center mb-12">
                    <p className="text-base md:text-lg lg:text-xl font-light text-gray-600 text-center max-w-4xl leading-relaxed tracking-wide">
                        We also recognise the importance of responsible development. By integrating conscious sourcing and mindful manufacturing practices, we strive to create products that reflect a more sustainable approach to fashion.
                    </p>
                </div>
            </main>
        </div>
    );
}

// ==========================================
// LEGACY CONTENT - Preserved for future use
// ==========================================
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import MfgImage from "../../assets/Crafted_Precision/Opening_Images/Mfg.webp";
import SmwImage from "../../assets/Crafted_Precision/Opening_Images/Smw.webp";
import AetImage from "../../assets/Crafted_Precision/Opening_Images/Aet.webp";
import SusDImage from "../../assets/Crafted_Precision/Opening_Images/SusD.webp";
import ExstImage from "../../assets/Crafted_Precision/Opening_Images/Exs.webp";
import AdwImage from "../../assets/Crafted_Precision/Opening_Images/Adw.webp";
import AdcapImage from "../../assets/Crafted_Precision/Opening_Images/Adc.webp";

const craftedP = [
    {
        title: "Manufacturing Excellence",
        img: MfgImage,
        path: "/mfg-excellence",
    },
    {
        title: "Smart Warehousing",
        img: SmwImage,
        path: "/smart-warehousing",
    },
    {
        title: "Art in Every Thread",
        img: AetImage,
        path: "/art-thread",
    },
    {
        title: "Exacting Standards",
        img: ExstImage,
        path: "/exacting-standards",
    },
    {
        title: "Sustainable Designs",
        img: SusDImage,
        path: "/sustainable-designs",
    },
    {
        title: "Advanced Washing",
        img: AdwImage,
        path: "/advanced-washing",
    },
    {
        title: "Adaptive Capacity",
        img: AdcapImage,
        path: "/adaptive-capacity",
    },
];

function LegacyCraftedPrecision() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false); // track pause state

    useEffect(() => {
        if (paused) return; // stop autoplay when paused

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % craftedP.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [paused]);


    return (
        <>
            <section className="bg-white mb-10">
                <div className="w-full h-10 md:h-12 lg:h-20 bg-gray-900"></div>
                <div className="w-[90%] mx-auto lg:py-16 md:py-12 sm:py-10 py-5 px-2 sm:px-6 md:px-10 lg:px-20">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-light font-outfit text-[#01276a]">
                            Crafted Precision
                        </h1>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col md:flex-row gap-2 w-full sm:h-[1000px] h-[800px] md:h-[300px] lg:h-[400px] 2xl:h-[500px] overflow-hidden">
                        {craftedP.map((card, i) => (
                            <div
                                key={i}
                                onMouseEnter={() => {
                                    setActiveIndex(i);
                                    if (activeIndex === i) setPaused(true); // pause autoplay when hovering active card...............
                                }}
                                onMouseLeave={() => setPaused(false)} // resume autoplay...............
                                className={`relative group transition-[flex] duration-[800ms] ${activeIndex === i
                                    ? ""
                                    : "opacity-100"
                                    }`}
                                style={{
                                    backgroundImage: `url(${card.img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    flex: activeIndex === i ? 3 : 1,
                                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                                    willChange: "flex",
                                    transform: "translateZ(0)",
                                    backfaceVisibility: "hidden",
                                }}
                            >
                                <div
                                    className={`absolute inset-0 pointer-events-none ${activeIndex === i
                                        ? "bg-transparent"
                                        : "bg-blue-950/60 text-white"
                                        }`}
                                ></div>
                                <div
                                    className={`absolute inset-y-0 left-0 flex flex-col justify-center items-start p-5 md:p-[1px] lg:p-1 xl:p-2 transition-opacity duration-700 ${activeIndex === i
                                        ? "opacity-100 text-white bg-gradient-to-tl from-black/70 via-black/50 via-black/30 to-transparent bg-right w-[40%] flex flex-col items-center justify-center text-center"
                                        : "opacity-90 text-white"
                                        }`}
                                >
                                    <h2 className="md:text-[10px] lg:text-sm xl:text-md 2xl:text-lg font-light text-center">
                                        {card.title}
                                    </h2>
                                    {activeIndex === i && (
                                        <Link to={card.path}>
                                            <ArrowRight className="mt-3 md:mt-4 text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transform transition-transform group-hover:translate-x-2 cursor-pointer" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default CraftedPrecision;