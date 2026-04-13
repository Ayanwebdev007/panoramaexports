import React, { useState } from "react";
import { motion } from "framer-motion";

// Selecting 5 premium images from assets
import img1 from "../assets/HeroImages/WearYourStory.webp";
import img2 from "../assets/HeroImages/Elegance.webp";
import img3 from "../assets/HeroImages/WarmAlcove.webp";
import img4 from "../assets/HeroImages/ThreadsLegacy.webp";
import img5 from "../assets/HeroImages/AheadCurve.webp";

const HeritageSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const images = [img1, img2, img3, img4, img5];

    // Ultra-smooth spring variants
    const itemVariants = (index) => {
        const offsetMultiplier = (2 - index); 
        
        return {
            stacked: {
                opacity: 0.8,
                scale: 0.85 - (Math.abs(index - 2) * 0.05),
                x: `${offsetMultiplier * 105}%`, // Pull towards the center
                z: -Math.abs(index - 2) * 50,
                rotate: (index - 2) * 3,
                transition: {
                    type: "spring",
                    stiffness: 40,
                    damping: 12,
                    mass: 1.2
                }
            },
            spread: {
                opacity: 1,
                scale: 1,
                x: 0,
                z: 0,
                rotate: 0,
                transition: {
                    type: "spring",
                    stiffness: 55,
                    damping: 18,
                    mass: 1,
                    delay: index * 0.08 // Staggered reveal for extraordinary smoothness
                }
            }
        };
    };

    return (
        <section className="bg-[#F9F6F1] pt-4 pb-32 px-6 sm:px-10 lg:px-20 overflow-hidden">
            <motion.div 
                className="max-w-[1750px] mx-auto"
                viewport={{ once: true, amount: 0.15 }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center mb-24"
                >
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-outfit text-[#AD1E1E] tracking-[0.20em] uppercase font-light">
                        Heritage, redefined through precision
                    </h2>
                    <div className="w-16 h-[1px] bg-[#AD1E1E] mx-auto mt-8 opacity-30"></div>
                </motion.div>

                {/* The "Deck" Container - Spreads automatically when in view */}
                <motion.div
                    className="flex flex-col md:flex-row h-[250px] md:h-[320px] gap-4 items-center justify-center perspective-2000"
                    style={{ transformStyle: "preserve-3d" }}
                    initial="stacked"
                    whileInView="spread"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants(index)}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className="relative h-full overflow-hidden cursor-pointer rounded-sm border border-[#AD1E1E]/5 transition-all duration-700 ease-out shadow-sm"
                            style={{
                                flex: hoveredIndex === index ? 2.5 : 1,
                                minWidth: "0px",
                                willChange: "flex-grow, transform",
                                backfaceVisibility: "hidden"
                            }}
                        >
                            <motion.img
                                src={image}
                                alt={`Heritage ${index + 1}`}
                                decoding="async"
                                className="w-full h-full object-cover"
                                initial={false}
                                animate={{
                                    scale: hoveredIndex === index ? 1.08 : 1,
                                }}
                                transition={{ duration: 0.8, ease: "circOut" }}
                                style={{ willChange: "transform" }}
                            />
                            
                            {/* Overlay that vanishes when hovered */}
                            <div 
                                className={`absolute inset-0 bg-black/5 transition-opacity duration-700 ${hoveredIndex === index ? 'opacity-0' : 'opacity-20'}`}
                            ></div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            
            <style jsx>{`
                .perspective-2000 {
                    perspective: 2000px;
                }
            `}</style>
        </section>
    );
};

export default HeritageSection;
