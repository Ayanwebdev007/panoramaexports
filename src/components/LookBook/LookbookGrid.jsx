import React from 'react';
import LookbookItem from './LookbookItem';

export default function LookbookGrid({ items, onSelect }) {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 px-4 md:px-0">
                {items.map(item => (
                    <LookbookItem
                        key={item.id}
                        item={item}
                        onClick={onSelect}
                    />
                ))}
            </div>
        </div>
    );
}
