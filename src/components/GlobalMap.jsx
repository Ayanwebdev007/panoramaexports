import { useEffect, useRef, useState } from "react";
import React from "react";
// import { motion } from "framer-motion"; // Removing framer-motion
import { MdLocationPin } from "react-icons/md";
import globalMap from "../assets/GlobalFootprint/MAP PNG.webp";


//marker positions in percentages (relative to map div)
const markers = [
    { country: "USA", brands: ["Lucky Brand"], top: "27%", left: "23%" },
    {
        country: "COLOMBIA",
        brands: ["Falabella"],
        top: "50%",
        left: "22%",
    },
    {
        country: "PERU",
        brands: [
            "Falabella"
        ],
        top: "62%",
        left: "24%",
    },
    { country: "CHILE", brands: ["Falabella"], top: "73%", left: "25%" },
    {
        country: "UK",
        brands: ["Farm Rio", "Tesco", "George", "Boden", "TJ Maxx", "Matala", "Boots", "Monsoon", "Redid", "Baby Moti"],
        top: "19%",
        left: "43%",
    },
    { country: "SPAIN", brands: ["Mango"], top: "27%", left: "42%" },
    { country: "BELGIUM", brands: ["Farm Rio"], top: "22%", left: "45%" },
    { country: "GERMANY", brands: ["Cecil", "Street One"], top: "20%", left: "47%" },
    { country: "GREECE", brands: ["Mothercare"], top: "27%", left: "50%" },
    { country: "QATAR", brands: ["Landmark Group"], top: "39%", left: "56%" },
    { country: "AUSTRALIA", brands: ["Taking Shape"], top: "70%", left: "83%" },
    {
        country: "NEW ZEALAND",
        brands: ["Taking Shape"],
        top: "81%",
        left: "88%",
    },
    { country: "Singapore", brands: ["Mothercare"], top: "57%", left: "74%" },
    { country: "Malaysia", brands: ["Mothercare"], top: "50%", left: "71%" },
    { country: "CHINA", brands: ["Mothercare"], top: "31%", left: "74%" },
    { country: "UAE", brands: ["Mothercare", "Landmark Group"], top: "41%", left: "58%" },
    { country: "INDONESIA", brands: ["Mothercare"], top: "54%", left: "81%" },
    {
        country: "KOREA",
        brands: ["Top Ten", "Laughing Child"],
        top: "39%",
        left: "77%",
    },
    {
        country: "SOUTH AFRICA",
        brands: ["Trueworths"],
        top: "70%",
        left: "52%",
    },
];

export default function GlobalMap() {
    const mapRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (mapRef.current) {
            observer.observe(mapRef.current);
        }

        return () => observer.disconnect();
    }, []);


    return (
        <div className="bg-gradient-to-r from-[#4a3e2e]/90 via-[#7e6e55]/90 to-[#bda684]/90 px-2 sm:px-6 md:px-10 2xl:px-20 py-10 w-full sm:mt-2 text-white lg:flex items-center justify-between gap-6 relative">
            <style>
                {`
                @keyframes dropPin {
                    0% { transform: translateY(450px); opacity: 0; }
                    60% { transform: translateY(-25px); opacity: 1; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                .animate-pin {
                    animation: dropPin 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    opacity: 0; /* Start hidden */
                }
                `}
            </style>
            <div className="xl:w-[40%] lg:w-[30%] w-full 2xl:px-5 px-10 lg:px-0 flex flex-col justify-center py-10">
                <h1 className="2xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl shimmer-text drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)] xl:gap-7 gap-5 flex flex-wrap justify-start items-center">
                    <p className="font-semibold 2xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
                        Global
                    </p>
                    Footprint
                </h1>
                <div className="md:mt-10 mt-5 flex justify-start items-center gap-8 ">
                    <p className="2xl:text-xl lg:text-lg md:text-md text-[12px] text-white">
                        Panorama’s expanding global reach underscores its
                        emergence as a prominent leader in the international
                        apparel industry
                    </p>
                </div>
            </div>

            <div
                ref={mapRef}
                className={`xl:w-[60%] lg:w-[70%] z-10 flex flex-col items-center justify-center w-full`}
            >
                <div className="relative w-full">
                    {/* Background Map */}
                    <img
                        src={globalMap}
                        alt="World Map"
                        className="opacity-60 image-contain image-no-repeat w-full"
                    />

                    {/* Location Markers */}
                    <div className="absolute inset-0">
                        {markers.map((marker, index) => (
                            <div
                                key={marker.country || index}
                                className={`absolute text-white group ${inView ? "animate-pin" : "opacity-0"}`}
                                style={{
                                    top: marker.top,
                                    left: marker.left,
                                    animationDelay: `${index * 0.15}s`,
                                    // Optimization hints
                                    willChange: "transform, opacity",
                                }}
                            >
                                <div className="relative pointer-events-auto cursor-pointer">
                                    <MdLocationPin className="text-white 2xl:text-[28px] xl:text-[25px] lg:text-[20px] md:text-[18px] sm:text-[15px] text-[12px]" />
                                    <div
                                        className="absolute z-50 left-1/2 bottom-6 hidden group-hover:block bg-white lg:text-sm md:text-[10px] text-[7px] text-red-950 px-2 py-1 rounded-lg shadow-md whitespace-nowrap
                                        bottom-4 left-1/2 -translate-x-1/2
                                        lg:left-1/2 lg:-translate-x-1/2 md:bottom-5 xl:bottom-6 2xl:bottom-7 pointer-events-none"
                                    >
                                        <strong>{marker.country} : </strong>{" "}
                                        {marker.brands.join(", ")}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
