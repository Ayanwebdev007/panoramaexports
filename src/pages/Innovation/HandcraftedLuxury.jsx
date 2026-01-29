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
        <div className="pt-10">
            {/* <div className="w-[90%] mx-auto px-6 md:px-20 py-12 text-3xl sm:text-4xl md:text-5xl text-[#01276a] font-semibold">
                <h1 className="text-2xl sm:text-3xl md:text-4xl py-3 px-4 mt-5 font-semibold bg-blue-950 inline-block text-white">
                    HANDCRAFTED LUXURY
                </h1>
                <div className="mt-10 flex flex-col items-center">
                    <h1 className="text-lg md:text-2xl xl:text-3xl font-semibold text-blue-900">
                        Rooted in tradition, designed for tomorrow.
                    </h1>
                    <p className="text-sm md:text-lg mt-3 md:mb-14 text-gray-600 ml-1 font-thin w-[50%] text-justify">
                        Each piece reflects generational wisdom, modern
                        refinement, and the soulful artistry of “Made in India.”
                    </p>
                </div>
            </div>
            <div className="w-[90%] mx-auto px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-2 mb-6 rounded-b-md h-auto">
                {Images.map((img, index) => (
                    <div key={index} className="">
                        <FlipCard imageUrl={img.image} id={img.id} />
                    </div>
                ))}
            </div> */}
            <section
                id=""
                className="w-full bg-blue-950 flex justify-center md:py-20 py-10"
            >
                <div className="w-[80%] bg-white flex">
                    {/* Left Side */}
                    <div className="w-[50%] md:p-10 p-2 flex flex-col justify-center">
                        <h2 className="text-[12px] sm:text-md md:text-xl lg:text-3xl font-bold text-center text-blue-950">
                            HANDCRAFTED LUXURY
                        </h2>
                        <div className="text-[10px] sm:text-[12px] md:text-sm 2xl:text-lg md:mt-3 mt-1 sm:mb-3 text-gray-600 ml-1 font-thin">
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
