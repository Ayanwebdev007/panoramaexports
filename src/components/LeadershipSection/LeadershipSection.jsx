import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoEnterOutline } from "react-icons/io5";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import './LeadershipSection.css';

import RajanPng from "../../assets/Founders/rajan.webp";
import NavinPng from "../../assets/Founders/navin.webp";
import ShivaanPng from "../../assets/Founders/shivaan.webp";
import SidharthPng from "../../assets/Founders/Sidharth.webp";
import AmitPng from "../../assets/AMIT FINAL.jpeg";

const baseLeaders = [
    {
        id: 1,
        name: "RAJAN SAHNI",
        role: "DIRECTOR",
        image: RajanPng,
        bgPos: "85% 5%",
        bgSize: "350%"
    },
    {
        id: 2,
        name: "NAVIN SAHNI",
        role: "DIRECTOR",
        image: NavinPng,
        bgPos: "15% 5%",
        bgSize: "350%"
    },
    {
        id: 3,
        name: "SHIVAAN SAHNI",
        role: "EXECUTIVE DIRECTOR",
        image: ShivaanPng,
        bgPos: "82% 3%",
        bgSize: "350%"
    },
    {
        id: 4,
        name: "SIDHARTH SAHNI",
        role: "EXECUTIVE DIRECTOR",
        image: SidharthPng,
        bgPos: "18% 3%",
        bgSize: "350%"
    },
    {
        id: 5,
        name: "AMIT SARAFF",
        role: "CEO",
        image: AmitPng,
        bgPos: "center 20%",
        bgSize: "120%"
    }
];

const LeadershipSection = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    // Duplicated list to ensure continuous infinite loop
    const loopedLeaders = [...baseLeaders, ...baseLeaders];

    return (
        <section className="leadership-outer-container">
            {/* Header Section */}
            <div className="leadership-header-container w-[90%] mx-auto px-2 sm:px-6 md:px-10 lg:px-20 mb-8 md:mb-12">
                <div className="flex flex-row items-center justify-between mb-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 pr-4"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-[#AD1E1E] mb-1 sm:mb-4">
                            Leadership
                        </h2>
                        <p className="text-[10px] sm:text-sm md:text-lg text-gray-600 max-w-2xl leading-relaxed font-normal mt-1 sm:mt-0">
                            Visionary leadership that inspires innovation, nurtures talent, and drives Panorama toward new horizons of global excellence.
                        </p>
                    </motion.div>

                    <div className="flex items-center justify-end shrink-0">
                        <Link to="/leadership">
                            <button className="my-4 group inline-flex items-center hover:text-[#8B1818] font-semibold md:text-lg sm:text-sm text-[12px] text-[#AD1E1E]">
                                Visit Leadership
                                <IoEnterOutline className="h-4 w-4 md:h-6 md:w-6 mx-1 md:mx-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Horizontal Loop Slider Section */}
            <div className="leadership-grid-bg relative overflow-hidden py-10 md:py-16">
                <div className="w-[92%] max-w-[1700px] mx-auto px-2 sm:px-6 relative z-10">
                    
                    {/* Navigation Buttons */}
                    <button
                        ref={prevRef}
                        className="leadership-nav-btn left absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-[#AD1E1E] text-gray-800 hover:text-white shadow-lg flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-gray-200"
                        aria-label="Previous Leader"
                    >
                        <ChevronLeft size={22} />
                    </button>
                    <button
                        ref={nextRef}
                        className="leadership-nav-btn right absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-[#AD1E1E] text-gray-800 hover:text-white shadow-lg flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-gray-200"
                        aria-label="Next Leader"
                    >
                        <ChevronRight size={22} />
                    </button>

                    <Swiper
                        modules={[Navigation, Autoplay, FreeMode]}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed={800}
                        grabCursor={true}
                        slidesPerView={1.2}
                        spaceBetween={18}
                        onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        breakpoints={{
                            480: { slidesPerView: 1.6, spaceBetween: 20 },
                            640: { slidesPerView: 2.2, spaceBetween: 24 },
                            768: { slidesPerView: 2.8, spaceBetween: 26 },
                            1024: { slidesPerView: 3.5, spaceBetween: 28 },
                            1280: { slidesPerView: 4.2, spaceBetween: 30 },
                            1536: { slidesPerView: 5, spaceBetween: 30 }
                        }}
                        className="leadership-swiper !py-4"
                    >
                        {loopedLeaders.map((leader, index) => (
                            <SwiperSlide key={`${leader.id}-${index}`} className="h-auto">
                                <div className="leadership-glass-card group h-full">
                                    <div className="glass-card-inner">
                                        {/* Circle Image Wrapper */}
                                        <div className="leader-circle-wrapper flex items-center justify-center overflow-hidden">
                                            <div
                                                className="leader-circle-image-bg w-full h-full grayscale transition-all duration-500 group-hover:grayscale-0"
                                                style={{
                                                    backgroundImage: `url(${leader.image})`,
                                                    backgroundPosition: leader.bgPos,
                                                    backgroundSize: leader.bgSize,
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            />
                                        </div>

                                        {/* Name and Designation */}
                                        <div className="leader-details">
                                            <h3 className="leader-name">
                                                {leader.name}
                                            </h3>
                                            <p className="leader-role">
                                                {leader.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default LeadershipSection;
