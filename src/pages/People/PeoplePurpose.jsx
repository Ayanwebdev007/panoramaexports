import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import p1 from "../../assets/People/ProgressPurpose/01.webp";
import p2 from "../../assets/People/ProgressPurpose/02.webp";
import p3 from "../../assets/People/ProgressPurpose/03.webp";
import p4 from "../../assets/People/ProgressPurpose/04.webp";

function PeoplePurpose() {
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
            <div className="lg:w-[60%] mx-auto 2xl:mt-36 mt-28 2xl:mb-20 mb-14 ">
                <h1 className="lg:text-3xl font-semibold text-blue-950 mb-5 text-center">
                    People-Progress-Purpose
                </h1>
                <div className="lg:text-xl leading-loose text-justify">
                    At Panorama, we cultivate a culture of responsibility,
                    inclusion, and continuous growth:
                    <div className="w-[90%] mx-auto">
                        <p className="mt-4">
                            • Sustainable Stewardship: Innovating for
                            environmental responsibility.
                        </p>
                        <p>
                            • Safe & Thriving Workplaces: Fostering security and
                            well-being.
                        </p>
                        <p>
                            • Empowered Employees: Enhancing skills for personal
                            and professional growth.
                        </p>
                        <p>
                            • Health & Wellness: Strengthening awareness and
                            preventive care.
                        </p>
                        <p>
                            • Ethical & Fair Workplace: Upholding dignity, human
                            rights, and grievance redressed.
                        </p>
                        <p>
                            • Impact-Driven CSR: Driving change in education,
                            healthcare, and sustainability.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PeoplePurpose;
