import { useEffect } from "react";

import icon1 from "../../assets/Responsible/Icons/ReduceEmission.webp";
import icon2 from "../../assets/Responsible/Icons/SaveGreenery.webp";
import icon3 from "../../assets/Responsible/Icons/BuildingCommunity.webp";
import icon4 from "../../assets/Responsible/Icons/RespectWater.webp";

import img1 from "../../assets/Responsible/pic1.webp";
import img2 from "../../assets/Responsible/pic2.webp";
import img3 from "../../assets/Responsible/pic3.webp";
import img4 from "../../assets/Responsible/Full.webp";

import cimg1 from "../../assets/Responsible/Corporate/1.webp";
import cimg2 from "../../assets/Responsible/Corporate/2.webp";
import cimg3 from "../../assets/Responsible/Corporate/3.webp";

import cert1 from "../../assets/Responsible/certificate/gots.webp";
import cert2 from "../../assets/Responsible/certificate/grs.webp";
import cert3 from "../../assets/Responsible/certificate/oeko.webp";

const icons = [
    {
        id: 1,
        icon: icon1,
        header: "Reduce Emission",
    },
    {
        id: 2,
        icon: icon2,
        header: "Save Greenery",
    },
    {
        id: 3,
        icon: icon3,
        header: "Building Community",
    },
    {
        id: 4,
        icon: icon4,
        header: "Respect Water",
    },
];

function Responsibility() {
    

    

    return (
        <>
            <div className="h-10 md:h-12 lg:h-20 w-full bg-gray-900"></div>
            <div className=" bg-[#49883f] lg:py-20 py-12 lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center text-white font-semibold">
                SUSTAINABILITY
            </div>
            <div className="lg:w-[90%] w-full mx-auto md:pt-16 pt-5 px-2 sm:px-6 md:px-10 lg:px-20">
                <div className="text-gray-700 text-center 2xl:text-xl lg:text-lg text-sm leading-relaxed">
                    For Panorama, sustainability means designing with
                    conscience,<br></br> producing with care, and leaving a
                    legacy the planet can wear with pride.
                </div>
                <div className="w-full h-[1px] bg-blue-800 md:my-8 my-5"></div>
            </div>
            {/* Focus Areas */}
            <section className="grid md:grid-cols-4 grid-cols-2 sm:gap-5 gap-2 mx-auto 2xl:w-[65%] xl:w-[70%] lg:w-[85%] w-[90%] mx-auto 2xl:py-16 md:py-10 py-5 px-2 sm:px-6 md:px-10 lg:px-20">
                {icons.map((item) => (
                    <div
                        key={item.id}
                        className={`flex flex-col items-center justify-center`}
                    >
                        <img
                            src={item.icon}
                            alt="image"
                            className="rounded-lg xl:w-36 md:w-28 w-36 xl:h-36 md:h-28 h-36"
                        />
                        <h2 className="text-blue-950 font-semibold my-4 text-[12px] sm:text-sm md:text-[12px] lg:text-sm xl:text-md 2xl:text-lg">
                            {item.header}
                        </h2>
                    </div>
                ))}
            </section>

            {/* Images Area */}
            <section className="grid sm:grid-cols-3 grid-cols-1 gap-2 sm:gap-0">
                <div className="sm:border-r-4 border-blue-900">
                    <img src={img1} alt="" />
                </div>
                <div className="sm:border-r-4 border-blue-900">
                    <img src={img2} alt="" />
                </div>
                <div className="sm:border-r-4 border-gray-500">
                    <img src={img3} alt="" />
                </div>
            </section>
            <div className="w-[90%] w-full mx-auto 2xl:py-16 md:py-10 py-5 px-2 sm:px-6 md:px-10 lg:px-20">
                <div className="w-full h-[1px] bg-blue-900"></div>
                <div className="w-full h-[1px] bg-blue-900 mt-[1px] md:mb-10 mb-5"></div>

                {/* Our Approaches */}
                <section className="lg:my-16 md:my-10 my-5 flex flex-col justify- items-center md:gap-10 gap-5">
                    <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug">
                        {" "}
                        Sustainability is stitched into everything we do
                    </p>
                    <div className="text-gray-700 2xl:text-xl lg:text-lg text-sm leading-relaxed">
                        Responsible sourcing and clean production guide our
                        operations-powered by renewable energy, efficient
                        logistics, and eco-conscious infrastructure. Ethical
                        practices, workplace safety, community upliftment,
                        transparency, and circularity define our commitment at
                        every level.
                    </div>
                </section>

                {/* Certifications */}
                <section className="lg:mb-12 md:mb-10 mb-5 grid grid-cols-1 lg:grid-cols-3 md:gap-8 gap-5 lg:mt-20 mt-10">
                    <div className="flex flex-col items-center">
                        <img src={cert1} alt="" />
                        <h3 className="font-semibold text-lg text-center">
                            Global Organic Textile Standards (GOTS)
                        </h3>
                        <p className="text-justify leading-relaxed text-sm md:text-base">
                            Global Organic Textile Standard ensures that
                            textiles are truly organic, environmentally
                            friendly, and socially responsible — all the way
                            from the harvesting of raw materials to the final
                            labelled product.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={cert2} alt="" />
                        <h3 className="font-semibold text-lg text-center">
                            Global Recycled Standard (GRS)
                        </h3>
                        <p className="text-justify leading-relaxed text-sm md:text-base">
                            GRS certification underscores our dedication to
                            responsible production—integrating recycled inputs,
                            verified traceability, and sustainable manufacturing
                            practices.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={cert3} alt="" />
                        <h3 className="font-semibold text-lg text-center">
                            OEKO-TEX® STANDARD 100
                        </h3>
                        <p className="text-justify leading-relaxed text-sm md:text-base">
                            OEKO-TEX® STANDARD 100 ensures that every component
                            of a textile product—right from threads and buttons
                            to labels—is tested for harmful chemicals and proven
                            safe for human use. Products carrying this label
                            meet strict global criteria, guaranteeing they are
                            free from substances that can harm health or the
                            environment.
                        </p>
                    </div>
                </section>
            </div>

            <section className="w-[90%] mx-auto md:pb-16 pb-5 px-2 sm:px-6 md:px-10 lg:px-20 text-lg sm:text-3xl md:text-4xl lg:text-5xl">
                <div className="py-3 px-4 font-semibold bg-blue-950 inline-block text-white">
                    CORPORATE SOCIAL RESPONSIBILITY
                </div>
                <div className="mt-5 md:mt-10 text-sm md:text-lg flex flex-col gap-3">
                    Driven by purpose, Panorama nurtures progress through
                    education and women empowerment. By creating safe, inclusive
                    workplaces and community programs, we turn opportunity into
                    impact-strengthening both individuals and society. 
                </div>
            </section>

            <section className="grid sm:grid-cols-3 grid-cols-1 2xl:gap-5 lg:gap-4 md:gap-3 gap-2">
                <div className="">
                    <img src={cimg1} alt="" />
                </div>
                <div className="">
                    <img src={cimg2} alt="" />
                </div>
                <div className="">
                    <img src={cimg3} alt="" />
                </div>
            </section>
        </>
    );
}

export default Responsibility;
