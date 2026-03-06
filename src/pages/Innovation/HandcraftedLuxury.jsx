import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import AutoPlayVideo from "../../components/AutoPlayVideo";

import FlipCard from "../../components/flipCard/FlipCard";

import HlImg1 from "../../assets/Innovation/HandcraftedLuxury/1.webp";
import HlImg2 from "../../assets/Innovation/HandcraftedLuxury/2.webp";
import HlImg3 from "../../assets/Innovation/HandcraftedLuxury/03.webp";
import HandcraftedLuxuryvideo from "../../assets/Innovation/HandcraftedLuxury/Hand Crafted Luxury.mp4";

// const Images = [
//     {
//         id: 1,
//         image: HlImg1,
//         title: "Handcrafted",
//     },
//     {
//         id: 2,
//         image: HlImg2,
//         title: "Handcrafted",
//     },
//     {
//         id: 3,
//         image: HlImg3,
//         title: "Handcrafted",
//     },
// ];

const HandcraftedLuxury = () => {
    const location = useLocation();
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });
    return (
        <div className="pt-0 mt-[-40px] md:mt-[-80px]">
            <section
                id=""
                className="w-full bg-blue-950 flex justify-center md:py-20 py-10"
            >
                <div className="w-[80%] bg-white flex">
                    {/* Left Side */}
                    <div className="w-[50%] md:p-10 p-2 flex flex-col justify-center">
                        <h2 className="text-[12px] sm:text-md md:text-xl lg:text-3xl font-light font-outfit text-center text-blue-950">
                            Handcrafted Luxury
                        </h2>
                        <div className="text-[10px] sm:text-[12px] md:text-sm 2xl:text-lg md:mt-3 mt-1 sm:mb-3 text-gray-600 ml-1 font-light font-outfit text-justify">
                            Rooted in tradition, designed for tomorrow. Each
                            piece reflects generational wisdom, modern
                            refinement, and the soulful artistry of “Made in
                            India.”
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <div className="w-[50%] flex items-center justify-center">
                        {/* <img
                            src={HlImg3}
                            alt="Innovation"
                            className="w-full h-full object-cover"
                        /> */}
                        <AutoPlayVideo
                            src={HandcraftedLuxuryvideo}
                            loopTime={10000}
                            className="w-full"
                            bgColor="#5b4e39"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HandcraftedLuxury;
