import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";
import InnovationThatLeads from "./InnovationThatLeads";
import StandardOfPerfection from "./StandardOfPerfection";
import InnovationBreadcrumb from "../../components/Innovation/InnovationBreadcrumb";
// import bgImage from "../../assets/Innovation/Header/frontbg.webp";
import bgImage from "../../assets/Innovation/Header/Header1.webp";

function Innovation() {
    const location = useLocation();

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    const { ref: innovationRef, inView: innovationLeadsInView } = useInView({
        threshold: 0.3, // 30% of innovation visible = considered "in view", this for breadcrums control............
    });
    const { ref: standardRef, inView: standardPerfectionInView } = useInView({
        threshold: 0.3, // same for standard for breadcrums control............
    });

    // Determine which breadcrumb is active
    const activeCrumb = innovationLeadsInView
        ? "Innovation that Leads"
        : standardPerfectionInView
            ? "Standard Of Perfection"
            : null;

    const textVariants = {
        hidden: { opacity: 0, x: "-40vw" },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 2, ease: "easeOut" },
        },
    };

    // Smooth scroll on hash change
    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const section = document.querySelector(location.hash);
                if (section) {
                    const yOffset = -80; // adjust based on your navbar/breadcrumb height
                    const y =
                        section.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    // Scroll to top when opening the page.....................
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    return (
        <div className="bg-[#fafafa] min-h-screen font-outfit text-gray-900 pb-20">
            {/* Header Spacer to account for fixed navbar */}
            <div className="w-full h-12 md:h-16 lg:h-20 bg-[#fafafa]"></div>
            
            <main className="max-w-[1700px] mx-auto px-4 md:px-8 lg:px-12">
                {/* Header Section */}
                <header className="flex flex-col items-center justify-center text-center mt-6 md:mt-12 mb-10 md:mb-16 w-full overflow-hidden">
                    <h1 
                        className="text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] font-light italic tracking-tight text-gray-700 mb-4 md:mb-6"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Innovation That Leads
                    </h1>
                    <p className="text-base md:text-lg lg:text-[1.15rem] font-light text-[#AD1E1E] max-w-[1200px] tracking-wide leading-relaxed text-justify md:text-center px-4">
                        At Panorama, innovation keeps us evolving while staying true to our craft. We continuously refine our processes, explore new materials, and strengthen our capabilities to meet the changing needs of global brands. We collaborate closely with design and development teams to translate ideas into production-ready garments, ensuring alignment from concept to delivery. By combining experience with forward thinking, we ensure our approach remains relevant, responsible, and future-ready.
                    </p>
                </header>

                {/* Banner Image Section (matching video layout in Mastery of Craft) */}
                <div className="w-full mx-auto mb-16 md:mb-28 rounded-2xl overflow-hidden shadow-md aspect-video relative group">
                    <img
                        src={bgImage}
                        alt="Innovation That Leads"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                </div>
            </main>

            {/* Breadcrumbs */}
            <InnovationBreadcrumb />

            <section id="innovation-leads" ref={innovationRef}>
                <InnovationThatLeads />
            </section>

            {/* Commented out to hide from current view, preserved for future use
            <section id="standard-perfection" ref={standardRef}>
                <StandardOfPerfection />
            </section>
            */}
        </div>
    );
}

export default Innovation;
