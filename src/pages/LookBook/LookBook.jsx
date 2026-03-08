import React from 'react';
import { useNavigate } from 'react-router-dom';
import { lookbookData } from '../../data/lookbookData';
import LookbookGrid from '../../components/LookBook/LookbookGrid';

function LookBook() {
    const navigate = useNavigate();

    return (
        <div className="bg-white font-outfit min-h-screen">
            {/* Spacer for Navbar */}
            <div className="w-full h-10 md:h-12 lg:h-20 bg-gray-900"></div>
            
            {/* Hero Header Section */}
            <header className="w-full pt-10 pb-2 md:pt-14 md:pb-4 bg-white">
                <div className="w-[90%] mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-light text-[#01276a] leading-tight">
                            Lookbook Collections
                        </h1>
                    </div>
                </div>
            </header>

            {/* Grid Content */}
            <main className="w-[90%] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-10 lg:py-16">
                <LookbookGrid 
                    items={lookbookData} 
                    onSelect={(item) => navigate(`/lookbook/${item.id}`)} 
                />
            </main>
        </div>
    );
}

export default LookBook;