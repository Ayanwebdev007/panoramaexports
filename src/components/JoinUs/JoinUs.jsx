import React from 'react';
import img1 from "../../assets/CM100256.webp";
import img2 from "../../assets/CM100440.webp";
import img3 from "../../assets/DSC02823.webp";
import img4 from "../../assets/DSC03338.webp";

export default function JoinUs() {
    return (
        <section className="bg-white pt-16 lg:pt-24 pb-8 lg:pb-12 w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-20 flex justify-center overflow-hidden relative">
            {/* Background Decorative Element: Sharp Grey Rectangle with Texture (Commented out for experiment) */}
            {/*
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[80%] bg-[#f1f3f5] z-0 hidden lg:block overflow-hidden">
                <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            </div>
            */}
            
            <div className="flex flex-col lg:flex-row gap-2 md:gap-4 w-full max-w-[1050px] relative z-10">
                
                {/* Left Side Container */}
                <div className="w-full lg:absolute lg:top-0 lg:left-0 lg:w-[calc(72%-1rem)] flex flex-col gap-4 lg:h-full">
                    
                    {/* Top Row: JOIN, Image1, Image2 */}
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 h-auto lg:h-[calc(50%-0.5rem)]">
                        <div className="w-full md:w-[35%] flex-none flex items-center justify-center lg:justify-start lg:pr-2 overflow-visible relative z-20">
                            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#01276a] to-[#0a3da1] text-[70px] md:text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] leading-[0.8] font-outfit font-normal tracking-tight lg:-mt-2 whitespace-nowrap relative lg:-left-4 xl:-left-8 drop-shadow-[0_2px_10px_rgba(1,39,106,0.05)]">
                                JOIN
                            </h2>
                        </div>
                        <div className="w-full md:flex-1 min-w-0 h-48 md:h-full overflow-hidden rounded-[1.25rem] relative z-10 group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(1,39,106,0.12)] hover:-translate-y-1 transition-all duration-700 ease-out ring-1 ring-gray-900/5">
                            <img src={img1} alt="Workspace" className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]" />
                            <div className="absolute inset-0 bg-[#01276a]/0 group-hover:bg-[#01276a]/5 transition-colors duration-700 z-10 pointer-events-none"></div>
                        </div>
                        <div className="w-full md:flex-1 min-w-0 h-48 md:h-full overflow-hidden rounded-[1.25rem] relative z-10 group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(1,39,106,0.12)] hover:-translate-y-1 transition-all duration-700 ease-out ring-1 ring-gray-900/5">
                            <img src={img2} alt="Apparel Display" className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]" />
                             <div className="absolute inset-0 bg-[#01276a]/0 group-hover:bg-[#01276a]/5 transition-colors duration-700 z-10 pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Bottom Row: US, Image4 */}
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 h-auto lg:h-[calc(50%-0.5rem)]">
                        <div className="w-full md:w-[17%] flex-none flex items-center justify-center lg:justify-start overflow-visible relative z-20">
                            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#01276a] to-[#0a3da1] text-[70px] md:text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] leading-[0.8] font-outfit font-normal tracking-tighter lg:-mt-2 whitespace-nowrap relative lg:-left-4 xl:-left-8 drop-shadow-[0_2px_10px_rgba(1,39,106,0.05)]">
                                US
                            </h2>
                        </div>
                        <div className="w-full md:w-[83%] h-[300px] sm:h-[400px] md:h-full overflow-hidden rounded-[1.25rem] relative z-10 group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(1,39,106,0.12)] hover:-translate-y-1 transition-all duration-700 ease-out ring-1 ring-gray-900/5">
                            <img src={img3} alt="Factory Floor" className="w-full h-full object-cover object-bottom transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]" />
                            <div className="absolute inset-0 bg-[#01276a]/0 group-hover:bg-[#01276a]/5 transition-colors duration-700 z-10 pointer-events-none"></div>
                        </div>
                    </div>

                </div>

                {/* Right Side Square Image (This defines the overall container height for Desktop) */}
                <div className="w-full lg:w-[28%] lg:ml-auto aspect-square overflow-hidden rounded-[1.25rem] relative group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(1,39,106,0.12)] hover:-translate-y-1 transition-all duration-700 ease-out ring-1 ring-gray-900/5">
                    <img src={img4} alt="Team" className="w-full h-full object-cover object-center -rotate-90 transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.03]" />
                    <div className="absolute inset-0 bg-[#01276a]/0 group-hover:bg-[#01276a]/5 transition-colors duration-700 z-10 pointer-events-none"></div>
                </div>

            </div>
        </section>
    );
}
