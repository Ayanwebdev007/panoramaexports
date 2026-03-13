// import bg from "../assets/Landing_bg.webp";
import React, { useState, useRef, useEffect } from "react";

import logoAnimation from "../assets/new logo animation.mp4";

export default function Landing({ onEnter }) {
    const [hasEntered, setHasEntered] = useState(false); // New state for button click
    const [showButton, setShowButton] = useState(false); // New state for button visibility
    const [isVideoReady, setIsVideoReady] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video && isVideoReady) {
            video.playbackRate = 1.6;
            video.addEventListener("timeupdate", handleTimeUpdate);
            video.addEventListener("play", handleVideoPlay);
        }
        
        // Show button faster
        const buttonTimer = setTimeout(() => {
            setShowButton(true);
        }, 1200);
        
        return () => {
            if (video) {
                video.removeEventListener("timeupdate", handleTimeUpdate);
                video.removeEventListener("play", handleVideoPlay);
            }
            clearTimeout(buttonTimer);
        };
    }, [isVideoReady]);

    const handleVideoReady = () => {
        setIsVideoReady(true);
    };

    const handleVideoPlay = () => {
        // Video started playing - could add analytics here if needed
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (video && video.duration) {
            // Stop 3 seconds before the end
            if (video.currentTime >= video.duration - 3) {
                video.pause();
            }
        }
    };

    const handleEnterClick = () => {
        setHasEntered(true);
        if (onEnter) onEnter();
    };
    return (
        <div className="fixed inset-0 z-50 flex justify-center items-start bg-white border border-black">
            {/* Background Video */}
            {!hasEntered && (
                <>
                    {/* Fallback Logo - Shown while video is buffering */}
                    {!isVideoReady && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white z-0">
                            <img 
                                src="/panoramalogo.webp" 
                                alt="Panorama Logo" 
                                className="w-64 h-auto animate-pulse opacity-70"
                            />
                        </div>
                    )}

                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        onLoadedData={handleVideoReady}
                        className={`w-full lg:h-full lg:object-cover object-contain z-[-1] transition-opacity duration-700 ${isVideoReady ? "opacity-100" : "opacity-0"}`}
                    >
                        <source src={logoAnimation} type="video/mp4" />
                    </video>
                    {/* Button overlay on video */}
                    {showButton && (
                        <button
                            onClick={handleEnterClick}
                            className="lg:z-10 px-6 py-2.5 rounded-lg text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-500 transform absolute bottom-16 hover:scale-105 animate-slideInFromLeft"
                            style={{
                                backgroundColor: "#16368c",
                                background:
                                    "linear-gradient(135deg, #16368c 0%, #1e4ba3 100%)",
                                border: "none",
                                backdropFilter: "blur(8px)",
                                boxShadow: "0 8px 25px rgba(22, 54, 140, 0.25)",
                                letterSpacing: "0.5px",
                                animation:
                                    "slideInFromLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
                                position: "absolute",
                                transform: "translateX(-50%)",
                            }}
                        >
                            OPEN WEBSITE
                        </button>
                    )}
                </>
            )}

            {/* Overlay and Content */}
            {hasEntered && (
                <>
                    
                </>
            )}
        </div>
    );
}
