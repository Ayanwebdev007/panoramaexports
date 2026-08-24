import React from "react";
import { motion } from "framer-motion";
import EnrichingLives from "../../assets/CM100595.webp";
import DynamicHeart from "../../assets/OurPurpose/Slide 2 R Pic 2.JPG";
import ResponsibleReverence from "../../assets/OurPurpose/Responsible.webp";
import TrustCore from "../../assets/OurPurpose/Trusted.webp";

const purposeItems = [
    {
        img: EnrichingLives,
        title: "Enriching Lives",
        description: `We aim to create positive impact by empowering people, supporting communities, and contributing to a more responsible future. Our focus is on building an environment where individuals grow, communities benefit, and long-term value is created.`,
    },
    {
        img: DynamicHeart,
        title: "A Dynamic Core",
        description: `We continue to evolve through ideas, technology, and learning. By strengthening our capabilities and embracing change, we adapt to new opportunities and support the future of fashion manufacturing.`,
    },
    {
        img: TrustCore,
        title: "Built on Trust",
        description: `Trust defines how we work. It is reflected in the quality of our products, the strength of our partnerships, and the consistency of our actions over time.`,
    },
    {
        img: ResponsibleReverence,
        title: "Responsible Reverence",
        description: `Committed to people, planet, and purpose—balancing profit with progress. We foster a culture where every decision is thoughtful, accountable, and value-driven. Advancing the circular economy, and creating capacity through smart resource use and ethical governance.`,
    },
];


const OurPurpose = () => {
    return null; /* (
        <>
            <section className="bg-white">
                <div className="w-full h-10 md:h-12 lg:h-20 bg-gray-900"></div>
                <div className="w-[90%] mx-auto lg:py-16 md:py-12 sm:py-10 py-5 px-2 sm:px-6 md:px-10 lg:px-20">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 text-[#01276a]">
                        <div className="text-2xl sm:text-3xl md:text-5xl font-light font-outfit">
                            Our Purpose
                        </div>
                    </div>
                    <h3 className="md:mt-5 mt-2 2xl:text-xl lg:text-lg md:text-sm text-[12px] text-gray-600 font-outfit">
                        To enrich lives by building a dynamic, responsible, and
                        trusted global enterprise.
                    </h3>
                </div>
                <div className="w-full 2xl:mt-10 flex flex-col items-center justify-center mt-6 sm:mt-0">
                    {purposeItems.map((item, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div
                                key={idx}
                                className={`flex items-center ${isEven ? "sm:justify-end" : "sm:justify-start"} justify-center gap-8 2xl:w-[65%] xl:w-[75%] lg:w-[90%] md:w-[85%] w-[95%] 2xl:py-20 py-10 2xl:mb-10 mb-5 mt-12 sm:mt-0`}
                            >
                                <div className={`relative 2xl:w-[600px] xl:w-[500px] lg:w-[450px] md:w-[350px] sm:w-[300px] w-[280px] xl:h-[400px] lg:h-[350px] md:h-[300px] sm:h-[250px] h-[350px] bg-[#f8f8f8] flex flex-col sm:justify-center justify-end ${isEven ? "items-end" : "items-start"} py-8 text-gray-900`}>
                                    <div className="md:w-[85%] w-[90%] lg:px-16 md:px-5 px-2">
                                        <h2 className="2xl:text-[2rem] md:text-xl sm:text-md text-sm font-bold text-blue-900 mb-3 leading-tight font-outfit">
                                            {item.title}
                                        </h2>
                                        <div
                                            className="2xl:text-base md:text-sm text-[12px] leading-relaxed text-gray-700 font-outfit"
                                            dangerouslySetInnerHTML={{
                                                __html: item.description,
                                            }}
                                        />
                                    </div>
                                    <div className={`absolute sm:bottom-20 bottom-[250px] ${isEven ? "2xl:left-[-510px] xl:left-[-425px] lg:left-[-382.5px] md:left-[-297.5px] sm:left-[-275px]" : "2xl:right-[-510px] xl:right-[-425px] lg:right-[-382.5px] md:right-[-297.5px] sm:right-[-275px]"} flex-shrink-0  overflow-hidden shadow-lg bg-white`}>
                                        <img
                                            src={item.img}
                                            alt="purpose visual"
                                            className="2xl:w-[600px] xl:w-[500px] lg:w-[450px] md:w-[350px] sm:w-[300px] w-[280px] w-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    ) */;
};

export default OurPurpose;
