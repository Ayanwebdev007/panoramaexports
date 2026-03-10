import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Img1 from "../../assets/OurStory/coreValues/CraftedExcellence.webp";
import Img2 from "../../assets/OurStory/coreValues/OneTeamOneDream.webp";
import Img3 from "../../assets/OurStory/coreValues/InnovatingPurpose.webp";
import Img4 from "../../assets/OurStory/coreValues/PlanetFirstProcess.webp";
import Img5 from "../../assets/OurStory/coreValues/ProudlyMadeIndia.webp";

//hello


const CoreValues = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // CoreValues data
    const values = [
        {
            title: "Crafted with Excellence",
            description:
                "A blend of work & play-allowing passion & precision to coexist -where artisan skill meets advanced technology. Every piece is made with unmatched care, pride, and creativity. ",
            img: Img1,
        },
        {
            title: "One Team, One Dream",
            description:
                "Designers, artisans, and technologists working in perfect sync to bring visions to life.",
            img: Img2,
        },
        {
            title: "Innovating with Purpose",
            description:
                "Honoring heritage while embracing the future—creating clothing that resonates, globally.",
            img: Img3,
        },
        {
            title: "Planet-First Process",
            description:
                "From mindful materials to low-impact methods, sustainability leads every decision. Our sensitivity to the environment is at the heart of our process  ",
            img: Img4,
        },
        {
            title: "Proudly Made in India ",
            description:
                "Every garment tells a story of culture, soul, and craftsmanship rooted in India—designed to connect with the world.",
            img: Img5,
        },
    ];

    return (
        <>
            <div className="md:py-10 sm:py-5 py-2">
                <h2 className="w-[90%] mx-auto py-5 px-6 lg:px-20 text-3xl md:pb-16 pb-5 sm:text-4xl md:text-5xl text-blue-950 tracking-widest text-center font-semibold font-outfit">
                    CORE VALUE
                </h2>

                <div className="w-[90%] md:w-[85%] lg:w-[90%] mx-auto py-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:gap-10 xl:gap-8 lg:gap-6 md:gap-8 gap-4 sm:gap-6 relative z-10">
                    {values.map((value, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ y: isMobile ? 20 : 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: isMobile ? 0.4 : 0.6,
                                    delay: isMobile ? (index % 2) * 0.1 : (index % 2) * 0.15,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: false, amount: isMobile ? 0.05 : 0.1, margin: isMobile ? "0px 0px -30px 0px" : "0px 0px -50px 0px" }}
                                className={`border border-amber-700/30 shadow-[0_0_15px_rgba(171,151,119,0.3)] rounded-sm overflow-hidden flex flex-col bg-white ${isMobile ? 'transform-gpu' : ''}`}
                            >
                                <div className="2xl:border-[20px] xl:border-[16px] lg:border-[12px] md:border-[15px] border-[10px] border-white h-full w-full">
                                    <div
                                        className={``}

                                    >
                                        <img src={value.img} alt="" className="image-contain" />
                                    </div>
                                    <div className="p-3 sm:p-4 flex flex-col flex-1">
                                        <h3 className="h-8 sm:h-10 md:h-12 lg:h-12 xl:h-14 2xl:h-16 text-[11px] sm:text-sm md:text-md lg:text-sm xl:text-lg 2xl:text-xl text-blue-900 font-semibold mb-1 sm:mb-2 font-outfit leading-tight">
                                            {value.title}
                                        </h3>
                                        <p className="text-[10px] sm:text-[12px] lg:text-[10px] xl:text-[12px] 2xl:text-sm text-gray-600 font-outfit leading-snug">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default CoreValues;
