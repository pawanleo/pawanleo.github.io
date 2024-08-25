import { bodoniModa, greatVibes, sankofa } from "@/styles/fonts";
import React from "react";
import { FlipWords } from "./ui/flip-words";

const words = ["modern", "fast", "better", "beautiful"];

const Specializing = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-black text-white py-8 overflow-hidden">
      {/* Artistic Background */}
      <div className="absolute inset-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:"#000000", stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:"#121212", stopOpacity:1}} />
            </linearGradient>
            <filter id="noise" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch"/>
              <feComponentTransfer>
                <feFuncR type="linear" slope="0.1"/>
                <feFuncG type="linear" slope="0.1"/>
                <feFuncB type="linear" slope="0.1"/>
              </feComponentTransfer>
              <feBlend mode="overlay" in="SourceGraphic" />
            </filter>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#grad1)"/>
          <rect width="100%" height="100%" filter="url(#noise)" opacity="0.4"/>
          
          <g fill="none" stroke="#333333" strokeWidth="0.5" opacity="0.6">
            <path d="M0,250 Q250,0 500,250 T1000,250" />
            <path d="M0,500 Q250,250 500,500 T1000,500" />
            <path d="M0,750 Q250,500 500,750 T1000,750" />
            <path d="M250,0 Q500,250 750,0" />
            <path d="M250,1000 Q500,750 750,1000" />
          </g>
          
          <circle cx="50%" cy="50%" r="200" fill="none" stroke="#4a4a4a" strokeWidth="0.5" opacity="0.7">
            <animateTransform attributeName="transform" type="rotate" from="0 500 500" to="360 500 500" dur="60s" repeatCount="indefinite"/>
          </circle>
          
          <path d="M500,100 L500,900" stroke="#4a4a4a" strokeWidth="0.5" opacity="0.7">
            <animateTransform attributeName="transform" type="rotate" from="0 500 500" to="360 500 500" dur="40s" repeatCount="indefinite"/>
          </path>
          
          <g fill="#333333" opacity="0.4">
            <circle cx="200" cy="200" r="3" />
            <circle cx="800" cy="300" r="2" />
            <circle cx="300" cy="700" r="2.5" />
            <circle cx="700" cy="800" r="3" />
            <circle cx="500" cy="500" r="2" />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center text-center max-w-full px-4 relative z-10">
        <span className={`text-clamp-8 italic ${greatVibes.className}`}>
          Specializing
        </span>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className={`italic ${greatVibes.className} text-clamp-8`}>
            In
          </span>
          <div className="h-[1px] w-clamp-7 bg-zinc-400"></div>
          <span className="text-clamp-8">Creating</span>
        </div>
        <div
          className={`text-clamp-6 mx-auto py-4 capitalize ${bodoniModa.className} text-neutral-400`}
        >
          <FlipWords words={words} />
        </div>
        <div className={`text-clamp-8 italic ${greatVibes.className} pt-4`}>
          Websites
        </div>
        <div className={`text-clamp-8 ${sankofa.className}`}>↓</div>
      </div>

      {/* Bottom lines */}
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20">
        <img 
          src="/667f2312c8ffe257bcd4cf9a_home-vision-lines.svg" 
          alt="Vision lines"
          className="transform origin-bottom-left object-contain w-full max-w-full inline-block align-middle rotate-[25.5467deg]"
        />
      </div> */}
    </section>
  );
};

export default Specializing;