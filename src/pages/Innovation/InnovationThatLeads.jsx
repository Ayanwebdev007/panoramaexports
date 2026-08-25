import React from "react";
import InnovationStack from "../../components/Innovation/InnovationStack";

import CadImg from "../../assets/CAD-and-3D-Draping.webp";
import WeavingImg from "../../assets/Weaving-Brilliance.webp";
import OperationalImg from "../../assets/Operational-Excellence-2.webp";
import UbtImg from "../../assets/UBT-Sewing-Machine.webp";
import HandcraftedImg from "../../assets/Handcrafted-Luxury.webp";

function InnovationThatLeads() {
    const stackingItems = [
        {
            id: "digital-precision",
            img: CadImg,
            title: "Digital Precision",
            description: "CAD and 3D Draping Visualising designs with precision before production. Our digital capabilities allow us to refine fit, form, and detail early in the process, ensuring efficiency and accuracy at every stage.",
            alignItems: "items-start pt-12",
            justifyContent: "justify-end",
            containerPadding: "pl-[5%] md:pl-[10%] pr-2 md:pr-4"
        },
        {
            id: "weaving-brilliance",
            img: WeavingImg,
            title: "Weaving Brilliance",
            description: "Weaving Brilliance Focused on fabric development and performance. From yarn to fabric, we work closely with mills to ensure consistency, quality, and responsible material selection.",
            alignItems: "items-start pt-12",
            justifyContent: "justify-start",
            containerPadding: "pr-[5%] md:pr-[10%] pl-2 md:pl-4"
        },
        {
            id: "operational-intelligence",
            img: OperationalImg,
            title: "Operational Intelligence",
            description: "Operational Excellence Building systems for efficient, consistent, and high-quality production. From material selection to process optimization, we focus on reducing impact while improving efficiency and quality. We continuously improve our processes to enhance productivity and deliver dependable results."
        },
        {
            id: "evolving-methodologies",
            img: UbtImg,
            title: "Evolving Methodologies",
            description: "Advanced Manufacturing Strength engineered into every seam. Through advanced sewing techniques, including UBT sewing and ultra-bond thread technologies, we enhance durability and performance, especially for high-intensity garments."
        },
        {
            id: "refined-craft",
            img: HandcraftedImg,
            title: "Refined Craft",
            description: "Handcrafted Luxury Rooted in tradition and shaped for the future. Each piece reflects skilled craftsmanship, refined detailing, and the enduring value of Made in India.",
            alignItems: "items-start pt-12",
            justifyContent: "justify-end",
            containerPadding: "pl-[5%] md:pl-[10%] pr-2 md:pr-4"
        }
    ];

    return (
        <section className="bg-[#AD1E1E]">
            <InnovationStack items={stackingItems} />
        </section>
    );
}

export default InnovationThatLeads;
