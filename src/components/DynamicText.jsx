import React, { useEffect, useState } from "react";

export default function DynamicText({ slides, currentIndex }) {
    const [currentText, setCurrentText] = useState(
        slides[currentIndex]?.dynamicText || ""
    );
    const [isExiting, setIsExiting] = useState(false);
    const [isEntering, setIsEntering] = useState(false);

    useEffect(() => {
        if (slides[currentIndex]?.dynamicText !== currentText) {
            setIsExiting(true);
            setTimeout(() => {
                setCurrentText(slides[currentIndex]?.dynamicText || "");
                setIsExiting(false);
                setIsEntering(true);
                setTimeout(() => {
                    setIsEntering(false);
                }, 500);
            }, 500);
        }
    }, [currentIndex]);

    return (
        <>
            <style>
                {`
                .fade-slide-up-enter {
                opacity: 0;
                transform: translateY(100px);
                }

                .fade-slide-up-enter-active {
                opacity: 1;
                transform: translateY(0);
                transition: all 0.6s ease-out;
                }

                .fade-slide-up-exit {
                opacity: 0;
                transform: translateY(-100px);
                transition: all 0.6s ease-in;
                }
                `}
            </style>
            <span
                className={`text-white inline-block 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-xs flex items-center ${
                    isExiting
                        ? "fade-slide-up-exit"
                        : isEntering
                        ? "fade-slide-up-enter-active"
                        : ""
                } ${isEntering ? "fade-slide-up-enter" : ""}`}
            >
                {currentText}
            </span>
        </>
    );
}
