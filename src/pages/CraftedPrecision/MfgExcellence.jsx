import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AutoPlayVideo from "../../components/AutoPlayVideo";

import video from "../../assets/Crafted_Precision/Manufacturing_Excellence/1st big pic.mp4";
import mfg1 from "../../assets/Crafted_Precision/Manufacturing_Excellence/Small1stPic.jpg";
import mfg2 from "../../assets/Crafted_Precision/Manufacturing_Excellence/Small2ndPic.jpg";
import mfg3 from "../../assets/Crafted_Precision/Manufacturing_Excellence/Small3rdPic.jpg";

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

function MfgExcellence() {
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
                announcement.textContent = `Slide ${newIndex + 1} of ${
                    mfgImages.length
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
                <div className="w-[90%] mx-auto lg:py-16 md:py-12 sm:py-10 py-5 px-2 sm:px-6 md:px-10 lg:px-20 text-lg sm:text-3xl md:text-4xl lg:text-5xl">
                    <h1 className="py-3 px-4 font-semibold bg-blue-950 inline-block text-white">
                        MANUFACTURING EXCELLENCE
                    </h1>
                </div>
                <div className="md:mb-10 w-[90%] xl:w-full mx-auto">
                    <AutoPlayVideo
                        src={video}
                        loopTime={5000}
                        className="md:mb-10"
                        bgColor="#5b4e39"
                    />
                </div>
                <div className="lg:my-16 md:my-10 my-5 text-justify md:w-[70%] w-[95%] mx-auto px-4 text-sm md:text-xl text-blue-950">
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
                {/* <div className="lg:w-[100%] mx-auto px-6 md:px-8 lg:px-10 2xl:px-12 md:py-12 py-5 grid lg:grid-cols-2 2xl:gap-12 lg:gap-10 md:gap-8 gap-6">
                    {VisionImages.map((item) => (
                        <div
                            key={item.id}
                            className="relative overflow-hidden shadow-lg group"
                        >
                            <img
                                src={item.image}
                                alt="vision"
                                className="w-full object-contain transform transition-transform duration-[4000ms] ease-out group-hover:scale-[1.1]"
                            />
                            
                            <div className="absolute inset-0 py-[10%] bg-gradient-to-t from-blue-950/50 via-blue-950/40 via-blue-950/30 via-blue-950/20 to-transparent group-hover:from-blue-950/90 group-hover:via-blue-950/80 group-hover:via-blue-950/50 group-hover:via-blue-950/40 group-hover:to-transparent transition-all duration-500 flex flex-col justify-end p-6">
                                <p className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mx-[10%]">
                                    {item.text}
                                </p>
                                <p className="mx-[10%] mt-4 text-white">
                                    {item.subtext}
                                </p>
                            </div>
                        </div>
                    ))}
                </div> */}

                {/* Images Area */}
                <section className="grid md:grid-cols-3 grid-cols-1 2xl:gap-5 lg:gap-4 md:gap-3 gap-2">
                    <div className="">
                        <img src={mfg1} alt="" />
                    </div>
                    <div className="">
                        <img src={mfg2} alt="" />
                    </div>
                    <div className="">
                        <img src={mfg3} alt="" />
                    </div>
                </section>
                <div className="lg:my-16 md:my-10 my-5 text-justify md:w-[70%] w-[95%] mx-auto px-4 text-sm md:text-xl text-blue-950">
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
