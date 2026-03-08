import React from "react";
import InnovationStack from "../../components/Innovation/InnovationStack";

import HlImg1 from "../../assets/Innovation/HandcraftedLuxury/1.webp";
import HlImg2 from "../../assets/Innovation/HandcraftedLuxury/2.webp";
import HlImg3 from "../../assets/Innovation/HandcraftedLuxury/03.webp";

const HandcraftedLuxury = () => {
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

    return (
        <section className="bg-blue-950">
            <InnovationStack items={stackingItems} />
            {/* Spacer for scroll depth */}
            <div className="h-24 bg-blue-950" />
        </section>
    );
};

export default HandcraftedLuxury;
