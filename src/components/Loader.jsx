import { useEffect, useState, useRef } from "react";
import logoAnimation from "../assets/new logo animation.mp4";

export default function Loader() {
    const [fadeOut, setFadeOut] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFadeOut(true); 
        }, 5000); // 5 seconds for a 20MB file buffer

        return () => clearTimeout(timeout);
    }, []);

    const handleLoadedData = () => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.6;
            setIsReady(true);
        }
    };

    return (
        <div
            className={`fixed inset-0 z-50 bg-[#01276a] flex items-center justify-center transition-opacity duration-1000 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            <div className="w-full max-w-2xl px-4 relative flex items-center justify-center">
                {/* Fallback Logo / Poster - Shown while video is buffering */}
                {!isReady && (
                    <img 
                        src="/panoramalogo.webp" 
                        alt="Panorama Logo" 
                        className="w-48 h-auto animate-pulse opacity-50"
                    />
                )}
                
                <video
                    ref={videoRef}
                    src={logoAnimation}
                    autoPlay
                    muted
                    playsInline
                    onLoadedData={handleLoadedData}
                    className={`w-full h-auto transition-opacity duration-500 ${isReady ? "opacity-100" : "opacity-0 absolute"}`}
                />
            </div>
        </div>
    );
}
