import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
import OurStrengths from "../components/OurStrengths/OurStrengths";
import ManufacturingExcellence from "../components/ManufacturingExcellence/ManufacturingExcellence";
import LeadershipSection from "../components/LeadershipSection/LeadershipSection";
import GoogleMapUnits from "../components/GoogleMapUnits";
import OurLocation from "../components/OurLocation/OurLocation";
import JoinUs from "../components/JoinUs/JoinUs";
import IntentionSection from "../components/IntentionSection";
import MasonrySection from "../components/MasonrySection";
import HeritageSection from "../components/HeritageSection";
import DefinedByDetail from "../components/DefinedByDetail/DefinedByDetail";
import ResponsibilityShowcase from "../components/ResponsibilityShowcase/ResponsibilityShowcase";

import HumanTouch1 from "../assets/Community/csr.webp";
import HumanTouch2 from "../assets/Community/csr2.webp";

import Hero1 from "../assets/HeroImages/WearYourStory.webp";
import Hero2 from "../assets/HeroImages/Elegance.webp";
import Hero3 from "../assets/HeroImages/WarmAlcove.webp";
import Hero104 from "../assets/HeroImages/ThreadsLegacy.webp";
import Hero05 from "../assets/HeroImages/AheadCurve.webp";
import Hero06 from "../assets/HeroImages/WorkPlay.webp";

import AutoPlayVideo from "../components/AutoPlayVideo";
import LazyRender from "../components/LazyRender";

import testmon1 from "../assets/testmon1.JPG";
import testmon2 from "../assets/testmon2.JPG";
import testmon3 from "../assets/testmon3.JPG";
import testmon4 from "../assets/testmon4.jpg";
import GSR from "../assets/GSR.jpg";


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
        image: Hero104,
        dynamicText: "THREADS OF LEGACY",
        objectPosition: "object-bottom"
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

// Brands images from new brands folder
import brand2 from "../assets/GlobalFootprint/new_brands/383220.KS-5023690c.webp";
import brand3 from "../assets/GlobalFootprint/new_brands/Boden-new-logo-.webp";
import brand4 from "../assets/GlobalFootprint/new_brands/Boots_logo.svg.webp";
import brand5 from "../assets/GlobalFootprint/new_brands/DKNY-Donna-Karan-New-York-logo-880x625.webp";
import brand7 from "../assets/GlobalFootprint/new_brands/Mothercare-Emblem.png";
import brand8 from "../assets/GlobalFootprint/new_brands/Tesco_Logo.svg.webp";
import brand10 from "../assets/GlobalFootprint/new_brands/george.webp";
import brand11 from "../assets/GlobalFootprint/new_brands/gjg.webp";
import brand12 from "../assets/GlobalFootprint/new_brands/landmark.webp";
import brand14 from "../assets/GlobalFootprint/new_brands/logo_FARM-RIO.webp";
import brand15 from "../assets/GlobalFootprint/new_brands/luckybrand.webp";
import brand17 from "../assets/GlobalFootprint/new_brands/monsoon.webp";
import brand18 from "../assets/GlobalFootprint/new_brands/quince-logo-bigger-file.webp";
import brand19 from "../assets/GlobalFootprint/new_brands/reiss.webp";

const brands = [
    brand2, brand3, brand4, brand5, brand7, brand8, brand10,
    brand11, brand12, brand14, brand15, brand17, brand18, brand19
];

// Crafting Tomorrow images
import img1 from "../assets/CraftingTomorrow/01.webp";
import img2 from "../assets/CraftingTomorrow/2.webp";
import img3 from "../assets/CraftingTomorrow/3.webp";
import img4 from "../assets/CraftingTomorrow/4.webp";
import video from "../assets/CraftingTomorrow/Crafting-Tomorrow.mp4";
import intentionVideo from "../assets/hero_v3.mp4";

const crImages = [img2, img4];

