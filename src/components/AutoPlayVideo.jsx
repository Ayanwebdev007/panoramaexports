import { useEffect, useRef } from "react";

const AutoPlayVideo = ({
    src,
    threshold = 0.1,
    className = "",
    videoClassName = "",
    bgColor = "#000",
}) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Play/Pause based on intersection
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
            playObserver.disconnect();
        };
    }, [threshold]);

    return (
        <div
            className={`w-full overflow-hidden ${className}`}
            style={{ backgroundColor: bgColor }}
        >
            <video
                ref={videoRef}
                src={src}
                muted
                playsInline
                loop
                preload="metadata"
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
