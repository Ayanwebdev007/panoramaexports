import React, { useState, useEffect } from "react";
import craftingTomorrowImage from "../../assets/CraftingTomorrow/01.webp";
import { CiPlay1 } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function CraftingTomorrow() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, []);

    const handleToggleModal = () => {
        setShowModal(!showModal);
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Panorama company profile - REVISED - Copy 2026.pdf";
        link.download = "Panorama company profile - REVISED - Copy 2026.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            {/* Crafting Tomorrow Content */}
            <div
                style={{
                    backgroundImage: `url(${craftingTomorrowImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                }}
                className="pt-4 w-full lg:h-screen h-[75vh] text-white flex flex-col items-center justify-center relative"
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 z-0"></div>
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                    <h1 className="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-semibold shimmer-text drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)]">
                        Crafting Tomorrow
                    </h1>

                    <div className="mt-4 2xl:text-2xl lg:text-xl md:text-lg text-sm shimmer-text drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)] text-center md:max-w-5xl w-[90%] mx-auto">
                        True fashion tells a bigger story of people, purpose,
                        and planet. With every thread, we strive to weave
                        dignity into design, merging timeless artistry with a
                        future-forward responsibility.
                    </div>

                    <div className="flex flex-col md:flex-row md:gap-5 gap-2 lg:gap-10">
                        <button
                            onClick={handleToggleModal}
                            className="md:mt-10 mt-5 group inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-white bg-transparent border-white hover:bg-white hover:text-blue-900 lg:text-lg md:text-md sm:text-sm text-[12px] font-semibold shadow-[0_6px_10px_#ffffff88] hover:shadow-[0_8px_12px_#ffffffcc] transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Watch Now
                            <CiPlay1 className="lg:text-lg md:text-md sm:text-sm text-[12px] group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        <button
                            onClick={handleDownload}
                            className="md:mt-10 mt-5 group inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-white bg-transparent border-white hover:bg-white hover:text-blue-900 lg:text-lg md:text-md sm:text-sm text-[12px] font-semibold shadow-[0_6px_10px_#ffffff88] hover:shadow-[0_8px_12px_#ffffffcc] transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Download PPT
                            <FaCloudDownloadAlt className="lg:text-lg md:text-md sm:text-sm text-[12px] group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>

            {/*video Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4 border">
                    <div className="relative w-full max-w-4xl aspect-video">
                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 text-white text-3xl z-10"
                            onClick={handleToggleModal}
                        >
                            <IoClose />
                        </button>

                        {/* YouTube Iframe */}
                        <iframe
                            className="w-full h-full rounded-lg shadow-lg"
                            src="https://www.youtube.com/embed/_rxfOLuXvOY?autoplay=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
}
