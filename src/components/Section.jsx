/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Section = ({ id, title, content, color }) => {
    return (
        <div
            id={id}
            className="min-h-screen w-full flex flex-col items-center justify-center relative"
            style={{ backgroundColor: color }}
        >
            <div className="text-center p-8 max-w-4xl">
                <h1 className="text-5xl font-bold mb-6">{title}</h1>
                <div className="content-wrapper">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Section;