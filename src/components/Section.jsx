/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const Section = ({ id, title, content, color, children }) => {
  return (
    <div
      id={id}
      className="section min-w-screen h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="text-center p-8 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">{title}</h1>
        {children || (
          <p className="text-xl whitespace-pre-line">{content}</p>
        )}
      </div>
    </div>
  );
};

export default Section;