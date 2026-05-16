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
import AmitPng from "../../assets/AMIT FINAL.jpeg";
import KritiPng from "../../assets/Gemini_Generated_Image_jtuumnjtuumnjtuu.png";
import AprajitaPng from "../../assets/Aparajita.png";

import VisionImage from "../../assets/OurStory/visionMission/Vision.webp";
import MissionImage from "../../assets/OurStory/visionMission/Mission.webp";
import FabricTexture from "../../assets/backgrounds/fabric-texture.webp";

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
        objectPosition: "80% center", // Fine-tuned to prevent hand cutting without over-shifting
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
        objectPosition: "10% center", // Fine on card
        modalPosition: "15% center",  // Fine-tuned to shift him slightly more to the right in the popup
        message: `Our identity is crafted through integrity and defined by an unwavering commitment to brilliance & values that shape every garment, every partnership, and every milestone on our global journey.`,
    },
];

const executiveDirectors = [
    {
        id: 1,
        name: "Shivaan Sahni",
        role: "Executive Director",
        bg: ShivaanPng,
        img: ShivaanPng,
        objectPosition: "80% center",
        modalPosition: "80% center",
        message: `Each thread tells a story of trust, transformation, and thoughtful design. We’re weaving a future of equity, innovation, and sustainability. Excellence isn’t just an outcome-it’s our mindset, culture, and commitment.`,
    },
    {
        id: 2,
        name: "Sidharth Sahni",
        role: "Executive Director",
        bg: SidharthPng,
        img: SidharthPng,
        objectPosition: "20% center",
        modalPosition: "20% center",
        message: `Panorama is a harmony of team strength and individual mastery-each creation rooted in emotion, unity, and excellence. Our legacy is built not just in factories, but in the future, we help uplift.`,
    },
    {
        id: 3,
        name: "Amit Saraff",
        role: "CEO, Panorama Exports",
        bg: AmitPng,
        img: AmitPng,
        objectPosition: "center 20%",
        modalPosition: "center 20%",
        message: `Panorama Exports has built a strong foundation over the years, and I’m excited to lead its next phase of transformation. Our focus is on strengthening innovation, enhancing our design-led approach, and building a more agile and future-ready organization. By empowering our teams and nurturing strong global partnerships, we aim to drive sustainable growth and long-term success.`,
    },
    {
        id: 5,
        name: "Aprajita Verma",
        role: "Vice President",
        bg: AprajitaPng,
        img: AprajitaPng,
        objectPosition: "center 20%",
        modalPosition: "center 20%",
        message: `At Panorama Exports, leadership is built on collaboration, trust, and a shared pursuit of excellence. Working with dedicated teams and global partners allows us to constantly innovate and deliver value through strong product and design capabilities. It is a privilege to contribute to the company’s growth and future direction. It is inspiring to work alongside passionate individuals who share a common vision of growth and building lasting partnerships.`,
    },
    {
        id: 4,
        name: "Kriti Tewary",
        role: "Lead - Sustainability",
        bg: KritiPng,
        img: KritiPng,
        objectPosition: "center 20%",
        modalPosition: "center 20%",
        message: `At Panorama, we believe in doing things right the first time. We carry with us the heritage of decades, decades of craft and a future shaped by responsibility. As we continue to grow, we are strengthening our efforts to produce garments in ways that respect people, partners, and the planet. Thoughtfully made. Responsibly delivered.`,
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
    const [selectedLeader, setSelectedLeader] = useState(null);
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
                announcement.textContent = `Slide ${newIndex + 1} of ${directors.length
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
                announcement.textContent = `Slide ${newIndex + 1} of ${executiveDirectors.length
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
            
            {/* Refined Modern Hero Section */}
            <section className="relative bg-white pt-16 pb-12 sm:pt-24 sm:pb-20 font-outfit overflow-hidden">
                <div className="relative z-10 max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-light text-[#AD1E1E] mb-6 tracking-[0.3em] uppercase">
                            Woven into Every Thread
                        </h1>
                        <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed tracking-wide max-w-[800px] mx-auto mb-16">
                            Our vision shapes the future of fashion; our values
                            guide every stitch. We don’t just make clothing — we build
                            trust, innovate with intent, and create with heart.
                        </p>

                        {/* Featured Hero Image with Premium Treatment */}
                        <div className="relative w-full max-w-[1200px] mx-auto aspect-[21/9] overflow-hidden shadow-sm group border border-gray-100">
                            <img 
                                src={bgImage} 
                                alt="Hero" 
                                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/5"></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Refined Breadcrumbs */}
            <div className="hidden md:block sticky top-10 lg:top-12 z-40 shadow-sm border-y border-gray-100 bg-white text-lg py-4 transition-all duration-300">
                <div className="w-[90%] mx-auto px-6 md:px-20 flex items-center justify-center gap-10">
                    {crumbs.map((crumb, index) => (
                        <span
                            key={index}
                            className="flex items-center justify-center"
                        >
                            <Link
                                to={crumb.path}
                                className={`text-[11px] uppercase tracking-[0.2em] transition-all duration-300 font-outfit ${activeCrumb === crumb.label
                                    ? "font-semibold text-[#AD1E1E] border-b border-[#AD1E1E] pb-1"
                                    : "text-gray-400 hover:text-black"
                                    }`}
                            >
                                {crumb.label}
                            </Link>
                        </span>
                    ))}
                </div>
            </div>

            {/* Modern Staggered Vision & Mission Section */}
            <section id="vision-values" ref={visionRef} className="bg-white py-16 md:py-24 font-outfit">
                <div className="max-w-[1700px] mx-auto px-6 lg:px-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="mb-12 md:mb-16 text-center"
                    >
                        <h2 className="text-[#AD1E1E] text-xl md:text-3xl font-light tracking-[0.2em] uppercase mb-6">
                            Our Mission & Vision
                        </h2>
                        <div className="w-24 h-[1px] bg-[#AD1E1E] mx-auto opacity-30"></div>
                    </motion.div>

                    <div className="flex flex-col gap-16 md:gap-24 items-center">
                        {/* Mission - Staggered Left Image */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full max-w-[1200px]"
                        >
                            <div className="w-full md:w-1/2 aspect-[16/9] overflow-hidden bg-gray-50 border border-gray-100 shadow-sm group">
                                <img
                                    src={MissionImage}
                                    alt="Our Mission"
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                                />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left px-4">
                                <h3 className="text-lg md:text-xl font-light text-[#AD1E1E] mb-4 tracking-[0.2em] uppercase">
                                    Mission
                                </h3>
                                <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light max-w-md mx-auto md:mx-0">
                                    To exceed expectations through
                                    innovation, efficiency, and a
                                    people-first culture — redefining
                                    global apparel manufacturing.
                                </p>
                            </div>
                        </motion.div>

                        {/* Vision - Staggered Right Image */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16 w-full max-w-[1200px]"
                        >
                            <div className="w-full md:w-1/2 aspect-[16/9] overflow-hidden bg-gray-50 border border-gray-100 shadow-sm group">
                                <img
                                    src={VisionImage}
                                    alt="Our Vision"
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                                />
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-right px-4">
                                <h3 className="text-lg md:text-xl font-light text-[#AD1E1E] mb-4 tracking-[0.2em] uppercase">
                                    Vision
                                </h3>
                                <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light max-w-md mx-auto md:ml-auto md:mr-0">
                                    To be the world’s most trusted apparel
                                    partner, championing technology,
                                    sustainability, and design excellence.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Values Sections */}
            <section
                id="core-values"
                ref={corevalueRef}
                className="w-full bg-[#F9F6F1] pt-10 pb-8 md:pt-16 md:pb-12"
            >
                <CoreValues />
            </section>
            {/* New Leadership Section */}
            <section id="leadership" ref={leadershipRef} className="bg-white py-24">
                <div className="w-[90%] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2, margin: "0px 0px -50px 0px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <h2 className="text-2xl md:text-4xl font-light text-[#AD1E1E] font-outfit tracking-[0.2em] mb-4 uppercase">
                            Leadership
                        </h2>
                        <div className="w-24 h-[1px] bg-[#AD1E1E] mx-auto opacity-30"></div>
                    </motion.div>
                </div>

                <div className="w-[90%] md:w-[85%] mx-auto flex flex-wrap justify-center gap-3 sm:gap-10">
                    {[...directors, ...executiveDirectors].map((leader, index) => (
                        <motion.div
                            key={leader.name + leader.role}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1, margin: "0px 0px -50px 0px" }}
                            transition={{ duration: 0.4, delay: (index % 2) * 0.15, ease: "easeOut" }}
                            className="flex flex-col bg-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 rounded-sm overflow-hidden group cursor-pointer w-[calc(50%-12px)] lg:w-[calc(25%-30px)] max-w-[320px]"
                            onClick={() => setSelectedLeader(leader)}
                        >
                            {/* Card Image Section */}
                            <div className="aspect-square overflow-hidden relative bg-gray-50">
                                <img
                                    src={leader.img}
                                    alt={leader.name}
                                    className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                                    style={{
                                        objectPosition: leader.objectPosition || "center",
                                        filter: "grayscale(100%)",
                                    }}
                                />
                                <div className="absolute inset-0 bg-[#AD1E1E]/0 group-hover:bg-[#AD1E1E]/10 transition-colors duration-500"></div>

                                {/* Overlay Reveal */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Footer Section */}
                            <div className="p-3 sm:p-5 text-center flex flex-col justify-between flex-grow bg-white transition-colors duration-500 group-hover:bg-[#AD1E1E]">
                                <div className="space-y-1">
                                    <h3 className="text-gray-900 font-medium text-sm sm:text-xl tracking-wide transition-colors duration-500 group-hover:text-white font-outfit">
                                        {leader.name}
                                    </h3>
                                    <p className="text-gray-500 text-[10px] sm:text-xs font-light tracking-wider transition-colors duration-500 group-hover:text-white/80 font-outfit uppercase">
                                        {leader.role}
                                    </p>
                                </div>
                                <div className="mt-3">
                                    <span className="inline-block text-[#AD1E1E] text-[8px] sm:text-[10px] uppercase font-medium tracking-widest border-b border-[#AD1E1E]/30 pb-1 group-hover:text-white group-hover:border-white/40 transition-all duration-500 font-outfit">
                                        Read Message
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Enhanced Modal / Popup Implementation */}
                {selectedLeader && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedLeader(null)}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white rounded-sm overflow-hidden max-w-5xl w-full flex flex-col lg:flex-row relative shadow-2xl max-h-[90vh] lg:max-h-[85vh] overflow-y-auto lg:overflow-y-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-3 right-3 sm:top-6 sm:right-6 z-20 bg-[#AD1E1E] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-transform hover:rotate-90 duration-300 shadow-lg"
                                onClick={() => setSelectedLeader(null)}
                            >
                                <span className="text-lg sm:text-xl font-light">✕</span>
                            </button>

                            <div className="w-full lg:w-[45%] h-[250px] sm:h-auto lg:aspect-auto overflow-hidden bg-gray-50 flex-shrink-0">
                                <motion.img
                                    initial={{ scale: 1.05 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1.2 }}
                                    src={selectedLeader.img}
                                    alt={selectedLeader.name}
                                    className="w-full h-full object-cover grayscale"
                                    style={{ objectPosition: selectedLeader.modalPosition || selectedLeader.objectPosition || "center" }}
                                />
                            </div>

                            <div className="w-full lg:w-[55%] p-6 sm:p-10 lg:p-16 flex flex-col justify-center bg-white relative">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-[#AD1E1E] font-outfit tracking-tight">{selectedLeader.name}</h2>
                                    <div className="flex items-center gap-3 sm:gap-4 mt-2 mb-6 sm:mb-10">
                                        <div className="h-[1px] w-8 sm:w-12 bg-gray-300"></div>
                                        <p className="text-gray-500 font-light tracking-wider text-xs sm:text-sm font-outfit uppercase">{selectedLeader.role}</p>
                                    </div>

                                    <div className="relative">
                                        <div className="text-gray-600 leading-relaxed sm:leading-[1.8] text-sm sm:text-base font-light text-justify font-outfit">
                                            {selectedLeader.message}
                                        </div>
                                    </div>

                                    <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-100 flex items-center justify-between">
                                        <div className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[8px] sm:text-[10px] font-medium text-gray-400 font-outfit">
                                            Panorama Executive Leadership
                                        </div>
                                        <div className="hidden sm:block w-12 h-[1px] bg-gray-200"></div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </section>

            {/* Original Leadership sections preserved in comments as requested */}
            {/* 
            <section id="leadership-original" ref={leadershipRef} className="bg-white">
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
                                    aspectRatio: "16/6",
                                }}
                            >
                                <div className="bg-transparent w-full h-full flex items-center">
                                    <div className={`sm:w-[50%] w-[60%] ${director.id === 2 ? "hidden" : ""} sm:py-10 flex items-center`}>
                                        <motion.div className="sm:w-[90%] w-[98%] ml-auto flex flex-col items-end justify-center">
                                            <div className="2xl:text-3xl xl:text-2xl md:text-xl sm:text-[12px] text-[9px] text-white sm:text-justify sm:leading-loose 2xl:w-[80%] xl:w-[90%] lg:w-[95%] w-full">
                                                “ {director.message} ”
                                            </div>
                                            <h1 className="text-white w-full text-end 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-xl text-sm font-semibold 2xl:mt-20 xl:mt-10 md:mt-5 sm:mt-2 mt-[2px]">{director.name}</h1>
                                            <h3 className="text-white w-full text-end 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-[10px] md:font-semibold xl:mt-5 sm:mt-2 mt-[2px]">{director.role}</h3>
                                        </motion.div>
                                    </div>
                                    <div className={`sm:w-[50%] w-[60%] ml-auto ${director.id === 1 ? "hidden" : ""} sm:py-10 flex items-center`}>
                                        <motion.div className="sm:w-[90%] w-[98%] mr-auto flex flex-col items-start justify-center">
                                            <div className="2xl:text-3xl xl:text-2xl md:text-xl sm:text-[12px] text-[9px] text-white sm:text-justify sm:leading-loose 2xl:w-[80%] xl:w-[90%] lg:w-[95%] w-full">
                                                “ {director.message} ”
                                            </div>
                                            <h1 className="text-white w-full sm:text-end 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-xl text-sm font-semibold 2xl:mt-20 xl:mt-10 md:mt-5 sm:mt-2 mt-[2px]">{director.name}</h1>
                                            <h3 className="text-white w-full sm:text-end 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-[10px] md:font-semibold xl:mt-5 sm:mt-2 mt-[2px]">{director.role}</h3>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section id="director-message-original" className="bg-white">
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
                    className="h-full overflow-hidden bg-[#5b4e39]"
                >
                    {executiveDirectors.map((director, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className="w-full bg-contain bg-center"
                                style={{
                                    backgroundImage: `url(${director.bg})`,
                                    aspectRatio: "16/6",
                                }}
                            >
                                <div className="bg-transparent w-full h-full flex items-center">
                                    <div className={`sm:w-[50%] w-[60%] ${director.id === 2 ? "hidden" : ""} py-10 flex items-center`}>
                                        <motion.div className="sm:w-[90%] w-[98%] ml-auto flex flex-col items-end justify-center">
                                            <div className="2xl:text-3xl xl:text-2xl md:text-xl sm:text-[12px] text-[9px] text-white sm:text-justify sm:leading-loose 2xl:w-[80%] xl:w-[90%] lg:w-[95%] w-full">
                                                “ {director.message} ”
                                            </div>
                                            <h1 className="text-white w-full text-end 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-xl text-sm font-semibold 2xl:mt-20 xl:mt-10 md:mt-5 sm:mt-2 mt-[2px]">{director.name}</h1>
                                            <h3 className="text-white w-full text-end 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-[10px] md:font-semibold xl:mt-5 sm:mt-2 mt-[2px]">{director.role}</h3>
                                        </motion.div>
                                    </div>
                                    <div className={`sm:w-[50%] w-[60%] ml-auto ${director.id === 1 ? "hidden" : ""} py-10 flex items-center`}>
                                        <motion.div className="sm:w-[90%] w-[98%] mr-auto flex flex-col items-start justify-center">
                                            <div className="2xl:text-3xl xl:text-2xl md:text-xl sm:text-[12px] text-[9px] text-white sm:text-justify sm:leading-loose 2xl:w-[80%] xl:w-[90%] lg:w-[95%] w-full">
                                                “ {director.message} ”
                                            </div>
                                            <h1 className="text-white w-full sm:text-end 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-xl text-sm font-semibold 2xl:mt-20 xl:mt-10 md:mt-5 sm:mt-2 mt-[2px]">{director.name}</h1>
                                            <h3 className="text-white w-full sm:text-end 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-[10px] md:font-semibold xl:mt-5 sm:mt-2 mt-[2px]">{director.role}</h3>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
            */}
        </>
    );
}
