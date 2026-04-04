import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { X, Mail, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import Mega-Menu Images
import legacyImg from "../assets/Threads of Legacy.JPG";
import mfgImg from "../assets/Manufacturing/Unit1.webp";
import innovationImg from "../assets/Handcrafted-Luxury.webp";
import lookbookImg from "../assets/lookbook1.webp";
import peopleImg from "../assets/people-hero-demo.webp";
import esgImg from "../assets/ESG.webp";
import mediaImg from "../assets/AMIT FINAL.jpeg";

export default function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const timeoutRef = useRef(null);
    const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

    const navItems = [
        { label: "HOME", path: "/" },
        {
            label: "OUR STORY",
            path: "/ourstory",
            featuredImage: legacyImg,
            subItems: [
                { label: "Discover Panorama", path: "/ourstory" },
                { label: "Our Values", path: "/vision-values" },
                { label: "Our Journey", path: "/ourstory" },
                { label: "Leadership", path: "/vision-values#leadership" },
            ],
        },
        {
            label: "MASTERY OF CRAFT",
            path: "/craftedprecision",
            featuredImage: mfgImg,
            subItems: [
                { label: "Material Excellence", path: "/art-thread" },
                { label: "Design & Development", path: "/craftedprecision" },
                { label: "Technical Mastery", path: "/mfg-excellence" },
                { label: "Quality Assurance", path: "/exacting-standards" },
            ],
        },
        {
            label: "INNOVATION THAT LEADS",
            path: "/innovation",
            featuredImage: innovationImg,
            subItems: [
                { label: "Digital Precision", path: "/innovation/innovationleads" },
                { label: "Weaving Brilliance", path: "/innovation/standardperfection" },
                { label: "Operational Intelligence", path: "/innovation" },
                { label: "Evolving Methodologies", path: "/innovation" },
                { label: "Refined Craft", path: "/innovation/handcraftedluxury" },
            ],
        },
        { label: "LOOK BOOK", path: "/lookbook", featuredImage: lookbookImg },
        { label: "PANORAMA FAMILY", path: "/peoples", featuredImage: peopleImg },
        { label: "RESPONSIBILITY", path: "/responsibility", featuredImage: esgImg },
        { label: "MEDIA", path: "/media", featuredImage: mediaImg },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMouseEnter = (index) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        // Open menu for items with subItems (Story, Precision, Innovation)
        if (navItems[index].subItems) {
            setHoveredIndex(index);
            setIsMenuOpen(true);
        } else {
            setIsMenuOpen(false);
        }
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsMenuOpen(false);
            setHoveredIndex(null);
        }, 300);
    };

    return (
        <nav
            onMouseLeave={handleMouseLeave}
            className="bg-white border-b border-gray-100 shadow-sm fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full lg:h-12 h-10"
        >
            <div className="w-full px-4 lg:px-8 xl:px-12 h-full flex items-center">
                
                {/* Desktop: 3-Column Split */}
                <div className="hidden lg:flex w-full items-center h-full">
                    
                    {/* Left: Nav Links */}
                    <div className="flex-1 flex justify-start items-center gap-x-1 xl:gap-x-2">
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                onMouseEnter={() => handleMouseEnter(index)}
                                className={`text-gray-900 text-[10px] xl:text-[11px] font-medium tracking-[0.1em] hover:opacity-60 transition-all duration-300 uppercase whitespace-nowrap py-4 px-1.5 ${hoveredIndex === index ? "opacity-60" : ""}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>



                    {/* Right: Contact */}
                    <div className="flex-1 flex justify-end items-center gap-x-4 xl:gap-x-6">
                        <button
                            onClick={() => setIsNewsletterOpen(true)}
                            className="text-gray-900 text-[10px] xl:text-[11px] font-medium tracking-[0.1em] hover:opacity-60 transition-all duration-300 uppercase whitespace-nowrap"
                        >
                            Newsletter
                        </button>
                        <Link
                            to="/contactus"
                            className="text-gray-900 text-[10px] xl:text-[11px] font-medium tracking-[0.1em] hover:opacity-60 transition-all duration-300 uppercase whitespace-nowrap"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Mobile View */}
                <div className="lg:hidden flex justify-between items-center w-full h-full">

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-900 p-2"
                    >
                        <FaBars size={22} />
                    </button>
                </div>
            </div>

            {/* Mega Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        onMouseEnter={() => {
                            if (timeoutRef.current) clearTimeout(timeoutRef.current);
                        }}
                        className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-2xl overflow-hidden"
                    >
                        {/* Streamlined Top-Aligned 3-Column Layout */}
                        <div className="w-full px-4 lg:px-8 xl:px-12 py-8">
                            <div className="flex w-full divide-x divide-gray-100">
                                {navItems.filter(item => item.subItems).map((item, index, filteredArr) => {
                                    const fullIndex = navItems.findIndex(ni => ni.label === item.label);
                                    const isFirst = index === 0;
                                    const isLast = index === filteredArr.length - 1;
                                    
                                    return (
                                        <div 
                                            key={index} 
                                            className={`flex-1 flex flex-col justify-start min-h-[150px] transition-opacity duration-300 ${hoveredIndex === fullIndex ? "opacity-100" : "opacity-40"} 
                                                ${isFirst ? "pr-8 xl:pr-12 pl-0" : isLast ? "pl-8 xl:pl-12 pr-0" : "px-8 xl:px-12"}`}
                                        >
                                            <div className="flex items-start justify-between gap-4 pt-1">
                                                {/* Sub-item List (Black Text, No Caps, Larger Font) */}
                                                <div className="space-y-3">
                                                    <ul className="space-y-3">
                                                        {item.subItems.map((sub, idx) => (
                                                            <li key={idx}>
                                                                <Link
                                                                    to={sub.path}
                                                                    className="text-gray-900 hover:opacity-60 transition-colors text-[12px] font-medium tracking-wide block whitespace-nowrap"
                                                                >
                                                                    {sub.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Landscape Featured Image (Conditional Grayscale) */}
                                                <div className="w-[170px] xl:w-[210px] aspect-[4/3] overflow-hidden rounded-[1px] relative group flex-shrink-0">
                                                    <img
                                                        src={item.featuredImage}
                                                        alt={item.label}
                                                        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${hoveredIndex === fullIndex ? "grayscale-0" : "grayscale"}`}
                                                    />
                                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-white">
                    <button
                        className="absolute top-4 right-4 text-gray-900 text-2xl"
                        onClick={() => setIsOpen(false)}
                    >
                        ✕
                    </button>
                    <ul className="flex flex-col items-center justify-center h-full space-y-6 text-gray-900 text-lg uppercase font-medium tracking-widest">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path} onClick={() => setIsOpen(false)}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <button 
                                onClick={() => { setIsOpen(false); setIsNewsletterOpen(true); }}
                                className="uppercase font-medium tracking-widest text-gray-900"
                            >
                                Newsletter
                            </button>
                        </li>
                        <li>
                            <Link to="/contactus" onClick={() => setIsOpen(false)}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
            {/* Newsletter Popup */}
            <NewsletterPopup 
                isOpen={isNewsletterOpen} 
                onClose={() => setIsNewsletterOpen(false)} 
            />
        </nav>
    );
}

