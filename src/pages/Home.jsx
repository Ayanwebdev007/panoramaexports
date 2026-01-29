import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IoEnterOutline } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";
import DynamicText from '../components/DynamicText';
import GlobalMap from "../components/GlobalMap";
import LiveMap from "../components/LiveMap";
import MediaScrollSection from "../components/MediaScrollSection";
import FlipCard from "../components/flipCard/FlipCard";
import Certifications from "../components/Certifications";

import GoogleMapUnits from "../components/GoogleMapUnits";
import HumanTouch1 from "../assets/Community/csr.webp";
import HumanTouch2 from "../assets/Community/csr2.webp";

import Hero1 from "../assets/HeroImages/WearYourStory.webp";
import Hero2 from "../assets/HeroImages/Elegance.webp";
import Hero3 from "../assets/HeroImages/WarmAlcove.webp";
import Hero4 from "../assets/HeroImages/ThreadsLegacy.webp";
import Hero05 from "../assets/HeroImages/AheadCurve.webp";
import Hero06 from "../assets/HeroImages/WorkPlay.webp";

import AutoPlayVideo from "../components/AutoPlayVideo";
import LazyRender from "../components/LazyRender";


// Hero data
const heroSlides = [
    {
        id: 1,
        image: Hero1,
        dynamicText: "WEAR YOUR STORY",
    },
    {
        id: 2,
        image: Hero2,
        dynamicText: "ELEGANCE UNVEILED",
    },
    {
        id: 3,
        image: Hero3,
        dynamicText: "THE WARM ALCOVE",
    },
    {
        id: 4,
        image: Hero4,
        dynamicText: "THREADS OF LEGACY",
    },
    {
        id: 5,
        image: Hero05,
        dynamicText: "AHEAD OF THE CURVE",
    },
    {
        id: 6,
        image: Hero06,
        dynamicText: "WORK PLAY",
    },
];

// Brands images
// Brands images from new brands folder
import brand1 from "../assets/GlobalFootprint/new_brands/1733565170_Falabella_Logo.png";
import brand2 from "../assets/GlobalFootprint/new_brands/383220.KS-5023690c.png";
import brand3 from "../assets/GlobalFootprint/new_brands/Boden-new-logo-.png";
import brand4 from "../assets/GlobalFootprint/new_brands/Boots_logo.svg.png";
import brand5 from "../assets/GlobalFootprint/new_brands/DKNY-Donna-Karan-New-York-logo-880x625.png";
import brand6 from "../assets/GlobalFootprint/new_brands/Matalan-logo.png";
import brand7 from "../assets/GlobalFootprint/new_brands/Mothercare-Emblem.png";
import brand8 from "../assets/GlobalFootprint/new_brands/Tesco_Logo.svg.png";
import brand9 from "../assets/GlobalFootprint/new_brands/c_and_a.png";
import brand10 from "../assets/GlobalFootprint/new_brands/george.png";
import brand11 from "../assets/GlobalFootprint/new_brands/gjg.png";
import brand12 from "../assets/GlobalFootprint/new_brands/landmark.jpg";
import brand13 from "../assets/GlobalFootprint/new_brands/le_logo_2lines.png";
import brand14 from "../assets/GlobalFootprint/new_brands/logo_FARM-RIO.png";
import brand15 from "../assets/GlobalFootprint/new_brands/luckybrand.png";
import brand16 from "../assets/GlobalFootprint/new_brands/marea_by_liz_joy_logo.jpg";
import brand17 from "../assets/GlobalFootprint/new_brands/monsoon.png";
import brand18 from "../assets/GlobalFootprint/new_brands/quince-logo-bigger-file.png";
import brand19 from "../assets/GlobalFootprint/new_brands/reiss.png";
import brand20 from "../assets/GlobalFootprint/new_brands/street-one-logo-png_seeklogo-339581.png";

const brands = [
    brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10,
    brand11, brand12, brand13, brand14, brand15, brand16, brand17, brand18, brand19, brand20
];

// Crafting Tomorrow images
import img1 from "../assets/CraftingTomorrow/01.webp";
import img2 from "../assets/CraftingTomorrow/2.webp";
import img3 from "../assets/CraftingTomorrow/3.webp";
import img4 from "../assets/CraftingTomorrow/4.webp";
import video from "../assets/CraftingTomorrow/Crafting Tomorrow.mp4";

