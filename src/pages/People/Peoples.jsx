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
import wd1 from "../../assets/WD1.webp";
import wd2 from "../../assets/WD2.webp";
import wd3 from "../../assets/WD3.webp";
import testmon1 from "../../assets/testmon1.JPG";
import testmon2 from "../../assets/testmon2.JPG";
import testmon3 from "../../assets/testmon3.JPG";
import testmon4 from "../../assets/testmon4.jpg";
import GSR from "../../assets/GSR.jpg";

import TeamworkImage from "../../assets/People/TeamWork1.webp";
import ForwardThinkingImage from "../../assets/People/ForwardThinking1.webp";
import SpeedActionImage from "../../assets/People/SpeedAction1.webp";
import CustomerCentricityImage from "../../assets/People/CustomerCentricity1.webp";

import PeopleHeroPng from "../../assets/shivaan and sidharth new.webp";
import CareerPng from "../../assets/People/Career.webp";

const crumbs = [
    { label: "Our Strength", path: "#our-strength" },
    { label: "Life at Panorama", path: "#life-at-panorama" },
    { label: "Commitment", path: "#commitment" },
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

const testimonials = [
    {
        id: 1,
        name: "Mohit Babbar",
        designation: "Senior Merchandiser",
        department: "",
        image: testmon1,
        text: "As an employee, I am proud to be part of a company known for its integrity, quality, and commitment to excellence. The organization maintains a strong reputation by valuing both its customers and employees. Working in this company has shown me its dedication to high standards and customer satisfaction. Its positive work culture and reliability have helped build a strong reputation in the industry. I am proud to work for a company that is respected for its professionalism, quality service, and strong commitment to customer satisfaction."
    },
    {
        id: 2,
        name: "Kanika Gupta",
        designation: "Digital Marketing – Brand Communication Lead",
        department: "Designer (Women's essential-wear)",
        image: testmon2,
        text: "My journey has allowed me to work at the intersection of creativity and strategy. From shaping brand communication through digital platforms to contributing to also being a designer for women's essential-wear , I’ve had the opportunity to express creativity while building meaningful brand narratives. The environment encourages innovation, collaboration, and continuous learning, making it a rewarding space to grow both professionally and creatively."
    },
    {
        id: 3,
        name: "Mithun Jana",
        designation: "Sr. PD Head – Ladieswear",
        department: "",
        image: testmon4,
        text: "My 18-year journey with Panorama Exports has been both rewarding and inspiring. Since joining in 2008, I have had the opportunity to contribute to the growth of the Ladieswear division while continuously evolving with the industry. The trust, collaboration, and strong team culture here have allowed me to push creative boundaries and deliver quality product development year after year. Panorama truly values dedication and provides an environment where long-term careers can thrive."
    },
    {
        id: 4,
        name: "Gaurav Singh Rawat",
        designation: "Head Of Sampling",
        department: "",
        image: GSR,
        text: "My 20-year journey & being the Head of Sampling, has been an inspiring experience. Watching our organization grow into a global leader fills me with immense pride. It stands as a testament to our shared vision, commitment, and the power of teamwork. I truly believe great teams always achieve great victories.",
        objectPosition: "object-center"
    }
];

function Peoples() {
    const images = [wd1, wd2, wd3, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26];
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
        <div className="font-outfit overflow-x-hidden">
            <section className="bg-white">
                <div className="w-full h-10 md:h-12 lg:h-20 bg-gray-900 shadow-inner"></div>


                {/* New Premium Hero Section (Arvind Style) */}
                <div className="w-full bg-white lg:pt-[250px] md:pt-[180px] pt-32 pb-12 overflow-visible">
                    <div className="w-[90%] mx-auto max-w-[1400px] relative">

                        {/* The Large Grey Background Box */}
                        <motion.div
                            className="bg-gradient-to-br from-[#e5e5e5] to-[#d4d4d4] rounded-2xl md:rounded-[40px] relative z-10 border border-black/5 w-full"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex flex-col lg:flex-row items-center justify-end px-6 pt-10 md:pt-14 pb-6 md:pb-8 lg:px-24 min-h-[280px] md:min-h-[350px]">

                                {/* Content Box - Significantly narrowed to perfectly clear the PNG */}
                                <div className="w-full lg:w-[38%] space-y-4 md:space-y-8 z-30 mr-4">
                                    <div className="space-y-2">
                                        <h1 className="text-lg md:text-xl lg:text-2xl font-light text-gray-800 tracking-tight leading-none whitespace-nowrap">
                                            Shivaan Sahni & Sidharth Sahni
                                        </h1>
                                        <p className="text-gray-500 text-sm md:text-lg font-light tracking-widest uppercase">
                                            Executive Directors
                                        </p>
                                    </div>

                                    <p className="text-gray-600 text-[10px] md:text-base md:leading-relaxed font-light text-justify max-w-sm lg:max-w-md">
                                        We define leadership through empowerment — by cultivating creativity, collaborative partnerships, and embracing global opportunities. Our people are at the heart of this journey, growing with us as we set new benchmarks and continue to lead with purpose, ambition, innovation and excellence across every collection we create.
                                    </p>
                                </div>
                            </div>

                            <motion.div
                                className="absolute left-[2%] lg:left-[4%] bottom-0 w-[60%] sm:w-[50%] lg:w-[44%] z-20 pointer-events-none"
                                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <img
                                    src={PeopleHeroPng}
                                    alt="Shivaan and Sidharth Sahni"
                                    className="w-full h-auto object-contain origin-bottom-left scale-[1.0] md:scale-[1.05] lg:scale-[1.15]"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
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
                                className={`hover:underline md:text-sm lg:text-lg sm:my-1 ${activeCrumb === crumb.path.substring(1)
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
                <div className="w-[90%] mx-auto md:py-16 py-5 px-2 sm:px-6 md:px-10 lg:px-20">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-light font-outfit text-[#01276a]">
                        People
                    </h2>
                    <p className="text-sm sm:text-md lg:text-lg py-3 md:mt-5 mt-2 text-justify leading-relaxed font-light">
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
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-light text-center text-blue-950 font-outfit">
                            Our Strength
                        </h2>
                        <p className="text-[10px] sm:text-[12px] md:text-sm 2xl:text-lg md:mt-3 mt-1 sm:mb-3 text-gray-600 ml-1 font-light text-justify">
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
                <div className="pb-5 md:pb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-light font-outfit text-[#01276a]">
                        Life at Panorama
                    </h2>
                </div>
                <div className="w-full relative px-10 md:px-14">
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
                            1024: { slidesPerView: 4 },
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
                <div className="w-[90%] mx-auto md:py-16 py-5 px-2 sm:px-6 md:px-10 lg:px-20">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-light font-outfit text-[#01276a]">
                        We Believe In
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
                            <div className="absolute bottom-0 h-[50%] w-full py-[10%] bg-gradient-to-t from-blue-950/90 via-blue-950/80 via-blue-950/50 via-blue-950/40 to-transparent transition-all duration-500 flex flex-col justify-end p-6">
                                <p className="text-white text-md md:text-lg lg:text-xl xl:text-xl font-semibold mx-[1%] text-center whitespace-nowrap">
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
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-light text-center text-blue-950 font-outfit">
                            Commitment to Care & Compliance
                        </h2>
                        <div className="text-[10px] sm:text-[12px] md:text-sm 2xl:text-lg md:mt-3 mt-1 sm:mb-3 text-gray-600 ml-1 font-light text-justify">
                            Panorama fosters a culture of accountability,
                            ensuring rigorous compliance with global labour
                            laws, buyer mandates, and ethical business
                            practices. Our unwavering commitment to workers’
                            rights and brand protection is anchored in:
                            <p className="font-light">• Ensuring Workplace Safety & Fair Wages </p>
                            <p className="font-light">• Promoting Equality & Zero Discrimination </p>
                            <p className="font-light">• Banning Child & Forced Labour</p>
                            <p className="font-light">
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

            {/* Employee Testimonials Section */}
            <section className="w-full bg-gray-50 py-16 md:py-24">
                <div className="w-[90%] mx-auto px-2 sm:px-6 md:px-10 lg:px-20">
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-light font-outfit text-[#01276a] mb-4">
                            Employee Testimonials
                        </h2>
                    </div>

                    <div className="relative px-10 md:px-14">
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={1}
                            spaceBetween={30}
                            navigation={{
                                nextEl: ".testimonials-next",
                                prevEl: ".testimonials-prev",
                            }}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                                1150: { slidesPerView: 3 },
                            }}
                            className="pb-12"
                        >
                            {testimonials.map((item) => (
                                <SwiperSlide key={item.id} className="!h-auto">
                                    <div className="bg-white rounded-2xl p-6 h-full flex flex-col border border-[#01276a]/40 relative">
                                        {/* Avatar */}
                                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border-2 border-white shadow-lg mx-auto md:mx-0">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className={`w-full h-full object-cover ${item.id === 2 ? "object-top scale-110" : ""} ${item.objectPosition || ""}`}
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-grow mb-4">
                                            <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light italic">
                                                "{item.text}"
                                            </p>
                                        </div>

                                        {/* Footer */}
                                        <div className="mt-auto pt-4 border-t border-gray-100">
                                            <h4 className="text-[#01276a] font-semibold text-lg">{item.name}</h4>
                                            <p className="text-gray-600 text-sm font-medium">{item.designation}</p>
                                            <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">{item.department}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation */}
                        <button className="testimonials-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 text-[#01276a] hover:text-blue-400 transition-colors">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        <button className="testimonials-next absolute right-0 top-1/2 -translate-y-1/2 z-10 text-[#01276a] hover:text-blue-400 transition-colors">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M11 18l6-6-6-6" />
                            </svg>
                        </button>
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
        </div>
    );
}

export default Peoples;
