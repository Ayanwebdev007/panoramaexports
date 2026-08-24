import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";

import Milestones from "./Milestones";
import PurposeCards from "../../components/PurposeCards/PurposeCards";

import LegacyImage from "../../assets/Legacy/final.webp";

import FounderImage from "../../assets/Founders/founderImage.webp";
import FabricTexture from "../../assets/backgrounds/fabric-texture.webp";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import StoryImg1 from "../../assets/OurStory/01.webp";
import StoryImg2 from "../../assets/OurStory/02.webp";
import StoryImg3 from "../../assets/OurStory/03.webp";
import StoryImg4 from "../../assets/OurStory/04.webp";

import SeasonImg1 from "../../assets/Where every season begins/1.webp";
import SeasonImg2 from "../../assets/Where every season begins/2.webp";
import SeasonImg3 from "../../assets/Where every season begins/3.webp";
import SeasonImg4 from "../../assets/Where every season begins/4.webp";
import SeasonImg5 from "../../assets/Where every season begins/5.webp";
import WeavingLuxury from "../../assets/luxury woven 2.webp";
import HandcraftedLuxury from "../../assets/luxury woven 1.webp";

const storyImages = [StoryImg2, StoryImg3, StoryImg1, StoryImg4, StoryImg2, StoryImg3, StoryImg1, StoryImg4];
const detailImages = [
    SeasonImg1,
    SeasonImg2,
    SeasonImg3,
    SeasonImg4,
    SeasonImg5,
    SeasonImg1,
    SeasonImg2,
    SeasonImg3,
    SeasonImg4,
    SeasonImg5
];

const heroImages = [LegacyImage];
const labels = {
    "#legacy": "Legacy",
    "#milestones": "Milestones",
};

const crumbs = [
    { label: "Legacy", path: "/ourstory#legacy" },
    { label: "Milestones", path: "/ourstory#milestones" },
    { label: "Our Purpose", path: "/ourstory#our-purpose" },
];