const testimonials = [
    {
        id: 4,
        name: "Gaurav Singh Rawat",
        designation: "Head Of Sampling",
        department: "",
        image: GSR,
        text: "My 20-year journey & being the Head of Sampling, has been an inspiring experience. Watching our organization grow into a global leader fills me with immense pride. It stands as a testament to our shared vision, commitment, and the power of teamwork. I truly believe great teams always achieve great victories.",
        objectPosition: "object-center"
    },
    {
        id: 1,
        name: "Mohit Babbar",
        designation: "Senior Merchandiser",
        department: "",
        image: testmon1,
        text: "As an employee, I am proud to be part of a company known for its integrity, quality, and commitment to excellence. The organization maintains a strong reputation by valuing both its customers and employees. Working in this company has shown me its dedication to high standards and customer satisfaction. Its positive work culture and reliability have helped build a strong reputation in the industry. I am proud to work for a company that is respected for its professionalism, quality service, and strong commitment to customer satisfaction."
    },
    {
        id: 2,
        name: "Kanika Gupta",
        designation: "Digital Marketing – Brand Communication Lead",
        department: "Designer (Women's essential-wear)",
        image: testmon2,
        text: "My journey has allowed me to work at the intersection of creativity and strategy. From shaping brand communication through digital platforms to contributing to also being a designer for women's essential-wear , I’ve had the opportunity to express creativity while building meaningful brand narratives. The environment encourages innovation, collaboration, and continuous learning, making it a rewarding space to grow both professionally and creatively."
    },
    {
        id: 3,
        name: "Mithun Jana",
        designation: "Sr. PD Head – Ladieswear",
        department: "",
        image: testmon4,
        text: "My 18-year journey with Panorama Exports has been both rewarding and inspiring. Since joining in 2008, I have had the opportunity to contribute to the growth of the Ladieswear division while continuously evolving with the industry. The trust, collaboration, and strong team culture here have allowed me to push creative boundaries and deliver quality product development year after year. Panorama truly values dedication and provides an environment where long-term careers can thrive."
    }
];

