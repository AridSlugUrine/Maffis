import React from 'react';

const DividerExtremeOppAbout = () => {
  return (
    <div className="relative w-full bg-[#FEFEFE]">
      <svg
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        className="w-full h-[70px] md:h-[90px] lg:h-[100px]"
      >
        <defs>
          <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#97798A" /> {/* from color */}
            <stop offset="50%" stopColor="#986480" /> {/* via color */}
            <stop offset="100%" stopColor="#97798A" /> {/* to color */}
          </linearGradient>
        </defs>
        <path
          d="
            M0,0 
            L1440,0 
            L1440,35
            Q1425,65 1410,35 
            T1380,35 
            T1350,35 
            T1320,35 
            T1290,35 
            T1260,35 
            T1230,35 
            T1200,35 
            T1170,35 
            T1140,35 
            T1110,35 
            T1080,35 
            T1050,35 
            T1020,35 
            T990,35 
            T960,35 
            T930,35 
            T900,35 
            T870,35 
            T840,35 
            T810,35 
            T780,35 
            T750,35 
            T720,35 
            T690,35 
            T660,35 
            T630,35 
            T600,35 
            T570,35 
            T540,35 
            T510,35 
            T480,35 
            T450,35 
            T420,35 
            T390,35 
            T360,35 
            T330,35 
            T300,35 
            T270,35 
            T240,35 
            T210,35 
            T180,35 
            T150,35 
            T120,35 
            T90,35 
            T60,35 
            T30,35 
            Q15,65 0,35 
            L0,0 Z"
          fill="url(#pinkGradient)"
        />
      </svg>
    </div>
  );
};

export default DividerExtremeOppAbout;
