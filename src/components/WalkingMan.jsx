// src/components/WalkingMan.jsx
const WalkingMan = () => {
    return (
      <svg viewBox="0 -10 315 350">
        <g className="dude" stroke="black" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <g className="leg">
            <path className="leg-bottom" d="M182,317l-10.4-2.8c-2.7-0.7-4.5-3.2-4.4-6c1.7-13,3-27,3.7-42.1c0.8-16.5,0.7-32,0.1-46.1"/>
            <path d="M171,220l6-60"/>
          </g>
          <g className="leg">
            <path className="leg-bottom" d="M182,317l-10.2-2.7c-2.8-0.8-4.7-3.4-4.6-6.3c-0.8-13.9-1-29.2-0.2-45.8c0.7-15.2,2.1-29.4,4-42.2"/>
            <path d="M171,222c0.3-10,4.3-42,5.3-48"/>
          </g>
          <g className="arm">
            <path d="M175,75c-0.6,8.7-0.6,18.9,0.8,30.1c0.6,4.6,1.3,8.9,2.2,12.9"/>
            <path className="arm-bottom" d="M186,175c-0.2-3.1-0.4-6.2-0.7-9.3c-1.5-16.9-4.1-32.9-7.3-47.7"/>
          </g>
          <g className="arm">
            <path d="M178.8,82.2c-1.9,13.1-1.8,25.2-0.8,35.8"/>
            <path className="arm-bottom" d="M186,175c-2.4-7.6-4.7-16.8-6.3-27.2c-1.6-11.3-2-21.3-1.7-29.8"/>
          </g>
          <path className="head" d="M195,14.8c-10.8-5.7-23.9,1.3-28.2,12.4c-4.9,13,6.3,28.4,17.8,29.1c13.2,0.8,22.2-16.1,19.5-26.7c-1.6-6.5-5.2-7.1-5.2-7.1"/>
        </g>
      </svg>
    );
  };
  
  export default WalkingMan;