import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";

import Milestones from "./Milestones";

import LegacyImage from "../../assets/Legacy/final.webp";

import FounderImage from "../../assets/Founders/founderImage.webp";
import FabricTexture from "../../assets/backgrounds/fabric-texture.jpg";

const heroImages = [LegacyImage];
const labels = {
    "#legacy": "Legacy",
    "#milestones": "Milestones",
};

const crumbs = [
    { label: "Legacy", path: "/ourstory#legacy" },
    { label: "Milestones", path: "/ourstory#milestones" },
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

    // Determine which breadcrumb is active
    const activeCrumb = legacyInView
        ? "Legacy"
        : milestonesInView
            ? "Milestones"
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
            {/* Legacy Sections */}
            <section id="legacy" ref={legacyRef} className="bg-white">
                {/* Hero Section */}
                <div
                    className="relative w-full bg-black overflow-hidden flex flex-col items-start justify-end 2xl:py-28 xl:py-20 lg:py-10 md:py-5 sm:py-4 py-2"
                    style={{ aspectRatio: "16 / 7" }}
                >
                    {/* Background Dissolve Animations images */}
                    {heroImages.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${index === currentIndex
                                ? "opacity-100 blur-0 scale-100"
                                : "opacity-0 blur-md scale-105"
                                }`}
                            style={{
                                backgroundImage: `url(${img})`,
                                backgroundSize: "contain",
                                backgroundPosition: "center",
                            }}
                        ></div>
                    ))}

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

                    {/* Text Box */}
                    <div className="relative z-20 text-white w-[90%] mx-auto px-2 sm:px-6 md:px-10 lg:px-20 font-semibold font-outfit">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:mb-5 md:mb-4 sm:mb-3 mb-2 uppercase tracking-wider">
                            Legacy
                        </h1>
                        <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extralight">
                            Where Heritage Meets Modern Luxury
                        </h2>
                    </div>
                </div>
            </section>
            {/* Breadcrumbs */}
            <div className="hidden md:block sticky lg:top-20 md:top-12 top-10 z-40 shadow-md bg-blue-950 text-lg py-3 transition-all duration-300">
                <div className="w-[90%] mx-auto px-6 md:px-20 flex items-center justify-center gap-6">
                    {crumbs.map((crumb, index) => (
                        <span
                            key={index}
                            className="flex items-center justify-center"
                        >
                            <Link
                                to={crumb.path}
                                className={`hover:underline md:text-sm lg:text-lg sm:my-1 font-outfit ${activeCrumb === crumb.label
                                    ? "font-semibold text-white"
                                    : "text-gray-300"
                                    }`}
                            >
                                {crumb.label}
                            </Link>
                        </span>
                    ))}
                </div>
            </div>
            <div className="relative sm:pt-6 pt-3 lg:pb-6 md:pb-4 pb-0 sm:px-6 px-2 overflow-hidden">
                {/* Fabric Texture Background Overlay */}
                <div
                    className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `url(${FabricTexture})`,
                        backgroundSize: '400px',
                        backgroundRepeat: 'repeat'
                    }}
                ></div>
                <div className="relative z-10 w-[90%] mx-auto">
                    <motion.p
                        className="2xl:text-2xl lg:text-xl md:text-lg sm:text-base text-sm text-blue-900 text-justify sm:max-w-[85%] w-full mx-auto leading-relaxed font-light tracking-wide font-outfit"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        Since 1973, Panorama Exports has transformed fabrics
                        into fashion blending Indian craftsmanship with advanced
                        manufacturing. Today, our garments travel from India to
                        global wardrobes, each piece echoing artistry,
                        innovation, and timeless tradition. More than fashion -
                        it's handcrafted legacy.
                    </motion.p>
                </div>
            </div>
            {/* Founder's Message Sections */}
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
                    <div className="w-full pt-3 sm:pt-5 pb-4 relative z-20 overflow-hidden">
                        <motion.h2
                            className="w-full text-center font-semibold font-outfit uppercase m-0 leading-none"
                            style={{
                                fontSize: "8.5vw",
                                letterSpacing: "0.05em",
                                margin: 0,
                                color: "rgba(255, 255, 255, 0.35)",
                            }}
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

            {/* MileStones Sections */}
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
        </div>
    );
}
