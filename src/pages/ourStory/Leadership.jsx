import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import RajanPng from "../../assets/Founders/rajan.webp";
import NavinPng from "../../assets/Founders/navin.webp";
import ShivaanPng from "../../assets/Founders/shivaan.webp";
import SidharthPng from "../../assets/Founders/Sidharth.webp";
import AmitPng from "../../assets/AMIT FINAL.jpeg";
import KritiPng from "../../assets/Gemini_Generated_Image_jtuumnjtuumnjtuu.png";
import LeadershipBanner from "../../assets/Legacy/final.webp";
import FabricTexture from "../../assets/backgrounds/fabric-texture.webp";

const directors = [
    {
        id: 1,
        name: "Rajan Sahni",
        role: "Director",
        bg: RajanPng,
        img: RajanPng,
        objectPosition: "80% center",
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
        objectPosition: "10% center",
        modalPosition: "15% center",
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

const seniorManagement = [
    {
        number: "01",
        name: "Kriti",
        role: "General Manager HR & Compliance"
    },
    {
        number: "02",
        name: "Mudita Ahuja",
        role: "VP Design Marketing"
    },
    {
        number: "03",
        name: "Shija Lal",
        role: "AVP Business Development"
    },
    {
        number: "04",
        name: "Suresh Sharma",
        role: "GM Business Development"
    },
    {
        number: "05",
        name: "Vandana Mukhi",
        role: "AGM Merchandising"
    },
    {
        number: "06",
        name: "Janet Kulke",
        role: "Design Manager UK"
    }
];



export default function Leadership() {
    const [selectedLeader, setSelectedLeader] = useState(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div className="bg-white min-h-screen pt-12 font-outfit">
            
            {/* Hero Section */}
            <section className="relative bg-[#F9F6F1] pt-16 md:pt-24 pb-0 overflow-hidden">
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
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-light text-[#AD1E1E] mb-6 tracking-[0.3em] uppercase">
                            Building a Legacy of Excellence
                        </h1>
                        <p className="max-w-[850px] mx-auto text-gray-600 text-base md:text-xl font-light leading-relaxed tracking-wide mb-16">
                            Panorama has built a legacy defined by visionary leadership, enduring values, and a lasting impact on the industry.
                        </p>

                        {/* Side-cut Banner Image Container (styled exactly like vision hero) */}
                        <div className="relative w-full max-w-[1400px] mx-auto aspect-[21/10] overflow-hidden shadow-sm group border border-gray-100 bg-white">
                            <img
                                src={LeadershipBanner}
                                alt="Panorama Leadership Banner"
                                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/5"></div>
                        </div>
                    </motion.div>
                </div>
            </section>



            {/* Description Section */}
            <section className="bg-white pt-10 pb-4 md:pt-12 md:pb-8">
                <div className="max-w-[1000px] mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-6"
                    >
                        <p className="text-gray-600 text-base md:text-lg lg:text-xl font-light leading-relaxed text-justify md:text-center">
                            Leadership at Panorama goes beyond driving results for today. It involves building strong foundations, enabling teams to thrive, and setting benchmarks that influence the future of the industry. Through a progressive and purposeful approach, Panorama delivers sustained performance, meaningful transformation, and lasting value.
                        </p>
                        <div className="w-24 h-[1px] bg-[#AD1E1E] mx-auto opacity-30 mt-8"></div>
                    </motion.div>
                </div>
            </section>

            {/* Executive Board Cards Section */}
            <section className="bg-gray-50/50 pt-10 pb-10 md:pt-12 md:pb-12">
                <div className="w-[90%] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 mb-16 text-center">
                    <h2 className="text-2xl md:text-4xl font-light text-[#AD1E1E] font-outfit tracking-[0.2em] mb-4 uppercase">
                        Our Visionary Leaders
                    </h2>
                    <div className="w-24 h-[1px] bg-[#AD1E1E] mx-auto opacity-30"></div>
                </div>

                <div className="w-[90%] md:w-[85%] mx-auto flex flex-wrap justify-center gap-6 sm:gap-10">
                    {[...directors, ...executiveDirectors].map((leader, index) => (
                        <motion.div
                            key={leader.name + leader.role}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: (index % 2) * 0.1, ease: "easeOut" }}
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
                                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Card Details */}
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

                {/* Leader Message Modal */}
                {selectedLeader && (
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedLeader(null)}
                    >
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
                                    style={{
                                        objectPosition: selectedLeader.modalPosition || selectedLeader.objectPosition || "center"
                                    }}
                                />
                            </div>

                            <div className="w-full lg:w-[55%] p-6 sm:p-10 lg:p-16 flex flex-col justify-center bg-white relative">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-[#AD1E1E] font-outfit tracking-tight">
                                        {selectedLeader.name}
                                    </h2>
                                    <div className="flex items-center gap-3 sm:gap-4 mt-2 mb-6 sm:mb-10">
                                        <div className="h-[1px] w-8 sm:w-12 bg-gray-300"></div>
                                        <p className="text-gray-500 font-light tracking-wider text-xs sm:text-sm font-outfit uppercase">
                                            {selectedLeader.role}
                                        </p>
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

            {/* Senior Management Team Section (styled precisely like reference image) */}
            <section className="bg-white pt-10 pb-20 md:pt-12 md:pb-28 border-t border-gray-100">
                <div className="w-[90%] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 mb-16 text-center font-outfit">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl md:text-4xl font-light text-[#AD1E1E] font-outfit tracking-[0.2em] mb-4 uppercase"
                    >
                        Senior Management Team
                    </motion.h2>
                    <div className="w-24 h-[1px] bg-[#AD1E1E] mx-auto opacity-30"></div>
                </div>

                <div className="max-w-[1200px] mx-auto px-6 md:px-20 font-outfit">

                    <div className="flex flex-col border-t border-gray-100">
                        {seniorManagement.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                className="flex flex-col sm:flex-row sm:items-center py-8 border-b border-gray-100 hover:bg-gray-50/40 transition-all duration-300 px-4 group"
                            >
                                {/* Chronological Identifier (Large, light-gray chronological numbers) */}
                                <div className="text-gray-100 text-4xl sm:text-5xl font-light w-20 flex-shrink-0 mb-2 sm:mb-0 select-none group-hover:text-gray-200 transition-colors duration-300">
                                    {member.number}
                                </div>
                                
                                {/* Full Name */}
                                <div className="flex-grow text-gray-800 text-lg sm:text-2xl font-light tracking-wide mb-2 sm:mb-0 group-hover:text-black transition-colors duration-300">
                                    {member.name}
                                </div>
                                
                                {/* Title (Horizontal alignment on the right, uppercase, widely spaced subtitles in brand red) */}
                                <div className="text-[#AD1E1E] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase font-outfit select-none">
                                    {member.role}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
