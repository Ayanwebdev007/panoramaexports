import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mediaData } from '../../data/mediaData';
import { Document, Page } from 'react-pdf';
import { ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut, ArrowLeft } from 'lucide-react';

export default function NewsletterViewer() {
    const { id } = useParams();
    const navigate = useNavigate();
    const newsletter = mediaData.Newsletter.find(n => n.id.toString() === id);

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(1.0);
    const [containerHeight, setContainerHeight] = useState(window.innerHeight);

    // If not found, redirect back
    useEffect(() => {
        if (!newsletter) navigate('/media');
    }, [newsletter, navigate]);

    useEffect(() => {
        const handleResize = () => {
            setContainerHeight(window.innerHeight);
        };
        window.addEventListener('resize', handleResize);
        // Initial setup
        setContainerHeight(window.innerHeight);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Scroll to top on page change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pageNumber]);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    if (!newsletter) return null;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Navbar Spacer to prevent overlap if Navbar is fixed */}
            <div className="w-full h-20 bg-gray-900 flex-shrink-0"></div>

            {/* Viewer Header */}
            <div className="bg-white border-b border-gray-200 sticky top-20 z-10 shadow-sm flex-shrink-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
                    <button
                        onClick={() => navigate('/media?tab=Newsletter')}
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors group z-20"
                    >
                        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Media</span>
                    </button>

                    {/* Centered Title */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <h1 className="text-xl font-semibold text-gray-800 hidden md:block pointer-events-auto">
                            {newsletter.month} {newsletter.year}
                        </h1>
                    </div>

                    <div className="flex items-center space-x-2 z-20">
                        <button
                            onClick={() => setScale(s => Math.max(0.5, s - 0.1))}
                            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                            title="Zoom Out"
                        >
                            <ZoomOut size={20} />
                        </button>
                        <span className="text-sm font-mono w-12 text-center text-gray-600">
                            {Math.round(scale * 100)}%
                        </span>
                        <button
                            onClick={() => setScale(s => Math.min(2.0, s + 0.1))}
                            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                            title="Zoom In"
                        >
                            <ZoomIn size={20} />
                        </button>
                        <div className="h-6 w-px bg-gray-300 mx-2"></div>
                        <a
                            href={newsletter.url}
                            download
                            className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-sm text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
                        >
                            <Download size={16} className="mr-2" />
                            Download PDF
                        </a>
                    </div>
                </div>
            </div>

            {/* Viewer Content */}
            <div className="flex-1 flex justify-center p-4 md:p-8 bg-gray-100 overflow-y-auto">
                <div className="w-full flex justify-center">
                    <Document
                        file={newsletter.url}
                        onLoadSuccess={onDocumentLoadSuccess}
                        loading={
                            <div className="flex flex-col items-center justify-center p-20 w-full h-full">
                                <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                                <p className="text-gray-500">Loading Newsletter...</p>
                            </div>
                        }
                        className="flex flex-col items-center gap-8 pb-20"
                    >
                        {numPages && Array.from({ length: numPages }, (_, index) => (
                            <div key={index} className="shadow-2xl relative group bg-white">
                                <Page
                                    pageNumber={index + 1}
                                    scale={scale}
                                    height={containerHeight * 0.85} // Scaling based on Viewport Height
                                    className="bg-white block"
                                    renderTextLayer={true}
                                    renderAnnotationLayer={true}
                                />
                                <span className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    Page {index + 1}
                                </span>
                            </div>
                        ))}
                    </Document>
                </div>
            </div>
        </div>
    );
}
