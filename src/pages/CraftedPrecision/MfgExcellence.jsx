import React from "react";
import AutoPlayVideo from "../../components/AutoPlayVideo";

import video from "../../assets/Crafted_Precision/Manufacturing_Excellence/1st-big-pic.mp4";
import mfg1 from "../../assets/Crafted_Precision/Manufacturing_Excellence/Small1stPic.webp";
import mfg2 from "../../assets/Crafted_Precision/Manufacturing_Excellence/Small2ndPic.webp";
import mfg3 from "../../assets/Crafted_Precision/Manufacturing_Excellence/Small3rdPic.webp";

function MfgExcellence() {
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
                        Technical Mastery
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-light text-[#AD1E1E] max-w-5xl tracking-wide leading-relaxed">
                        Technical mastery at Panorama Exports is driven by a strong foundation of industry knowledge, skilled craftsmanship, and advanced manufacturing capabilities.
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
                    <p className="text-base md:text-lg lg:text-[1.35rem] font-light text-gray-800 text-justify max-w-[1550px] leading-[1.8] tracking-wide">
                        Every garment is developed through carefully managed processes that focus on precision, efficiency, and consistency at every stage of production. From pattern engineering and garment construction to fabric handling, finishing, and production planning, our technical expertise ensures every product is developed to meet exact specifications and performance expectations. We work closely with brands and partners to refine fits, improve functionality, and maintain consistency across every collection.
                    </p>
                </div>

                {/* Three Images Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16 md:mb-28">
                    <div className="overflow-hidden rounded-xl shadow-sm group h-full">
                        <img src={mfg1} alt="Premium Quality Fabric 1" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                    <div className="overflow-hidden rounded-xl shadow-sm group h-full">
                        <img src={mfg2} alt="Premium Quality Fabric 2" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                    <div className="overflow-hidden rounded-xl shadow-sm group h-full">
                        <img src={mfg3} alt="Premium Quality Fabric 3" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                </div>

                {/* Bottom Text Section */}
                <div className="flex justify-center mb-12">
                    <p className="text-base md:text-lg lg:text-xl font-light text-gray-600 text-center max-w-4xl leading-relaxed tracking-wide">
                        By combining craftsmanship with modern manufacturing capabilities, we are able to adapt to changing market requirements while maintaining high standards of quality and reliability. Continuous learning, process optimisation, and innovation remain central to our approach, allowing us to deliver garments that reflect both technical precision and lasting value.
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
//         img: mfg,
//     }
// ];

const VisionImages = [
    {
        id: 1,
        image: mfg2,
        text: "",
        subtext: "",
    },
    {
        id: 2,
        image: mfg1,
        text: "",
        subtext: "",
    },
];

function LegacyMfgExcellence() {
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
                            Manufacturing Excellence
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
                        Manufacturing Excellence{" "}
                    </p> */}
                    Five state-of-the-art factories work in perfect
                    synergy-streamlining every stage from fabric to final
                    finish. Powered by smart technology and real-time quality
                    control, Panorama delivers garments that blend innovation,
                    craftsmanship, and efficiency.
                </div>
            </section>
            <section className="">
                {/* Images Area */}
                <section className="w-[90%] mx-auto grid md:grid-cols-3 grid-cols-1 2xl:gap-5 lg:gap-4 md:gap-3 gap-2">
                    <div className="overflow-hidden rounded-[2rem]">
                        <img src={mfg1} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-[2rem]">
                        <img src={mfg2} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="overflow-hidden rounded-[2rem]">
                        <img src={mfg3} alt="" className="w-full h-full object-cover" />
                    </div>
                </section>
                <div className="lg:my-16 md:my-10 my-5 text-justify md:w-[70%] w-[95%] mx-auto px-4 text-sm md:text-xl text-gray-700 font-light font-outfit">
                    At Panorama, excellence is both a process and a promise.
                    Integrated quality control ensures uniformity, resilience,
                    and refinement throughout production. Sustainability remains
                    central to our innovation-driven by water-conscious dyeing
                    methods, cleaner processes, and advanced finishing
                    techniques. Our expertise in customization enables the
                    development of distinctive fabrics, finishes, and designs
                    that elevate brand identity and performance standards. Fully
                    aligned with global compliance and certification
                    requirements, Panorama shapes the future of woven fabrics
                    and garments-where premium craftsmanship meets responsible
                    innovation.
                </div>
            </section>
        </>
    );
}

export default MfgExcellence;
