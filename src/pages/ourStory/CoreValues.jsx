import React from "react";
import { motion } from "framer-motion";

import Img1 from "../../assets/OurStory/coreValues/CraftedExcellence.webp";
import Img2 from "../../assets/OurStory/coreValues/OneTeamOneDream.webp";
import Img3 from "../../assets/OurStory/coreValues/InnovatingPurpose.webp";
import Img4 from "../../assets/OurStory/coreValues/PlanetFirstProcess.webp";
import Img5 from "../../assets/OurStory/coreValues/ProudlyMadeIndia.webp";

const CoreValues = () => {
    const values = [
        {
            title: "Crafted with Excellence",
            description:
                "A blend of work & play—allowing passion & precision to coexist. Every piece is made with unmatched care, pride, and creativity.",
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
                "From mindful materials to low-impact methods, sustainability leads every decision.",
            img: Img4,
        },
        {
            title: "Proudly Made in India",
            description:
                "Every garment tells a story of culture, soul, and craftsmanship rooted in India.",
            img: Img5,
        },
    ];

    return (
        <div className="max-w-[1700px] mx-auto px-6 lg:px-20 font-outfit">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="mb-8 md:mb-12 text-center"
            >
                <h2 className="text-[#AD1E1E] text-xl md:text-3xl font-light tracking-[0.2em] uppercase mb-6">
                    Our Core Values
                </h2>
                <div className="w-24 h-[1px] bg-[#AD1E1E] mx-auto opacity-30"></div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                {values.map((value, index) => {
                    return (
                        <motion.div
                            key={index}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: (index % 5) * 0.1,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                            className="flex flex-col bg-white border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-sm overflow-hidden h-full"
                        >
                            <div className="w-full bg-white p-3 md:p-5 flex items-center justify-center overflow-hidden group">
                                <img 
                                    src={value.img} 
                                    alt={value.title} 
                                    className="w-full h-auto object-contain transition-transform duration-[2s] group-hover:scale-105" 
                                />
                            </div>
                            <div className="flex flex-col flex-1 p-4 sm:p-5 text-center border-t border-gray-50 bg-white">
                                <h3 className="text-[12px] sm:text-sm text-gray-900 font-medium mb-2 uppercase tracking-wider h-auto md:h-10 flex items-center justify-center">
                                    {value.title}
                                </h3>
                                <p className="text-[10px] sm:text-xs text-gray-500 font-light leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default CoreValues;
