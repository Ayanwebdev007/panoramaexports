import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoEnterOutline } from "react-icons/io5";
import './LeadershipSection.css';

import RajanPng from "../../assets/Founders/rajan.webp";
import NavinPng from "../../assets/Founders/navin.webp";
import ShivaanPng from "../../assets/Founders/shivaan.webp";
import SidharthPng from "../../assets/Founders/Sidharth.webp";

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
    }
];

const LeadershipSection = () => {
    return (
        <section className="leadership-outer-container">
            {/* Header Section - Matches 'People' section style */}
            <div className="leadership-header-container w-[90%] mx-auto px-2 sm:px-6 md:px-10 lg:px-20 mb-12 lg:mt-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <h2 className="text-4xl md:text-5xl font-light text-[#01276a] mb-4">
                            Leadership
                        </h2>
                        <p className="text-sm md:text-lg text-gray-600 max-w-2xl leading-relaxed font-normal">
                            Guided by visionaries who blend tradition with innovation, our leadership team steer Panorama towards
                            global excellence with a steadfast commitment to quality and purpose.
                        </p>
                    </motion.div>

                    <div className="flex items-center justify-end">
                        <Link to="/vision-values#leadership">
                            <button className="my-4 group inline-flex items-center hover:text-red-600 font-semibold md:text-lg sm:text-sm text-[12px] text-[#01276a]">
                                Visit Leadership
                                <IoEnterOutline className="h-6 w-6 mx-2 group-hover:translate-x-1 transition-transform duration-300" />
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
