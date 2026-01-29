import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { X, ZoomIn, ZoomOut, Download } from 'lucide-react';

export default function NewsletterReader({ url, onClose }) {
    const [numPages, setNumPages] = useState(null);
    const [scale, setScale] = useState(1.0);
    const [containerWidth, setContainerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setContainerWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Lock body scroll when open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Calculate optimal width based on screen and scale
    const getPageWidth = () => {
        const baseWidth = Math.min(containerWidth - 40, 1000); // Max 1000px base width
        return baseWidth * scale;
    };

    return (
        <div className="fixed inset-0 z-50 flex flex-col bg-gray-900/95 backdrop-blur-md animate-in fade-in duration-300">
            {/* Toolbar */}
            <div className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md z-10">
                <h2 className="text-lg font-light tracking-wide text-gray-300 hidden sm:block">
                    Newsletter Reader
                </h2>

                {/* Controls */}
                <div className="flex items-center space-x-4 bg-gray-800 rounded-full px-4 py-2">
                    <button
                        onClick={() => setScale(s => Math.max(0.5, s - 0.1))}
                        className="p-1 hover:text-blue-400 transition"
                        title="Zoom Out"
                    >
                        <ZoomOut size={20} />
                    </button>
                    <span className="text-xs font-mono w-12 text-center">
                        {Math.round(scale * 100)}%
                    </span>
                    <button
                        onClick={() => setScale(s => Math.min(2.0, s + 0.1))}
                        className="p-1 hover:text-blue-400 transition"
                        title="Zoom In"
                    >
                        <ZoomIn size={20} />
                    </button>

                    <div className="w-px h-4 bg-gray-600 mx-2"></div>

                    <a
                        href={url}
                        download
                        target="_blank"
                        rel="noreferrer"
                        className="p-1 hover:text-green-400 transition"
                        title="Download PDF"
                    >
                        <Download size={20} />
                    </a>
                </div>

                <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-white"
                >
                    <X size={28} />
                </button>
            </div>

            {/* Scrollable PDF Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-8 flex justify-center">
                <Document
                    file={url}
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                    loading={
                        <div className="flex h-full items-center text-white/50 animate-pulse">
                            Loading PDF...
                        </div>
                    }
                    className="flex flex-col gap-4 shadow-2xl"
                >
                    {numPages && Array.from({ length: numPages }, (_, i) => (
                        <Page
                            key={i}
                            pageNumber={i + 1}
                            width={getPageWidth()}
                            className="bg-white shadow-lg"
                            renderTextLayer={true} // Enable text selection for reader
                            renderAnnotationLayer={true}
                        />
                    ))}
                </Document>
            </div>
        </div>
    );
}
