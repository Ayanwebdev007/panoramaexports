import React from "react";
import { motion } from "framer-motion";

// Importing 12 images from assets
import img1 from "../assets/HeroImages/Elegance.webp";
import img2 from "../assets/CraftingTomorrow/01.webp";
import img3 from "../assets/CraftingTomorrow/2.webp";
import img4 from "../assets/CraftingTomorrow/3.webp";
import img5 from "../assets/CraftingTomorrow/4.webp";
import img6 from "../assets/Responsible/img1.webp";
import img7 from "../assets/Responsible/img2.webp";
import img8 from "../assets/Responsible/img3.webp";
import img9 from "../assets/Responsible/pic1.webp";
import img10 from "../assets/Responsible/pic2.webp";
import img11 from "../assets/Responsible/pic3.webp";
import img12 from "../assets/Community/csr.webp";

const MasonrySection = () => {
    // Balanced heights to ensure columns align at top and bottom (Target Total: 2400px including gaps)
    return (
        <section className="bg-[#F9F6F1] py-24 px-6 sm:px-10 lg:px-20 font-serif overflow-hidden">
            <div className="max-w-[1750px] mx-auto flex flex-col md:flex-row gap-8">
                
                {/* Column 1: Items sum to 2304px + 3 gaps (96px) = 2400px */}
                <div className="flex-1 flex flex-col gap-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="h-[900px]">
                        <img src={img1} alt="Excellence 1" className="w-full h-full object-cover rounded-sm shadow-md hover:scale-[1.02] transition-transform duration-500" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="h-[300px]">
                        <img src={img5} alt="Excellence 2" className="w-full h-full object-cover rounded-sm shadow-md hover:scale-[1.02] transition-transform duration-500" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="h-[500px]">
                        <img src={img8} alt="Excellence 3" className="w-full h-full object-cover rounded-sm shadow-md hover:scale-[1.02] transition-transform duration-500" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-[#EFE9E1] p-12 flex flex-col justify-between h-[604px] shadow-sm border border-[#E5DFD5]">
                        <div>
                            <p className="italic text-xl mb-6 text-[#1a1a1a] opacity-80 font-light leading-relaxed">
                                “30 minutes behind the scenes of our craftsmanship; a return to the roots of design and an invitation to experience timeless elegance.”
                            </p>
                            <h3 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight tracking-tighter uppercase whitespace-pre-line">
                                The Art {"\n"} of Living
                            </h3>
                        </div>
                        <div className="flex items-center gap-5 mt-10 group cursor-pointer">
                            <span className="text-sm font-black tracking-[0.2em] uppercase text-[#1a1a1a]">Podcast</span>
                            <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-1">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Column 2: Items sum to 2272px + 4 gaps (128px) = 2400px */}
                <div className="flex-1 flex flex-col gap-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-[#EFE9E1] p-12 flex flex-col justify-between h-[450px] shadow-sm border border-[#E5DFD5]">
                        <div>
                            <p className="italic text-xl mb-6 text-[#1a1a1a] opacity-80 font-light leading-relaxed">
                                “Exploring the legacy and the meticulous vision that defines the Panorama journey.”
                            </p>
                            <h3 className="text-4xl lg:text-6xl font-bold text-[#1a1a1a] leading-[0.9] tracking-tighter uppercase whitespace-pre-line">
                                The Story {"\n"} of Panorama
                            </h3>
                        </div>
                        <div className="flex items-center gap-5 mt-10 group cursor-pointer">
                            <span className="text-sm font-black tracking-[0.2em] uppercase text-[#1a1a1a]">Podcast</span>
                            <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-1">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="h-[300px]">
                        <img src={img2} alt="Excellence 4" className="w-full h-full object-cover rounded-sm shadow-md hover:scale-[1.02] transition-transform duration-500" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="h-[550px]">
                        <img src={img6} alt="Excellence 5" className="w-full h-full object-cover rounded-sm shadow-md hover:scale-[1.02] transition-transform duration-500" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="h-[650px]">
                        <img src={img9} alt="Excellence 6" className="w-full h-full object-cover rounded-sm shadow-md hover:scale-[1.02] transition-transform duration-500" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="h-[322px]">
                        <img src={img10} alt="Excellence 7" className="w-full h-full object-cover rounded-sm shadow-md hover:scale-[1.02] transition-transform duration-500" />
                    </motion.div>
                </div>

                {/* Column 3: Items sum to 2272px + 4 gaps (128px) = 2400px */}
                <div className="flex-1 flex flex-col gap-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="h-[350px]">
                        <img src={img3} alt="Excellence 8" className="w-full h-full object-cover rounded-sm shadow-md hover:scale-[1.02] transition-transform duration-500" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="h-[600px]">
                        <img src={img4} alt="Excellence 9" className="w-full h-full object-cover rounded-sm shadow-md hover:scale-[1.02] transition-transform duration-500" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="h-[420px]">
                        <img src={img7} alt="Excellence 10" className="w-full h-full object-cover rounded-sm shadow-md hover:scale-[1.02] transition-transform duration-500" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="h-[580px]">
                        <img src={img11} alt="Excellence 11" className="w-full h-full object-cover rounded-sm shadow-md hover:scale-[1.02] transition-transform duration-500" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="h-[322px]">
                        <img src={img12} alt="Excellence 12" className="w-full h-full object-cover rounded-sm shadow-md hover:scale-[1.02] transition-transform duration-500" />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default MasonrySection;
