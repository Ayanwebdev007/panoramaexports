/// VisionMission.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bgImage from "../../assets/OurStory/visionMission/main_bg.webp";
import CoreValues from "./CoreValues";
import RajanPng from "../../assets/Founders/rajan.webp";
import NavinPng from "../../assets/Founders/navin.webp";
import ShivaanPng from "../../assets/Founders/shivaan.webp";
import SidharthPng from "../../assets/Founders/Sidharth.webp";

import VisionImage from "../../assets/OurStory/visionMission/Vision.webp";
import MissionImage from "../../assets/OurStory/visionMission/Mission.webp";

const labels = {
    "#vision-values": "VisionValues",
    "#core-values": "CoreValues",
    "#leadership": "leadership",
};

const directors = [
    {
        id: 1,
        name: "Rajan Sahni",
        role: "Director",
        bg: RajanPng,
        img: RajanPng,
        message: `Innovation is our language-spoken through
              designs that inspire and lead globally. We
              don't just follow trends-we anticipate them,
              crafting future-ready fashion with purpose.
              Every creation is a translation of insight,
              technology, and timeless craftsmanship.`,
    },
    {
        id: 2,
        name: "Navin Sahni",
        role: "Director",
        bg: NavinPng,
        img: NavinPng,
        message: `Our identity is crafted through integrity and defined by an unwavering commitment to brilliance & values that shape every garment, every partnership, and every milestone on our global journey.`,
    },
];

const executiveDirectors = [
    {
        id: 1,
        name: "Shivaan Sahni ",
        role: "Executive Director",
        bg: ShivaanPng,
        img: ShivaanPng,
        message: `Each thread tells a story of trust, transformation, and thoughtful design. We’re weaving a future of equity, innovation, and sustainability. Excellence isn’t just an outcome-it’s our mindset, culture, and commitment.`,
    },
    {
        id: 2,
        name: "Sidharth Sahni",
        role: "Executive Director",
        bg: SidharthPng,
        img: SidharthPng,
        message: `Panorama is a harmony of team strength and individual mastery-each creation rooted in emotion, unity, and excellence. Our legacy is built not just in factories, but in the future, we help uplift.`,
    },
];

const crumbs = [
    { label: "Vision & Values", path: "/vision-values" },
    { label: "Core Values", path: "/vision-values#core-values" },
    { label: "Leadership", path: "/vision-values#leadership" },
];

