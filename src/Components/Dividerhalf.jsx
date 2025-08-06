import React from 'react';

const DividerHalf = () => {
  return (
    <div className="w-full overflow-hidden relative z-10 bg-[#FFF5E1] mb-6">
      <svg
        className="w-full h-auto rotate-180"
        viewBox="0 0 1440 70"
        fill="#FFF0FB"
        preserveAspectRatio="none"
      >
        <path d="
          M1440,40 
          C1420,0 1400,80 1380,40 
          C1360,0 1340,80 1320,40 
          C1300,0 1280,80 1260,40 
          C1240,0 1220,80 1200,40 
          C1180,0 1160,80 1140,40 
          C1120,0 1100,80 1080,40 
          C1060,0 1040,80 1020,40 
          C1000,0 980,80 960,40 
          C940,0 920,80 900,40 
          C880,0 860,80 840,40 
          L0,40 L0,70 L1440,70 Z"
        />
      </svg>
    </div>
  );
};

export default DividerHalf;
