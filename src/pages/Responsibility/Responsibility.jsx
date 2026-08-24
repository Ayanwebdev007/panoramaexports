import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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

import rImg1 from "../../assets/responsibility images final/3 (3).JPG";
import rImg2 from "../../assets/responsibility images final/DSC03041 (1).JPG";
import rImg3 from "../../assets/responsibility images final/DSC03065 (2).JPG";
import rImg4 from "../../assets/responsibility images final/Slide 13 Sustainability Commitments.jpg";

import cimg1 from "../../assets/Responsible/Corporate/1.webp";
import empoweringImg from "../../assets/empowering communities.jpeg";
import inclusiveImg from "../../assets/inclusive growth.JPG";

import cert1 from "../../assets/Responsible/certificate/gots.webp";
import cert2 from "../../assets/Responsible/certificate/grs.webp";
import cert3 from "../../assets/Responsible/certificate/oeko.webp";

import wasteImg from "../../assets/waste-diversion.webp";
import sroiImg from "../../assets/sroi-impact.webp";
import esgImg from "../../assets/CM100387 copy.jpg";
import RegenerativeCycle from "../../components/RegenerativeCycle/RegenerativeCycle";

// Import ESG Certifications
import certIcon1 from "../../assets/Certificates/cert-1.webp";
import certIcon2 from "../../assets/Certificates/cert-2.webp";
import certIcon3 from "../../assets/Certificates/oeko-tex-new.webp";
import certIcon4 from "../../assets/Certificates/cuc-new.webp";
import certIcon5 from "../../assets/Certificates/cert-6.webp";
import certIcon6 from "../../assets/Certificates/cert-3.webp";
import certIcon7 from "../../assets/Certificates/cert-4.webp";
import certIcon8 from "../../assets/Certificates/gmp-new.webp";
import certIcon9 from "../../assets/Certificates/PDCA.webp";
import certIcon10 from "../../assets/Certificates/cert-7.webp";
import certIcon11 from "../../assets/Certificates/cert-8.webp";
import certIcon12 from "../../assets/Certificates/intertek.webp";

import "./Responsibility.css";

const esgCerts = [
    certIcon1,
    certIcon2,
    certIcon3,
    certIcon4,
    certIcon5,
    certIcon6,
    certIcon7,
    certIcon8,
    certIcon9,
    certIcon10,
    certIcon11,
    certIcon12
];

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
        image: empoweringImg,
        title: "Empowering Communities",
    },
    {
        id: 3,
        image: inclusiveImg,
        title: "Inclusive Growth",
    },
];

const certifications = [
    {
        id: 1,
        image: cert1,
        title: "Global Organic Textile Standards (GOTS)",
        description: "Global Organic Textile Standard ensures that textiles are truly organic, environmentally friendly, and socially responsible — all the way from the harvesting of raw materials to the final labelled product."
    },
    {
        id: 2,
        image: cert3,
        title: "OEKO-TEX® Standard 100",
        description: "OEKO-TEX® STANDARD 100 ensures that every component of a textile product—right from threads and buttons to labels—is tested for harmful chemicals and proven safe for human use. Products carrying this label meet strict global criteria, guaranteeing they are free from substances that can harm health or the environment."
    },
    {
        id: 3,
        image: cert2,
        title: "Global Recycled Standard (GRS)",
        description: "GRS certification underscores our dedication to responsible production—integrating recycled inputs, verified traceability, and sustainable manufacturing practices."
    }
];