const crImages = [img2, img4];

export default function Home() {
    const swiperRef = useRef(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

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

        // Handle slide changes
        const handleSlideChange = () => {
            const newIndex = swiper.realIndex;
            setCurrentSlideIndex(newIndex);

            // Announce slide changes for screen readers
            const activeSlide = heroSlides[newIndex];
            if (activeSlide) {
                const announcement = document.createElement('div');
                announcement.setAttribute('aria-live', 'polite');
                announcement.setAttribute('aria-atomic', 'true');
                announcement.className = 'sr-only';
                announcement.textContent = `Slide ${newIndex + 1} of ${heroSlides.length}: PANORAMA ${activeSlide.dynamicText}`;
                document.body.appendChild(announcement);

                // Clean up announcement after screen reader has time to read it
                setTimeout(() => {
                    if (document.body.contains(announcement)) {
                        document.body.removeChild(announcement);
                    }
                }, 1000);
            }
        };

        swiper.on('slideChange', handleSlideChange);

        // Cleanup function
        return () => {
            clearTimeout(autoplayTimer);
            swiper.off('slideChange', handleSlideChange);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % crImages.length);
        }, 4000); // 4 seconds per slide
        return () => clearInterval(interval);
    }, []);



    return (
        <div className="relative">
            <div className="sm:hidden w-full h-10 bg-gray-900"></div>
            {/* Hero Carousel */}
            <div className="relative z-10 w-full">
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    initialSlide={0}
                    speed={600}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                        waitForTransition: true,
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                        el: ".swiper-pagination",
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                    }}
                    className="h-full"
                >
                    {heroSlides.map((slide, index) => (
                        <SwiperSlide key={slide.id} className="relative">
                            {/* Background Image */}
                            <picture className="block w-full">
                                <source
                                    srcSet={`${slide.image}?format=webp`}
                                    type="image/webp"
                                />
                                <img
                                    src={slide.image}
                                    alt={`PANORAMA ${slide.dynamicText}`}
                                    className="w-full object-contain"
                                    loading={index === 0 ? "eager" : "lazy"}
                                />
                            </picture>

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Fixed Text Content - Outside of Swiper */}
                <div className="absolute 2xl:mt-[550px] xl:mt-[450px] lg:mt-[350px] md:mt-[250px] sm:mt-[150px] xs:mt-[100px] mt-[50px] 2xl:ml-[30px] md:m-[10px] h-[20vh] inset-0 flex items-center justify-start pointer-events-none z-20">
                    <div className="2xl:w-[65%] xl:w-[70%] lg:w-[90%] w-[97%] sm:ml-20 px-4 md:px-8 flex items-center">
                        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight flex ">
                            <span className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl flex items-center">
                                PANORAMA{" "}
                                <RxDividerVertical className="lg:text-[80px] md:text-[60px] sm:text-[40px] text-[30px]" />{" "}
                            </span>
                            <DynamicText
                                slides={heroSlides}
                                currentIndex={currentSlideIndex}
                            />
                        </h1>
                    </div>
                </div>

                {/* Custom Navigation Arrows */}
                <button
                    className="hidden absolute left-4 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full sm:flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 pointer-events-auto"
                    aria-label="Previous slide"
                    onClick={() => swiperRef.current?.swiper?.slidePrev()}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <button
                    className="hidden absolute right-4 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full sm:flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 pointer-events-auto"
                    aria-label="Next slide"
                    onClick={() => swiperRef.current?.swiper?.slideNext()}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>

                {/* Custom Pagination Dots */}
                <div className="swiper-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2"></div>
            </div>

            <div className="bg-white sm:pt-6 pt-2">
                {/* Global presence */}
                <div className="md:py-8 py-2 md:mt-6 mt-2 text-[#01276a] mx-auto px-2 sm:px-6 md:px-10 lg:px-20 rounded-t-md">
                    <div className="flex items-center justify-center 2xl:px-5 gap-6">
                        <div className="text-2xl sm:text-3xl md:text-5xl font-regular flex flex-wrap gap-4">
                            <p className="font-bold">Global</p> Presence
                        </div>
                    </div>
                </div>
                {/* Brands logo section */}
                <div className="w-full md:mb-10 mb-5">
                    <div className="overflow-hidden w-full py-6 bg-white space-y-6">
                        {/* Row 1 */}
                        <div className="flex w-max animate-marquee gap-4">
                            {[...brands, ...brands].map((brand, idx) => (
                                <div
                                    key={`row1-${idx}`}
                                    className="flex-shrink-0 flex items-center justify-center"
                                >
                                    <div className="bg-white border-2 border-[#d4af37] rounded-sm px-6 py-4 flex items-center justify-center shadow-[-6px_-6px_13px_#ab9777]">
                                        <img
                                            src={brand}
                                            loading="lazy"
                                            decoding="async"
                                            alt="brand"
                                            className="2xl:h-20 lg:h-16 md:h-12 sm:h-10 h-6 2xl:w-28 lg:w-24 md:w-20 sm:w-16 w-10 object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Row 2 */}
                        <div className="flex w-max animate-marquee-reverse gap-4">
                            {[...brands, ...brands].map((brand, idx) => (
                                <div
                                    key={`row2-${idx}`}
                                    className="flex-shrink-0 flex items-center justify-center"
                                >
                                    <div className="bg-white border-2 border-[#d4af37] rounded-sm px-6 py-4 flex items-center justify-center shadow-[-6px_-6px_13px_#ab9777]">
                                        <img
                                            src={brand}
                                            loading="lazy"
                                            decoding="async"
                                            alt="brand"
                                            className="2xl:h-20 lg:h-16 md:h-12 sm:h-10 h-6 2xl:w-28 lg:w-24 md:w-20 sm:w-16 w-10 object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tailwind custom animations */}
                        <style>
                            {`
                            @keyframes marquee {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                            }
                            @keyframes marquee-reverse {
                            0% { transform: translateX(-50%); }
                            100% { transform: translateX(0); }
                            }
                            .animate-marquee {
                            animation: marquee 60s linear infinite;
                            will-change: transform;
                            }
                            .animate-marquee:hover {
                            animation-play-state: paused;
                            }
                            .animate-marquee-reverse {
                            animation: marquee-reverse 60s linear infinite;
                            will-change: transform;
                            }
                            .animate-marquee-reverse:hover {
                            animation-play-state: paused;
                            }
                            `}
                        </style>
                    </div>
                </div>
                {/* Crafting Tomorrow Content */}
                <div
                    className="relative bg-[#182123] text-white flex flex-col items-center justify-center overflow-hidden w-full"
                    style={{ aspectRatio: "16 / 9" }}
                >
                    <div className="md:mb-6 w-full absolute inset-0">
                        <AutoPlayVideo
                            src={video}
                            loopTime={26000}
                            className="md:mb-6 w-full"
                            bgColor="#5b4e39"
                        />
                    </div>

                    {/* Dark overlay */}
                    {/* <div className="absolute inset-0 bg-black/30 z-0"></div> */}

                    {/* Text + Button (always fixed on top) */}
                    <div className="relative z-10 flex items-end justify-center w-[80%] h-full 2xl:pb-20 xl:pb-14 lg:pb-8 md:pb-6 sm:pb-5 pb-1">
                        <div className="flex flex-col items-center">
                            <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl shimmer-text drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)] flex flex-wrap gap-4">
                                <p className="font-bold">Crafting</p> Tomorrow
                            </h1>

                            <Link to="/craftingtomorrow">
                                <button className="xl:mt-10 lg:mt-6 md:mt-4 mt-1 lg:text-lg md:text-md sm:text-sm text-[10px] md:px-6 sm:px-4 px-2 md:py-3 py-1 md:rounded-xl rounded-md group inline-flex items-center gap-2 border text-white bg-transparent border-white hover:bg-white hover:text-blue-900 font-semibold shadow-[0_6px_10px_#ffffff88] hover:shadow-[0_8px_12px_#ffffffcc] transform hover:-translate-y-1 transition-all duration-300">
                                    Click to Read More
                                    <IoEnterOutline className="lg:h-7 lg:w-7 md:h-5 md:w-5 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Global Map section */}
                <LazyRender height="500px" rootMargin="2000px">
                    <GlobalMap />
                </LazyRender>

                {/* Integrated Units section */}
                <div className="md:py-8 py-6 sm:mt-6 text-[#01276a] w-[90%] mx-auto px-2 sm:px-6 md:px-10 lg:px-20 rounded-t-md">
                    <div className="flex flex-col items-start justify-center">
                        <div className="text-2xl sm:text-3xl md:text-5xl font-regular flex flex-wrap gap-4">
                            <p className="font-bold">Manufacturing</p> Units
                        </div>
                        <div className="sm:w-[50%] md:mt-5 mt-2">
                            <p className="2xl:text-xl lg:text-lg sm:text-sm text-[12px] text-gray-600">
                                Seamless cut-to-pack capabilities for
                                quality and speed.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Google Map section */}
                <div className="">
                    <LazyRender height="400px" rootMargin="2000px">
                        <GoogleMapUnits />
                    </LazyRender>
                </div>

                {/* People section */}
                <div className="sm:py-8 text-[#01276a] w-[90%] mx-auto px-2 sm:px-6 md:px-10 lg:px-20 rounded-t-md mt-6">
                    <div className="sm:flex items-center justify-between">
                        <div className="text-2xl sm:text-3xl md:text-5xl font-regular">
                            People
                            <div className="text-sm md:text-lg sm:text-sm text-[12px] sm:mt-3 mt-2 sm:mb-14 text-gray-600 ml-1">
                                The soul of Panorama is its people
                            </div>
                        </div>
                        <div className="w-[50%] sm:mx-4">
                            <p className="2xl:text-xl lg:text-lg text-sm text-gray-600 hidden sm:block">
                                5,000+ individuals, 40% women, all united by
                                passion, purpose, and creativity. We foster
                                safe, inclusive spaces, invest in
                                skill-building, and champion equal
                                opportunity—growing together, every step of the
                                way.
                            </p>
                            <Link to="/peoples">
                                <button className="sm:my-4 my-2 group inline-flex items-center hover:text-red-600 font-semibold md:text-lg sm:text-sm text-[12px]">
                                    Visit People
                                    <IoEnterOutline className="h-6 w-6 mx-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <LazyRender height="400px" rootMargin="2000px">
                    <MediaScrollSection />
                </LazyRender>

                {/* Certifications section */}
                <div className="pt-4 pb-0 text-[#01276a] md:mt-6 mt-1 w-[90%] mx-auto px-2 sm:px-6 md:px-10 lg:px-20 rounded-t-md">
                    <div className="flex items-center justify-start">
                        <div className="text-2xl sm:text-3xl md:text-5xl font-regular">
                            Certifications
                            <div className="text-[12px] sm:text-sm md:text-lg sm:mt-3 mt-1 text-gray-600 ml-1">
                                Our legal certificates
                            </div>
                        </div>
                    </div>
                </div>
                <Certifications />

                {/* Community section */}
                <div className="pb-2 pt-0 text-[#01276a] mt-0 w-[90%] mx-auto px-2 sm:px-6 md:px-10 lg:px-20 rounded-t-md">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between">
                        <div className="text-2xl sm:text-3xl md:text-5xl font-regular">
                            Human Touch
                        </div>
                        <div className="sm:w-[40%] lg:w-[50%] lg:mx-4 flex items-center justify-end">
                            <Link to="/responsibility">
                                <button className="my-4 group inline-flex items-center hover:text-red-600 font-semibold md:text-lg sm:text-sm text-[12px]">
                                    Visit Responsibility
                                    <IoEnterOutline className="md:h-6 md:w-6 h-4 w-4 mx-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="xl:pt-4 lg:pt-2 md:pt-1 sm:pt-1 pt-1 bg-[#fcfbf7]">
                    <div className="w-[90%] mx-auto px-6 md:px-10 lg:px-20 mb-1">
                        <img
                            src={HumanTouch2}
                            alt="Human Touch"
                            className="rounded-t-md shadow-sm"
                        />
                    </div>
                    <div
                        className="w-full flex lg:items-center items-start pt-0 sm:pt-5 lg:pt-0 pr-0 sm:pr-5 lg:pr-0 justify-end aspect-[16/4.823] "
                        style={{
                            backgroundImage: `url(${HumanTouch1})`,
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                        }}
                    >
                        <p className="2xl:w-[550px] xl:w-[450px] lg:w-[350px] md:w-[300px] w-[150px] 2xl:text-xl lg:text-md md:text-sm sm:text-[10px] text-[8px] sm:pr-2 text-blue-950 font-semibold">
                            Our motto: People. Progress. Purpose. At Panorama,
                            we cultivate a culture of responsibility, inclusion,
                            and continuous growth
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
