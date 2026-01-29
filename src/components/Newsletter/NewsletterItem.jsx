import React, { useState, useEffect, useRef } from 'react';
import { Document, Page } from 'react-pdf';
import { ArrowUpRight } from 'lucide-react';

export default function NewsletterItem({ item, onClick }) {
    const [containerWidth, setContainerWidth] = useState(300);
    const containerRef = useRef(null);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.clientWidth);
            }
        };

        const observer = new ResizeObserver(updateWidth);
        if (containerRef.current) observer.observe(containerRef.current);

        updateWidth(); // Initial call

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            onClick={() => onClick(item)}
            className="flex flex-col group cursor-pointer"
        >
            {/* PDF Thumbnail Container */}
            <div className="relative w-full overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] border border-gray-100 bg-gray-50 mb-6 rounded-sm">

                {/* Image Scale Wrapper */}
                <div className="flex justify-center items-start transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-105">
                    <Document
                        file={item.url}
                        loading={
                            <div className="w-full aspect-[1/1.4] flex items-center justify-center bg-gray-50 text-gray-300 text-xs uppercase tracking-widest">
                                <span className="animate-pulse">Loading...</span>
                            </div>
                        }
                        className="w-full"
                    >
                        <Page
                            pageNumber={1}
                            width={containerWidth}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            className="w-full h-auto"
                            canvasBackground="transparent"
                        />
                    </Document>
                </div>

                {/* Subtle sheen/overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/0 via-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Hover generic overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Date & Info Label */}
            <div className="flex flex-col items-start px-2">
                <div className="flex items-baseline space-x-3 w-full border-b border-gray-100 pb-3 mb-3 group-hover:border-gray-300 transition-colors duration-500">
                    <h3 className="text-xl font-medium text-gray-800 group-hover:text-blue-900 transition-colors duration-300">
                        {item.month}
                    </h3>
                    <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400 group-hover:text-gray-600 transition-colors">
                        {item.year}
                    </span>
                    <div className="flex-grow"></div>
                    <ArrowUpRight
                        size={18}
                        className="text-gray-300 group-hover:text-blue-900 transform translate-y-2 opacity-0 -translate-x-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
                    />
                </div>

                <span className="text-xs text-gray-400 font-medium tracking-wide group-hover:text-gray-600 transition-colors duration-300">
                    PANORAMA UPDATE
                </span>
            </div>
        </div>
    );
}
