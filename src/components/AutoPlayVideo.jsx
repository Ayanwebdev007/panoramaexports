import { useEffect, useRef } from "react";

const AutoPlayVideo = ({
    src,
    threshold = 0.4,
    className = "",
    videoClassName = "",
    bgColor = "#000",
}) => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        const container = containerRef.current;
        if (!container) return;

        // Observer for loading the video
        const loadObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && video && !video.src) {
                    video.src = src;
                    video.load();
                    loadObserver.disconnect();
                }
            },
            { rootMargin: "200px" } // Start loading 200px before it comes into view
        );

        loadObserver.observe(container);

        if (!video) return;

        // Observer for playing/pausing
        const playObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => { });
                } else {
                    video.pause();
                }
            },
            { threshold }
        );

        playObserver.observe(video);

        return () => {
            loadObserver.disconnect();
            playObserver.disconnect();
        };
    }, [src, threshold]);

    return (
        <div
            ref={containerRef}
            className={`w-full overflow-hidden ${className}`}
            style={{ backgroundColor: bgColor }}
        >
            <video
                ref={videoRef}
                // src is removed from here and added via JS
                muted
                playsInline
                loop // ✅ native loop
                preload="none" // ✅ strictly no preload
                className={`w-full h-auto object-cover ${videoClassName}`}
                style={{
                    willChange: "transform",
                    transform: "translateZ(0)",
                }}
            />
        </div>
    );
};

export default AutoPlayVideo;
