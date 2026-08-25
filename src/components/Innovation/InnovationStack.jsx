import React from "react";
import { motion } from "framer-motion";

const InnovationStack = ({ items }) => {
    return (
        <div className="relative w-full">
            {items.map((item, index) => (
                <StackCard key={index} item={item} index={index} total={items.length} />
            ))}
        </div>
    );
};

const StackCard = ({ item, index, total }) => {
    return (
        <div
            id={item.id}
            className="h-screen sticky top-[112px] flex items-center justify-center overflow-hidden bg-[#AD1E1E]"
            style={{ zIndex: index + 1 }}
        >
            <motion.div
                className="relative w-full h-full flex items-center justify-center overflow-hidden"
            >
                {/* Media Layer (Video or Image) */}
                <div className="absolute inset-0 z-0">
                    {item.video ? (
                        <video
                            src={item.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url("${item.img}")` }}
                        />
                    )}
                </div>

                {/* Overlay Vignette for depth */}
                <div className="absolute inset-0 bg-black/30 z-1" />

                {/* Content Box - Beige Semi-Transparent Rectangle */}
                <div className={`relative z-10 w-full h-full flex ${item.alignItems || "items-center"} ${item.justifyContent || (index % 2 === 0 ? "justify-start" : "justify-end")} ${item.containerPadding || "px-[5%] md:px-[10%]"}`}>
                    <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-[#6B5C4E]/30 backdrop-blur-md p-6 md:p-8 lg:p-10 max-w-md text-white shadow-2xl relative overflow-hidden group/box border border-[#8C7B6B]/20"
                    >
                        {/* Decorative accent line */}
                        <div className={`absolute top-0 ${index % 2 === 0 ? "left-0" : "right-0"} w-1.5 h-full bg-[#AD1E1E]`} />

                        <h2 className="text-lg md:text-xl lg:text-2xl font-light font-outfit mb-3 tracking-wider leading-tight uppercase">
                            {item.title}
                        </h2>

                        <div
                            className="text-[10px] md:text-xs lg:text-sm font-light font-outfit leading-relaxed text-white text-justify"
                            dangerouslySetInnerHTML={{ __html: item.description }}
                        />

                        <div className={`absolute bottom-4 ${index % 2 === 0 ? "right-6" : "left-6"} text-white/40 font-outfit text-[10px] tracking-[0.2em]`}>
                            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Visual Indicator of "Stack" - Subtle shadow at the top of the incoming card */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
        </div>
    );
};

export default InnovationStack;
