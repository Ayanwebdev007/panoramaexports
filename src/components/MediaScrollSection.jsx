import { useState, useRef, useEffect } from "react";
import { IoEnterOutline } from "react-icons/io5";
import gsap from "gsap";
import Media1 from "../assets/Media/01.webp";
import Media2 from "../assets/Media/media_2.webp";
import Media3 from "../assets/Media/02.webp";
import Media4 from "../assets/Media/03.webp";

const stats = [
    { number: "5000+", label: "EMPLOYEES" },
    { number: "45%", label: "WOMEN" },
    { number: "12 MILLION", label: "GARMENTS ANNUALLY" },
    { number: "6", label: "UNITS" },
];

const images = [Media1, Media2, Media3, Media4];

const MediaScrollSection = () => {
    // Removed React state for animation to prevent re-renders
    // const [animatedNumbers, setAnimatedNumbers] = useState(stats.map(() => 0)); // DELETED

    const sectionRef = useRef(null);
    const observerRef = useRef(null);
    const sliderRef = useRef(null);

    // Refs for the number elements to update DOM directly
    const numberRefs = useRef([]);

    // Animate number counts
    const animateCounts = () => {
        // Reset to initial values (but wait, we want to animate from 0)
        // No need to reset state, just start animating logic.

        stats.forEach((stat, index) => {
            const element = numberRefs.current[index];
            if (!element) return;

            const match = stat.number.match(/[\d,\.]+/);
            let targetValue = match
                ? parseFloat(match[0].replace(/,/g, ""))
                : 0;
            let startValue = 0;

            if (stat.label === "GARMENTS ANNUALLY") {
                startValue = 0;
                targetValue = 12000000;
            }

            const startTime = performance.now();
            const duration = 2000; // Animation duration in ms

            const step = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // EaseOutQuart function for smooth deceleration
                const ease = 1 - Math.pow(1 - progress, 4);

                const currentValue = Math.floor(startValue + (targetValue - startValue) * ease);

                // Update DOM directly - ZERO React Re-renders
                if (stat.label === "GARMENTS ANNUALLY" && currentValue >= 12000000) {
                    element.innerText = "12 MILLION";
                } else {
                    element.innerText = currentValue.toLocaleString();
                }

                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            };

            requestAnimationFrame(step);
        });
    };

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateCounts();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observerRef.current.observe(sectionRef.current);
        }

        return () => {
            if (observerRef.current && sectionRef.current) {
                observerRef.current.unobserve(sectionRef.current);
            }
        };
    }, []);

    // GSAP Carousel Logic
    // ... (unchanged)
    const extended = [...images, images[0]];

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let currentIndex = 0;
        const totalSlides = images.length; // 4 original images
        let timeoutId;

        const nextSlide = () => {
            // Wait 2 seconds (2000ms) then slide
            timeoutId = setTimeout(() => {
                currentIndex++;
                gsap.to(slider, {
                    xPercent: -currentIndex * 100,
                    duration: 0.7,
                    ease: "power2.inOut",
                    onComplete: () => {
                        // If we reached the clone (index 4)
                        if (currentIndex >= totalSlides) {
                            currentIndex = 0;
                            // Instant reset to 0
                            gsap.set(slider, { xPercent: 0 });
                        }
                        // Continue loop
                        nextSlide();
                    }
                });
            }, 2000);
        };

        // Start the loop
        nextSlide();

        return () => {
            clearTimeout(timeoutId);
            gsap.killTweensOf(slider);
        };
    }, []);

    return (
        <div className="bg-white w-[90%] mx-auto px-2 sm:px-6 md:px-10 lg:px-20 md:py-10 sm:py-4 py-2 lg:flex gap-4">
            {/* Stats Section */}
            <div
                ref={sectionRef}
                className="xl:w-[60%] lg:w-[50%] w-full grid grid-cols-2 xl:gap-6 gap-4"
            >
                {stats.map((stat, index) => {
                    const match = stat.number.match(/[\d,\.]+/);
                    const suffix = stat.number.replace(/[\d,\.]+/, "");

                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-xl hover:shadow-xl transition-shadow duration-300"
                            style={{
                                boxShadow:
                                    "0 4px 12px rgba(0,0,0,0.15), 0 -4px 12px rgba(0,0,0,0.1)",
                            }}
                        >
                            <span className="2xl:text-5xl xl:text-4xl sm:text-3xl text-2xl font-bold text-blue-800">
                                <span ref={el => numberRefs.current[index] = el}>
                                    0
                                </span>
                                {stat.label !== "GARMENTS ANNUALLY" && suffix}
                            </span>
                            <span className="2xl:text-lg xl:text-md sm:text-sm text-[12px] font-semibold tracking-wide text-gray-500 mt-1">
                                {stat.label}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Carousel Section */}
            <div className="lg:w-[50%] w-full overflow-hidden rounded-lg lg:mt-0 mt-10 border">
                <div
                    ref={sliderRef}
                    className="flex"
                // Removed dynamic transform style & transition classes
                // GSAP handles xPercent directly on this element
                >
                    {extended.map((src, idx) => (
                        <div
                            key={idx}
                            className="w-full lg:h-[40vh] md:h-[42vh] h-[30vh] flex-shrink-0 bg-center bg-cover bg-no-repeat flex items-end justify-center"
                            style={{ backgroundImage: `url(${src})` }}
                        >
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MediaScrollSection;