function NewsletterPopup({ isOpen, onClose }) {
    const [isSubscribed, setIsSubscribed] = useState(false);

    // Reset subscription state when modal opens
    useEffect(() => {
        if (isOpen) setIsSubscribed(false);
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="bg-white w-full max-w-5xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row h-auto max-h-[95vh] md:h-[550px]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Left side: Image */}
                        <div className="hidden md:block w-2/5 relative h-full">
                            <img
                                src={legacyImg}
                                alt="Panorama"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/5"></div>
                        </div>

                        {/* Right side: Form */}
                        <div className="w-full md:w-3/5 p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col relative overflow-hidden justify-center min-h-[400px]">
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors z-10"
                            >
                                <X size={28} strokeWidth={1} />
                            </button>

                            <AnimatePresence mode="wait">
                                {isSubscribed ? (
                                    <motion.div 
                                        key="success"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="h-full flex flex-col items-center justify-center text-center space-y-8"
                                    >
                                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-900 border border-gray-100">
                                            <Check size={36} strokeWidth={1} />
                                        </div>
                                        <div className="space-y-4">
                                            <h2 className="text-3xl font-light tracking-tight text-gray-900 uppercase font-outfit">Welcome</h2>
                                            <p className="text-[14px] text-gray-500 font-light max-w-xs mx-auto leading-relaxed">
                                                Successfully subscribed! You are now a member of the Panorama inner circle.
                                            </p>
                                        </div>
                                        <button
                                            onClick={onClose}
                                            className="bg-gray-900 text-white px-10 py-4 text-[11px] font-medium tracking-[0.25em] uppercase hover:bg-black transition-all duration-300 shadow-xl"
                                        >
                                            Continue
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div 
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="space-y-10 md:space-y-12"
                                    >
                                        <div className="space-y-8 md:space-y-10 text-center md:text-left">
                                            <span className="text-[10px] tracking-[0.25em] font-medium text-gray-400 uppercase block">Newsletter</span>
                                            <div className="space-y-3">
                                                <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900 leading-tight font-outfit">
                                                    Discover Panorama
                                                </h2>
                                                <p className="text-[13px] text-gray-500 font-light leading-relaxed max-w-sm mx-auto md:mx-0">
                                                    Subscribe to receive updates and be inspired by the new collections.
                                                </p>
                                                <p className="text-[10px] text-gray-400 italic">Fields marked with an asterisk (*) are required</p>
                                            </div>
                                        </div>

                                        <form
                                            className="space-y-8 md:space-y-10"
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                setIsSubscribed(true);
                                            }}
                                        >
                                            <div className="space-y-2">
                                                <label className="text-[11px] font-medium tracking-[0.15em] text-gray-900 uppercase">
                                                    e-mail *
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter e-mail"
                                                    className="w-full px-0 py-3 border-b border-gray-200 bg-transparent text-sm focus:outline-none focus:border-gray-900 transition-colors placeholder:text-gray-300 rounded-none font-light"
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-6 md:space-y-8">
                                                <button
                                                    type="submit"
                                                    className="w-full bg-[#1A1A1A] text-white py-5 text-[11px] font-medium tracking-[0.25em] uppercase hover:bg-black transition-all duration-500 flex items-center justify-center gap-3 shadow-lg"
                                                >
                                                    <Mail size={16} strokeWidth={1.5} />
                                                    SUBSCRIBE TO NEWSLETTER
                                                </button>

                                                <div className="space-y-4 text-center md:text-left">
                                                    <p className="text-[11px] text-gray-400 font-light leading-relaxed">
                                                        By entering your e-mail, you agree to receive Panorama communications. For more, see our <span className="underline cursor-pointer hover:text-gray-600 transition-colors">Privacy Policy</span>.
                                                    </p>
                                                </div>
                                            </div>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
