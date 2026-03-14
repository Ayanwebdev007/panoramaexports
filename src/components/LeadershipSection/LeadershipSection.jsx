import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoEnterOutline } from "react-icons/io5";
import './LeadershipSection.css';

import RajanPng from "../../assets/Founders/rajan.webp";
import NavinPng from "../../assets/Founders/navin.webp";
import ShivaanPng from "../../assets/Founders/shivaan.webp";
import SidharthPng from "../../assets/Founders/Sidharth.webp";
import AmitPng from "../../assets/AMIT FINAL.jpeg";
import KritiPng from "../../assets/Gemini_Generated_Image_jtuumnjtuumnjtuu.png";
import AprajitaPng from "../../assets/Aparajita.png";

const leaders = [
    {
        id: 1,
        name: "RAJAN SAHNI",
        role: "DIRECTOR",
        image: RajanPng,
        bgPos: "85% 5%",
        bgSize: "350%"
    },
    {
        id: 2,
        name: "NAVIN SAHNI",
        role: "DIRECTOR",
        image: NavinPng,
        bgPos: "15% 5%",
        bgSize: "350%"
    },
    {
        id: 3,
        name: "SHIVAAN SAHNI",
        role: "EXECUTIVE DIRECTOR",
        image: ShivaanPng,
        bgPos: "82% 3%",
        bgSize: "350%"
    },
    {
        id: 4,
        name: "SIDHARTH SAHNI",
        role: "EXECUTIVE DIRECTOR",
        image: SidharthPng,
        bgPos: "18% 3%",
        bgSize: "350%"
    },
    {
        id: 5,
        name: "AMIT SARAFF",
        role: "CEO",
        image: AmitPng,
        bgPos: "center 20%",
        bgSize: "120%"
    },
    {
        id: 7,
        name: "APRAJITA VERMA",
        role: "VICE PRESIDENT",
        image: AprajitaPng,
        bgPos: "center 25%",
        bgSize: "160%"
    },
    {
        id: 6,
        name: "KRITI TEWARY",
        role: "Lead - Sustainability",
        image: KritiPng,
        bgPos: "center 35%",
        bgSize: "120%"
    }
];

const LeadershipSection = () => {
    return (
        <section className="leadership-outer-container">
            {/* Header Section - Matches 'People' section style */}
            <div className="leadership-header-container w-[90%] mx-auto px-2 sm:px-6 md:px-10 lg:px-20 mb-12">
                <div className="flex flex-row items-center justify-between mb-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 pr-4"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-[#01276a] mb-1 sm:mb-4">
                            Leadership
                        </h2>
                        <p className="text-[10px] sm:text-sm md:text-lg text-gray-600 max-w-2xl leading-relaxed font-normal mt-1 sm:mt-0">
                            Visionary leadership that inspires innovation, nurtures talent, and drives Panorama toward new horizons of global excellence.
                        </p>
                    </motion.div>

                    <div className="flex items-center justify-end shrink-0">
                        <Link to="/vision-values#leadership">
                            <button className="my-4 group inline-flex items-center hover:text-red-600 font-semibold md:text-lg sm:text-sm text-[12px] text-[#01276a]">
                                Visit Leadership
                                <IoEnterOutline className="h-4 w-4 md:h-6 md:w-6 mx-1 md:mx-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Grid Section with Mesh Gradient Background */}
            <div className="leadership-grid-bg relative overflow-hidden">
                <div className="leadership-container max-w-[1400px] mx-auto px-6 py-16 md:py-24 relative z-10">
                    <div className="leadership-grid">
                        {leaders.map((leader, index) => (
                            <motion.div
                                key={leader.id}
                                className="leadership-glass-card group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <div className="glass-card-inner">
                                    {/* Circle Image Wrapper */}
                                    <div className="leader-circle-wrapper flex items-center justify-center overflow-hidden">
                                        <div
                                            className="leader-circle-image-bg w-full h-full grayscale transition-all duration-500 group-hover:grayscale-0"
                                            style={{
                                                backgroundImage: `url(${leader.image})`,
                                                backgroundPosition: leader.bgPos,
                                                backgroundSize: leader.bgSize,
                                                backgroundRepeat: 'no-repeat'
                                            }}
                                        />
                                    </div>

                                    {/* Name and Designation */}
                                    <div className="leader-details">
                                        <h3 className="leader-name">
                                            {leader.name}
                                        </h3>
                                        <p className="leader-role">
                                            {leader.role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadershipSection;
