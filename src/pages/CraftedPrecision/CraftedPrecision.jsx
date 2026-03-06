import React from 'react'
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

function CraftedPrecision() {
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

export default CraftedPrecision