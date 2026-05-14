import React from "react";

// Importing 12 images from assets
import img6 from "../assets/Responsible/img1.webp";
import img9 from "../assets/Responsible/pic1.webp";
import img10 from "../assets/Responsible/pic2.webp";

// New Left Row assets
import leftImg1 from "../assets/Left Row/Left Row/1.webp";
import leftImg2 from "../assets/Left Row/Left Row/2.webp";
import leftImg3 from "../assets/Left Row/Left Row/3.webp";

// New Middle Row assets
import middleImg1 from "../assets/Middle Row/Middle Row/03.webp";

// Importing 4 new images for the right column
import rightImg1 from "../assets/Right Row/Right Row/01.webp";
import rightImg2 from "../assets/Right Row/Right Row/02.webp";
import rightImg3 from "../assets/Right Row/Right Row/3.webp";
import rightImg4 from "../assets/Right Row/Right Row/05.webp";

const MasonrySection = () => {
    return (
        <section className="bg-[#F9F6F1] py-24 px-6 sm:px-10 lg:px-20 font-serif overflow-hidden">
            <div className="max-w-[1750px] mx-auto flex flex-col md:flex-row gap-8">
                
                {/* Column 1 */}
                <div className="flex-1 flex flex-col gap-8">
                    <div className="h-[900px] overflow-hidden">
                        <img src={leftImg1} alt="Excellence 1" decoding="async" loading="lazy" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" style={{ objectPosition: '70% center', willChange: 'transform' }} />
                    </div>

                    <div className="h-[300px] overflow-hidden">
                        <img src={leftImg2} alt="Excellence 2" decoding="async" loading="lazy" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" style={{ willChange: 'transform' }} />
                    </div>

                    <div className="h-[500px] overflow-hidden">
                        <img src={leftImg3} alt="Excellence 3" decoding="async" loading="lazy" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" style={{ willChange: 'transform' }} />
                    </div>

                    <div className="bg-[#EFE9E1] p-12 flex flex-col justify-between h-[604px] border border-[#E5DFD5]">
                        <p className="italic text-xl mb-6 text-[#1a1a1a] opacity-80 font-light leading-relaxed">
                            “An intimate look into our craftsmanship: a journey back to the roots of design, where timeless elegance quietly endures. Guided by authenticity and refined by hand, every element reflects a legacy of understated luxury.”
                        </p>
                        <h3 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight tracking-tighter uppercase whitespace-pre-line">
                            A Return to {"\n"} the Essence
                        </h3>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="flex-1 flex flex-col gap-8">
                    <div className="bg-[#EFE9E1] p-12 flex flex-col justify-between h-[450px] border border-[#E5DFD5]">
                        <p className="italic text-xl mb-6 text-[#1a1a1a] opacity-80 font-light leading-relaxed">
                            “Exploring the legacy and the meticulous vision that defines the Panorama journey.”
                        </p>
                        <h3 className="text-2xl lg:text-3xl font-bold text-[#1a1a1a] leading-tight tracking-tighter uppercase whitespace-pre-line text-left">
                            The Story of {"\n"} Panorama
                        </h3>
                    </div>

                    <div className="h-[300px] overflow-hidden">
                        <img src={middleImg1} alt="Excellence 4" decoding="async" loading="lazy" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" style={{ willChange: 'transform' }} />
                    </div>

                    <div className="h-[550px] overflow-hidden">
                        <img src={img6} alt="Excellence 5" decoding="async" loading="lazy" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" style={{ willChange: 'transform' }} />
                    </div>

                    <div className="h-[650px] overflow-hidden">
                        <img src={img9} alt="Excellence 6" decoding="async" loading="lazy" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" style={{ willChange: 'transform' }} />
                    </div>

                    <div className="h-[322px] overflow-hidden">
                        <img src={img10} alt="Excellence 7" decoding="async" loading="lazy" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" style={{ willChange: 'transform' }} />
                    </div>
                </div>

                {/* Column 3 */}
                <div className="flex-1 flex flex-col gap-8">
                    <div className="h-[450px] overflow-hidden">
                        <img src={rightImg1} alt="Excellence 8" decoding="async" loading="lazy" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" style={{ willChange: 'transform' }} />
                    </div>

                    <div className="h-[650px] overflow-hidden">
                        <img src={rightImg2} alt="Excellence 9" decoding="async" loading="lazy" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" style={{ willChange: 'transform' }} />
                    </div>

                    <div className="h-[550px] overflow-hidden">
                        <img src={rightImg3} alt="Excellence 10" decoding="async" loading="lazy" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" style={{ willChange: 'transform' }} />
                    </div>

                    <div className="h-[654px] overflow-hidden">
                        <img src={rightImg4} alt="Excellence 11" decoding="async" loading="lazy" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" style={{ willChange: 'transform' }} />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MasonrySection;