export default function Home() {
    const swiperRef = useRef(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    const showHero = false; // Set to true to show the Hero Section in the future
    const showCraftingTomorrow = false;
    const showGrowingEveryday = false;
    const showCertifications = false; // Toggle to show/hide Certifications section
    const showHumanTouch = false; // Toggle to show/hide Human Touch section
    const showOurLocation = false; // Toggle to show/hide Our Location section

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
            
            {showHero && (
                <>
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
                            className="w-full h-auto aspect-[1920/944]"
                        >
                            {heroSlides.map((slide, index) => (
                                <SwiperSlide key={slide.id} className="relative h-full">
                                    {/* Background Image */}
                                    <picture className="block w-full h-full">
                                        <source
                                            srcSet={`${slide.image}?format=webp`}
                                            type="image/webp"
                                        />
                                        <img
                                            src={slide.image}
                                            alt={`PANORAMA ${slide.dynamicText}`}
                                            className={`w-full h-full object-cover ${slide.objectPosition || "object-center"}`}
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
                </>
            )}

            <IntentionSection videoSrc={intentionVideo} />

            <LazyRender height="400px">
                <div className="bg-white pt-2">
                    {/* Global presence */}
                    <div className="md:py-4 py-2 text-[#AD1E1E] mx-auto px-2 sm:px-6 md:px-10 lg:px-20 rounded-t-md">
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
                            <div className="flex w-max animate-marquee gap-4" style={{ willChange: "transform", transform: "translateZ(0)" }}>
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
                            <div className="flex w-max animate-marquee-reverse gap-4" style={{ willChange: "transform", transform: "translateZ(0)" }}>
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
                                }
                                .animate-marquee:hover {
                                animation-play-state: paused;
                                }
                                .animate-marquee-reverse {
                                animation: marquee-reverse 60s linear infinite;
                                }
                                .animate-marquee-reverse:hover {
                                animation-play-state: paused;
                                }
                                `}
                            </style>
                        </div>
                    </div>
                </div>
            </LazyRender>

                {/* New Brand Statement Section */}
                <section className="bg-white pt-4 pb-16 sm:pt-6 sm:pb-24 font-outfit">
                    <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-center">
                        <div className="max-w-[1400px] text-center">
                            <h2 className="text-[#AD1E1E] text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-[0.3em] uppercase mb-6 sm:mb-8">
                                Our Brand Story
                            </h2>
                            <p className="text-[#1a1a1a] text-sm sm:text-lg md:text-xl lg:text-[20px] leading-[1.9] font-light tracking-wide">
                                Panorama brings together craftsmanship and consistency to be a trusted partner to global brands—creating timeless fashion defined by responsiveness and meticulous attention to detail.
                                From the outset, Panorama has been driven by a collective vision—to create timeless fashion, crafted with intention and designed to stand the test of time.
                            </p>
                        </div>
                    </div>
                </section>

                <LazyRender height="2300px">
                    <MasonrySection />
                </LazyRender>

                {/* Masonry Description Section */}
                <LazyRender height="150px">
                    <section className="bg-[#F9F6F1] pt-4 pb-12 sm:pb-16 font-outfit">
                        <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-center">
                            <div className="max-w-[1200px] text-center">
                                <p className="text-[#1a1a1a] text-sm sm:text-lg md:text-xl lg:text-[22px] leading-[1.8] font-light tracking-wide">
                                    We bring trends to life with thoughtful craftsmanship—from detailed embroidery to refined finishing. 
                                    Every garment is designed to look good, feel effortless, and resonate across international markets.
                                </p>
                            </div>
                        </div>
                    </section>
                </LazyRender>

                <LazyRender height="800px">
                    <HeritageSection />
                </LazyRender>

                {/* Crafting Tomorrow Content */}
                {showCraftingTomorrow && (
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
                )}

                <LazyRender height="400px">
                    <LeadershipSection />
                </LazyRender>

                {/* Employee Testimonials Section */}
                <LazyRender height="600px">
                    <section className="w-full bg-[#f9f6f1] py-16 md:py-24">
                        <div className="w-[90%] mx-auto px-2 sm:px-6 md:px-10 lg:px-20">
                            <div className="mb-12 md:mb-16">
                                <h2 className="text-2xl sm:text-3xl md:text-5xl font-light font-outfit text-[#AD1E1E] mb-4">
                                    Employee Testimonials
                                </h2>
                            </div>

                            <div className="relative px-4 md:px-14">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    slidesPerView={1.05}
                                    spaceBetween={15}
                                    navigation={{
                                        nextEl: ".testimonials-next",
                                        prevEl: ".testimonials-prev",
                                    }}
                                    pagination={{
                                        clickable: true,
                                        dynamicBullets: true,
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1.2,
                                            spaceBetween: 20
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 30
                                        },
                                        1150: {
                                            slidesPerView: 3,
                                            spaceBetween: 30
                                        },
                                    }}
                                    className="pb-14 testimonials-swiper"
                                >
                                    {testimonials.map((item) => (
                                        <SwiperSlide key={item.id} className="!h-auto">
                                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col border border-[#AD1E1E]/20 relative shadow-sm">
                                                {/* Avatar */}
                                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border-2 border-white shadow-lg mx-auto md:mx-0">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className={`w-full h-full object-cover ${item.id === 2 ? "object-top scale-110" : ""} ${item.objectPosition || ""}`}
                                                    />
                                                </div>

                                                {/* Content */}
                                                <div className="flex-grow mb-4">
                                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal text-justify italic">
                                                        “{item.text}”
                                                    </p>
                                                </div>

                                                {/* Footer */}
                                                <div className="mt-auto pt-4 border-t border-gray-100">
                                                    <h4 className="text-[#AD1E1E] font-semibold text-base md:text-lg tracking-tight">{item.name}</h4>
                                                    <p className="text-gray-600 text-xs md:text-sm font-medium">{item.designation}</p>
                                                    <p className="text-[#AD1E1E]/60 text-[10px] md:text-xs uppercase tracking-widest mt-1 font-bold">{item.department}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Navigation - refined positioning for mobile */}
                                <button className="testimonials-prev absolute left-[-15px] md:left-0 top-1/2 -translate-y-1/2 z-10 text-[#AD1E1E] hover:text-[#8B1818] transition-colors bg-white/50 rounded-full md:bg-transparent p-1 md:p-0">
                                    <svg width="32" height="32" className="md:w-[40px] md:h-[40px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                </button>
                                <button className="testimonials-next absolute right-[-15px] md:right-0 top-1/2 -translate-y-1/2 z-10 text-[#AD1E1E] hover:text-[#8B1818] transition-colors bg-white/50 rounded-full md:bg-transparent p-1 md:p-0">
                                    <svg width="32" height="32" className="md:w-[40px] md:h-[40px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M11 18l6-6-6-6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </section>
                </LazyRender>


                {/* Global Map section */}
                {/* <LazyRender height="500px" rootMargin="2000px">
                    <GlobalMap />
                </LazyRender> */}

                {/* Commenting out old manufacturing units section as requested */}
                {/* 
                <div className="md:py-8 py-6 sm:mt-6 text-[#01276a] w-[90%] mx-auto px-2 sm:px-6 md:px-10 lg:px-20 rounded-t-md">
                    <div className="flex flex-col items-start justify-center">
                        <div className="text-2xl sm:text-3xl md:text-5xl font-regular flex flex-wrap gap-4">
                            <p className="font-bold">Manufacturing</p> Units
                        </div>
                        <div className="md:mt-5 mt-2">
                            <p className="2xl:text-xl lg:text-lg sm:text-sm text-[12px] text-gray-600 max-w-2xl leading-relaxed">
                                Integrated cut-to-pack manufacturing that delivers precision, efficiency, and uncompromising quality.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <LazyRender height="400px" rootMargin="2000px">
                        <GoogleMapUnits />
                    </LazyRender>
                </div>
                */}

                {/* People section */}
                <div className="sm:pt-8 sm:pb-0 text-[#AD1E1E] w-[90%] mx-auto px-2 sm:px-6 md:px-10 lg:px-20 rounded-t-md mt-6">
                    <div className="flex flex-row items-center justify-between mb-1 sm:mb-6">
                        <div className="text-2xl sm:text-3xl md:text-5xl font-light">
                            We are growing everyday
                            <div className="text-[10px] sm:text-sm md:text-lg sm:mt-3 mt-1 text-gray-600 ml-1">
                                The soul of Panorama is its people
                            </div>
                        </div>
                        <div className="flex items-center justify-end">
                            <Link to="/peoples">
                                <button className="my-1 sm:my-4 group inline-flex items-center hover:text-[#8B1818] font-semibold md:text-lg sm:text-sm text-[12px]">
                                    Visit People
                                    <IoEnterOutline className="h-4 w-4 sm:h-6 sm:w-6 mx-1 sm:mx-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="2xl:text-xl lg:text-lg text-sm text-gray-600 leading-relaxed font-light">
                            5,000+ individuals. 45% women. One shared purpose.
                            <br />
                            We are united by passion and creativity, grounded in inclusion, and committed to growth. 
                            With a strong focus on safe workplaces, continuous learning, and equal opportunity, we are building a culture where everyone has the space to succeed.
                        </p>
                    </div>
                </div>
                <LazyRender height="400px" rootMargin="2000px">
                    <MediaScrollSection />
                </LazyRender>

                {showCertifications && (
                    <>
                        {/* Certifications section */}
                        <div className="pt-4 sm:pt-16 pb-0 text-[#AD1E1E] mt-4 sm:mt-12 w-[90%] mx-auto px-2 sm:px-6 md:px-10 lg:px-20 rounded-t-md">
                            <div className="flex flex-row items-center justify-between mb-6">
                                <div className="text-2xl sm:text-3xl md:text-5xl font-light">
                                    Certifications
                                    <div className="text-[10px] sm:text-sm md:text-lg sm:mt-3 mt-1 text-gray-600 ml-1">
                                        Our legal certificates
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Certifications />
                    </>
                )}

                {showHumanTouch && (
                    <>
                        {/* Community section */}
                        <div className="pb-0 pt-0 text-[#AD1E1E] mt-8 sm:mt-16 w-[90%] mx-auto px-2 sm:px-6 md:px-10 lg:px-20 rounded-t-md bg-white">
                            <div className="flex flex-row items-center justify-between mb-2 sm:mb-6">
                                <div className="text-2xl sm:text-3xl md:text-5xl font-light">
                                    Human Touch
                                </div>
                                <div className="flex items-center justify-end">
                                    <Link to="/responsibility">
                                        <button className="my-4 group inline-flex items-center hover:text-[#8B1818] font-semibold md:text-lg sm:text-sm text-[12px]">
                                            Visit Responsibility
                                            <IoEnterOutline className="h-4 w-4 sm:h-6 sm:w-6 mx-1 sm:mx-2 group-hover:translate-x-1 transition-transform duration-300" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            {/* Mobile-only motto text */}
                            <div className="block sm:hidden mb-4 text-[#AD1E1E]">
                                <p className="text-[12px] leading-tight text-blue-950">
                                    <span className="font-semibold">Our motto:</span>
                                    <span className="font-light"> People. Progress. Purpose. At Panorama,
                                        we cultivate a culture of responsibility, inclusion,
                                        and continuous growth</span>
                                </p>
                            </div>
                        </div>
                        <div className="xl:pt-4 lg:pt-2 md:pt-1 sm:pt-1 pt-1 bg-white">
                            <div className="w-[90%] mx-auto px-6 md:px-10 lg:px-20 mb-[-2px] sm:mb-1">
                                <img
                                    src={HumanTouch2}
                                    alt="Human Touch"
                                    className="rounded-t-md shadow-sm"
                                />
                            </div>
                            <div
                                className="w-full flex items-start mt-[-8px] pt-3 sm:pt-20 lg:pt-24 pr-2 sm:pr-5 lg:pr-0 justify-end aspect-[16/5] sm:aspect-[16/4.823]"
                                style={{
                                    backgroundImage: `url(${HumanTouch1})`,
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <p className="hidden sm:block 2xl:w-[550px] xl:w-[450px] lg:w-[350px] md:w-[300px] w-[240px] 2xl:text-xl lg:text-md md:text-sm sm:text-[10px] text-[12px] leading-tight sm:leading-normal sm:pr-2 text-blue-950">
                                    <span className="font-semibold">Our motto:</span>
                                    <span className="font-light"> People. Progress. Purpose. At Panorama,
                                        we cultivate a culture of responsibility, inclusion,
                                        and <span className="whitespace-nowrap">continuous growth</span></span>
                                </p>
                            </div>
                        </div>
                    </>
                )}
                <LazyRender height="500px">
                    <ManufacturingExcellence />
                </LazyRender>
                
                <LazyRender height="700px">
                    <DefinedByDetail />
                </LazyRender>
                
                <LazyRender height="600px">
                    <ResponsibilityShowcase videoSrc={video} />
                </LazyRender>
                
                {showOurLocation && <OurLocation />}
                
                <LazyRender height="400px">
                    <JoinUs />
                    <div className="w-[90%] mx-auto px-2 sm:px-6 md:px-10 lg:px-20 pb-16 lg:pb-24 flex justify-center mt-8">
                        <Link to="/contactus">
                            <button className="group inline-flex items-center hover:text-[#AD1E1E] font-semibold md:text-lg sm:text-sm text-[12px]">
                                Contact Us
                                <IoEnterOutline className="h-6 w-6 mx-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </Link>
                    </div>
                </LazyRender>
            </div>
        );
}
