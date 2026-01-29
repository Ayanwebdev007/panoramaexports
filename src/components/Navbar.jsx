import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
    const location = useLocation();

    const navItems = [
        {
            label: "HOME",
            path: "/",
        },
        {
            label: "OUR STORY",
            path: "/ourstory#legacy",
            subItems: [
                {
                    label: "Legacy",
                    path: "/ourstory#legacy",
                    image: "",
                },
                {
                    label: "Vision & Values",
                    path: "/vision-values",
                    image: "",
                },
                {
                    label: "Core Values",
                    path: "/vision-values#core-values",
                    image: "",
                },
                {
                    label: "Leadership",
                    path: "/vision-values#leadership",
                    image: "",
                },
                {
                    label: "Milestones",
                    path: "/ourstory#milestones",
                    image: "",
                },
                {
                    label: "Our Purpose",
                    path: "/our-purpose",
                    image: "",
                },
            ],
        },
        {
            label: "CRAFTED PRECISION",
            path: "/craftedprecision",
            subItems: [
                {
                    label: "Manufacturing Excellence",
                    path: "/mfg-excellence",
                    image: "",
                },
                {
                    label: "Smart Warehousing",
                    path: "/smart-warehousing",
                    image: "",
                },
                {
                    label: "Art in Every Thread",
                    path: "/art-thread",
                    image: "",
                },
                {
                    label: "Exacting Standards",
                    path: "/exacting-standards",
                    image: "",
                },
                {
                    label: "Sustainable Designs",
                    path: "/sustainable-designs",
                    image: "",
                },
                {
                    label: "Advanced Washing",
                    path: "/advanced-washing",
                    image: "",
                },
                {
                    label: "Adaptive Capacity",
                    path: "/adaptive-capacity",
                    image: "",
                },
            ],
        },
        {
            label: "INNOVATION",
            path: "/innovation",
            subItems: [
                {
                    label: "Innovation that Leads",
                    path: "/innovation#innovation-leads",
                    image: "",
                },
                {
                    label: "Standard Of Perfection",
                    path: "/innovation#standard-perfection",
                    image: "",
                },
                {
                    label: "Handcrafted Luxury",
                    path: "/innovation#handcrafted-luxury",
                    image: "",
                },
            ],
        },
        {
            label: "LOOK BOOK",
            path: "/lookbook",
        },
        {
            label: "PEOPLE",
            path: "/peoples",
        },
        {
            label: "RESPONSIBILITY",
            path: "/responsibility",
        },
        {
            label: "MEDIA",
            path: "/media",
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`${
                scrolled ? "bg-white" : "bg-transparent backdrop-blur-md"
            } shadow-md lg:h-20 md:h-12 h-10 fixed top-0 left-0 right-0 z-50 transition-colors duration-500`}
        >
            <div className=" mx-auto xl:px-4 px-2 lg:h-20 md:h-12 h-10 flex items-center justify-end xl:gap-3 gap-2">
                {/* Logo */}
                {/* <Link
                    to="/"
                    className="flex items-center h-full justify-center 2xl:w-[30%] xl:w-[20%] w-[15%]"
                >
                    <img
                        src="/panoramalogo.jpg"
                        alt="Panorama Exports Logo"
                        className="2xl:h-24 sm:h-20 max-h-20 w-auto object-contain"
                    />
                </Link> */}

                {/* Navigation Links */}
                <ul className="xl:w-[80%] w-[90%] hidden lg:flex xl:gap-8 gap-6 justify-end items-center relative text-white 2xl:text-base text-sm mr-5">
                    {navItems.map((item, index) => {
                        // Skip rendering if item is Home and current path is "/"
                        if (
                            item.label === "HOME" &&
                            location.pathname === "/"
                        ) {
                            return null;
                        }

                        return (
                            <li key={index} className="relative group">
                                <Link
                                    to={item.path}
                                    className={`${
                                        scrolled
                                            ? "text-[#073281] hover:text-[#073281]"
                                            : "text-white hover:text-red-300"
                                    } transition-colors duration-500 font-medium hover:underline underline-offset-4`}
                                >
                                    {item.label}
                                </Link>

                                {item.subItems && (
                                    <ul className="absolute left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col shadow-lg rounded-sm text-base z-10 w-[220px]">
                                        <div
                                            className={`flex justify-center xl:text-2xl text-lg ${
                                                scrolled
                                                    ? "text-[#073281] hover:text-[#073281]"
                                                    : "text-white hover:text-red-300"
                                            } transition-colors duration-500`}
                                        >
                                            <IoMdArrowDropdown />
                                        </div>
                                        <div className="bg-[#beaf8e]/70 text-white rounded-sm grid grid-cols-1 border-t">
                                            {item.subItems.map(
                                                (subItem, subIndex) => (
                                                    <li
                                                        key={subIndex}
                                                        className="hover:bg-[#beaf8e] hover:text-white px-2 whitespace-nowrap border-b"
                                                    >
                                                        <Link to={subItem.path}>
                                                            <h3 className="py-2">
                                                                {subItem.label}
                                                            </h3>
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </div>
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>

                <div className={`lg:hidden flex`}>
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="px-2 rounded-md text-white ml-10"
                        aria-label="Toggle mobile menu"
                    >
                        <FaBars
                            className={`${
                                scrolled
                                    ? "text-[#073281] hover:text-[#073281]"
                                    : "text-white hover:text-red-300"
                            }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div>
                    {/* Close Button */}
                    <button
                        className="absolute top-12 right-4 text-white text-2xl hover:text-gray-300"
                        onClick={() => setIsOpen(false)}
                    >
                        ✕
                    </button>

                    <ul className="lg:hidden bg-black bg-opacity-80 px-4 py-6 space-y-4 text-white text-base">
                        <li>
                            <Link to="/" onClick={() => setIsOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/Ourstory"
                                onClick={() => setIsOpen(false)}
                            >
                                Our Story
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/vision-values"
                                onClick={() => setIsOpen(false)}
                            >
                                Vision & Values
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/our-purpose"
                                onClick={() => setIsOpen(false)}
                            >
                                Our Purpose
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/craftedprecision"
                                onClick={() => setIsOpen(false)}
                            >
                                Crafted Precision
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/innovation"
                                onClick={() => setIsOpen(false)}
                            >
                                Innovation
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/lookbook"
                                onClick={() => setIsOpen(false)}
                            >
                                Lookbook
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/peoples"
                                onClick={() => setIsOpen(false)}
                            >
                                People
                            </Link>
                        </li>

                        <li>
                            <Link to="/media" onClick={() => setIsOpen(false)}>
                                Media
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contactus"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
