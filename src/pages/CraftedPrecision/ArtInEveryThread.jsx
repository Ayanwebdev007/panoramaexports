import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AutoPlayVideo from "../../components/AutoPlayVideo";

import video from "../../assets/Crafted_Precision/Art_in_Every_Thread/1st big pic.mp4";
import aet1 from "../../assets/Crafted_Precision/Art_in_Every_Thread/1.webp";
import aet2 from "../../assets/Crafted_Precision/Art_in_Every_Thread/Small2.jpg";
import aet3 from "../../assets/Crafted_Precision/Art_in_Every_Thread/2.webp";

// const mfgImages = [
//     {
//         title: "manufacturing excellence",
//         img: aet,
//     },
// ];

function ArtInEveryThread() {
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
                        ART IN EVERY THREAD
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
                        Art in Every Thread
                    </p> */}
                    Bridging innovation and heritage, our modern embroidery
                    ecosystem delivers superior intricacy and flawless
                    execution. Each design is crafted with engineered precision
                    and creative mastery, reflecting a harmony of tradition,
                    technology, and aesthetic excellence.
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
                From Schiffli artistry to contemporary embroidery techniques,
                every thread is placed with purpose. Automated controls ensure
                repeat accuracy, while skilled specialists refine detailing
                through hand-guided interventions—preserving authenticity while
                maintaining production efficiency.
            </div>
        </>
    );
}

export default ArtInEveryThread;
