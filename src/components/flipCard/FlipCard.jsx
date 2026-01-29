import React, { useEffect, useRef } from "react";
import "./FlipCard.css";

const FlipCard = ({ imageUrl, title, address, locationUrl, text }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Remove animation class first to reset
                        entry.target.classList.remove("animate");
                        // Force reflow to ensure animation restarts
                        void entry.target.offsetWidth;
                        // Add animation class to trigger flip
                        entry.target.classList.add("animate");
                    } else {
                        // Reset when leaving viewport
                        entry.target.classList.remove("animate");
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div className="flip-card-container" ref={cardRef}>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="flip-card-image">
                            <img
                                src={imageUrl}
                                alt={title}
                                className="w-full object-contain"
                            />
                        </div>
                    </div>
                    <div
                        className="flip-card-back relative w-full"
                        // style={{ backgroundImage: `url(${imageUrl})` }}
                    >
                        <div className="flip-card-image">
                            <img
                                src={imageUrl}
                                alt={title}
                                className="w-full object-contain"
                            />
                        </div>

                        {/* <div className="absolute inset-0 flex flex-col items-start justify-end pb-5 px-5">
                            <p className="font-bold text-lg text-white rounded-md px-2 py-1 mt-2">
                                {title}
                            </p>
                            <div className="font-semibold text-md text-white rounded-md px-2 py-1 mt-2">
                                {address}
                            </div>
                            <button className="font-semibold text-black bg-white hover:text-white hover:bg-blue-900 rounded-md px-2 py-1 mt-2">
                                {text}
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
