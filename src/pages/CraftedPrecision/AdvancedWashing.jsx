import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AutoPlayVideo from "../../components/AutoPlayVideo";

import video from "../../assets/Crafted_Precision/Advanced_washing/1st big pic.mp4";
import aet1 from "../../assets/Crafted_Precision/Advanced_washing/Small1.jpg";
import aet2 from "../../assets/Crafted_Precision/Advanced_washing/Small2.jpg";
import aet3 from "../../assets/Crafted_Precision/Advanced_washing/Small3.jpg";

// const mfgImages = [
//     {
//         title: "Advanced Washing",
//         img: aet,
//     },
// ];

function AdvancedWashing() {
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
                        ADVANCED WASHING
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
                        Advanced Washing
                    </p> */}
                    Through a combination of automated systems and eco-conscious
                    techniques, our wash units achieve the perfect balance of
                    finish and sustainability. From enzyme and silicon washes to
                    advanced softeners, each garment undergoes a carefully
                    controlled process that enhances texture while conserving
                    resources.
                </div>
            </section>
            {/* Images Area */}
            <section className="grid md:grid-cols-3 grid-cols-1 2xl:gap-5 lg:gap-4 md:gap-3 gap-2">
                <div className="">
                    <img src={aet1} alt="" />
                </div>
                <div className="">
                    <img src={aet2} alt="" />
                </div>
                <div className="">
                    <img src={aet3} alt="" />
                </div>
            </section>
            <div className="lg:my-16 md:my-10 my-5 text-justify md:w-[70%] w-[95%] mx-auto px-4 text-sm md:text-xl text-blue-950">
                Our advanced washing processes optimize water, energy, and
                chemical usage, delivering consistent finishes while
                significantly reducing environmental impact.
            </div>
        </>
    );
}

export default AdvancedWashing;
