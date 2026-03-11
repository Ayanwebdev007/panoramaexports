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
import AmitPng from "../../assets/leadership 5.png";
import KritiPng from "../../assets/Gemini_Generated_Image_jtuumnjtuumnjtuu.png";

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
            <div
                ref={ref}
                className="w-full bg-contain bg-center flex flex-col items-center justify-end aspect-[16/7] relative"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                {/* Static Background Gradient - separated from animation to prevent tearing */}
                <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-black/90 via-black/80 via-black/70 to-transparent pointer-events-none z-0"></div>

                <motion.div
                    className="text-white lg:px-[10%] md:px-[8%] sm:px-[6%] px-[4%] lg:pb-[4%] md:pb-5 sm:pb-4 pb-2 pt-[10%] relative z-10 w-full"
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2, margin: "0px 0px -50px 0px" }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    <h1 className="text-base sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-1 sm:mb-0 font-outfit uppercase tracking-wider">
                        Woven into Every Thread
                    </h1>
                    <div className="text-[11px] sm:text-sm md:text-md lg:text-xl xl:text-2xl lg:mt-4 sm:mt-2 mt-1 w-[100%] text-justify sm:text-left leading-snug sm:font-extralight font-light font-outfit">
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

            {/* Vision mission Sections */}
            <section id="vision-values" ref={visionRef} className="bg-white">
                <div className="bg-white w-full sm:py-16 py-2 flex flex-col items-center">
                    {/* Mission and Vision blocks */}
                    <div className="w-full sm:my-5 my-2 flex flex-col">
                        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
                            <div className="flex sm:justify-end justify-center items-center md:w-[40%] sm:w-[30%] w-full">
                                <div className="">
                                    <h2 className="text-lg sm:text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-black font-outfit">
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
                                        <h3 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-md font-bold text-black font-outfit uppercase tracking-tight">
                                            Mission
                                        </h3>
                                        <p className="text-[10px] sm:text-[12px] md:text-sm xl:text-md 2xl:text-lg text-gray-700 2xl:max-w-xl lg:max-w-md max-w-xs md:mt-1 mt-2px font-outfit">
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
                                    <h3 className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-md font-bold text-black font-outfit uppercase tracking-tight">
                                        Vision
                                    </h3>
                                    <p className="text-[10px] sm:text-[12px] md:text-sm xl:text-md 2xl:text-lg text-gray-700 2xl:max-w-xl lg:max-w-md max-w-xs md:mt-1 mt-2px font-outfit">
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
            {/* New Leadership Section */}
            <section id="leadership" ref={leadershipRef} className="bg-[#fcfbf9] py-24">
                <div className="w-[90%] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2, margin: "0px 0px -50px 0px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <h2 className="text-2xl md:text-4xl font-light text-[#01276a] font-outfit tracking-[0.2em] mb-4 uppercase">
                            Leadership
                        </h2>
                        <div className="w-24 h-0.5 bg-[#01276a] mx-auto opacity-30"></div>
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
                            className="flex flex-col bg-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] rounded-sm overflow-hidden group cursor-pointer border border-gray-100 w-[calc(50%-12px)] lg:w-[calc(25%-30px)] max-w-[320px]"
                            onClick={() => setSelectedLeader(leader)}
                        >
                            {/* Card Image Section */}
                            <div className="aspect-square overflow-hidden relative">
                                <img
                                    src={leader.img}
                                    alt={leader.name}
                                    className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                                    style={{
                                        objectPosition: leader.objectPosition || "center",
                                        filter: "grayscale(100%)",
                                    }}
                                />
                                <div className="absolute inset-0 bg-[#01276a]/0 group-hover:bg-[#01276a]/10 transition-colors duration-500"></div>

                                {/* Overlay Reveal */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Footer Section */}
                            <div className="p-3 sm:p-5 text-center flex flex-col justify-between flex-grow bg-white transition-colors duration-500 group-hover:bg-[#01276a]">
                                <div className="space-y-1">
                                    <h3 className="text-[#01276a] font-bold text-sm sm:text-xl tracking-tighter transition-colors duration-500 group-hover:text-white font-outfit">
                                        {leader.name}
                                    </h3>
                                    <p className="text-[#dcb65b] text-[10px] sm:text-xs font-semibold tracking-wider transition-colors duration-500 font-outfit">
                                        {leader.role}
                                    </p>
                                </div>
                                <div className="mt-2">
                                    <span className="inline-block text-[#01276a] text-[8px] sm:text-[10px] uppercase font-bold tracking-widest border-b border-[#01276a]/20 pb-1 group-hover:text-white group-hover:border-white/40 transition-all duration-500 font-outfit">
                                        Read Message
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Enhanced Modal / Popup Implementation */}
                {selectedLeader && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-[#01276a]/95 backdrop-blur-md" onClick={() => setSelectedLeader(null)}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-white rounded-sm overflow-hidden max-w-5xl w-full flex flex-col lg:flex-row relative shadow-2xl max-h-[90vh] lg:max-h-[85vh] overflow-y-auto lg:overflow-y-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-3 right-3 sm:top-6 sm:right-6 z-20 bg-[#01276a] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-transform hover:rotate-90 duration-300 shadow-lg"
                                onClick={() => setSelectedLeader(null)}
                            >
                                <span className="text-lg sm:text-xl">✕</span>
                            </button>

                            <div className="w-full lg:w-[45%] h-[250px] sm:h-auto lg:aspect-auto overflow-hidden bg-gray-100 flex-shrink-0">
                                <motion.img
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1.2 }}
                                    src={selectedLeader.img}
                                    alt={selectedLeader.name}
                                    className="w-full h-full object-cover"
                                    style={{ objectPosition: selectedLeader.modalPosition || selectedLeader.objectPosition || "center" }}
                                />
                            </div>

                            <div className="w-full lg:w-[55%] p-6 sm:p-10 lg:p-16 flex flex-col justify-center bg-white relative">

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-[#01276a] font-outfit tracking-tight">{selectedLeader.name}</h2>
                                    <div className="flex items-center gap-3 sm:gap-4 mt-1 sm:mt-2 mb-4 sm:mb-10">
                                        <div className="h-px w-8 sm:w-12 bg-[#dcb65b]"></div>
                                        <p className="text-[#dcb65b] font-semibold tracking-wider text-xs sm:text-base font-outfit">{selectedLeader.role}</p>
                                    </div>

                                    <div className="relative">
                                        <div className="text-gray-600 leading-relaxed sm:leading-[1.8] text-sm sm:text-lg md:text-xl font-normal text-justify font-outfit">
                                            {selectedLeader.message}
                                        </div>
                                    </div>

                                    <div className="mt-6 sm:mt-12 pt-4 sm:pt-8 border-t border-gray-100 flex items-center justify-between">
                                        <div className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[8px] sm:text-[10px] font-bold text-[#01276a]/40 font-outfit">
                                            Panorama Executive Leadership
                                        </div>
                                        <div className="hidden sm:block w-12 h-px bg-[#01276a]/20"></div>
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
