import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import HumanResources from "./HumanResources";
import HealthSafety from "./HealthSafety";
import PeoplePurpose from "./PeoplePurpose";
import PeopleImg from "../../assets/People/shivaansidharth3.webp";
import OurStrengthImg from "../../assets/People/OurStrength1.webp";
import CommitmentImg from "../../assets/People/Commitment.webp";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

import img1 from "../../assets/People/LifePanorama/1.webp";
import img2 from "../../assets/People/LifePanorama/2.webp";
import img3 from "../../assets/People/LifePanorama/3.webp";
import img4 from "../../assets/People/LifePanorama/4.webp";
import img5 from "../../assets/People/LifePanorama/5.webp";
import img6 from "../../assets/People/LifePanorama/6.webp";
import img7 from "../../assets/People/LifePanorama/7.webp";
import img8 from "../../assets/People/LifePanorama/8.webp";
import img9 from "../../assets/People/LifePanorama/9.webp";
import img10 from "../../assets/People/LifePanorama/10.webp";
import img11 from "../../assets/People/LifePanorama/11.webp";
import img12 from "../../assets/People/LifePanorama/12.webp";
import img13 from "../../assets/People/LifePanorama/13.webp";
import img14 from "../../assets/People/LifePanorama/14.webp";
import img15 from "../../assets/People/LifePanorama/15.webp";
import img16 from "../../assets/People/LifePanorama/16.webp";
import img17 from "../../assets/People/LifePanorama/17.webp";
import img18 from "../../assets/People/LifePanorama/18.webp";
import img19 from "../../assets/People/LifePanorama/19.webp";
import img20 from "../../assets/People/LifePanorama/20.webp";
import img21 from "../../assets/People/LifePanorama/21.webp";
import img22 from "../../assets/People/LifePanorama/22.webp";
import img23 from "../../assets/People/LifePanorama/23.webp";
import img24 from "../../assets/People/LifePanorama/24.webp";
import img25 from "../../assets/People/LifePanorama/25.webp";
import img26 from "../../assets/People/LifePanorama/26.webp";

import TeamworkImage from "../../assets/People/TeamWork1.webp";
import ForwardThinkingImage from "../../assets/People/ForwardThinking1.webp";
import SpeedActionImage from "../../assets/People/SpeedAction1.webp";
import CustomerCentricityImage from "../../assets/People/CustomerCentricity1.webp";

import CareerPng from "../../assets/People/Career.webp";

const crumbs = [
    { label: "Our Strength", path: "#our-strength" },
    { label: "Life at Panorama", path: "#life-at-panorama" },
    { label: "Commitment", path: "#commitment" },
];

const executiveDirectors = [
    {
        id: 1,
        name: "",
        role: "",
        bg: CareerPng,
        img: PeopleImg,
        message: ``,
    },
];

const industries = [
    "Aluminium",
    "Carbon black",
    "Copper",
    "Cement",
    "Chemicals",
    "Fibres",
];

const WeBelieveImages = [
    {
        id: 1,
        image: TeamworkImage,
        text: "Team Work",
        subtext: "",
    },
    {
        id: 2,
        image: ForwardThinkingImage,
        text: "Forward Thinking",
        subtext: "",
    },
    {
        id: 3,
        image: SpeedActionImage,
        text: "Speed To Action",
        subtext: "",
    },
    {
        id: 4,
        image: CustomerCentricityImage,
        text: "Customer Centricity",
        subtext: "",
    },
];

