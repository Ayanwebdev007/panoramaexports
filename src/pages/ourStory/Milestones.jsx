import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import dummy images
import Detail1 from "../../assets/Details/detail-1.webp";
import Detail2 from "../../assets/Details/detail-2.webp";
import Detail7 from "../../assets/Details/detail-7.webp";
import Detail8 from "../../assets/Details/detail-8.webp";
import StoryImg1 from "../../assets/OurStory/02.webp";
import StoryImg2 from "../../assets/OurStory/03.webp";
import StoryImg3 from "../../assets/OurStory/04.webp";

export const milestones = [
    {
        id: "1973",
        year: "1973",
        title: "Founded",
        text: "Founded with a vision to blend craftsmanship with global appeal.",
        image: Detail1,
    },
    {
        id: "1980s",
        year: "1980s",
        title: "Modern Technology",
        text: "Embraced modern stamped technology, laid foundation for future-ready manufacturing.",
        image: Detail2,
    },
    {
        id: "1990s",
        year: "1990s",
        title: "International Expansion",
        text: "Expanded internationally; deepened global collaborations.",
        image: Detail7,
    },
    {
        id: "2000",
        year: "2000",
        title: "Growth",
        text: "",
        image: Detail8,
    },
    {
        id: "2010",
        year: "2010",
        title: "Sustainability & Efficiency",
        text: "We’ve launched ESG-driven sustainability programs that blend environmental sensitivity with critical prediction—creating impact for both society and industry development. Established state-of-the-art manufacturing units in Faridabad, enhancing production capabilities and elevating delivery efficiency.",
        image: StoryImg1,
    },
    {
        id: "2024",
        year: "2024",
        title: "Global Reach",
        text: "Powered by 5,000+ skilled hands, we craft 12 million garments a year-now growing stronger with a new fabric warehouse fuelling global reach. Unit-3 (Plot-11) A fresh stitch in time! This unit joined the fashion brigade with cutting-edge capabilities.",
        image: StoryImg2,
    },
    {
        id: "2025",
        year: "2025",
        title: "Noida Factory Launch",
        text: "We’ve expanded our presence with a new head office in Faridabad and launched our new factory in Noida—a benchmark where tradition meets technology and quiet luxury takes form. From production to quality control, we craft elevated essentials and rare, refined pieces for the global market.",
        image: StoryImg3,
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
            className={`flex flex-col md:flex-row items-center justify-between mb-24 md:mb-40 last:mb-0 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
            }`}
        >
            {/* Image Side */}
            <motion.div 
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full md:w-[55%] relative group"
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
                    } z-10 bg-white px-8 py-4 shadow-2xl`}
                >
                    <span className="text-4xl font-light tracking-[0.1em] text-[#AD1E1E] font-outfit">
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
                className={`w-full md:w-[40%] mt-8 md:mt-0 ${
                    isEven ? "md:pl-12" : "md:pr-12"
                }`}
            >
                <div className="md:hidden mb-4">
                    <span className="text-3xl font-light tracking-[0.1em] text-[#AD1E1E] font-outfit">
                        {milestone.year}
                    </span>
                </div>
                <h3 
                    className="text-xl md:text-2xl font-light mb-4 text-[#AD1E1E] leading-tight font-outfit uppercase tracking-[0.2em]"
                >
                    {milestone.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed font-outfit font-light">
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
