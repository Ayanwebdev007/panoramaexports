import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import milestone images from milestones images folder
import Milestone1973 from "../../assets/milestones images/1973.webp";
import Milestone1980 from "../../assets/milestones images/1980.webp";
import Milestone1990 from "../../assets/milestones images/1990.webp";
import Milestone2000 from "../../assets/milestones images/2000.webp";
import Milestone2010 from "../../assets/milestones images/2010.webp";
import Milestone2024 from "../../assets/milestones images/2024.webp";
import Milestone2025 from "../../assets/milestones images/2025.webp";

export const milestones = [
    {
        id: "1973",
        year: "1973",
        title: "Founded",
        text: "Founded with a vision to bring Indian craft to a global audience.",
        image: Milestone1973,
    },
    {
        id: "1980s",
        year: "1980s",
        title: "Modern Technology",
        text: "Adopted modern technology, building a strong foundation for future-ready manufacturing.",
        image: Milestone1980,
    },
    {
        id: "1990s",
        year: "1990s",
        title: "International Expansion",
        text: "Expanded internationally, strengthening global partnerships and collaborations.",
        image: Milestone1990,
    },
    {
        id: "2000",
        year: "2000",
        title: "Scaling Operations",
        text: "Continued to scale operations while enhancing manufacturing capabilities and processes.",
        image: Milestone2000,
    },
    {
        id: "2010",
        year: "2010",
        title: "Advanced Manufacturing",
        text: "Established advanced manufacturing units in Faridabad, improving efficiency and delivery.",
        image: Milestone2010,
    },
    {
        id: "2024",
        year: "2024",
        title: "Infrastructure & Innovation",
        text: "Expanded capabilities with new infrastructure, strengthening production and innovation.\n\nWe have introduced ESG-led initiatives that bring together people, responsible processes, and strong partnerships to create long-term value for both society and the industry.",
        image: Milestone2024,
    },
    {
        id: "2025",
        year: "2025",
        title: "Noida Factory Launch",
        text: "Expanded with a new head office in Faridabad and a new factory in Noida, bringing together tradition and technology. From production to quality control, we create refined garments for the global market.\n\nPowered by 5,000+ skilled hands, we craft 12 million garments annually, strengthening our global reach with a new fabric warehouse.",
        image: Milestone2025,
    },
];

const MilestoneItem = ({ milestone, index }) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    });

    const isEven = index % 2 === 0;

    return (
        <div 
            id={`milestone-${milestone.id}`}
            ref={ref}
            className={`flex flex-col md:flex-row items-center justify-between mb-24 md:mb-40 last:mb-0 relative z-10 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
            }`}
        >
            {/* Connecting Vertical Line Segment (Desktop) */}
            <div 
                className={`hidden md:block absolute left-1/2 top-0 w-[2px] -translate-x-1/2 z-0 transition-colors duration-700 ease-in-out ${
                    inView ? "bg-[#AD1E1E]" : "bg-gray-100"
                }`}
                style={{
                    height: index === milestones.length - 1 ? "100%" : "calc(100% + 10rem)"
                }}
            />

            {/* Connecting Vertical Line Segment (Mobile) */}
            <div 
                className={`md:hidden absolute left-[-12px] top-0 w-[2px] z-0 transition-colors duration-700 ease-in-out ${
                    inView ? "bg-[#AD1E1E]" : "bg-gray-100"
                }`}
                style={{
                    height: index === milestones.length - 1 ? "100%" : "calc(100% + 6rem)"
                }}
            />

            {/* Image Side */}
            <motion.div 
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full md:w-[55%] relative group z-10"
            >
                <div className="overflow-hidden bg-gray-100 aspect-[16/10]">
                    <img 
                        src={milestone.image} 
                        alt={milestone.title}
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                    />
                </div>
                {/* Year Badge (Desktop) */}
                <div 
                    className={`hidden md:block absolute top-10 ${
                        isEven ? "-right-12" : "-left-12"
                    } z-20 px-8 py-4 shadow-2xl transition-all duration-700 ease-in-out ${
                        inView ? "bg-[#AD1E1E] text-white" : "bg-white text-[#AD1E1E]"
                    }`}
                >
                    <span className={`text-4xl font-light tracking-[0.1em] font-outfit transition-colors duration-700 ${
                        inView ? "text-white" : "text-[#AD1E1E]"
                    }`}>
                        {milestone.year}
                    </span>
                </div>
            </motion.div>

            {/* Text Side */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className={`w-full md:w-[40%] mt-8 md:mt-0 relative z-10 ${
                    isEven ? "md:pl-12" : "md:pr-12"
                }`}
            >
                <div className="md:hidden mb-4 relative z-10">
                    <div 
                        className={`inline-block px-5 py-2 shadow-md border border-gray-100 rounded-sm transition-all duration-700 ease-in-out ${
                            inView ? "bg-[#AD1E1E] text-white" : "bg-white text-[#AD1E1E]"
                        }`}
                    >
                        <span className={`text-2xl font-light tracking-[0.1em] font-outfit transition-colors duration-700 ${
                            inView ? "text-white" : "text-[#AD1E1E]"
                        }`}>
                            {milestone.year}
                        </span>
                    </div>
                </div>
                <h3 
                    className="text-xl md:text-2xl font-light mb-4 text-[#AD1E1E] leading-tight font-outfit uppercase tracking-[0.2em]"
                >
                    {milestone.title}
                </h3>
                <p className="whitespace-pre-line text-gray-600 text-base md:text-lg leading-relaxed font-outfit font-light">
                    {milestone.text}
                </p>
                <div className="mt-8 w-12 h-[1px] bg-[#AD1E1E]"></div>
            </motion.div>
        </div>
    );
};

const Milestones = () => {
    return (
        <section className="bg-white py-20 md:py-32 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
                {milestones.map((milestone, index) => (
                    <MilestoneItem 
                        key={index} 
                        milestone={milestone} 
                        index={index} 
                    />
                ))}
            </div>
        </section>
    );
};

export default Milestones;