function Peoples() {

    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26];
    const location = useLocation();
    const [activeCrumb, setActiveCrumb] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveCrumb(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 } // 60% visible = active
        );

        crumbs.forEach((crumb) => {
            const section = document.querySelector(crumb.path);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    // Scroll to top when opening the page...........
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="bg-white">
                <div className="w-full h-10 md:h-12 lg:h-20 bg-gray-900"></div>
                {executiveDirectors.map((director) => (
                    <div
                        key={director.id}
                        className="w-full bg-contain bg-center"
                        style={{
                            backgroundImage: `url(${director.img})`,
                            aspectRatio: "16/7.17", // maintain image ratio
                        }}
                    >
                        <div className="bg-transparent w-full h-full flex items-center">
                            {/* Right Side (Visible for id=2) */}
                            <div
                                className={`w-[50%] ml-auto py-10 flex items-center`}
                            >
                                <motion.div
                                    className="w-[90%] mr-auto flex flex-col items-start justify-center"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration: 1.5,
                                        ease: "easeInOut",
                                    }}
                                    viewport={{ once: false, amount: 0.3 }}
                                >
                                    <div className="2xl:text-3xl xl:text-2xl md:text-xl sm:text-[12px] text-[8px] text-white text-justify leading-loose 2xl:w-[80%] xl:w-[90%] lg:w-[95%] w-full">
                                        <span className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-md font-semibold"></span>
                                        {director.message}
                                        <span className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-md font-semibold"></span>
                                    </div>
                                    <h1 className="text-white w-full text-end 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-lg font-semibold 2xl:mt-20 xl:mt-10 md:mt-5 mt-2">
                                        {director.name}
                                    </h1>
                                    <h3 className="text-white w-full text-end 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg md:font-semibold xl:mt-5 md:mt-2">
                                        {director.role}
                                    </h3>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Breadcrumbs */}
            <div className="hidden md:block sticky lg:top-20 md:top-12 z-40 shadow-md bg-blue-950 text-lg py-3 transition-all duration-300">
                <div className="w-[90%] mx-auto px-6 md:px-20 flex items-center justify-center gap-6">
                    {crumbs.map((crumb, index) => (
                        <span
                            key={index}
                            className="flex items-center justify-center"
                        >
                            <a
                                href={crumb.path}
                                className={`hover:underline md:text-sm lg:text-lg sm:my-1 ${
                                    activeCrumb === crumb.path.substring(1)
                                        ? "font-semibold text-white"
                                        : "text-gray-300"
                                }`}
                            >
                                {crumb.label}
                            </a>
                        </span>
                    ))}
                </div>
            </div>

            <section>
                <div className="w-[90%] mx-auto md:py-16 py-5 px-2 sm:px-6 md:px-10 lg:px-20 text-lg sm:text-3xl md:text-4xl lg:text-5xl">
                    <h2 className="py-3 px-4 font-semibold bg-blue-950 inline-block text-white">
                        PEOPLE
                    </h2>
                    <p className="text-sm sm:text-md lg:text-lg py-3 md:mt-5 mt-2 text-justify leading-relaxed">
                        Driven by our People First ethos, Panorama Exports
                        embraces integrity, inclusivity, and respect as the
                        cornerstones of its culture. Through collaboration and
                        meaningful connections, we empower our people to deliver
                        impactful, equitable, and lasting results.
                    </p>
                </div>
            </section>
            <section
                id="our-strength"
                className="w-full bg-blue-950 flex justify-center md:py-20 py-10"
            >
                <div className="w-[80%] bg-white flex flex-col sm:flex-row">
                    {/* Left Side */}
                    <div className="sm:w-[50%] md:p-10 p-2 flex flex-col justify-center">
                        <h2 className="text-sm sm:text-md md:text-xl lg:text-4xl 2xl:text-5xl font-bold text-center text-blue-950">
                            Our Strength
                        </h2>
                        <p className="text-[10px] sm:text-[12px] md:text-sm 2xl:text-lg md:mt-3 mt-1 sm:mb-3 text-gray-600 ml-1 font-thin text-justify">
                            The true fabric of Panorama is made of people 5,000
                            individuals, each adding their own thread of talent,
                            passion, and creativity. With women making up half
                            our team, we are proud to champion equality,
                            empowerment, and opportunity for all. We invest in
                            skills, foster safe and inclusive spaces, and
                            encourage every voice to be part of our shared
                            journey. When our people grow, we grow
                            together-building a company where success is
                            measured not just in output, but in the lives, we
                            enrich.
                        </p>
                    </div>

                    {/* Right Side Image */}
                    <div className="sm:w-[50%]">
                        <img
                            src={OurStrengthImg}
                            alt="Innovation"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
            <section
                id="life-at-panorama"
                className="w-[90%] mx-auto md:pt-16 pt-5 px-2 sm:px-6 md:px-10 lg:px-20"
            >
                <div className="text-lg sm:text-3xl md:text-4xl lg:text-5xl pb-5 md:pb-16">
                    <h2 className="py-3 px-4 font-semibold bg-blue-950 inline-block text-white">
                        LIFE AT PANORAMA
                    </h2>
                </div>
                <div className="w-[80%] mx-auto relative">
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={1}
                        spaceBetween={20}
                        navigation={{
                            nextEl: ".swiper-button-next-custom",
                            prevEl: ".swiper-button-prev-custom",
                        }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-6"
                    >
                        {images.map((img, i) => (
                            <SwiperSlide key={i}>
                                <div className="w-full h-auto bg-white">
                                    <img
                                        src={img}
                                        alt={`gallery-${i}`}
                                        className="w-full object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom navigation buttons */}
                    <button className="swiper-button-prev-custom absolute left-[-33px] md:left-[-45px] top-1/2 -translate-y-1/2 z-10 bg-blue-950 hover:bg-blue-700 text-white md:w-10 w-8 md:h-10 h-8 rounded-full shadow-md">
                        ❮
                    </button>
                    <button className="swiper-button-next-custom absolute right-[-33px] md:right-[-45px] top-1/2 -translate-y-1/2 z-10 bg-blue-950 hover:bg-blue-700 text-white md:w-10 w-8 md:h-10 h-8 rounded-full shadow-md">
                        ❯
                    </button>
                </div>
            </section>

            <section>
                <div className="w-[90%] mx-auto md:py-16 py-5 px-2 sm:px-6 md:px-10 lg:px-20 text-lg sm:text-3xl md:text-4xl lg:text-5xl text-[#01276a] font-semibold">
                    <h2 className="py-3 px-4 font-semibold bg-blue-950 inline-block text-white">
                        WE BELIEVE IN
                    </h2>
                </div>
                <div className="w-[90%] mx-auto md:pb-16 pb-5 px-2 sm:px-6 md:px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:gap-6 gap-4">
                    {WeBelieveImages.map((item) => (
                        <div
                            key={item.id}
                            className="relative overflow-hidden shadow-lg group"
                        >
                            <img
                                src={item.image}
                                alt="vision"
                                className="w-full object-contain transform transition-transform duration-[4000ms] ease-out group-hover:scale-[1.1]"
                            />
                            {/* Overlay */}
                            <div className="absolute bottom-0 h-[50%] w-full py-[10%] bg-gradient-to-t from-blue-950/20 via-blue-950/10 via-blue-950/0 via-blue-950/0 to-transparent group-hover:from-blue-950/90 group-hover:via-blue-950/80 group-hover:via-blue-950/50 group-hover:via-blue-950/40 group-hover:to-transparent transition-all duration-500 flex flex-col justify-end p-6">
                                <p className="text-white text-md md:text-lg lg:text-xl xl:text-2xl font-semibold mx-[10%] text-center">
                                    {item.text}
                                </p>
                                <p className="mx-[10%] mt-4 text-white">
                                    {item.subtext}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section
                id="commitment"
                className="w-full bg-blue-950 flex justify-center md:py-20 py-10"
            >
                <div className="w-[80%] bg-white flex flex-col lg:flex-row">
                    {/* Left Side */}
                    <div className="lg:w-[50%] md:p-10 p-2 flex flex-col justify-center">
                        <h2 className="text-sm sm:text-md md:text-xl lg:text-4xl 2xl:text-5xl font-bold text-center text-blue-950">
                            Commitment to Care & Compliance
                        </h2>
                        <div className="text-[10px] sm:text-[12px] md:text-sm 2xl:text-lg md:mt-3 mt-1 sm:mb-3 text-gray-600 ml-1 font-thin text-justify">
                            Panorama fosters a culture of accountability,
                            ensuring rigorous compliance with global labour
                            laws, buyer mandates, and ethical business
                            practices. Our unwavering commitment to workers’
                            rights and brand protection is anchored in:
                            <p>• Ensuring Workplace Safety & Fair Wages </p>
                            <p>• Promoting Equality & Zero Discrimination </p>
                            <p>• Banning Child & Forced Labour</p>
                            <p>
                                • Maintaining Ethical & Safe Working Conditions
                            </p>
                            We take a firm stand against workplace misconduct,
                            reinforcing a zero tolerance approach to harassment,
                            discrimination, and exploitation-upholding dignity,
                            respect, and fairness for all.
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <div className="lg:w-[50%]">
                        <img
                            src={CommitmentImg}
                            alt="Innovation"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <section
                id="career"
                className="relative bg-contain bg-center flex items-center justify-center"
                style={{
                    backgroundImage: `url(${CareerPng})`,
                    aspectRatio: "16/5", // maintain image ratio
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50"></div>

                {/* Content */}
                <div className="relative z-10 text-white 2xl:w-[65%] lg:w-[70%] md:w-[75%] sm:w-[80%] w-[95%] md:px-4 px-1 md:py-4 py-1">
                    <h1 className="text-md sm:text-2xl lg:text-3xl 2xl:text-5xl font-medium mb-1 md:mb-6 w-full">
                        Explore a career at PANORAMA.
                    </h1>
                    <p className="text-[10px] sm:text-sm lg:text-lg leading-relaxed lg:mb-8 md:mb-5 mb-2">
                        Turn your job into a career at Panorama Exports. Learn,
                        grow, and work alongside driven minds. Join us—contact
                        HR for openings.
                    </p>

                    <div className="flex items-center gap-2 text-[10px] md:text-sm lg:text-lg">
                        <a
                            href="https://www.linkedin.com/company/panorama-exports/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="md:px-6 px-2 md:py-3 py-1 border border-white rounded-full
               hover:bg-white hover:text-black transition duration-300"
                        >
                            Follow us on LinkedIn
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Peoples;
