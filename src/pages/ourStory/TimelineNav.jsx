import React, { useEffect, useState } from "react";
import { milestones } from "./Milestones";

const TimelineNav = () => {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                        setActiveId(entry.target.id.replace("milestone-", ""));
                    }
                });
            },
            { 
                threshold: [0.1, 0.5],
                rootMargin: "-20% 0px -70% 0px"
            }
        );

        milestones.forEach((m) => {
            const el = document.getElementById(`milestone-${m.id}`);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(`milestone-${id}`);
        if (el) {
            const offset = 120; // Reduced offset for slimmer nav
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="sticky top-10 lg:top-12 z-40 bg-white border-y border-gray-100 py-3 overflow-x-auto whitespace-nowrap scrollbar-hide shadow-sm transition-all duration-300">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-20 flex justify-start md:justify-center items-center gap-6 md:gap-10">
                {milestones.map((m) => (
                    <button
                        key={m.id}
                        onClick={() => scrollTo(m.id)}
                        className={`text-[10px] md:text-[12px] tracking-[0.25em] font-light transition-all duration-300 relative pb-1 group font-outfit ${
                            activeId === m.id 
                            ? "text-black font-normal" 
                            : "text-[#5a86a9] hover:text-black"
                        }`}
                    >
                        {m.year}
                        <div 
                            className={`absolute bottom-0 left-0 h-[1.5px] bg-black transition-all duration-300 ${
                                activeId === m.id ? "w-full" : "w-0 group-hover:w-1/2"
                            }`}
                        ></div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TimelineNav;
