import React from "react";
import { motion } from "framer-motion";
import EnrichingLives from "../../assets/OurPurpose/1.webp";
import DynamicHeart from "../../assets/OurPurpose/2.webp";
import ResponsibleReverence from "../../assets/OurPurpose/Responsible.webp";
import TrustCore from "../../assets/OurPurpose/Trusted.webp";

const purposeItems = [
    {
        img: EnrichingLives,
        title: "Enriching Lives",
        description: `Empowering people, uplifting communities, and shaping better futures
                        that sustains ecosystems, anticipates new lifestyles, and supports the aspirations of
                        every member of our team`,
    },
    {
        img: DynamicHeart,
        title: "Dynamic Heart",
        description: `Agile, bold, and ever-evolving with ideas, technology, and
        learning.We acquire new capabilities, master fresh capacities, and continuously innovate
        to pioneer and reinvent the future`,
    },
    {
        img: TrustCore,
        title: "Trusted at Core",
        description: `Reliability and intent define every product, partnership, and promise.
        Trust is our greatest currency-built in every interaction, upheld in all circumstances, and
        strengthened over time through our products, services, and unwavering intent`,
    },
    {
        img: ResponsibleReverence,
        title: "Responsible Reverence",
        description: `Committed to people, planet, and purpose—balancing profit
        with progress. We foster a culture where every decision is thoughtful, accountable, and
        value-driven. Advancing the circular economy, and creating capacity through smart
        resource use and ethical governance`,
    },
];


const OurPurpose = () => {
    return (
        <>
            <section className="bg-white">
                <div className="w-full h-10 md:h-12 lg:h-20 bg-gray-900"></div>
                <div className="w-[90%] mx-auto lg:py-16 md:py-12 sm:py-10 py-5 px-2 sm:px-6 md:px-10 lg:px-20 text-lg sm:text-3xl md:text-4xl lg:text-5xl">
                    <h1 className="py-3 px-4 font-semibold bg-blue-950 inline-block text-white">
                        OUR PURPOSE
                    </h1>
                    <h3 className="md:mt-5 mt-2 2xl:text-xl lg:text-lg md:text-sm text-[12px] text-gray-600">
                        To enrich lives by building a dynamic, responsible, and
                        trusted global enterprise.
                    </h3>
                </div>
                <div className="w-full 2xl:mt-10 flex flex-col items-center justify-center mt-6 sm:mt-0">
                    {/* Iterate over all items in array */}
                    {purposeItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center sm:justify-end justify-center gap-8 2xl:w-[65%] xl:w-[75%] lg:w-[90%] md:w-[85%] w-[95%] 2xl:py-20 py-10 2xl:mb-10 mb-5 mt-12 sm:mt-0"
                        >
                            {/* Text side */}
                            <div className="relative 2xl:w-[600px] xl:w-[500px] lg:w-[450px] md:w-[350px] sm:w-[300px] w-[280px] xl:h-[400px] lg:h-[350px] md:h-[300px] sm:h-[250px] h-[350px] bg-[#f8f8f8] flex flex-col sm:justify-center justify-end items-end py-8 text-gray-900">
                                <div className="md:w-[85%] w-[90%] lg:px-16 md:px-5 px-2">
                                    <h2 className="2xl:text-[2rem] md:text-xl sm:text-md text-sm font-bold text-blue-900 mb-3 leading-tight">
                                        {item.title}
                                    </h2>
                                    <div
                                        className="2xl:text-base md:text-sm text-[12px] leading-relaxed text-gray-700"
                                        dangerouslySetInnerHTML={{
                                            __html: item.description,
                                        }}
                                    />
                                </div>
                                {/* Image side */}
                                <div className="absolute sm:bottom-20 bottom-[250px] 2xl:left-[-510px] xl:left-[-425px] lg:left-[-382.5px] md:left-[-297.5px] sm:left-[-275px] flex-shrink-0  overflow-hidden shadow-lg bg-white">
                                    <img
                                        src={item.img}
                                        alt="purpose visual"
                                        className="2xl:w-[600px] xl:w-[500px] lg:w-[450px] md:w-[350px] sm:w-[300px] w-[280px] w-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default OurPurpose;
