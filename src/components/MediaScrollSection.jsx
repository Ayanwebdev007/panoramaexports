import Media1 from "../assets/Media/01.webp";
import Media2 from "../assets/Media/media_2.webp";
import Media3 from "../assets/Media/02.webp";
import Media4 from "../assets/Media/03.webp";

const images = [
    { src: Media1, size: "large" },
    { src: Media2, size: "small" },
    { src: Media3, size: "medium" },
    { src: Media4, size: "medium" }
];

const MediaScrollSection = () => {
    return (
        <div className="bg-white w-[90%] mx-auto px-4 sm:px-10 lg:px-20 pt-10 pb-0 relative overflow-hidden">
            {/* Ambient Background Glows for a futuristic feel */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/30 rounded-full blur-[100px] -z-10" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto min-h-[700px]">
                {/* 01: Hero Featured Card (Spans 8 columns) */}
                <div className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded-[48px] border border-blue-100/40 bg-white/40 backdrop-blur-sm shadow-[0_20px_50px_rgba(1,39,106,0.05)] hover:shadow-[0_40px_80px_rgba(1,39,106,0.15)] transition-all duration-700 pointer-events-auto h-[450px] md:h-auto">
                    <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                        style={{ backgroundImage: `url(${images[0].src})` }}
                    />
                    {/* Futuristic Glass Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute inset-0 border-[1px] border-white/40 rounded-[48px] pointer-events-none" />
                </div>

                {/* 02: Secondary Card (Top Right) */}
                <div className="md:col-span-4 group relative overflow-hidden rounded-[35px] border border-blue-100/40 bg-white/40 backdrop-blur-sm shadow-[0_15px_40px_rgba(1,39,106,0.05)] hover:shadow-[0_25px_60px_rgba(1,39,106,0.12)] transition-all duration-700 pointer-events-auto h-[320px] md:h-auto">
                    <div
                        className="w-full h-full bg-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                        style={{ backgroundImage: `url(${images[1].src})`, backgroundPosition: "center 25%" }}
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute inset-0 border-[1px] border-white/40 rounded-[35px] pointer-events-none" />
                </div>

                {/* 03 & 04: Bottom Duo Grid */}
                <div className="md:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-8">
                    <div className="group relative overflow-hidden rounded-[30px] border border-blue-100/40 bg-white/40 backdrop-blur-sm shadow-[0_10px_30px_rgba(1,39,106,0.05)] hover:shadow-[0_20px_50px_rgba(1,39,106,0.1)] transition-all duration-700 pointer-events-auto h-[220px] md:h-auto">
                        <div
                            className="w-full h-full bg-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                            style={{ backgroundImage: `url(${images[2].src})`, backgroundPosition: "center 25%" }}
                        />
                        <div className="absolute inset-0 border-[1px] border-white/40 rounded-[30px] pointer-events-none" />
                    </div>
                    <div className="group relative overflow-hidden rounded-[30px] border border-blue-100/40 bg-white/40 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(1,39,106,0.1)] transition-all duration-700 pointer-events-auto h-[220px] md:h-auto">
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
                            style={{ backgroundImage: `url(${images[3].src})` }}
                        />
                        <div className="absolute inset-0 border-[1px] border-white/40 rounded-[30px] pointer-events-none" />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .pointer-events-auto {
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export default MediaScrollSection;