export default function OurStory() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const location = useLocation();
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const { ref: legacyRef, inView: legacyInView } = useInView({
        threshold: 0.3, // 30% of legacy visible = considered "in view", this for breadcrums control............
    });
    const { ref: milestonesRef, inView: milestonesInView } = useInView({
        threshold: 0.3, // same for milestones for breadcrums control............
    });
    const { ref: ourPurposeRef, inView: ourPurposeInView } = useInView({
        threshold: 0.3,
    });

    // Determine which breadcrumb is active
    const activeCrumb = legacyInView
        ? "Legacy"
        : milestonesInView
            ? "Milestones"
            : ourPurposeInView
                ? "Our Purpose"
                : null;

    const textVariants = {
        hidden: { opacity: 0, x: "-40vw" },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 2, ease: "easeOut" },
        },
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        }, 4000); // 4 seconds per slide
        return () => clearInterval(interval);
    }, []);

    // Smooth scroll on hash change
    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const section = document.querySelector(location.hash);
                if (section) {
                    const yOffset = -80; // adjust based on your navbar/breadcrumb height
                    const y =
                        section.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);



    return (
        <div className="text-gray-900 bg-white">
            <div className="sm:hidden w-full h-10 bg-gray-900"></div>

            {/* Welcome Section */}
            <section className="bg-[#F9F6F1] pt-24 pb-16 lg:pt-32 lg:pb-20 font-outfit">
                <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-center">
                    <div className="max-w-[1200px] text-center">
                        <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-[#AD1E1E] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.2em] uppercase mb-8"
                        >
                            Welcome to Panorama Exports
                        </motion.h3>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-gray-600 text-sm sm:text-lg md:text-xl lg:text-[20px] leading-[1.9] font-light tracking-wide px-4"
                        >
                            Panorama brings together innovation, skill and technical excellence to create enduring apparel. 
                            Beyond manufacturing, we focus on opportunity, responsible practices and constant evolution, 
                            helping drive a more progressive future for the international garment industry.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Founder's Message Sections - KEPT */}
            <style>{`
                @keyframes gradientShift {
                    0%   { background-position: 0% 50%; }
                    50%  { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes quoteShimmer {
                    0%   { background-position: 200% center; }
                    100% { background-position: -200% center; }
                }
                @keyframes grainMove {
                    0%, 100% { transform: translate(0, 0); }
                    10%  { transform: translate(-2%, -3%); }
                    30%  { transform: translate(3%, 2%); }
                    50%  { transform: translate(-1%, 4%); }
                    70%  { transform: translate(4%, -1%); }
                    90%  { transform: translate(-3%, 1%); }
                }
                .smooth-swiper .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
            `}</style>

            <section id="founder-message" ref={ref} className="bg-white">
                {/* Main light-brown container with animated gradient */}
                <div
                    className="xl:h-[75vh] lg:h-[55vh] h-full relative flex flex-col items-center lg:pb-5 overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, #c4aa80, #b9a686, #a8926a, #c9b48e, #b0956e, #d4bc96, #b9a686)",
                        backgroundSize: "400% 400%",
                        animation: "gradientShift 10s ease infinite",
                    }}
                >
                    {/* Grain / noise texture overlay */}
                    <div
                        className="absolute inset-0 pointer-events-none z-10"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                            backgroundSize: "180px 180px",
                            opacity: 0.06,
                            animation: "grainMove 8s steps(1) infinite",
                        }}
                    />

                    {/* Radial vignette glow from centre */}
                    <div
                        className="absolute inset-0 pointer-events-none z-10"
                        style={{
                            background: "radial-gradient(ellipse at 50% 30%, rgba(255,230,140,0.18) 0%, transparent 70%)",
                        }}
                    />

                    {/* Heading */}
                    <div className="w-[90%] mx-auto px-2 sm:px-6 md:px-10 lg:px-20 pt-3 sm:pt-10 pb-4 relative z-20 overflow-hidden flex flex-col sm:flex-row items-center justify-center">
                        <motion.h2
                            className="w-full text-center font-semibold uppercase tracking-wider font-outfit m-0 text-white text-xl sm:text-2xl md:text-3xl"
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                        >
                            Founder's Message
                        </motion.h2>
                    </div>

                    {/* Quote Section — dark brown strip with shimmer */}
                    <div
                        className="mt-2 sm:mt-4 flex flex-col justify-center lg:items-end items-center w-[100vw] h-[26vh] text-white px-2 md:px-5 py-2 relative overflow-hidden z-20"
                        style={{
                            background: "linear-gradient(135deg, #7a5c3f, #96785e, #6e4f32, #a08060, #96785e)",
                            backgroundSize: "300% 300%",
                            animation: "gradientShift 8s ease infinite",
                            borderTop: "1.5px solid rgba(212,175,55,0.5)",
                            boxShadow: "inset 0 1px 0 rgba(255,220,100,0.2), 0 -4px 24px rgba(0,0,0,0.15)",
                        }}
                    >
                        {/* Diagonal shimmer streak on quote strip */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: "linear-gradient(105deg, transparent 30%, rgba(255,220,100,0.12) 50%, transparent 70%)",
                                backgroundSize: "200% 100%",
                                animation: "quoteShimmer 5s linear infinite",
                            }}
                        />

                        {/* Grain on quote strip */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                                backgroundSize: "160px 160px",
                                opacity: 0.07,
                            }}
                        />

                        <div className="2xl:w-[45%] xl:w-[38%] lg:w-[40%] px-2 sm:px-6 md:px-10 lg:px-0 flex flex-col justify-center items-center relative z-10">
                            <motion.p
                                className="text-sm sm:text-md md:text-lg lg:text-sm xl:text-md 2xl:text-lg text-justify md:leading-relaxed 2xl:mb-4 mb-2 2xl:w-[85%] lg:w-[90%] sm:tracking-wide font-outfit"
                                style={{ color: "rgba(255,248,225,0.95)" }}
                                variants={{
                                    hidden: { opacity: 0, y: 1 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            >
                                Our journey in fashion has always been guided by
                                respect for tradition and a commitment to the
                                future. With each creation we uphold our pride &amp;
                                values. We continue to shape this
                                conversation-one inspired creation at a time.
                            </motion.p>
                            <motion.h2
                                className="text-sm sm:text-md md:text-lg lg:text-sm xl:text-md 2xl:text-lg flex justify-end 2xl:w-[85%] lg:w-[90%] font-outfit"
                                style={{ color: "rgba(255,220,120,0.9)" }}
                                variants={{
                                    hidden: { opacity: 0, y: 1 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.8 }}
                                transition={{
                                    duration: 1.2,
                                    delay: 0.5,
                                    ease: "easeOut",
                                }}
                            >
                                Shri Shyam Sahni &amp; Smt. Veena Sahni
                            </motion.h2>
                        </div>
                    </div>

                    {/* Founder image */}
                    <div
                        className="text-white xl:h-[75vh] lg:h-[55vh] lg:absolute bottom-0 lg:left-0 flex items-center justify-start pointer-events-none z-20"
                    >
                        <img
                            src={FounderImage}
                            alt="Founder"
                            className="h-full object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* New Our Story Header Section */}
            <section className="relative bg-white pt-16 pb-10 sm:pt-24 sm:pb-12 font-outfit overflow-hidden">
                {/* Subtle Fabric Background for Texture */}
                <div
                    className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
                    style={{
                        backgroundImage: `url(${FabricTexture})`,
                        backgroundSize: '400px',
                        backgroundRepeat: 'repeat'
                    }}
                ></div>

                <div className="relative z-10 max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-center">
                    <div className="max-w-[1300px] text-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={{
                                hidden: {},
                                visible: { 
                                    transition: { staggerChildren: 0.3 } 
                                }
                            }}
                        >
                            <motion.p 
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
                                }}
                                style={{ fontFamily: "'Playfair Display', serif" }}
                                className="text-[#1a1a1a] text-lg sm:text-xl md:text-2xl lg:text-[30px] xl:text-[32px] font-light italic leading-snug mb-10 tracking-tight"
                            >
                                Since 1973, Panorama Exports has been transforming fabric into global fashion.
                            </motion.p>

                            <motion.p 
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
                                }}
                                className="text-[#AD1E1E] text-sm sm:text-base md:text-lg lg:text-[19px] leading-[2] font-light tracking-wide max-w-[950px] mx-auto"
                            >
                                What began as a vision rooted in craftsmanship has grown into a legacy of precision, innovation and scale. From India to the world, every garment we create carries the mark of creativity, technical expertise and an unwavering commitment to quality.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Image Loop Section */}
            <section className="w-full pb-0 sm:pb-0">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    spaceBetween={15}
                    slidesPerView={1.1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.8,
                        },
                        1024: {
                            slidesPerView: 2.5,
                        }
                    }}
                    loop={true}
                    speed={8000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    freeMode={{
                        enabled: true,
                        momentum: false,
                    }}
                    allowTouchMove={true}
                    grabCursor={true}
                    onTouchEnd={(swiper) => {
                        setTimeout(() => {
                            swiper.autoplay.start();
                        }, 100);
                    }}
                    className="w-full h-[40vh] sm:h-[60vh] lg:h-[70vh] bg-gray-50 smooth-swiper"
                >
                    {storyImages.map((img, index) => (
                        <SwiperSlide key={index} className="overflow-hidden bg-gray-100">
                            <img 
                                src={img} 
                                alt={`Story Slide ${index + 1}`} 
                                loading="eager"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Where Every Season Begins Section */}
            <section className="bg-white pt-16 pb-10 sm:pt-24 sm:pb-12 font-outfit">
                <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-center">
                    <div className="max-w-[1200px] text-center">
                        <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            style={{ fontFamily: "'Playfair Display', serif" }}
                            className="text-[#AD1E1E] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-light italic mb-8"
                        >
                            Where Every Season Begins
                        </motion.h3>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-[#1a1a1a] text-sm sm:text-lg md:text-xl lg:text-[19px] font-light leading-relaxed tracking-wide max-w-full lg:max-w-[1400px] mx-auto whitespace-normal"
                        >
                            For over five decades, we have pushed boundaries to keep pace with the energy and creativity that define Panorama.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Second Image Loop Section */}
            <section className="w-full pb-0">
                <Swiper
                    modules={[Autoplay, FreeMode]}
                    spaceBetween={15}
                    slidesPerView={1.1}
                    breakpoints={{
                        640: { slidesPerView: 1.8 },
                        1024: { slidesPerView: 2.5 }
                    }}
                    loop={true}
                    speed={8000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    freeMode={{
                        enabled: true,
                        momentum: false,
                    }}
                    allowTouchMove={true}
                    grabCursor={true}
                    onTouchEnd={(swiper) => {
                        setTimeout(() => {
                            swiper.autoplay.start();
                        }, 100);
                    }}
                    className="w-full h-[40vh] sm:h-[60vh] lg:h-[70vh] bg-gray-50 smooth-swiper"
                >
                    {detailImages.map((img, index) => (
                        <SwiperSlide key={index} className="overflow-hidden bg-gray-100">
                            <img 
                                src={img} 
                                alt={`Detail Slide ${index + 1}`} 
                                loading="eager"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Step Inside Our World Section */}
            <section className="bg-[#F9F6F1] pt-12 pb-16 sm:pt-16 sm:pb-20 font-outfit">
                <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-center">
                    <div className="max-w-[1200px] text-center">
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-gray-600 text-sm sm:text-lg md:text-xl lg:text-[20px] leading-[1.9] font-light tracking-wide px-4"
                        >
                            Step inside our world, where ideas take shape and possibilities are reimagined every day. 
                            Season after season, we refine, rethink and elevate everything we do, always moving forward.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Luxury Woven into Every Design Section */}
            <section className="bg-white pt-16 pb-10 sm:pt-24 sm:pb-12 font-outfit">
                <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-center">
                    <div className="max-w-[1200px] text-center">
                        <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            style={{ fontFamily: "'Playfair Display', serif" }}
                            className="text-[#AD1E1E] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-light italic mb-8"
                        >
                            Luxury Woven into Every Design
                        </motion.h3>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-[#1a1a1a] text-sm sm:text-lg md:text-xl lg:text-[19px] font-light leading-relaxed tracking-wide max-w-full lg:max-w-[1400px] mx-auto whitespace-normal"
                        >
                            At Panorama Exports, luxury is not simply added — it is thoughtfully woven into every design we create. From the first sketch to the final stitch, every garment reflects a seamless blend of creativity, craftsmanship, and attention to detail. Our team’s visionary approach is shaped by analysing the latest global trend reports and receiving valuable daily feedback from our customers.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Upper Showcase Image Section */}
            <section className="w-full pb-0 overflow-hidden bg-gray-50 h-[50vh] sm:h-[75vh] lg:h-[85vh]">
                <div className="w-full h-full overflow-hidden">
                    <img 
                        src={HandcraftedLuxury} 
                        alt="Handcrafted Luxury Showcase" 
                        loading="eager"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>
            </section>

            {/* Evolving Fashion Sensibilities Section */}
            <section className="bg-[#F9F6F1] pt-12 pb-16 sm:pt-16 sm:pb-20 font-outfit">
                <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-center">
                    <div className="max-w-[1200px] text-center">
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-gray-600 text-sm sm:text-lg md:text-xl lg:text-[20px] leading-[1.9] font-light tracking-wide px-4"
                        >
                            By staying closely connected to evolving fashion sensibilities, we are able to authentically interpret — and often intuitively anticipate — our customers’ desires with precision and elegance.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Single Showcase Image Section */}
            <section className="w-full pb-0 overflow-hidden bg-gray-50 h-[50vh] sm:h-[75vh] lg:h-[85vh]">
                <div className="w-full h-full overflow-hidden">
                    <img 
                        src={WeavingLuxury} 
                        alt="Weaving Brilliance Showcase" 
                        loading="eager"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>
            </section>

            {/* MileStones Sections - Hidden as per request */}
            {/* 
            <section id="milestones" ref={milestonesRef} className="bg-white">
                <div className="sm:pt-8 sm:pb-0 text-[#01276a] w-[90%] mx-auto px-2 sm:px-6 md:px-10 lg:px-20 rounded-t-md mt-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
                        <div className="text-2xl sm:text-3xl md:text-5xl font-light font-outfit">
                            Milestones
                        </div>
                    </div>
                </div>
                <Milestones />
            </section>
            */}

            {/* Our Purpose Cards Section - KEPT */}
            <section id="our-purpose" ref={ourPurposeRef} className="bg-white border-t border-gray-100">
                <PurposeCards />
            </section>
        </div>
    );
}
