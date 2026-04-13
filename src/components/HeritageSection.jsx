import React, { useState } from "react";
import { motion } from "framer-motion";

// Selecting 5 premium images from assets
import img1 from "../assets/Wear Your Story.JPG";
import img2 from "../assets/HeroImages/Elegance.webp";
import img3 from "../assets/The warm Alcovec.jpg";
import img4 from "../assets/Threads of Legacy.JPG";
import img5 from "../assets/Ahead of Curve.JPG";

const HeritageSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const images = [img1, img2, img3, img4, img5];

    // Animation variants for the "bloom from center" effect
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = (index) => {
        // Calculate offsets from the center (index 2 is the middle)
        const offset = (index - 2) * 100; // rough percentage offset
        return {
            hidden: { 
                opacity: 0, 
                scale: 0, 
                x: `${-offset}%`, // Start at center (counter-act their eventual position)
                z: -100
            },
            visible: { 
                opacity: 1, 
                scale: 1, 
                x: 0,
                z: 0,
                transition: { 
                    type: "spring", 
                    stiffness: 70, 
                    damping: 15,
                    duration: 1.2
                }
            }
        };
    };

    return (
        <section className="bg-[#F9F6F1] py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
            <div className="max-w-[1750px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a1a1a] tracking-tight">
                        Heritage, redefined through precision
                    </h2>
                    <div className="w-24 h-1 bg-[#1a1a1a] mx-auto mt-6 opacity-20"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row h-[250px] md:h-[320px] gap-4 items-center justify-center perspective-1000"
                >
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants(index)}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className="relative h-full overflow-hidden cursor-pointer rounded-sm shadow-xl transition-all duration-700 ease-out"
                            style={{
                                flex: hoveredIndex === index ? 2.5 : 1,
                                minWidth: "0px",
                            }}
                        >
                            <motion.img
                                src={image}
                                alt={`Heritage ${index + 1}`}
                                className="w-full h-full object-cover"
                                transition={{ duration: 0.7 }}
                                animate={{
                                    scale: hoveredIndex === index ? 1.05 : 1,
                                }}
                            />
                            
                            {/* Subtle Overlay */}
                            <div 
                                className={`absolute inset-0 bg-black/10 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-0' : 'opacity-40'}`}
                            ></div>

                            {/* Optional: Line or numbering from Inditex style */}
                            <div className="absolute bottom-10 left-10 text-white font-serif text-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <span className="text-sm font-sans block mb-1 opacity-60">0{index + 1}</span>
                                <span className="tracking-widest uppercase text-xs font-sans font-bold">Panorama Heritage</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            
            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </section>
    );
};

export default HeritageSection;
