import { motion } from "framer-motion";
import AutoPlayVideo from "./AutoPlayVideo";

const IntentionSection = ({ videoSrc }) => {
    return (
        <section className="bg-white pt-20 sm:pt-28 pb-10 sm:pb-14 font-outfit overflow-hidden">
            <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-center">
                {/* Minimalist Editorial Heading */}
                <div className="mb-10 sm:mb-14 w-full flex flex-col items-center leading-tight">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#AD1E1E] tracking-[0.2em] uppercase mb-1 sm:mb-2"
                    >
                        Here intention shapes creation
                    </motion.h2>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light italic text-[#1a1a1a] tracking-wider"
                    >
                        and responsibility guides every journey
                    </motion.h2>
                </div>
            </div>

            {/* Video Section */}
            <div className="w-[95%] mx-auto relative aspect-video mb-10 sm:mb-14 rounded-2xl overflow-hidden">
                <AutoPlayVideo 
                    src={videoSrc}
                    className="w-full h-full"
                    videoClassName="w-full h-full object-cover"
                />
            </div>

            <div className="max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-center">
                {/* Sézane-style Minimalist Statement */}
                <div className="max-w-[1400px] text-center">
                    <p className="text-[#1a1a1a] text-sm sm:text-lg md:text-xl lg:text-[20px] leading-[1.9] font-light tracking-wide px-4">
                        Panorama Exports is committed to strengthening every dimension of its operations. 
                        Our approach focuses on expanding our global reach, elevating engagement across every 
                        customer touchpoint, advancing responsible practices, and empowering a skilled 
                        workforce that drives excellence at every level.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default IntentionSection;