function Responsibility() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    const yOffset = -80; // adjust for navbar height
                    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }, 100);
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    return (
        <div className="font-outfit bg-white pt-10 lg:pt-12">
            
            {/* Hero Section */}
            <section id="responsible-craft" className="relative bg-[#F9F6F1] pt-16 md:pt-24 pb-12 overflow-hidden">
                <div className="relative z-10 max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-20 text-center font-outfit">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <h1 
                            style={{ fontFamily: "'Playfair Display', serif" }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-light italic text-[#AD1E1E] mb-6 tracking-wide"
                        >
                            Our Sustainability Commitments
                        </h1>
                        <div className="max-w-[1100px] mx-auto text-gray-600 text-sm md:text-lg font-light leading-relaxed tracking-wide space-y-6 text-center">
                            <p>
                                At Panorama, our identity is defined by the people who shape it every day — from our teams and partners to the customers who place their trust in us. Together, we continue to build a journey grounded in craftsmanship, collaboration, and long-term vision.
                            </p>
                            <p>
                                We believe progress should be purposeful. That is why we continue to strengthen our commitment to innovation, inclusivity, and sustainable practices across every part of our business. Guided by authenticity and responsibility, we focus on meaningful actions, continuous learning, and creating positive impact that extends beyond products and production.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Regenerative Cycle Section */}
            <div className="lg:w-[90%] w-full mx-auto px-2 sm:px-6 md:px-10 lg:px-20">
                <RegenerativeCycle />
            </div>

            {/* <div className="lg:w-[90%] w-full mx-auto pb-10 px-2 sm:px-6 md:px-10 lg:px-20">
                <div className="text-gray-700 text-center 2xl:text-xl lg:text-lg text-sm leading-relaxed font-light">
                    For Panorama, sustainability means designing with
                    conscience,<br></br> producing with care, and leaving a
                    legacy the planet can wear with pride.
                </div>
            </div> */}

            {/* Focus Areas */}
            {/* <section className="grid md:grid-cols-4 grid-cols-2 sm:gap-5 gap-2 mx-auto 2xl:w-[65%] xl:w-[70%] lg:w-[85%] w-[90%] mx-auto 2xl:py-16 md:py-10 py-5 px-2 sm:px-6 md:px-10 lg:px-20">
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
            </section> */}

            {/* Images Area - Premium 4-Column Layout */}
            <section className="px-2 sm:px-6 md:px-10 lg:px-20 mb-12">
                <div className="lg:w-[90%] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="overflow-hidden rounded-2xl group shadow-lg hover:shadow-2xl transition-all duration-500">
                        <img
                            src={rImg1}
                            alt="Responsible Manufacturing"
                            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    <div className="overflow-hidden rounded-2xl group shadow-lg hover:shadow-2xl transition-all duration-500">
                        <img
                            src={rImg2}
                            alt="Ethical Production"
                            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    <div className="overflow-hidden rounded-2xl group shadow-lg hover:shadow-2xl transition-all duration-500">
                        <img
                            src={rImg3}
                            alt="Sustainable Practices"
                            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                    <div className="overflow-hidden rounded-2xl group shadow-lg hover:shadow-2xl transition-all duration-500">
                        <img
                            src={rImg4}
                            alt="Community Impact"
                            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                </div>
            </section>
            <div className="w-[90%] w-full mx-auto 2xl:py-16 md:py-10 py-5 px-2 sm:px-6 md:px-10 lg:px-20">
                {/* Our Approaches */}
                <section className="lg:my-16 md:my-10 my-5 flex flex-col justify- items-center md:gap-10 gap-5">
                    <p className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-[#AD1E1E] leading-snug text-center font-outfit uppercase tracking-[0.15em]">
                        Sustainability is stitched into everything we do
                    </p>
                    <div className="text-gray-600 2xl:text-xl lg:text-lg text-sm leading-[1.9] font-light tracking-wide text-center max-w-[1100px] mx-auto">
                        Responsible sourcing and clean production guide our
                        operations—powered by renewable energy, efficient
                        logistics, and eco-conscious infrastructure. Ethical
                        practices, workplace safety, community upliftment,
                        transparency, and circularity define our commitment at
                        every level.
                    </div>
                </section>


                {/* Certifications Header - Hidden as per request */}
                {/* <div id="certifications" className="lg:mt-24 mt-12 mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-light font-outfit text-[#01276a] mb-5">
                        Our Certifications
                    </h2>
                    <div className="text-gray-700 2xl:text-xl lg:text-lg text-sm leading-relaxed font-light text-justify">
                        Our compliance and certifications reflect our dedication to sustainability, quality, and ethical manufacturing practices at every stage. We hold ourselves to the highest global standards to ensure that every garment we produce is safe, sustainable, and responsible.
                    </div>
                </div> */}

                {/* Certifications - Premium Card Layout */}
                <section id="certifications" className="lg:mb-12 md:mb-10 mb-5 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className="flex flex-col items-center bg-[#FDF8F8] p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(173,30,30,0.08)] transition-all duration-500 border border-red-50 group hover:-translate-y-2"
                        >
                            <div className="h-40 w-full flex items-center justify-center mb-8 px-6">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="max-h-full max-w-full object-contain transition-all duration-500"
                                />
                            </div>
                            <h3 className="font-semibold text-xl text-center text-[#AD1E1E] mb-6 min-h-[3.5rem] flex items-center justify-center px-2">
                                {cert.title}
                            </h3>
                            <p className="text-center leading-relaxed text-[15px] text-gray-500 font-light px-2">
                                {cert.description}
                            </p>
                        </div>
                    ))}
                </section>

                {/* ESG Report & Bento Grid Section */}
                <section className="sm:pt-2 sm:pb-0 text-[#AD1E1E] w-full mt-10 sm:mt-12 mb-12 font-outfit">
                    
                    {/* Certifications Infinite Horizontal Scroll */}
                    <div className="px-2 sm:px-6 md:px-10 lg:px-20 mb-12">
                        <div className="marquee-container bg-[#FDF8F8] py-10 sm:py-12 rounded-[2rem] border border-red-50/50 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                            <div className="marquee-track">
                                {[...esgCerts, ...esgCerts].map((imgSrc, idx) => (
                                    <div key={idx} className="inline-flex items-center justify-center mx-4 sm:mx-6 h-24 sm:h-28 w-44 sm:w-52 group flex-shrink-0">
                                        <img
                                            src={imgSrc}
                                            alt="Certification logo"
                                            className="max-h-full max-w-full object-contain transition-all duration-300 mix-blend-multiply"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

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
                                <div className="bg-[#AD1E1E] text-white p-6 rounded-lg flex flex-col justify-between relative group hover:bg-[#8B1818] transition-colors duration-300">
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
                                    <span className="text-2xl font-light text-[#AD1E1E] block mb-2">10X</span>
                                    <p className="text-xs text-gray-500 font-light leading-snug uppercase tracking-widest">SROI to be accomplished</p>
                                </div>
                            </div>

                            {/* Column 3 - Carbon Intensity Tall Card */}
                            <div className="h-full flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden group">
                                <div className="flex-grow p-6 flex flex-col justify-center">
                                    <span className="text-2xl font-light text-[#AD1E1E] block mb-2">60%</span>
                                    <p className="text-xs text-gray-500 font-light leading-snug uppercase tracking-widest">Energy Save</p>
                                </div>
                                <div className="h-[65%] relative overflow-hidden">
                                    <img
                                        src={esgImg}
                                        alt="Carbon Reduction"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <ChevronsDown className="w-6 h-6 text-[#AD1E1E] opacity-60" strokeWidth={1.2} />
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
                                <div className="bg-white border border-gray-200 p-6 rounded-lg flex flex-col justify-between group hover:border-[#AD1E1E]/30 transition-colors duration-300">
                                    <div className="mt-auto">
                                        <span className="text-2xl font-light text-[#AD1E1E] block mb-2">100%</span>
                                        <p className="text-xs text-gray-600 font-light leading-snug">inclusive communities and supply chains to be set across</p>
                                    </div>
                                    <Globe className="w-6 h-6 text-[#AD1E1E] opacity-60 self-end" strokeWidth={1.2} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section id="csr" className="w-[90%] mx-auto md:pb-16 pb-5 px-2 sm:px-6 md:px-10 lg:px-20">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-light font-outfit text-[#AD1E1E]">
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
                            <div className="absolute bottom-0 h-[50%] w-full py-[10%] bg-gradient-to-t from-[#C4AA80]/90 via-[#C4AA80]/60 via-[#C4AA80]/30 to-transparent transition-all duration-500 flex flex-col justify-end p-6">
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
