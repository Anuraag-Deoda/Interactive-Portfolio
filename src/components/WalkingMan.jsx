/* eslint-disable no-unused-vars */
// WalkingMan.jsx
import React from 'react';

const WalkingMan = () => {
  return (
    <div className="fixed bottom-20 left-20 w-32 walking-animation">
      <svg viewBox="0 -10 315 350">
        <defs>
          <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#4A90E2;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#357ABD;stop-opacity:1" />
          </linearGradient>
        </defs>
        <g className="dude" stroke="#2C3E50" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          {/* Modern professional look with laptop bag for developer theme */}
          <g className="head">
            <circle cx="177" cy="45" r="25" fill="url(#bodyGradient)"/>
            <path className="face" d="M165,45 Q177,55 189,45" fill="none" strokeWidth="3"/>
            {/* Add glasses for developer look */}
            <path d="M165,40 h8 M184,40 h8" strokeWidth="2"/>
            <circle cx="170" cy="40" r="5" fill="none" strokeWidth="2"/>
            <circle cx="184" cy="40" r="5" fill="none" strokeWidth="2"/>
          </g>
          
          <path className="torso" d="M177,70 L177,145" strokeWidth="8"/>
          
          <g className="arm left-arm">
            <path d="M177,75 Q167,100 167,120" className="upper-arm"/>
            <path className="arm-bottom" d="M167,120 Q165,140 170,160"/>
          </g>
          <g className="arm right-arm">
            <path d="M177,75 Q187,100 187,120" className="upper-arm"/>
            <path className="arm-bottom" d="M187,120 Q185,140 190,160"/>
          </g>
          
          <g className="leg left-leg">
            <path d="M177,145 Q167,180 167,220"/>
            <path className="leg-bottom" d="M167,220 Q165,260 170,300"/>
          </g>
          <g className="leg right-leg">
            <path d="M177,145 Q187,180 187,220"/>
            <path className="leg-bottom" d="M187,220 Q185,260 190,300"/>
          </g>
          
          {/* Add laptop bag */}
          <path className="laptop-bag" d="M190,160 h25 v35 h-45 v-35 h20" fill="#2C3E50"/>
          <path className="tie" d="M177,70 l5,15 l-5,20 l-5,-20 l5,-15" fill="#E74C3C"/>
        </g>
      </svg>
    </div>
  );
};

export default WalkingMan;