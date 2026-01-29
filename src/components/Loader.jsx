import { useEffect, useState } from "react";

export default function Loader() {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFadeOut(true); // Start fade out
        }, 2000); // Show loader for 2 seconds

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-1000 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            <div className="animate-pulse text-white text-4xl font-bold tracking-wider">
                PANORAMA EXPORTS
            </div>
        </div>
    );
}
