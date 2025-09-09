
import React from 'react';

export const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
    <div className="flex justify-center items-center h-full animate-fade-in">
        <div className="text-center">
            <h1 className="text-4xl font-extrabold">{title}</h1>
            <p className="mt-4 text-gray-400">Content for this page is coming soon.</p>
        </div>
    </div>
);
