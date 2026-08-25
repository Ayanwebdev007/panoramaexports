import React from "react";
import { useLocation } from "react-router-dom";
import InnovationStack from "../../components/Innovation/InnovationStack";
import InnovationBreadcrumb from "../../components/Innovation/InnovationBreadcrumb";

import HlImg1 from "../../assets/Innovation/HandcraftedLuxury/1.webp";
import HlImg2 from "../../assets/Innovation/HandcraftedLuxury/2.webp";
import HlImg3 from "../../assets/Innovation/HandcraftedLuxury/03.webp";

const HandcraftedLuxury = () => {
    const location = useLocation();
    const isStandalone = location.pathname.includes("/handcraftedluxury");

    const stackingItems = [
        {
            img: HlImg1,
            title: "Artisanal Mastery",
            description: "Rooted in tradition, designed for tomorrow. Each piece reflects generational wisdom, modern refinement, and the soulful artistry of “Made in India.”"
        },
        {
            img: HlImg2,
            title: "Bespoke Details",
            description: "Every stitch tells a story of precision. Our handcrafted luxury line emphasizes the human touch, where imperfections are embraced as marks of authenticity."
        },
        {
            img: HlImg3,
            title: "Generational Heritage",
            description: "Preserving the craft while pushing the boundaries of luxury. We work with master artisans to ensure that heritage techniques thrive in a modern marketplace."
        }
    ];

    const content = (
        <section className="bg-[#AD1E1E]">
            <InnovationStack items={stackingItems} />
            {/* Spacer for scroll depth */}
            <div className="h-24 bg-[#AD1E1E]" />
        </section>
    );

    if (isStandalone) {
        return (
            <div className="bg-[#fafafa] min-h-screen font-outfit text-gray-900 pb-20">
                {/* Header Spacer to account for fixed navbar */}
                <div className="w-full h-12 md:h-16 lg:h-20 bg-[#fafafa]"></div>
                
                {/* Reusable Innovation Breadcrumb */}
                <InnovationBreadcrumb />

                {content}
            </div>
        );
    }

    return content;
};

export default HandcraftedLuxury;
