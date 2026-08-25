import React, { useState, useEffect, useRef } from "react";
import { pdfjs } from "react-pdf";
import NewsletterGrid from "../../components/Newsletter/NewsletterGrid";
import { mediaData } from "../../data/mediaData";
import { useNavigate, useLocation } from "react-router-dom";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

import TopHeader from "../../assets/Media/MediaHero.webp";





const tabNames = ["Media", "Newsletter", "News"];




export default function Media() {
    const navigate = useNavigate();
    const location = useLocation();

    // Check for tab parameter in URL
    const queryParams = new URLSearchParams(location.search);
    const initialTab = queryParams.get("tab");

    const [activeTab, setActiveTab] = useState(
        initialTab && tabNames.includes(initialTab) ? initialTab : tabNames[0]
    );

    const [selectedGallery, setSelectedGallery] = useState(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const lightboxRef = useRef(null);

    // Handle body scroll lock
    useEffect(() => {
        if (isLightboxOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
            if (lightboxRef.current) {
                lightboxRef.current.focus();
            }
        } else {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        };
    }, [isLightboxOpen]);

    const openLightbox = (mediaItem) => {
        setSelectedGallery(mediaItem);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
        setSelectedGallery(null);
    };

    return (
        <div className="bg-white font-outfit">
            <div className="w-full h-10 md:h-12 lg:h-20 bg-gray-900"></div>
            {/* Top Hero Section - Full Width */}
            <section className="w-full">
                <div className="relative w-full overflow-hidden shadow-2xl group">
                    <div className="relative w-full h-[80vh] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-5rem)] min-h-[550px] overflow-hidden">
                        <img
                            src={TopHeader}
                            alt="Panorama Exports Sustainable Fashion Innovation"
                            className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        {/* Centered Text at Bottom */}
                        <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 md:pb-24 px-6 text-center">
                            <h2 className="text-white font-extralight text-sm md:text-xl lg:text-3xl tracking-[0.3em] whitespace-nowrap uppercase">
                                Panorama Exports Sustainable Fashion Innovation
                            </h2>
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
                            className={`py-2 font-outfit font-light ${activeTab === tab
                                ? "border-b-2 border-[#AD1E1E] text-[#AD1E1E]"
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

            {activeTab === "Media" && (
                <div className="md:max-w-7xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {(mediaData.Media || []).map((item) => (
                            <div
                                key={item.id}
                                onClick={() => openLightbox(item)}
                                className="group relative bg-[#fff9f9] rounded-2xl overflow-hidden border border-red-50 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-[320px] cursor-pointer"
                            >
                                {/* Image Container */}
                                <div className="h-full relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#AD1E1E]/90 via-[#AD1E1E]/20 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-500" />

                                    {/* Text Content in Overlay */}
                                    <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-xl font-light leading-tight mb-4">
                                            {item.title}
                                        </h3>
                                        
                                        {/* View Images Button */}
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <span className="inline-flex items-center text-xs font-medium uppercase tracking-[0.2em] border-b border-white/40 pb-1 hover:border-white transition-colors">
                                                View Images
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Premium Lightbox Modal */}
            {isLightboxOpen && selectedGallery && (
                <div 
                    ref={lightboxRef}
                    className="fixed inset-0 z-[9999] bg-white/95 backdrop-blur-2xl overflow-y-auto no-scrollbar scroll-smooth outline-none overscroll-contain"
                    tabIndex={0}
                    onWheel={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="fixed top-8 right-8 text-[#AD1E1E] hover:text-[#801616] transition-colors p-2 z-[1000] bg-white/40 backdrop-blur-md rounded-full shadow-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Modal Content container */}
                    <div className="min-h-screen w-full flex flex-col px-4 md:px-20 py-16">
                        {/* Header */}
                        <div className="mb-16 text-center">
                            <h2 className="text-[#AD1E1E] text-3xl md:text-6xl font-light tracking-tight px-4 lg:px-44">
                                {selectedGallery.title}
                            </h2>
                        </div>

                        {/* Image Grid */}
                        <div className="w-full max-w-7xl mx-auto flex-1 px-2">
                            <div className="flex flex-wrap justify-center gap-8 md:gap-10 pb-20">
                                {selectedGallery.images.map((img, idx) => (
                                    <div 
                                        key={idx} 
                                        className="w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.7rem)] relative group overflow-hidden rounded-3xl border border-red-50/50 shadow-[0_15px_40px_rgba(173,30,30,0.08)] bg-white self-start"
                                    >
                                        <img
                                            src={img}
                                            alt={`${selectedGallery.title} - ${idx + 1}`}
                                            className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-[#AD1E1E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {activeTab === "News" && (
                <div className="md:max-w-7xl mx-auto px-4 py-32 text-center">
                    <div className="max-w-md mx-auto">
                        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#AD1E1E] opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-light text-[#AD1E1E] mb-3">Latest News Coming Soon</h3>
                        <p className="text-gray-500 font-light">Stay tuned for the latest updates, press releases, and announcements from Panorama Exports.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
