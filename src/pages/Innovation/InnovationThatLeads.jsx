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
            id: "innovation-leads-stack",
            img: CadImg,
            title: "CAD & 3D Draping",
            description: "Visualizing designs with precision before production",
            alignItems: "items-start pt-12",
            justifyContent: "justify-end",
            containerPadding: "pl-[5%] md:pl-[10%] pr-2 md:pr-4"
        },
        {
            img: WeavingImg,
            title: "Weaving Brilliance",
            description: "From loom to luxury, we unite cutting-edge fabric innovation with eco-conscious materials and refined finishing—infusing every creation with the artistry and heritage of Made in India.",
            alignItems: "items-start pt-12",
            justifyContent: "justify-start",
            containerPadding: "pr-[5%] md:pr-[10%] pl-2 md:pl-4"
        },
        {
            img: OperationalImg,
            title: "Operational Excellence",
            description: "Systems for faster, cleaner, better production. It’s an art blending innovation with craftsmanship to reduce waste, enhance efficiency, and deliver quality that speaks for itself."
        },
        {
            img: UbtImg,
            title: "UBT Sewing Technology",
            description: "Seam integrity meets advanced performance. We engineer resilience into every stitch—using ultra-bond thread technology to create seams that endure, perform, and excel in high-intensity outerwear."
        },
        {
            img: HandcraftedImg,
            title: "Handcrafted Luxury",
            description: "Rooted in tradition, designed for tomorrow. Each piece reflects generational wisdom, modern refinement, and the soulful artistry of “Made in India.”",
            alignItems: "items-start pt-12",
            justifyContent: "justify-end",
            containerPadding: "pl-[5%] md:pl-[10%] pr-2 md:pr-4"
        }
    ];

    return (
        <section className="bg-blue-950">
            <InnovationStack items={stackingItems} />
        </section>
    );
}

export default InnovationThatLeads;