export default function VisionMission() {
    const swiperRef = useRef(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [currentSlideIndex1, setCurrentSlideIndex1] = useState(0);
    const location = useLocation();
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const { ref: visionRef, inView: visionInView } = useInView({
        threshold: 0.3, // 30% of vision & values visible = considered "in view", this for breadcrums control............
    });
    const { ref: corevalueRef, inView: corevalueInView } = useInView({
        threshold: 0.3, // same for core values for breadcrums control............
    });
    const { ref: leadershipRef, inView: leadershipInView } = useInView({
        threshold: 0.3, // same for leadership for breadcrums control............
    });
    
    // Determine which breadcrumb is active
    const activeCrumb = visionInView ? "Vision & Values" : corevalueInView ? "Core Values" : leadershipInView ? "Leadership" : null;

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

    // swiper for directors...........
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

        // Handle slide change for directors................
        const handleSlideChange = () => {
            const newIndex = swiper.realIndex;
            setCurrentSlideIndex(newIndex);

            // Announce slide changes for screen readers
            const activeSlide = directors[newIndex];
            if (activeSlide) {
                const announcement = document.createElement("div");
                announcement.setAttribute("aria-live", "polite");
                announcement.setAttribute("aria-atomic", "true");
                announcement.className = "sr-only";
                announcement.textContent = `Slide ${newIndex + 1} of ${
                    directors.length
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

    // swiper for executive-directors...........
    useEffect(() => {
        const swiper = swiperRef.current?.swiper;
        if (!swiper) return;

        // Set initial slide index
        setCurrentSlideIndex1(0);

        // Initialize autoplay with a slight delay
        const autoplayTimer = setTimeout(() => {
            if (swiper.autoplay) {
                swiper.autoplay.start();
            }
        }, 100);

        // Handle slide change for executive-directors................
        const handleSlideChange1 = () => {
            const newIndex = swiper.realIndex;
            setCurrentSlideIndex1(newIndex);

            // Announce slide changes for screen readers
            const activeSlide = executiveDirectors[newIndex];
            if (activeSlide) {
                const announcement = document.createElement("div");
                announcement.setAttribute("aria-live", "polite");
                announcement.setAttribute("aria-atomic", "true");
                announcement.className = "sr-only";
                announcement.textContent = `Slide ${newIndex + 1} of ${
                    executiveDirectors.length
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

        swiper.on("slideChange", handleSlideChange1);

        // Cleanup function
        return () => {
            clearTimeout(autoplayTimer);
            swiper.off("slideChange", handleSlideChange1);
        };
    }, []);

    return (
        <>
            <div className="sm:hidden w-full h-10 bg-gray-900"></div>
            <div
                ref={ref}
                className="w-full bg-contain bg-center flex flex-col items-center justify-end aspect-[16/7]"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <motion.div
                    className="text-white bg-gradient-to-t from-black/90 via-black/80 via-black/70 to-transparent lg:px-[10%] md:px-[8%] sm:px-[6%] px-[4%] lg:pb-[4%] md:pb-5 sm:pb-4 pb-2 pt-[10%]"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.6 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                    }}
                >
                    <h1 className="text-sm sm:text-lg md:text-xl lg:text-3xl xl:text-4xl font-semibold mb-1 sm:mb-0">
                        Woven into Every Thread
                    </h1>
                    <div className="hidden sm:block text-[10px] sm:text-sm md:text-md lg:text-xl xl:text-2xl lg:mt-4 sm:mt-2 mt-1 w-[100%] text-justify font-relaxed">
                        Our vision shapes the future of fashion; our values
                        guide every stitch. We don’t just make clothing-we build
                        trust, innovate with intent, and create with heart.
                    </div>
                </motion.div>
            </div>

            {/* Breadcrumbs */}
            <div className="hidden md:block sticky md:top-12 lg:top-20 z-40 shadow-md bg-blue-950 text-lg py-3 transition-all duration-300">
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

            {/* Vision mission Sections */}
            <section id="vision-values" ref={visionRef} className="bg-white">
                <div className="bg-white w-full sm:py-16 py-2 flex flex-col items-center">
                    {/* Mission and Vision blocks */}
                    <div className="w-full sm:my-5 my-2 flex flex-col">
                        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
                            <div className="flex sm:justify-end justify-center items-center md:w-[40%] sm:w-[30%] w-full">
                                <div className="">
                                    <h2 className="text-lg sm:text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-black">
                                        Our Mission
                                        <br />& Vision
                                    </h2>

                                    <div className="mt-2 w-28 lg:w-36 2xl:w-48 h-1 bg-blue-800 rounded border" />
                                    <div className="mt-1 w-28 lg:w-36 2xl:w-48 h-1 bg-gray-400 rounded border" />
                                </div>
                            </div>
                            {/* Mission */}
                            <div className="flex items-center justify-between bg-[#f2f2f2] shadow-xl mb-4 md:w-[60%] sm:w-[70%] w-[90%]">
                                <div className="flex items-center w-full">
                                    <div className="overflow-hidden flex items-center justify-center relative">
                                        <img
                                            src={MissionImage}
                                            alt="Mission"
                                            className="object-cover w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] 2xl:w-[250px] h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[250px]"
                                        />
                                        <div className="absolute inset-0 bg-green-300 mix-blend-multiply opacity-40"></div>
                                    </div>
                                    <div className="md:mx-8 sm:mx-5 mx-3 md:my-6 my-4">
                                        <h3 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-md font-bold text-black">
                                            Mission
                                        </h3>
                                        <p className="text-[10px] sm:text-[12px] md:text-sm xl:text-md 2xl:text-lg text-gray-700 2xl:max-w-xl lg:max-w-md max-w-xs md:mt-1 mt-2px">
                                            To exceed expectations through
                                            innovation, efficiency, and a
                                            people-first culture-redefining
                                            global apparel manufacturing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="flex items-center justify-between bg-[#f2f2f2] shadow-xl xl:w-[55%] md:w-[60%] sm:w-[70%] w-[90%] sm:mt-8 mt-2 xl:mt-12">
                            <div className="flex items-center justify-end w-full">
                                <div className="text-end md:mx-8 sm:mx-5 mx-3 md:my-6 my-4">
                                    <h3 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-md font-bold text-black">
                                        Vision
                                    </h3>
                                    <p className="text-[10px] sm:text-[12px] md:text-sm xl:text-md 2xl:text-lg text-gray-700 2xl:max-w-xl lg:max-w-md max-w-xs md:mt-1 mt-2px">
                                        To be the world’s most trusted apparel
                                        partner, championing technology,
                                        sustainability, and design excellence.
                                    </p>
                                </div>
                                <div className="overflow-hidden flex items-center justify-center relative">
                                    <img
                                        src={VisionImage}
                                        alt="Mission"
                                        className="object-cover w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] 2xl:w-[250px] h-[140px] md:h-[160px] lg:h-[180px] xl:h-[200px] 2xl:h-[250px]"
                                    />
                                    <div className="absolute inset-0 bg-green-100 mix-blend-multiply opacity-60"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Values Sections */}
            <section
                id="core-values"
                ref={corevalueRef}
                className="w-full bg-[#f3ebdf]"
            >
                <CoreValues />
            </section>
            {/* Directors's Message Sections */}
            <section id="leadership" ref={leadershipRef} className="bg-white">
                <div className="w-[90%] mx-auto lg:py-16 md:py-12 sm:py-10 py-5 px-2 sm:px-6 md:px-10 lg:px-20 text-lg sm:text-3xl md:text-4xl lg:text-5xl text-[#01276a] font-semibold">
                    <h3 className="py-3 px-4 font-semibold bg-blue-950 inline-block text-white">
                        DIRECTOR'S MESSAGE
                    </h3>
                </div>
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    initialSlide={0}
                    speed={600}
                    autoplay={{
                        delay: 4000,
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
                    className="h-full overflow-hidden bg-[#5b4e39]"
                >
                    {directors.map((director, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className="w-full bg-contain bg-center"
                                style={{
                                    backgroundImage: `url(${director.bg})`,
                                    aspectRatio: "16/6", // image ratio wise height ...................
                                }}
                            >
                                <div className="bg-transparent w-full h-full flex items-center">
                                    <div
                                        className={`sm:w-[50%] w-[60%] ${
                                            director.id === 2 ? "hidden" : ""
                                        } sm:py-10 flex items-center`}
                                    >
                                        <motion.div
                                            className="sm:w-[90%] w-[98%] ml-auto flex flex-col items-end justify-center"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{
                                                duration: 1.5,
                                                ease: "easeInOut",
                                            }}
                                            viewport={{
                                                once: false,
                                                amount: 0.3,
                                            }}
                                        >
                                            <div className="2xl:text-3xl xl:text-2xl md:text-xl sm:text-[12px] text-[9px] text-white sm:text-justify sm:leading-loose 2xl:w-[80%] xl:w-[90%] lg:w-[95%] w-full">
                                                <span className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-md font-semibold">
                                                    “
                                                </span>
                                                {director.message}
                                                <span className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-md font-semibold">
                                                    ”
                                                </span>
                                            </div>
                                            <h1 className="text-white w-full text-end 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-xl text-sm font-semibold 2xl:mt-20 xl:mt-10 md:mt-5 sm:mt-2 mt-[2px]">
                                                {director.name}
                                            </h1>
                                            <h3 className="text-white w-full text-end 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-[10px] md:font-semibold xl:mt-5 sm:mt-2 mt-[2px]">
                                                {director.role}
                                            </h3>
                                        </motion.div>
                                    </div>
                                    <div
                                        className={`sm:w-[50%] w-[60%] ml-auto ${
                                            director.id === 1 ? "hidden" : ""
                                        } sm:py-10 flex items-center`}
                                    >
                                        <motion.div
                                            className="sm:w-[90%] w-[98%] mr-auto flex flex-col items-start justify-center"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{
                                                duration: 1.5,
                                                ease: "easeInOut",
                                            }}
                                            viewport={{
                                                once: false,
                                                amount: 0.3,
                                            }}
                                        >
                                            <div className="2xl:text-3xl xl:text-2xl md:text-xl sm:text-[12px] text-[9px] text-white sm:text-justify sm:leading-loose 2xl:w-[80%] xl:w-[90%] lg:w-[95%] w-full">
                                                <span className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-md font-semibold">
                                                    “
                                                </span>
                                                {director.message}
                                                <span className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-md font-semibold">
                                                    ”
                                                </span>
                                            </div>
                                            <h1 className="text-white w-full sm:text-end 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-xl text-sm font-semibold 2xl:mt-20 xl:mt-10 md:mt-5 sm:mt-2 mt-[2px]">
                                                {director.name}
                                            </h1>
                                            <h3 className="text-white w-full sm:text-end 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-[10px] md:font-semibold xl:mt-5 sm:mt-2 mt-[2px]">
                                                {director.role}
                                            </h3>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Pagination Dots */}
                <div className="swiper-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2"></div>
            </section>
            {/* Executive Directors's Message Sections */}
            <section id="director-message" className="bg-white">
                <div className="w-[90%] mx-auto lg:py-16 md:py-12 sm:py-10 py-5 px-2 sm:px-6 md:px-10 lg:px-20 text-lg sm:text-3xl md:text-4xl lg:text-5xl text-[#01276a] font-semibold">
                    <h3 className="py-3 px-4 font-semibold bg-blue-950 inline-block text-white">
                        EXECUTIVE DIRECTOR'S MESSAGE
                    </h3>
                </div>
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    initialSlide={0}
                    speed={600}
                    autoplay={{
                        delay: 4000,
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
                    className="h-full overflow-hidden bg-[#5b4e39]"
                >
                    {executiveDirectors.map((director, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className="w-full bg-contain bg-center"
                                style={{
                                    backgroundImage: `url(${director.bg})`,
                                    aspectRatio: "16/6", // image ratio wise height ...................
                                }}
                            >
                                <div className="bg-transparent w-full h-full flex items-center">
                                    <div
                                        className={`sm:w-[50%] w-[60%] ${
                                            director.id === 2 ? "hidden" : ""
                                        } py-10 flex items-center`}
                                    >
                                        <motion.div
                                            className="sm:w-[90%] w-[98%] ml-auto flex flex-col items-end justify-center"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{
                                                duration: 1.5,
                                                ease: "easeInOut",
                                            }}
                                            viewport={{
                                                once: false,
                                                amount: 0.3,
                                            }}
                                        >
                                            <div className="2xl:text-3xl xl:text-2xl md:text-xl sm:text-[12px] text-[9px] text-white sm:text-justify sm:leading-loose 2xl:w-[80%] xl:w-[90%] lg:w-[95%] w-full">
                                                <span className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-md font-semibold">
                                                    “
                                                </span>
                                                {director.message}
                                                <span className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-md font-semibold">
                                                    ”
                                                </span>
                                            </div>
                                            <h1 className="text-white w-full text-end 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-xl text-sm font-semibold 2xl:mt-20 xl:mt-10 md:mt-5 sm:mt-2 mt-[2px]">
                                                {director.name}
                                            </h1>
                                            <h3 className="text-white w-full text-end 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-[10px] md:font-semibold xl:mt-5 sm:mt-2 mt-[2px]">
                                                {director.role}
                                            </h3>
                                        </motion.div>
                                    </div>
                                    <div
                                        className={`sm:w-[50%] w-[60%] ml-auto ${
                                            director.id === 1 ? "hidden" : ""
                                        } py-10 flex items-center`}
                                    >
                                        <motion.div
                                            className="sm:w-[90%] w-[98%] mr-auto flex flex-col items-start justify-center"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{
                                                duration: 1.5,
                                                ease: "easeInOut",
                                            }}
                                            viewport={{
                                                once: false,
                                                amount: 0.3,
                                            }}
                                        >
                                            <div className="2xl:text-3xl xl:text-2xl md:text-xl sm:text-[12px] text-[9px] text-white sm:text-justify sm:leading-loose 2xl:w-[80%] xl:w-[90%] lg:w-[95%] w-full">
                                                <span className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-md font-semibold">
                                                    “
                                                </span>
                                                {director.message}
                                                <span className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-md font-semibold">
                                                    ”
                                                </span>
                                            </div>
                                            <h1 className="text-white w-full sm:text-end 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-xl text-sm font-semibold 2xl:mt-20 xl:mt-10 md:mt-5 sm:mt-2 mt-[2px]">
                                                {director.name}
                                            </h1>
                                            <h3 className="text-white w-full sm:text-end 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-[10px] md:font-semibold xl:mt-5 sm:mt-2 mt-[2px]">
                                                {director.role}
                                            </h3>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Pagination Dots */}
                <div className="swiper-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex space-x-2"></div>
            </section>
        </>
    );
}
