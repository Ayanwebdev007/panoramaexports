import React from "react";
import { motion } from "framer-motion";
import Milestones from "./Milestones";
import TimelineNav from "./TimelineNav";
import FabricTexture from "../../assets/backgrounds/fabric-texture.webp";

export default function OurJourney() {
    return (
        <div className="bg-white min-h-screen pt-12 font-outfit">
            {/* Hero Section */}
            <section className="relative bg-[#F9F6F1] py-16 md:py-28 overflow-hidden">
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
                        <p className="max-w-[750px] mx-auto text-gray-600 text-base md:text-xl font-light leading-relaxed tracking-wide">
                            Since 1973, Panorama Exports has evolved from a small workshop into a global powerhouse of garment manufacturing. This is the story of our growth, our innovations, and our commitment to excellence.
                        </p>
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
                            className="text-2xl md:text-4xl font-light text-[#AD1E1E] mb-6 tracking-[0.1em]"
                        >
                            THE JOURNEY OF A THOUSAND STITCHES BEGINS WITH A SINGLE THREAD.
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg font-light max-w-[750px] mx-auto leading-relaxed">
                            Today, we stand at the intersection of heritage and high technology, continuing to craft garments that represent the best of global fashion. Our journey continues with every season, every collection, and every partnership.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
