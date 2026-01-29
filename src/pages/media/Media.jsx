import React, { useState, useEffect } from "react";
import { pdfjs } from "react-pdf";
import NewsletterGrid from "../../components/Newsletter/NewsletterGrid";
import { mediaData } from "../../data/mediaData";
import { useNavigate, useLocation } from "react-router-dom";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

import TopHeader from "../../assets/Media/LeftImg.webp";
import RightHeader1 from "../../assets/Media/RightImg1.webp";
import RightHeader2 from "../../assets/Media/RightImg2.webp";





const tabNames = Object.keys(mediaData);




export default function Media() {
    const navigate = useNavigate();
    const location = useLocation();

    // Check for tab parameter in URL
    const queryParams = new URLSearchParams(location.search);
    const initialTab = queryParams.get("tab");

    const [activeTab, setActiveTab] = useState(
        initialTab && tabNames.includes(initialTab) ? initialTab : tabNames[0]
    );

    return (
        <div className="bg-white">
            <div className="w-full h-10 md:h-12 lg:h-20 bg-gray-900"></div>
            {/* Top Hero Section */}
            <section className="w-full py-1">
                <div className="flex gap-2">
                    {/* Card 1 */}
                    <div className="md:w-[70%] w-full relative overflow-hidden shadow-lg group">
                        <img
                            src={TopHeader}
                            alt="The Missing Link in Scaling Sustainable Fashion Innovation"
                            className="w-full aspect-[16/6] object-contain group-hover:scale-105 duration-200"
                        />
                        <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-end bg-gradient-to-t from-black/40 via-black/20 to-transparent px-4 py-3">
                            <h2 className="text-white sm:font-semibold 2xl:text-4xl lg:text-2xl sm:text-lg text-sm 2xl:pb-16 lg:pb-10 md:pb-6 sm:pb-5 pb-1">
                                Panorama Exports Sustainable Fashion Innovation
                            </h2>
                        </div>
                    </div>
                    <div className="hidden md:block w-[30%] flex flex-col">
                        {/* Card 2 */}
                        <div className="relative overflow-hidden shadow-lg group">
                            <img
                                src={RightHeader1}
                                alt="Shahi Exports Champion for Reproductive Justice"
                                className="w-full aspect-[16/6.9] object-contain"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 py-3">
                                {/* <div className="text-xs text-gray-200">
                                    Media & Research | October 17, 2025
                                </div> */}
                                <h2 className="text-white lg:font-semibold 2xl:text-2xl lg:text-lg text-sm text-center">
                                    Panorama Exports Media & News
                                </h2>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="relative mt-2 overflow-hidden shadow-lg group">
                            <img
                                src={RightHeader2}
                                alt="The Manufacturing Perspective 2025"
                                className="w-full aspect-[16/6.9] object-contain "
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/50 via-black/30 to-transparent px-4 py-3">
                                {/* <div className="text-xs text-gray-200">
                                    Media & Research | September 30, 2025
                                </div> */}
                                <h2 className="text-white lg:font-semibold 2xl:text-2xl lg:text-lg text-sm text-center">
                                    The Manufacturing Perspective
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabs Navigation */}
            <div className="mt-5 md:max-w-7xl mx-auto px-4">
                <nav className="flex md:space-x-8 lg:space-x-16 sm:space-x-5 space-x-3 text-base md:text-xl">
                    {tabNames.map((tab) => (
                        <button
                            key={tab}
                            className={`py-2 ${activeTab === tab
                                ? "border-b-2 border-blue-900 text-blue-900 font-semibold"
                                : "text-gray-800"
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Tab Content - News/Image Cards */}
            {/* Tab Content - News/Image Cards */}
            {activeTab === "Newsletter" && (
                <div className="md:max-w-7xl mx-auto w-full px-4 py-8">
                    <NewsletterGrid
                        newsletters={mediaData.Newsletter}
                        onSelect={(item) => navigate(`/media/newsletter/${item.id}`)}
                    />
                </div>
            )}

            {activeTab !== "Newsletter" && (
                <div className="md:max-w-7xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {(mediaData[activeTab] || []).map((item) => (
                            <div
                                key={item.id}
                                className="relative group bg-white rounded-sm overflow-hidden shadow transition-shadow duration-500 aspect-[16/14]"
                            >
                                {/* Front (Image) - Slides Up & Fades Out on Hover */}
                                <div
                                    className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
      group-hover:-translate-y-48 group-hover:opacity-0"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Back (Text Panel) - Slides Up & Fades In on Hover */}
                                <div
                                    className="absolute inset-0 p-4 flex items-center justify-center
      opacity-0 translate-y-48 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
      group-hover:opacity-100 group-hover:translate-y-0
      bg-gradient-to-b from-blue-500 to-purple-500"
                                >
                                    <h3 className="font-semibold text-base text-white text-center">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
