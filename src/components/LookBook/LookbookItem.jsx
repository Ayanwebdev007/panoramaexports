import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function LookbookItem({ item, onClick }) {
    return (
        <div
            onClick={() => onClick(item)}
            className="flex flex-col group cursor-pointer"
        >
            {/* Image Container */}
            <div className="relative w-full aspect-[3/4] overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] border border-gray-100 bg-gray-50 mb-6 rounded-sm">
                <img
                    src={item.thumbnail || item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:scale-105"
                />
                
                {/* Subtle sheen/overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/0 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Hover generic overlay */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Visual Accent */}
                <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/90 backdrop-blur-md p-2 rounded-full text-blue-950">
                        <ArrowUpRight size={20} />
                    </div>
                </div>
            </div>

            {/* Info Label */}
            <div className="flex flex-col items-center px-2 font-outfit">
                <h3 className="text-sm font-light tracking-[0.3em] uppercase text-gray-400 group-hover:text-blue-900 transition-all duration-500 text-center">
                    {item.subtitle}
                </h3>
            </div>
        </div>
    );
}
