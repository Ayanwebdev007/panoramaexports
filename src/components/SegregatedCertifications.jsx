import React from 'react';
import './SegregatedCertifications.css';

import gots from "../assets/Responsible/certificate/gots.webp";
import grs from "../assets/Responsible/certificate/grs.webp";
import oeko from "../assets/Certificates/oeko-tex-new.png";
import cert1 from "../assets/Certificates/cert-1.png";
import gmpNew from "../assets/Certificates/gmp-new.png";
import pdca from "../assets/Certificates/PDCA.png";

import C1 from "../assets/Certificates/cuc-new.png";
import C2 from "../assets/Certificates/cert-2.webp";
import C3 from "../assets/Certificates/cert-3.webp";
import C4 from "../assets/Certificates/cert-4.webp";
import C6 from "../assets/Certificates/cert-6.webp";
import C7 from "../assets/Certificates/cert-7.webp";
import C8 from "../assets/Certificates/cert-8.webp";

const segregatedData = [
    {
        category: "Fabric",
        items: [
            { img: cert1 },
            { img: C2 },
            { img: oeko },
            { img: C1 }
        ]
    },
    {
        category: "Planet",
        items: [
            { img: C6 },
            { img: C3 },
            { img: C4 }
        ]
    },
    {
        category: "Compliance",
        items: [
            { img: gmpNew },
            { img: pdca },
            { img: C7 },
            { img: C8 }
        ]
    }
];

export default function SegregatedCertifications() {
    return (
        <div className="w-[90%] mx-auto py-8 px-2 sm:px-6 md:px-10 lg:px-20 mt-2 md:mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-8">
                {segregatedData.map((section, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 hover:shadow-[0_20px_50px_rgba(1,39,106,0.12)] transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1 overflow-hidden"
                    >
                        {/* Header with Mesh Gradient Background */}
                        <div className="cert-header-bg py-4 text-center">
                            <h3 className="cert-header-text text-2xl md:text-3xl font-light font-outfit text-white">
                                {section.category}
                            </h3>
                        </div>

                        <div className="p-4 sm:p-6 flex flex-col flex-grow">
                            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-auto flex-grow">
                                {section.items.map((item, itemIdx) => (
                                    <div
                                        key={itemIdx}
                                        className="flex items-center justify-center p-1 h-28 sm:h-36 w-[45%] group"
                                    >
                                        {item.img ? (
                                            <img
                                                src={item.img}
                                                alt={section.category + " certificate"}
                                                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-sm mix-blend-multiply"
                                            />
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
