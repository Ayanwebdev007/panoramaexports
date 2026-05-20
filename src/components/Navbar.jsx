import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { X, Mail, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import Mega-Menu Images
import storyImg from "../assets/our-story.webp";
import craftImg from "../assets/mastery-of-craft.webp";
import innovationSubImg from "../assets/innovation-dropdown.webp";
import lookbookImg from "../assets/lookbook1.webp";
import peopleImg from "../assets/people-hero-demo.webp";
import responsibilityDropdownImg from "../assets/responsibility dropdown.webp";
import mediaImg from "../assets/AMIT FINAL.jpeg";
import logoImg from "../assets/panorama final logo.png";

export default function Navbar({ setIsNewsletterOpen }) {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeMobileIndex, setActiveMobileIndex] = useState(null);
    const timeoutRef = useRef(null);

    const navItems = [
        {
            label: "OUR STORY",
            path: "/ourstory",
            featuredImage: storyImg,
            subItems: [
                { label: "Discover Panorama", path: "/ourstory" },
                { label: "Our Values", path: "/vision-values" },
                { label: "Our Journey", path: "/ourjourney" },
                { label: "Leadership", path: "/leadership" },
            ],
        },
        {
            label: "MASTERY OF CRAFT",
            path: "/craftedprecision",
            featuredImage: craftImg,
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
            featuredImage: innovationSubImg,
            subItems: [
                { label: "Digital Precision", path: "/innovation#digital-precision" },
                { label: "Weaving Brilliance", path: "/innovation#weaving-brilliance" },
                { label: "Operational Intelligence", path: "/innovation#operational-intelligence" },
                { label: "Evolving Methodologies", path: "/innovation#evolving-methodologies" },
                { label: "Refined Craft", path: "/innovation#refined-craft" },
            ],
        },
        {
            label: "RESPONSIBILITY",
            path: "/responsibility",
            featuredImage: responsibilityDropdownImg,
            subItems: [
                { label: "Responsible Craft", path: "/responsibility#responsible-craft" },
                { label: "Certifications", path: "/responsibility#certifications" },
                { label: "Corporate Social Responsibility", path: "/responsibility#csr" },
            ],
        },
        { label: "LOOK BOOK", path: "/lookbook", featuredImage: lookbookImg },
        { label: "PANORAMA FAMILY", path: "/peoples", featuredImage: peopleImg },
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
            className="bg-white border-b border-gray-100 shadow-sm fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full lg:h-16 h-12"
        >
            <div className="w-full px-4 lg:px-8 xl:px-12 h-full flex items-center">
                
                {/* Desktop: 3-Column Split (Left, Center, Right) */}
                <div className="hidden lg:flex w-full items-center h-full">
                    
                    {/* Left: Nav Links (First 4) */}
                    <div className="flex-1 flex justify-start items-center gap-x-1 xl:gap-x-2">
                        {navItems.slice(0, 4).map((item, index) => {
                            const hasSubItems = !!item.subItems;
                            return hasSubItems ? (
                                <button
                                    key={index}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (hoveredIndex === index) {
                                            setIsMenuOpen(!isMenuOpen);
                                        } else {
                                            handleMouseEnter(index);
                                        }
                                    }}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    className={`text-[#AD1E1E] text-[10px] xl:text-[11px] font-medium tracking-[0.1em] hover:text-black transition-all duration-300 uppercase whitespace-nowrap py-4 px-1.5 focus:outline-none ${hoveredIndex === index ? "opacity-60" : ""}`}
                                >
                                    {item.label}
                                </button>
                            ) : (
                                <Link
                                    key={index}
                                    to={item.path}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    className={`text-[#AD1E1E] text-[10px] xl:text-[11px] font-medium tracking-[0.1em] hover:text-black transition-all duration-300 uppercase whitespace-nowrap py-4 px-1.5 ${hoveredIndex === index ? "opacity-60" : ""}`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Center: Logo */}
                    <div className="flex-none flex justify-center items-center px-6">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logoImg}
                                alt="Panorama Exports Logo"
                                className="h-10 lg:h-14 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Right: Remaining Nav + Contact */}
                    <div className="flex-1 flex justify-end items-center gap-x-2 xl:gap-x-3">
                        {navItems.slice(4).map((item, index) => {
                            const actualIndex = index + 4;
                            const hasSubItems = !!item.subItems;
                            return hasSubItems ? (
                                <button
                                    key={actualIndex}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (hoveredIndex === actualIndex) {
                                            setIsMenuOpen(!isMenuOpen);
                                        } else {
                                            handleMouseEnter(actualIndex);
                                        }
                                    }}
                                    onMouseEnter={() => handleMouseEnter(actualIndex)}
                                    className={`text-[#AD1E1E] text-[10px] xl:text-[11px] font-medium tracking-[0.1em] hover:text-black transition-all duration-300 uppercase whitespace-nowrap py-4 px-1.5 focus:outline-none ${hoveredIndex === actualIndex ? "opacity-60" : ""}`}
                                >
                                    {item.label}
                                </button>
                            ) : (
                                <Link
                                    key={actualIndex}
                                    to={item.path}
                                    onMouseEnter={() => handleMouseEnter(actualIndex)}
                                    className={`text-[#AD1E1E] text-[10px] xl:text-[11px] font-medium tracking-[0.1em] hover:text-black transition-all duration-300 uppercase whitespace-nowrap py-4 px-1.5 ${hoveredIndex === actualIndex ? "opacity-60" : ""}`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        <div className="h-4 w-[1px] bg-gray-200 mx-2"></div>
                        <div className="flex items-center gap-x-2 xl:gap-x-3 text-[#AD1E1E] text-[10px] xl:text-[11px] font-medium tracking-[0.1em] uppercase whitespace-nowrap">
                            <Link
                                to="/media"
                                className="hover:text-black transition-all duration-300"
                            >
                                Media
                            </Link>
                            <Link
                                to="/contactus"
                                className="hover:text-black transition-all duration-300"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile View */}
                <div className="lg:hidden flex items-center justify-between w-full h-full relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#AD1E1E] p-2"
                    >
                        <FaBars size={22} />
                    </button>

                    {/* Centered Mobile Logo */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logoImg}
                                alt="Panorama Exports Logo"
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    <div className="w-10"></div> {/* Spacer for symmetry */}
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
                        {/* Streamlined Top-Aligned 4-Column Layout with Spacious Sliding Animation */}
                        <div className="w-full px-4 lg:px-8 xl:px-12 py-8 overflow-hidden">
                            <motion.div 
                                className="flex w-[133.33%] divide-x divide-gray-100"
                                style={{ willChange: "transform" }}
                                animate={{ 
                                    x: hoveredIndex === 0 ? "0%" : 
                                       hoveredIndex === 1 ? "-25%" : 
                                       hoveredIndex === 2 ? "-50%" : 
                                       hoveredIndex === 3 ? "-75%" : "0%"
                                }}
                                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                            >
                                {navItems.filter(item => item.subItems).map((item, index, filteredArr) => {
                                    const fullIndex = navItems.findIndex(ni => ni.label === item.label);
                                    const isFirst = index === 0;
                                    const isLast = index === filteredArr.length - 1;
                                    
                                    return (
                                        <div 
                                            key={index} 
                                            className={`flex-none w-1/4 flex flex-col justify-start min-h-[150px] transition-opacity duration-300 ${hoveredIndex === fullIndex ? "opacity-100" : "opacity-40"} 
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
                                                                    className="text-gray-900 hover:text-[#AD1E1E] transition-colors text-[14px] font-medium tracking-wide block whitespace-nowrap"
                                                                >
                                                                    {sub.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Landscape Featured Image (Conditional Grayscale) */}
                                                <div className="w-[170px] xl:w-[210px] aspect-[4/3] overflow-hidden rounded-[1px] relative group flex-shrink-0"
                                                     style={{ willChange: "transform, opacity" }}>
                                                    <img
                                                        src={item.featuredImage}
                                                        alt={item.label}
                                                        decoding="async"
                                                        loading="eager"
                                                        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${hoveredIndex === fullIndex ? "grayscale-0" : "grayscale"}`}
                                                    />
                                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
                    <button
                        className="absolute top-4 right-4 text-gray-900 text-2xl z-10"
                        onClick={() => {
                            setIsOpen(false);
                            setActiveMobileIndex(null);
                        }}
                    >
                        ✕
                    </button>
                    <ul className="flex flex-col items-center justify-center min-h-full py-20 space-y-6 text-[#AD1E1E] text-lg uppercase font-medium tracking-widest w-[80%] mx-auto">
                        {navItems.map((item, index) => {
                            const hasSubItems = !!item.subItems;
                            const isMobileActive = activeMobileIndex === index;
                            return (
                                <li key={index} className="w-full text-center">
                                    {hasSubItems ? (
                                        <div className="flex flex-col items-center w-full">
                                            <button
                                                onClick={() => setActiveMobileIndex(isMobileActive ? null : index)}
                                                className="uppercase font-medium tracking-widest text-[#AD1E1E] hover:text-black transition-colors text-lg flex items-center justify-center gap-1 py-2 focus:outline-none w-full"
                                            >
                                                {item.label}
                                                <IoMdArrowDropdown 
                                                    className={`transition-transform duration-300 ${isMobileActive ? "rotate-180" : ""}`} 
                                                    size={20}
                                                />
                                            </button>
                                            
                                            {/* Sub-items accordion */}
                                            <AnimatePresence>
                                                {isMobileActive && (
                                                    <motion.ul
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="mt-2 space-y-3 bg-gray-50/50 py-3 rounded-md w-full text-center flex flex-col items-center"
                                                    >
                                                        {item.subItems.map((sub, idx) => (
                                                            <li key={idx} className="w-full">
                                                                <Link 
                                                                    to={sub.path} 
                                                                    onClick={() => {
                                                                        setIsOpen(false);
                                                                        setActiveMobileIndex(null);
                                                                    }}
                                                                    className="text-gray-700 hover:text-[#AD1E1E] transition-colors text-sm tracking-wide block py-1 font-light"
                                                                >
                                                                    {sub.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </motion.ul>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link 
                                            to={item.path} 
                                            onClick={() => setIsOpen(false)}
                                            className="uppercase font-medium tracking-widest text-[#AD1E1E] hover:text-black transition-colors text-lg block py-2"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                        <li className="w-full">
                            <button 
                                onClick={() => { 
                                    setIsOpen(false); 
                                    setActiveMobileIndex(null);
                                    setIsNewsletterOpen(true); 
                                }}
                                className="uppercase font-medium tracking-widest text-[#AD1E1E] hover:text-black transition-colors text-lg w-full py-2"
                            >
                                Newsletter
                            </button>
                        </li>
                        <li className="w-full">
                            <Link to="/contactus" onClick={() => setIsOpen(false)} className="uppercase font-medium tracking-widest text-[#AD1E1E] hover:text-black transition-colors text-lg block py-2">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
            {/* Newsletter Popup removed (moved to App.jsx) */}
        </nav>
    );
}
