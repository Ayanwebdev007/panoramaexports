import React from "react";

const RootsOfExcellence = () => {
    return (
        <>
            <div className="bg-blue-950 h-20 mb-12"></div>
            <section className="bg-white text-gray-800 px-6 py-12 md:px-20">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">
                        Our Story
                    </h1>
                    <h2 className="text-lg md:text-xl text-gray-600 tracking-widest uppercase mb-6">
                        ROOTS OF EXCELLENCE
                    </h2>

                    {/* Tagline */}
                    <p className="text-lg italic text-gray-500 mb-10">
                        Where Heritage Meets Modern Luxury
                    </p>

                    {/* Main Content */}
                    <p className="text-lg leading-relaxed mb-10">
                        Since 1973, Panorama Exports has transformed fabrics
                        into fashion — blending Indian craftsmanship with
                        advanced manufacturing. Today, our garments travel from
                        India to global wardrobes, each piece echoing artistry,
                        innovation, and timeless tradition.
                    </p>

                    {/* Closing Line */}
                    <p className="font-semibold text-xl text-gray-700 mb-16">
                        More than fashion — it's handcrafted legacy
                    </p>
                </div>

                {/* Timeline Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative border-l border-gray-300">
                        {/* 1973 */}
                        <div className="mb-10 ml-6">
                            <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-1.5"></div>
                            <h3 className="text-xl font-semibold">
                                1973 – The Beginning
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Panorama Exports was founded, starting its
                                journey with rich Indian craftsmanship and
                                handloom textiles.
                            </p>
                        </div>

                        {/* 1990s */}
                        <div className="mb-10 ml-6">
                            <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-1.5"></div>
                            <h3 className="text-xl font-semibold">
                                1990s – Growth & Recognition
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Expanded into international markets, gaining
                                recognition for blending tradition with modern
                                fashion needs.
                            </p>
                        </div>

                        {/* 2000s */}
                        <div className="mb-10 ml-6">
                            <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-1.5"></div>
                            <h3 className="text-xl font-semibold">
                                2000s – Innovation
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Introduced advanced manufacturing while keeping
                                artistry and heritage alive in every piece.
                            </p>
                        </div>

                        {/* Today */}
                        <div className="ml-6">
                            <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-1.5"></div>
                            <h3 className="text-xl font-semibold">
                                Today – Global Legacy
                            </h3>
                            <p className="text-gray-600 mt-2">
                                From India to global wardrobes, Panorama
                                continues to redefine luxury fashion with
                                innovation, quality, and tradition.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RootsOfExcellence;
