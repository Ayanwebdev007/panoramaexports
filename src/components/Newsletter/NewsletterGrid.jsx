import React, { useMemo } from 'react';
import NewsletterItem from './NewsletterItem';

const monthMap = {
    "January": 1, "February": 2, "March": 3, "April": 4, "May": 5, "June": 6,
    "July": 7, "August": 8, "September": 9, "October": 10, "November": 11, "December": 12
};

export default function NewsletterGrid({ newsletters, onSelect }) {
    // Sort all newsletters by year descending, then month descending
    const sortedNewsletters = useMemo(() => {
        return [...newsletters].sort((a, b) => {
            if (a.year !== b.year) {
                return b.year - a.year; // Descending year
            }
            return (monthMap[b.month] || 0) - (monthMap[a.month] || 0); // Descending month
        });
    }, [newsletters]);

    return (
        <div className="w-full">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-4 md:px-0">
                {sortedNewsletters.map(item => (
                    <NewsletterItem
                        key={item.id}
                        item={item}
                        onClick={onSelect}
                    />
                ))}
            </div>
        </div>
    );
}
