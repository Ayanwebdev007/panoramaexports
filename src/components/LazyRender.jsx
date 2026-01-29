import React, { useState, useEffect, useRef } from "react";

const LazyRender = ({ children, threshold = 0.1, rootMargin = "300px", height = "auto" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Render once and stay rendered
                }
            },
            {
                threshold,
                rootMargin, // Load before it comes into view
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (observer) observer.disconnect();
        };
    }, [threshold, rootMargin]);

    return (
        <div ref={ref} style={{ minHeight: isVisible ? "auto" : height }}>
            {isVisible ? children : null}
        </div>
    );
};

export default LazyRender;
