import React from "react";
import { Link, useLocation } from "react-router-dom";

const crumbs = [
    { label: "Digital Precision", path: "/innovation#digital-precision" },
    { label: "Weaving Brilliance", path: "/innovation#weaving-brilliance" },
    { label: "Operational Intelligence", path: "/innovation#operational-intelligence" },
    { label: "Evolving Methodologies", path: "/innovation#evolving-methodologies" },
    { label: "Refined Craft", path: "/innovation#refined-craft" },
];

export default function InnovationBreadcrumb() {
    const location = useLocation();
    const currentPath = location.pathname;

    // Determine active label based on pathname and hash
    const getActiveLabel = () => {
        const hash = location.hash;
        if (hash === "#digital-precision") return "Digital Precision";
        if (hash === "#weaving-brilliance") return "Weaving Brilliance";
        if (hash === "#operational-intelligence") return "Operational Intelligence";
        if (hash === "#evolving-methodologies") return "Evolving Methodologies";
        if (hash === "#refined-craft") return "Refined Craft";

        // Fallback checks if path is accessed without a hash
        if (currentPath === "/innovation" || currentPath === "/innovation/") {
            return "Digital Precision";
        }
        return "";
    };

    const activeLabel = getActiveLabel();

    return (
        <div className="hidden md:block sticky lg:top-16 md:top-12 z-40 border-b border-gray-100 bg-white py-3.5 transition-all duration-300 shadow-sm">
            <div className="w-[90%] mx-auto px-6 md:px-20 flex items-center justify-center gap-x-6 md:gap-x-8 lg:gap-x-12">
                {crumbs.map((crumb, index) => {
                    const isActive = activeLabel === crumb.label;
                    return (
                        <span key={index} className="flex items-center justify-center">
                            <Link
                                to={crumb.path}
                                className={`uppercase text-[11px] md:text-[12px] lg:text-[13px] tracking-[0.15em] font-outfit font-light transition-all duration-300 ${
                                    isActive
                                        ? "text-[#AD1E1E] font-medium"
                                        : "text-gray-400 hover:text-black"
                                }`}
                            >
                                {crumb.label}
                            </Link>
                        </span>
                    );
                })}
            </div>
        </div>
    );
}
