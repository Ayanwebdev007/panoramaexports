import React from "react";
import { motion } from "framer-motion";
import Milestones from "./Milestones";
import TimelineNav from "./TimelineNav";
import FabricTexture from "../../assets/backgrounds/fabric-texture.webp";
import MilestoneFirstImage from "../../assets/MILESTONE FIRST IMAGE.webp";

export default function OurJourney() {
    return (
        <div className="bg-white min-h-screen pt-20 lg:pt-24 font-outfit">
            {/* Hero Section */}
            <section className="relative bg-[#F9F6F1] pt-16 md:pt-28 pb-0 overflow-hidden">
                {/* Subtle Fabric Background for Texture */}
                <div
                    className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
                    style={{
                        backgroundImage: `url(${FabricTexture})`,
                        backgroundSize: '400px',
                        backgroundRepeat: 'repeat'
                    }}
                ></div>

                <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <h1 
                            className="text-3xl md:text-5xl lg:text-6xl font-light text-[#AD1E1E] mb-6 tracking-[0.15em] uppercase"
                        >
                            Our Journey
                        </h1>
                        <p className="max-w-[750px] mx-auto text-gray-600 text-base md:text-xl font-light leading-relaxed tracking-wide mb-16">
                            Since 1973, Panorama Exports has evolved from a small workshop into a global powerhouse of garment manufacturing. This is the story of our growth, our innovations, and our commitment to excellence.
                        </p>

                        {/* Featured Journey Hero Image */}
                        <div className="relative w-full max-w-[1400px] mx-auto aspect-[21/10] overflow-hidden shadow-sm group border border-gray-100 bg-white">
                            <img
                                src={MilestoneFirstImage}
                                alt="Panorama Journey Banner"
                                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/5"></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Sticky Chronological Navigation */}
            <TimelineNav />

            {/* Milestones Section */}
            <Milestones />

            {/* Closing Statement */}
            <section className="bg-gray-50 py-16 md:py-28">
                <div className="max-w-[1200px] mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="p-10 md:p-20 bg-white shadow-sm border border-gray-100"
                    >
                        <h2 
                            className="text-2xl md:text-4xl font-light text-[#AD1E1E] tracking-[0.15em] font-outfit uppercase"
                        >
                            OUR JOURNEY CONTINUES......
                        </h2>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
