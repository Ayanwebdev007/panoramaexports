import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { lookbookData } from '../../data/lookbookData';
import { ArrowLeft, ZoomIn, ZoomOut, Download, Maximize2 } from 'lucide-react';

export default function LookbookViewer() {
    const { id } = useParams();
    const navigate = useNavigate();
    const lookbook = lookbookData.find(l => l.id.toString() === id);

    const [scale, setScale] = useState(1.0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        if (!lookbook) navigate('/lookbook');
    }, [lookbook, navigate]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!lookbook) return null;

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-outfit">
            {/* Navbar Spacer */}
            <div className="w-full h-20 bg-gray-900 flex-shrink-0"></div>

            {/* Viewer Header */}
            <div className="bg-white border-b border-gray-200 sticky top-20 z-10 shadow-sm flex-shrink-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-4 flex items-center justify-between relative">
                    <button
                        onClick={() => navigate('/lookbook')}
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group z-20 font-light"
                    >
                        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Collections</span>
                    </button>

                    {/* Centered Title */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <h1 className="text-sm font-light tracking-[0.3em] uppercase text-gray-500 hidden md:block pointer-events-auto">
                            {lookbook.subtitle}
                        </h1>
                    </div>

                    <div className="flex items-center space-x-3 z-20">
                        <div className="hidden sm:flex items-center space-x-1 bg-gray-100 rounded-full px-2 py-1">
                            <button
                                onClick={() => setScale(s => Math.max(0.5, s - 0.2))}
                                className="p-1.5 text-gray-500 hover:text-blue-900 transition-colors"
                                title="Zoom Out"
                            >
                                <ZoomOut size={18} />
                            </button>
                            <span className="text-[10px] font-medium w-10 text-center text-gray-600">
                                {Math.round(scale * 100)}%
                            </span>
                            <button
                                onClick={() => setScale(s => Math.min(3.0, s + 0.2))}
                                className="p-1.5 text-gray-500 hover:text-blue-900 transition-colors"
                                title="Zoom In"
                            >
                                <ZoomIn size={18} />
                            </button>
                        </div>

                        <button
                            onClick={toggleFullscreen}
                            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors hidden md:block"
                            title="Toggle Fullscreen"
                        >
                            <Maximize2 size={20} />
                        </button>

                        <div className="h-6 w-px bg-gray-200 mx-1 hidden sm:block"></div>

                        <a
                            href={lookbook.image}
                            download={`${lookbook.title}.webp`}
                            className="flex items-center px-5 py-2.5 bg-blue-950 text-white rounded-sm text-sm font-light hover:bg-blue-900 transition-all shadow-sm hover:shadow-md active:scale-95"
                        >
                            <Download size={16} className="mr-2" />
                            <span className="hidden sm:inline">Export Card</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Viewer Content */}
            <div className="flex-1 flex justify-center p-4 md:p-12 bg-[#f8f9fa] overflow-auto select-none">
                <div 
                    className="relative transition-transform duration-300 ease-out shadow-2xl bg-white"
                    style={{ 
                        transform: `scale(${scale})`,
                        transformOrigin: 'top center',
                        width: 'fit-content',
                        height: 'fit-content'
                    }}
                >
                    <img
                        src={lookbook.image}
                        alt={lookbook.title}
                        className="max-w-[90vw] md:max-w-[1200px] h-auto block"
                        draggable="false"
                    />
                    
                    {/* Subtle Material Detail */}
                    <div className="absolute inset-0 pointer-events-none border-[20px] border-white/5 mix-blend-overlay"></div>
                    <div className="absolute inset-0 pointer-events-none ring-1 ring-black/5"></div>
                </div>
            </div>

            {/* Footer Status */}
            <div className="bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest font-light">
                <span>Panorama Heritage Lookbook System v1.0</span>
                <span>© 2024 Panorama Exports. All Rights Reserved.</span>
            </div>
        </div>
    );
}
