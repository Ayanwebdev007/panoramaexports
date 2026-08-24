import React from "react";
import AutoPlayVideo from "../../components/AutoPlayVideo";

import video from "../../assets/MATERIAL EXCELLENCE/freepik_a-graceful-woman-in-an-elegant-flowing-ivory-chiffon-gown-stands-in-a-minimalist-beige-studio.-the-fabric-of-her-dress-billows-dramatically-around-her-like-soft-wings-moving-in-slow-motio_0001.mp4";
import aet1 from "../../assets/MATERIAL EXCELLENCE/1.JPG";
import aet2 from "../../assets/MATERIAL EXCELLENCE/2.JPG";
import aet3 from "../../assets/MATERIAL EXCELLENCE/3.JPG";

function ArtInEveryThread() {
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
                        Material Excellence
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl font-light text-[#AD1E1E] max-w-3xl tracking-wide whitespace-nowrap">
                        True craftsmanship at Panorama Exports begins with the finest fabrics.
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
                        Every fabric is thoughtfully sourced to reflect our commitment to quality, innovation, comfort, and timeless design. Backed by a trusted global sourcing network, we work with premium woven, knitted, and sustainable textiles that meet the highest standards of durability, texture, and finish. By continuously exploring advanced fabric technologies and evolving material innovations, we create garments that seamlessly balance refined aesthetics with everyday performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16 md:mb-28">
                    <div className="overflow-hidden rounded-xl shadow-sm group">
                        <img src={aet2} alt="Premium Quality Fabric 2" className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                    <div className="overflow-hidden rounded-xl shadow-sm group">
                        <img src={aet1} alt="Premium Quality Fabric 1" className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                    <div className="overflow-hidden rounded-xl shadow-sm group">
                        <img src={aet3} alt="Premium Quality Fabric 3" className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105" />
                    </div>
                </div>

                {/* Bottom Text Section */}
                <div className="flex justify-center mb-12">
                    <p className="text-base md:text-lg lg:text-xl font-light text-gray-600 text-center max-w-4xl leading-relaxed tracking-wide">
                        With a conscious approach to sourcing and production, we embrace responsible materials and mindful practices that support a more sustainable future for fashion.
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

function LegacyArtInEveryThread() {
    const swiperRef = useRef(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const swiper = swiperRef.current?.swiper;
        if (!swiper) return;

        setCurrentSlideIndex(0);

        const autoplayTimer = setTimeout(() => {
            if (swiper.autoplay) {
                swiper.autoplay.start();
            }
        }, 100);

        const handleSlideChange = () => {
            const newIndex = swiper.realIndex;
            setCurrentSlideIndex(newIndex);
        };

        swiper.on("slideChange", handleSlideChange);

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
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-light font-outfit text-[#01276a]">
                            Art In Every Thread
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
                <div className="lg:my-16 md:my-10 my-5 text-justify md:w-[70%] w-[95%] mx-auto px-4 text-sm md:text-xl text-blue-950">
                    Bridging innovation and heritage, our modern embroidery
                    ecosystem delivers superior intricacy and flawless
                    execution. Each design is crafted with engineered precision
                    and creative mastery, reflecting a harmony of tradition,
                    technology, and aesthetic excellence.
                </div>
            </section>
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

