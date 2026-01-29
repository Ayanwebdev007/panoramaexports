import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const menuItems = [
        {
            title: "Home",
            path: "/",
            dropdown: []
        },
        {
            title: "Our Story",
            path: "#",
            dropdown: [
                { title: "Roots of Excellence", path: "/roots-of-excellence" },
                { title: "Vision & Value", path: "/vision-value" },
                { title: "Leadership", path: "/leadership" },
                { title: "Milestone Group", path: "/milestone-group" },
                { title: "Purpose", path: "/purpose" },
                // ...existing code...
            ]
        },
        {
            title: "Manufacturing",
            path: "/manufacturing",
            dropdown: [
                { title: "People", path: "/people" },
                { title: "Quality Control", path: "/manufacturing" }
            ]
        },
        {
            title: "Innovation",
            path: "/innovation",
            dropdown: []
        },
        {
            title: "Media",
            path: "/media",
            dropdown: [
                { title: "Press Releases", path: "/media" },
                { title: "News", path: "/media" },
                { title: "Podcasts", path: "/media" },
                { title: "Resources", path: "/media" }
            ]
        }
    ];

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            {/* Main Header */}
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">P</span>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">PANORAMA</h1>
                            <p className="text-sm text-gray-600">EXPORTS</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(index)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <span
                                    className="text-gray-800 hover:text-red-700 font-semibold transition-colors duration-200 cursor-pointer"
                                    onClick={() => setActiveDropdown(index)}
                                    onMouseEnter={() => setActiveDropdown(index)}
                                >
                                    {item.title}
                                </span>
                                
                                {/* Mega Dropdown for Our Story only */}
                                {item.title === "Our Story" && activeDropdown === index && (
                                    <div className="absolute top-full left-0 w-[32rem] bg-white shadow-xl border-t-4 border-blue-800 py-8 px-8 z-50">
                                        <div className="grid grid-cols-3 gap-6">
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    to={subItem.path}
                                                    className="bg-[#073281] text-white rounded-lg p-6 text-center font-semibold text-lg hover:bg-blue-900 transition-colors duration-200 flex flex-col items-center justify-center shadow-md"
                                                >
                                                    {subItem.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {/* Add your mobile menu implementation here if needed */}
        </header>
    );
}
