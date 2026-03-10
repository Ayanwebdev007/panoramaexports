import React from 'react';
import img1 from "../../assets/C1127T01 copy.jpg";
import img2 from "../../assets/CM100440.webp";
import img3 from "../../assets/CM100034.webp";
import img4 from "../../assets/DSC03338.webp";

export default function JoinUs() {
    return (
        <section className="bg-white py-8 lg:py-16 w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-20 flex justify-center overflow-hidden relative">

            <div className="flex flex-row w-full max-w-[1050px] relative z-10">

                {/* Left Side Container - Absolute to match the height of the right square */}
                <div className="absolute top-0 left-0 w-[calc(72%-0.5rem)] sm:w-[calc(72%-1rem)] h-full flex flex-col gap-1 sm:gap-4 z-20">

                    {/* Top Row: JOIN, Image1, Image2 */}
                    <div className="flex flex-row gap-1 sm:gap-4 h-[calc(50%-0.125rem)] sm:h-[calc(50%-0.5rem)] flex-nowrap">
                        <div className="w-[35%] flex-none flex items-center justify-start lg:pr-2 overflow-visible relative z-20">
                            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#01276a] to-[#0a3da1] text-[32px] sm:text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] leading-[0.8] font-outfit font-normal tracking-tight whitespace-nowrap relative -left-1 lg:-left-4 xl:-left-8 drop-shadow-[0_2px_10px_rgba(1,39,106,0.05)]">
                                JOIN
                            </h2>
                        </div>
                        <div className="flex-1 min-w-0 h-full overflow-hidden rounded-[0.75rem] sm:rounded-[1.25rem] relative group shadow-[0_4px_15px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(1,39,106,0.12)] hover:-translate-y-1 transition-all duration-700 ease-out ring-1 ring-gray-900/5">
                            <img src={img1} alt="Workspace" className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]" />
                            <div className="absolute inset-0 bg-[#01276a]/0 group-hover:bg-[#01276a]/5 transition-colors duration-700 z-10 pointer-events-none"></div>
                        </div>
                        <div className="flex-1 min-w-0 h-full overflow-hidden rounded-[0.75rem] sm:rounded-[1.25rem] relative group shadow-[0_4px_15px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(1,39,106,0.12)] hover:-translate-y-1 transition-all duration-700 ease-out ring-1 ring-gray-900/5">
                            <img src={img2} alt="Apparel Display" className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]" />
                            <div className="absolute inset-0 bg-[#01276a]/0 group-hover:bg-[#01276a]/5 transition-colors duration-700 z-10 pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Bottom Row: US, Image3 */}
                    <div className="flex flex-row gap-1 sm:gap-4 h-[calc(50%-0.125rem)] sm:h-[calc(50%-0.5rem)] flex-nowrap">
                        <div className="w-[17%] flex-none flex items-center justify-start lg:pr-2 overflow-visible relative z-20">
                            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#01276a] to-[#0a3da1] text-[32px] sm:text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] leading-[0.8] font-outfit font-normal tracking-tighter whitespace-nowrap relative -left-1 lg:-left-4 xl:-left-8 drop-shadow-[0_2px_10px_rgba(1,39,106,0.05)]">
                                US
                            </h2>
                        </div>
                        <div className="w-[83%] h-full overflow-hidden rounded-[0.75rem] sm:rounded-[1.25rem] relative group shadow-[0_4px_15px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(1,39,106,0.12)] hover:-translate-y-1 transition-all duration-700 ease-out ring-1 ring-gray-900/5">
                            <img src={img3} alt="Factory Floor" className="w-full h-full object-cover object-[center_60%] transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]" />
                            <div className="absolute inset-0 bg-[#01276a]/0 group-hover:bg-[#01276a]/5 transition-colors duration-700 z-10 pointer-events-none"></div>
                        </div>
                    </div>

                </div>

                {/* Right Side Square Image - This relative child defines the height for the entire section */}
                <div className="w-[28%] ml-auto aspect-square overflow-hidden rounded-[0.75rem] sm:rounded-[1.25rem] relative group shadow-[0_4px_15px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(1,39,106,0.12)] hover:-translate-y-1 transition-all duration-700 ease-out ring-1 ring-gray-900/5">
                    <img src={img4} alt="Team" className="w-full h-full object-cover object-center -rotate-90 transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-[#01276a]/0 group-hover:bg-[#01276a]/5 transition-colors duration-700 z-10 pointer-events-none"></div>
                </div>

            </div>
        </section>
    );
}
