import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import AutoPlayVideo from "../../components/AutoPlayVideo";

import CadImg1 from "../../assets/Innovation/CAD&3DDraping/01.webp";

import TextileImg1 from "../../assets/Innovation/TextileIngenuity/Dewatermark.webp";

import LeanImg1 from "../../assets/Innovation/LeanManufacturing/4.webp";

import UbtImg1 from "../../assets/Innovation/UBTSewingTech/Ubt1.webp";

import Cadvideo from "../../assets/Innovation/CAD&3DDraping/CAD.mp4";
import Weavingvideo from "../../assets/Innovation/TextileIngenuity/Weaving Excellence.mp4";
import Operationalvideo from "../../assets/Innovation/LeanManufacturing/Operational Excellence.mp4";
import UbtSewingvideo from "../../assets/Innovation/UBTSewingTech/UBT Sewing Technology.mp4";






function InnovationThatLeads() {
    const location = useLocation();
      const { ref, inView } = useInView({
          triggerOnce: false,
          threshold: 0.2,
      });

    return (
        <>
            <section
                id=""
                className="md:my-5 my-1 w-full bg-blue-950 flex justify-center md:py-20 py-10"
            >
                <div className="w-[80%] bg-white flex">
                    {/* Left Side */}
                    <div className="w-[50%] md:p-10 p-2 flex flex-col justify-center">
                        <h2 className="text-[12px] sm:text-md md:text-xl lg:text-3xl font-bold text-center text-blue-950">
                            CAD & 3D DRAPING
                        </h2>
                        <div className="text-[10px] sm:text-[12px] md:text-sm 2xl:text-lg md:mt-3 mt-1 sm:mb-3 text-center text-gray-600 ml-1 font-thin">
                            Visualizing designs with precision before production
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <div className="w-[50%] flex items-center justify-center">
                        {/* <img
                            src={CadImg1}
                            alt="Innovation"
                            className="w-full h-full object-cover"
                        /> */}
                        <AutoPlayVideo
                            src={Cadvideo}
                            loopTime={4000}
                            className="w-full"
                            bgColor="#5b4e39"
                        />
                    </div>
                </div>
            </section>
            <section
                id=""
                className="md:my-5 my-1 w-full bg-blue-950 flex justify-center md:py-20 py-10"
            >
                <div className="w-[80%] bg-white flex">
                    {/* Left Side */}
                    <div className="w-[50%] md:p-10 p-2 flex flex-col justify-center">
                        <h2 className="text-[12px] sm:text-md md:text-xl lg:text-3xl font-bold text-center text-blue-950">
                            WEAVING BRILLIANCE
                        </h2>
                        <div className="text-[10px] sm:text-[12px] md:text-sm 2xl:text-lg md:mt-3 mt-1 sm:mb-3 text-gray-600 ml-1 font-thin">
                            From loom to luxury, we unite cutting-edge fabric
                            innovation with eco-conscious materials and refined
                            finishing-infusing every creation with the artistry
                            and heritage of Made in India
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <div className="w-[50%] flex items-center justify-center">
                        {/* <img
                            src={TextileImg1}
                            alt="Innovation"
                            className="w-full h-full object-cover"
                        /> */}
                        <AutoPlayVideo
                            src={Weavingvideo}
                            loopTime={8000}
                            className="w-full"
                            bgColor="#5b4e39"
                        />
                    </div>
                </div>
            </section>
            <section
                id=""
                className="md:my-5 my-1 w-full bg-blue-950 flex justify-center md:py-20 py-10"
            >
                <div className="w-[80%] bg-white flex">
                    {/* Left Side */}
                    <div className="w-[50%] md:p-10 p-2 flex flex-col justify-center">
                        <h2 className="text-[12px] sm:text-md md:text-xl lg:text-3xl font-bold text-center text-blue-950">
                            OPERATIONAL EXCELLENCE
                        </h2>
                        <div className="text-[10px] sm:text-[12px] md:text-sm 2xl:text-lg md:mt-3 mt-1 sm:mb-3 text-gray-600 ml-1 font-thin">
                            Systems for faster, cleaner, better production. It’s
                            an art blending innovation with craftsmanship to
                            reduce waste, enhance efficiency, and deliver
                            quality that speaks for itself.
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <div className="w-[50%] flex items-center justify-center">
                        {/* <img
                            src={LeanImg1}
                            alt="Innovation"
                            className="w-full h-full object-cover"
                        /> */}

                        <AutoPlayVideo
                            src={Operationalvideo}
                            loopTime={15000}
                            className="w-full"
                            bgColor="#5b4e39"
                        />
                    </div>
                </div>
            </section>
            <section
                id=""
                className="md:my-5 my-1 w-full bg-blue-950 flex justify-center md:py-20 py-10"
            >
                <div className="w-[80%] bg-white flex">
                    {/* Left Side */}
                    <div className="w-[50%] md:p-10 p-2 flex flex-col justify-center">
                        <h2 className="text-[12px] sm:text-md md:text-xl lg:text-3xl font-bold text-center text-blue-950">
                            UBT SEWING TECHNOLOGY
                        </h2>
                        <div className="text-[10px] sm:text-[12px] md:text-sm 2xl:text-lg md:mt-3 mt-1 sm:mb-3 text-gray-600 ml-1 font-thin">
                            Seam integrity meets advanced performance. We
                            engineer resilience into every stitch-using
                            ultra-bond thread technology to create seams that
                            endure, perform, and excel in
                            high-intensity outerwear.
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <div className="w-[50%] flex items-center justify-center">
                        {/* <img
                            src={UbtImg1}
                            alt="Innovation"
                            className="w-full h-full object-cover"
                        /> */}

                        <AutoPlayVideo
                            src={UbtSewingvideo}
                            loopTime={7000}
                            className="w-full"
                            bgColor="#5b4e39"
                        />
                    </div>
                </div>
            </section>

            {/* <div>
                <div className="w-[90%] mx-auto px-6 md:px-20 py-12 text-2xl sm:text-3xl md:text-4xl text-[#01276a] font-semibold">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl py-3 px-4 mt-5 font-semibold bg-blue-950 inline-block text-white">
                        DIGITAL SAMPLING
                    </h1>
                    <div className="text-sm md:text-lg mt-3 sm:mb-3 text-gray-600 ml-1 font-thin">
                        Speed, accuracy, and minimal waste—designing smarter
                        efficient iterations prior to large-scale production.
                    </div>
                </div>
                <div className="w-[90%] mx-auto px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-2 mb-6 rounded-b-md h-auto">
                    {DigitalImages.map((img, index) => (
                        <div key={index} className="">
                            <FlipCard imageUrl={img.image} id={img.id} />
                        </div>
                    ))}
                </div>
            </div> */}
        </>
    );
}

export default InnovationThatLeads;
