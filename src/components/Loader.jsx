import { useEffect, useState, useRef } from "react";
import logoAnimation from "../assets/new logo animation.mp4";

export default function Loader() {
    const [fadeOut, setFadeOut] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.6; // Increased speed
        }

        const timeout = setTimeout(() => {
            setFadeOut(true); // Start fade out
        }, 3000); // Reduced to 3 seconds for the faster animation

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            className={`fixed inset-0 z-50 bg-[#01276a] flex items-center justify-center transition-opacity duration-1000 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            <div className="w-full max-w-2xl px-4">
                <video
                    ref={videoRef}
                    src={logoAnimation}
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
}
