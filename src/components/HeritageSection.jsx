import React, { useState } from "react";
import { motion } from "framer-motion";

// Selecting 5 premium images from assets
import img1 from "../assets/Heritage, Redefined/Heritage, Redefined/1.webp";
import img2 from "../assets/Heritage, Redefined/Heritage, Redefined/2.webp";
import img3 from "../assets/Heritage, Redefined/Heritage, Redefined/3.webp";
import img4 from "../assets/Heritage, Redefined/Heritage, Redefined/4.webp";
import img5 from "../assets/Heritage, Redefined/Heritage, Redefined/5.webp";

const HeritageSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const images = [img1, img2, img5, img3, img4];

    // Ultra-smooth spring variants
    const itemVariants = (index) => {
        const offsetMultiplier = (2 - index); 
        
        return {
            stacked: {
                opacity: 0.8,
                scale: (0.85 - (Math.abs(index - 2) * 0.05)) * 0.95,
                x: `${(2 - index) * 105}%`, 
                rotate: (index - 2) * 3,
                transition: {
                    type: "spring",
                    stiffness: 30,
                    damping: 15,
                    mass: 1
                }
            },
            spread: {
                opacity: 1,
                scale: 1,
                x: 0,
                rotate: 0,
                transition: {
                    type: "spring",
                    stiffness: 45,
                    damping: 20,
                    mass: 1,
                    delay: index * 0.05
                }
            }
        };
    };

    return (
        <section className="bg-[#F9F6F1] pt-4 pb-32 px-6 sm:px-10 lg:px-20 overflow-hidden">
            <motion.div 
                className="max-w-[1750px] mx-auto"
                viewport={{ once: false, amount: 0.15 }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center mb-24"
                >
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-outfit text-[#AD1E1E] tracking-[0.20em] uppercase font-light">
                        Heritage, redefined through precision
                    </h2>
                    <div className="w-16 h-[1px] bg-[#AD1E1E] mx-auto mt-8 opacity-30"></div>
                </motion.div>
                
                <motion.div
                className="flex flex-col md:flex-row h-[250px] md:h-[320px] gap-4 items-center justify-center"
                    initial="stacked"
                    whileInView="spread"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants(index)}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            data-active={hoveredIndex === index}
                            className="heritage-card relative h-full overflow-hidden cursor-pointer rounded-sm border border-[#AD1E1E]/5 transition-[flex,transform] duration-700 ease-out shadow-sm"
                            style={{
                                minWidth: "0px",
                                willChange: "transform",
                                backfaceVisibility: "hidden"
                            }}
                        >
                        <div className="relative w-full h-full overflow-hidden">
                            <img
                                src={image}
                                alt={`Heritage ${index + 1}`}
                                decoding="async"
                                className="w-full h-full object-cover"
                                style={{ 
                                    willChange: 'transform',
                                    transform: 'translateZ(0)',
                                    objectPosition: 
                                        index === 0 || index === 1 ? "25% 15%" : 
                                        index === 2 ? "center 70%" : 
                                        "center 15%" 
                                }}
                            />
                        </div>
                            
                            {/* Overlay that vanishes when hovered */}
                            <div 
                                className={`absolute inset-0 bg-black/5 transition-opacity duration-700 ${hoveredIndex === index ? 'opacity-0' : 'opacity-20'}`}
                            ></div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            
            <style jsx>{`
                .heritage-card {
                    flex: 1;
                }
                .heritage-card[data-active="true"] {
                    flex: 2.5;
                }
            `}</style>
        </section>
    );
};

export default HeritageSection;
