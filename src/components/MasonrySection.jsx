import React from "react";

// Importing 12 images from assets
import img1 from "../assets/HeroImages/Elegance.webp";
import img2 from "../assets/CraftingTomorrow/01.webp";
import img3 from "../assets/CraftingTomorrow/2.webp";
import img4 from "../assets/CraftingTomorrow/3.webp";
import img5 from "../assets/CraftingTomorrow/4.webp";
import img6 from "../assets/Responsible/img1.webp";
import img7 from "../assets/Responsible/img2.webp";
import img8 from "../assets/Responsible/img3.webp";
import img9 from "../assets/Responsible/pic1.webp";
import img10 from "../assets/Responsible/pic2.webp";
import img11 from "../assets/Responsible/pic3.webp";
import img12 from "../assets/Community/csr.webp";

const MasonrySection = () => {
    return (
        <section className="bg-[#F9F6F1] py-24 px-6 sm:px-10 lg:px-20 font-serif overflow-hidden">
            <div className="max-w-[1750px] mx-auto flex flex-col md:flex-row gap-8">
                
                {/* Column 1 */}
                <div className="flex-1 flex flex-col gap-8">
                    <div className="h-[900px] overflow-hidden">
                        <img src={img1} alt="Excellence 1" decoding="async" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" />
                    </div>

                    <div className="h-[300px] overflow-hidden">
                        <img src={img5} alt="Excellence 2" decoding="async" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" />
                    </div>

                    <div className="h-[500px] overflow-hidden">
                        <img src={img8} alt="Excellence 3" decoding="async" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" />
                    </div>

                    <div className="bg-[#EFE9E1] p-12 flex flex-col justify-between h-[604px] border border-[#E5DFD5]">
                        <p className="italic text-xl mb-6 text-[#1a1a1a] opacity-80 font-light leading-relaxed">
                            “30 minutes behind the scenes of our craftsmanship; a return to the roots of design and an invitation to experience timeless elegance.”
                        </p>
                        <h3 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight tracking-tighter uppercase whitespace-pre-line">
                            The Art {"\n"} of Living
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
                        <img src={img2} alt="Excellence 4" decoding="async" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" />
                    </div>

                    <div className="h-[550px] overflow-hidden">
                        <img src={img6} alt="Excellence 5" decoding="async" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" />
                    </div>

                    <div className="h-[650px] overflow-hidden">
                        <img src={img9} alt="Excellence 6" decoding="async" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" />
                    </div>

                    <div className="h-[322px] overflow-hidden">
                        <img src={img10} alt="Excellence 7" decoding="async" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" />
                    </div>
                </div>

                {/* Column 3 */}
                <div className="flex-1 flex flex-col gap-8">
                    <div className="h-[350px] overflow-hidden">
                        <img src={img3} alt="Excellence 8" decoding="async" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" />
                    </div>

                    <div className="h-[600px] overflow-hidden">
                        <img src={img4} alt="Excellence 9" decoding="async" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" />
                    </div>

                    <div className="h-[420px] overflow-hidden">
                        <img src={img7} alt="Excellence 10" decoding="async" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" />
                    </div>

                    <div className="h-[580px] overflow-hidden">
                        <img src={img11} alt="Excellence 11" decoding="async" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" />
                    </div>

                    <div className="h-[322px] overflow-hidden">
                        <img src={img12} alt="Excellence 12" decoding="async" className="w-full h-full object-cover rounded-sm hover:scale-[1.02] transition-transform duration-500" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MasonrySection;
