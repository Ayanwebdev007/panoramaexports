import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";

import Milestones from "./Milestones";

import LegacyImage from "../../assets/Legacy/final.webp";

import FounderImage from "../../assets/Founders/founderImage.webp";

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
                            className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
                                index === currentIndex
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
                    <div className="relative z-20 text-white w-[90%] mx-auto px-2 sm:px-6 md:px-10 lg:px-20 font-semibold">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:mb-5 md:mb-4 sm:mb-3 mb-2">
                            Legacy
                        </h1>
                        <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal">
                            <span className="font-light">Where</span> Heritage{" "}
                            <span className="font-light">Meets</span> Modern
                            Luxury
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
                                className={`hover:underline md:text-sm lg:text-lg sm:my-1 ${
                                    activeCrumb === crumb.label
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
            <div className="bg-white sm:pt-16 pt-5 lg:pb-10 md:pb-5 pb-0 sm:px-6 px-2">
                <div className="">
                    <p className="2xl:text-3xl lg:text-2xl md:text-xl sm:text-md text-sm text-blue-900 text-justify sm:max-w-[70%] w-[90%] mx-auto leading-relaxed">
                        Since 1973, Panorama Exports has transformed fabrics
                        into fashion blending Indian craftsmanship with advanced
                        manufacturing. Today, our garments travel from India to
                        global wardrobes, each piece echoing artistry,
                        innovation, and timeless tradition. More than fashion -
                        it's handcrafted legacy.
                    </p>
                </div>
            </div>
            {/* Founder's Message Sections */}
            <section id="founder-message" ref={ref} className="bg-white">
                <div className="w-[90%] mx-auto md:py-16 py-5 px-2 sm:px-6 md:px-10 lg:px-20 text-lg sm:text-3xl md:text-4xl lg:text-5xl text-[#01276a] font-semibold">
                    <p className="py-3 px-4 font-semibold bg-blue-950 inline-block text-white">
                        FOUNDER'S MESSAGE
                    </p>
                </div>

                <div className="bg-[#b9a686] xl:h-[70vh] lg:h-[50vh] h-full relative flex flex-col lg:flex-row items-center lg:pb-5">
                    {/* Quote Section */}
                    <div className="flex flex-col lg:justify-start justify-center lg:items-end items-center w-[100vw] h-[26vh] bg-[#96785e] text-white px-2 md:px-5 py-2">
                        <div className="2xl:w-[45%] xl:w-[38%] lg:w-[40%] px-2 sm:px-6 md:px-10 lg:px-0 2xl:mt-2 flex flex-col justify-center items-center">
                            <motion.p
                                className="text-sm sm:text-md md:text-lg lg:text-sm xl:text-md 2xl:text-lg text-justify md:leading-relaxed 2xl:mb-4 mb-2 2xl:w-[85%] lg:w-[90%] sm:tracking-wide"
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
                                future. With each creation we uphold our pride &
                                values. We continue to shape this
                                conversation-one inspired creation at a time.
                            </motion.p>
                            <motion.h2
                                className="text-sm sm:text-md md:text-lg lg:text-sm xl:text-md 2xl:text-lg font- flex justify-end 2xl:w-[85%] lg:w-[90%]"
                                variants={{
                                    hidden: { opacity: 0, y: 1 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.8 }}
                                transition={{
                                    duration: 2,
                                    delay: 2,
                                    ease: "easeInOut",
                                }}
                            >
                                Shri Shyam Sahni & Smt. Veena Sahni
                            </motion.h2>
                        </div>
                    </div>
                    <div className="text-white xl:h-[70vh] lg:h-[50vh] lg:absolute bottom-0 flex items-center justify-center">
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
                <h2 className="w-[90%] mx-auto lg:py-16 md:py-12 sm:py-10 py-5 px-2 sm:px-6 md:px-10 lg:px-20 text-lg sm:text-3xl md:text-4xl lg:text-5xl text-[#01276a] font-semibold">
                    <p className="py-3 px-4 font-semibold bg-blue-950 inline-block text-white">
                        MILESTONES
                    </p>
                </h2>
                <Milestones />
            </section>
        </div>
    );
}
