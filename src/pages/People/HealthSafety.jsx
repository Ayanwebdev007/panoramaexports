import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import p1 from "../../assets/People/HealthSafety/01.webp";
import p2 from "../../assets/People/HealthSafety/02.webp";
import p3 from "../../assets/People/HealthSafety/03.webp";
import p4 from "../../assets/People/HealthSafety/04.webp";

function HealthSafety() {
    const [index, setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);

    const peopleImages = [
        {
            src: p1,
            alt: "Human_Resources 1",
        },
        {
            src: p2,
            alt: "Human_Resources 2",
        },
        {
            src: p3,
            alt: "Human_Resources 3",
        },
        {
            src: p4,
            alt: "Human_Resources 3",
        },
    ];

    const goTo = (newIndex) => {
        setPrevIndex(index); // store old index
        setIndex(newIndex); // set new index
        setTimeout(() => {
            setPrevIndex(null); // clear old index AFTER animation
        }, 700); // match duration-700
    };

    const prevSlide = () => {
        goTo(index === 0 ? peopleImages.length - 1 : index - 1);
    };

    const nextSlide = () => {
        goTo(index === peopleImages.length - 1 ? 0 : index + 1);
    };

    return (
        <>
            <div
                className="relative flex items-center justify-center w-full 2xl:min-h-[400px] xl:min-h-[350px] lg:min-h-[300px] md:min-h-[250px] min-h-[200px] h-auto 2xl:my-16"
                style={{ perspective: "2000px" }}
            >
                {peopleImages.map((pImg, i) => {
                    let style = {};
                    let classNames =
                        "absolute transition-all duration-700 ease-in-out transform-gpu w-[40%]";

                    if (i === index) {
                        // center
                        style = {
                            transform: "translateX(0) rotateY(0deg) scale(1)",
                            opacity: 1,
                            zIndex: 20,
                        };
                        classNames +=
                            " shadow-2xl border-[8px] border-blue-900";
                    } else if (i === (index + 1) % peopleImages.length) {
                        // right card
                        style = {
                            transform:
                                "translateX(82%) rotateY(-40deg) scale(0.85)",
                            opacity: 1,
                            zIndex: 10,
                        };
                    } else if (
                        i ===
                        (index - 1 + peopleImages.length) % peopleImages.length
                    ) {
                        // left card
                        style = {
                            transform:
                                "translateX(-82%) rotateY(40deg) scale(0.85)",
                            opacity: 1,
                            zIndex: 10,
                        };
                    } else {
                        // keep them mounted but invisible
                        style = {
                            transform: "translateX(0) rotateY(0deg) scale(0.8)",
                            opacity: 0,
                            zIndex: 0,
                        };
                    }

                    return (
                        <div key={i} className={classNames} style={style}>
                            <img
                                src={pImg.src}
                                alt={pImg.alt}
                                className="w-full object-contain"
                            />
                        </div>
                    );
                })}

                {/* buttons */}
                <div className="absolute top-[100%] flex gap-8 mb-10 2xl:mt-20 xl:mt-16 lg:mt-10 mt-5">
                    <button
                        onClick={prevSlide}
                        className="px-1 py-[2px] flex items-center justify-center border border-gray-400 hover:bg-gray-100"
                    >
                        <ChevronLeft />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="px-1 py-[2px] flex items-center justify-center border border-gray-400 hover:bg-gray-100"
                    >
                        <ChevronRight />
                    </button>
                </div>
            </div>
            <div className="lg:w-[60%] mx-auto text-center 2xl:mt-36 mt-28 2xl:mb-20 mb-14">
                <h1 className="lg:text-3xl font-semibold text-blue-950 mb-5">
                    Health, Safety & Compliance
                </h1>
                <div className="lg:text-xl leading-relaxed text-justify">
                    Panorama fosters a culture of accountability, ensuring
                    rigorous compliance with global labour laws, buyer mandates,
                    and ethical business practices. Our unwavering commitment to
                    workers’ rights and brand protection is anchored in:
                    <div className="w-[90%] mx-auto my-4">
                        <p>• Ensuring Workplace Safety & Fair Wages</p>
                        <p>• Promoting Equality & Zero Discrimination</p>
                        <p>• Banning Child & Forced Labour</p>
                        <p>• Maintaining Ethical & Safe Working Conditions</p>
                    </div>
                    We take a firm stand against workplace misconduct,
                    reinforcing a zero-tolerance approach to harassment,
                    discrimination, and exploitation—upholding dignity, respect,
                    and fairness for all.
                </div>
            </div>
        </>
    );
}

export default HealthSafety;
