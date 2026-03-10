import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoEnterOutline } from "react-icons/io5";
import {
    Droplet,
    RefreshCcw,
    TrendingUp,
    ChevronsDown,
    Trees,
    Users,
    Zap,
    Globe
} from "lucide-react";

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

import wasteImg from "../../assets/waste-diversion.webp";
import sroiImg from "../../assets/sroi-impact.webp";
import esgImg from "../../assets/CM100387 copy.jpg";

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

const csrItems = [
    {
        id: 1,
        image: cimg1,
        title: "Social Impact",
    },
    {
        id: 2,
        image: cimg2,
        title: "Empowering Communities",
    },
    {
        id: 3,
        image: cimg3,
        title: "Inclusive Growth",
    },
];

function Responsibility() {




    return (
        <div className="font-outfit">
            <div className="h-10 md:h-12 lg:h-20 w-full bg-gray-900"></div>
            <div className="bg-[#49883f] lg:py-20 py-12 px-2 sm:px-6 md:px-10 lg:px-20">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-light text-white text-center font-outfit">
                    Sustainability
                </h1>
            </div>
            <div className="lg:w-[90%] w-full mx-auto md:pt-16 pt-5 px-2 sm:px-6 md:px-10 lg:px-20">
                <div className="text-gray-700 text-center 2xl:text-xl lg:text-lg text-sm leading-relaxed font-light">
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
                        <h2 className="text-blue-950 font-light my-4 text-[12px] sm:text-sm md:text-[12px] lg:text-sm xl:text-md 2xl:text-lg font-outfit">
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
                <div className="w-full h-[1px] bg-blue-900 md:mb-10 mb-5"></div>

                {/* Our Approaches */}
                <section className="lg:my-16 md:my-10 my-5 flex flex-col justify- items-center md:gap-10 gap-5">
                    <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-[#01276a] leading-snug text-center">
                        Sustainability is stitched into everything we do
                    </p>
                    <div className="text-gray-700 2xl:text-xl lg:text-lg text-sm leading-relaxed font-light text-justify">
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
                        <h3 className="font-light text-lg text-center text-blue-950 mt-4 mb-2">
                            Global Organic Textile Standards (GOTS)
                        </h3>
                        <p className="text-justify leading-relaxed text-sm md:text-base font-light">
                            Global Organic Textile Standard ensures that
                            textiles are truly organic, environmentally
                            friendly, and socially responsible — all the way
                            from the harvesting of raw materials to the final
                            labelled product.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={cert2} alt="" />
                        <h3 className="font-light text-lg text-center text-blue-950 mt-4 mb-2">
                            Global Recycled Standard (GRS)
                        </h3>
                        <p className="text-justify leading-relaxed text-sm md:text-base font-light">
                            GRS certification underscores our dedication to
                            responsible production—integrating recycled inputs,
                            verified traceability, and sustainable manufacturing
                            practices.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={cert3} alt="" />
                        <h3 className="font-light text-lg text-center text-blue-950 mt-4 mb-2">
                            OEKO-TEX® Standard 100
                        </h3>
                        <p className="text-justify leading-relaxed text-sm md:text-base font-light">
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

                {/* ESG Report & Bento Grid Section */}
                <section className="sm:pt-8 sm:pb-0 text-[#01276a] w-full mt-24 mb-12">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 px-2 sm:px-6 md:px-10 lg:px-20">
                        <div className="text-2xl sm:text-3xl md:text-5xl font-light">
                            ESG Report
                            <div className="text-sm md:text-base text-gray-600 mt-2 font-light max-w-2xl leading-relaxed">
                                Our ESG Report reflects Panorama's commitment to transparency,
                                accountability, and the measurable impact of our sustainability
                                initiatives across global operations.
                            </div>
                        </div>

                    </div>

                    {/* Bento Grid Integrated directly */}
                    <div className="px-2 sm:px-6 md:px-10 lg:px-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[500px] lg:h-[550px]">
                            {/* Column 1 */}
                            <div className="grid grid-rows-2 gap-4 h-full">
                                <div className="bg-[#01276a] text-white p-6 rounded-lg flex flex-col justify-between relative group hover:bg-[#02388e] transition-colors duration-300">
                                    <div>
                                        <span className="text-3xl font-light block mb-2">2X</span>
                                        <p className="text-sm font-light leading-snug">water positivity through daily operations</p>
                                    </div>
                                    <Droplet className="w-8 h-8 opacity-60 self-end" strokeWidth={1.2} />
                                </div>
                                <div className="relative rounded-lg overflow-hidden group">
                                    <img
                                        src={wasteImg}
                                        alt="Waste Diversion"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-between text-white">
                                        <div>
                                            <span className="text-3xl font-light block mb-2">100%</span>
                                            <p className="text-xs font-light leading-snug">waste diversion from landfill to be achieved</p>
                                        </div>
                                        <RefreshCcw className="w-6 h-6 opacity-60 self-end" strokeWidth={1.2} />
                                    </div>
                                </div>
                            </div>

                            {/* Column 2 - Tall Card */}
                            <div className="h-full flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden group">
                                <div className="h-[65%] relative overflow-hidden">
                                    <img
                                        src={sroiImg}
                                        alt="SROI Impact"
                                        className="w-full h-full object-cover object-left transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex-grow p-6 flex flex-col justify-center">
                                    <span className="text-2xl font-light text-[#01276a] block mb-2">10X</span>
                                    <p className="text-xs text-gray-500 font-light leading-snug uppercase tracking-widest">SROI to be accomplished</p>
                                </div>
                            </div>

                            {/* Column 3 - Carbon Intensity Tall Card */}
                            <div className="h-full flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden group">
                                <div className="flex-grow p-6 flex flex-col justify-center">
                                    <span className="text-2xl font-light text-[#01276a] block mb-2">60%</span>
                                    <p className="text-xs text-gray-500 font-light leading-snug uppercase tracking-widest">Energy Save</p>
                                </div>
                                <div className="h-[65%] relative overflow-hidden">
                                    <img
                                        src={esgImg}
                                        alt="Carbon Reduction"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <ChevronsDown className="w-6 h-6 text-[#01276a] opacity-60" strokeWidth={1.2} />
                                    </div>
                                </div>
                            </div>

                            {/* Column 4 */}
                            <div className="grid grid-rows-2 gap-4 h-full">
                                <div className="relative rounded-lg overflow-hidden group">
                                    <img
                                        src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop"
                                        alt="Renewable Energy"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-between text-white">
                                        <div>
                                            <span className="text-2xl font-light block mb-2">40%</span>
                                            <p className="text-xs font-light leading-snug">renewable energy usage to be achieved</p>
                                        </div>
                                        <Zap className="w-6 h-6 opacity-60 self-end" strokeWidth={1.2} />
                                    </div>
                                </div>
                                <div className="bg-white border border-gray-200 p-6 rounded-lg flex flex-col justify-between group hover:border-[#01276a]/30 transition-colors duration-300">
                                    <div className="mt-auto">
                                        <span className="text-2xl font-light text-[#01276a] block mb-2">100%</span>
                                        <p className="text-xs text-gray-600 font-light leading-snug">inclusive communities and supply chains to be set across</p>
                                    </div>
                                    <Globe className="w-6 h-6 text-[#01276a] opacity-60 self-end" strokeWidth={1.2} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="w-[90%] mx-auto md:pb-16 pb-5 px-2 sm:px-6 md:px-10 lg:px-20">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-light font-outfit text-[#01276a]">
                    Corporate Social Responsibility
                </h2>
                <div className="mt-5 md:mt-10 text-sm md:text-lg flex flex-col gap-3 font-light text-justify">
                    Driven by purpose, Panorama nurtures progress through
                    education and women empowerment. By creating safe, inclusive
                    workplaces and community programs, we turn opportunity into
                    impact-strengthening both individuals and society.
                </div>
            </section>

            <section className="w-[90%] mx-auto md:pb-16 pb-5 px-2 sm:px-6 md:px-10 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-4">
                    {csrItems.map((item) => (
                        <div
                            key={item.id}
                            className="relative overflow-hidden shadow-lg group"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transform transition-transform duration-[4000ms] ease-out group-hover:scale-[1.1]"
                            />
                            {/* Overlay */}
                            <div className="absolute bottom-0 h-[50%] w-full py-[10%] bg-gradient-to-t from-[#01276a]/90 via-[#01276a]/80 via-[#01276a]/50 via-[#01276a]/40 to-transparent transition-all duration-500 flex flex-col justify-end p-6">
                                <p className="text-white text-md md:text-lg lg:text-xl xl:text-xl font-semibold text-center whitespace-nowrap">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Responsibility;
