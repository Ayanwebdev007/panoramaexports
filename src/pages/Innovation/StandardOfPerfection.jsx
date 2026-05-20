import React from 'react'
import { useLocation } from "react-router-dom";
import SegregatedCertifications from '../../components/SegregatedCertifications';
import InnovationBreadcrumb from '../../components/Innovation/InnovationBreadcrumb';

function StandardOfPerfection() {
    const location = useLocation();
    const isStandalone = location.pathname.includes("/standardperfection");

    const content = (
        <>
            <div className="text-[#01276a] mt-0 w-[90%] mx-auto lg:pt-14 lg:pb-0 md:pt-10 md:pb-0 sm:pt-8 sm:pb-0 pt-6 pb-0 px-2 sm:px-6 md:px-10 lg:px-20 rounded-t-md">
                <div className="flex items-center justify-center pt-0">
                    <div className="text-3xl sm:text-4xl md:text-5xl flex flex-col items-center">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-light font-outfit text-[#01276a] text-center">
                            Standard Of Perfection
                        </h1>
                        <div className="mt-6 md:mt-10 flex flex-col items-center">
                            <h2 className="text-lg md:text-2xl xl:text-3xl font-light font-outfit text-blue-950 text-center">
                                Global Standards, Local Soul
                            </h2>
                            <p className="text-sm md:text-lg mt-0 text-gray-600 ml-1 font-light font-outfit lg:w-[80%] text-center">
                                From ethical sourcing to flawless finishing, our
                                certifications speak of trust, transparency, and
                                excellence, every garment carries the seal of
                                global trust and credibility
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <SegregatedCertifications />
        </>
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
}

export default StandardOfPerfection