import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    const footerLinks = {
        company: [
            { title: "Contact Us", path: "/contactus" },
            { title: "Our Story", path: "/ourstory" },
            // { title: "Privacy Notice", path: "/privacy" },
            // { title: "Terms & Conditions", path: "/terms" },
        ],
        careers: [
            { title: "Careers", path: "/peoples" },
            { title: "Leadership", path: "/vision-values#leadership" },
            { title: "Life at Panorama", path: "/peoples#life-at-panorama" },
        ],
        social: [
            { name: "Facebook", icon: "facebook", url: "#" },
            { name: "Instagram", icon: "instagram", url: "#" },
            { name: "X", icon: "x", url: "#" },
            { name: "LinkedIn", icon: "linkedin", url: "#" },
            { name: "YouTube", icon: "youtube", url: "#" },
        ],
    };

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 pt-10 pb-5">
                <div className="grid md:grid-cols-3 gap-8">
                    {/*Important Links */}
                    <div>
                        <h3 className="md:text-lg text-md font-semibold mb-4">
                            Company
                        </h3>
                        <ul className="space-y-2 text-sm md:text-md">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-blue-100 hover:text-white transition-colors duration-200"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Careers */}
                    <div>
                        <h3 className="md:text-lg text-md font-semibold mb-4">
                            Careers
                        </h3>
                        <ul className="space-y-2 text-sm md:text-md">
                            {footerLinks.careers.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-blue-100 hover:text-white transition-colors duration-200"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social & Newsletter */}
                    <div>
                        <h3 className="md:text-lg text-md font-semibold mb-4">
                            Connect With Us
                        </h3>

                        {/* Social Icons */}
                        <div className="flex space-x-4 mb-6">
                            {footerLinks.social.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-200"
                                    title={social.name}
                                >
                                    {social.icon === "facebook" && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-6 h-6 text-white"
                                        >
                                            <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.104C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" />
                                        </svg>
                                    )}
                                    {social.icon === "instagram" && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="w-6 h-6 text-white"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                        >
                                            <rect
                                                x="2"
                                                y="2"
                                                width="20"
                                                height="20"
                                                rx="5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            />
                                            <circle
                                                cx="17.5"
                                                cy="6.5"
                                                r="1.5"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    )}
                                    {social.icon === "x" && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-6 h-6 text-white"
                                        >
                                            <path d="M17.53 6.47a.75.75 0 0 0-1.06 0L12 10.94 7.53 6.47a.75.75 0 0 0-1.06 1.06L10.94 12l-4.47 4.47a.75.75 0 1 0 1.06 1.06L12 13.06l4.47 4.47a.75.75 0 0 0 1.06-1.06L13.06 12l4.47-4.47a.75.75 0 0 0 0-1.06z" />
                                        </svg>
                                    )}
                                    {social.icon === "linkedin" && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-6 h-6 text-white"
                                        >
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.001 3.601 4.601v5.595z" />
                                        </svg>
                                    )}
                                    {social.icon === "youtube" && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-6 h-6 text-white"
                                        >
                                            <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.633 3.5 12 3.5 12 3.5s-7.633 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 7.939 0 12 0 12s0 4.061.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.367 20.5 12 20.5 12 20.5s7.633 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 16.061 24 12 24 12s0-4.061-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z" />
                                        </svg>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="md:text-sm text-[12px] text-blue-100 mb-4 md:mb-0">
                            © 2025 All Rights Reserved. Panorama Exports Pvt.
                            Ltd.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 