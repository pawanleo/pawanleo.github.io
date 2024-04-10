import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="hero flex items-center justify-center h-[60vh] bg-gradient-to-b from-black via-black-90 to-var(--black-color) md:h-[85vh]">
      <Image
        src="/star.svg"
        alt="Description of the image"
        width={1400} // Set the width of the image
        height={400} // Set the height of the image
        className="top-[-1px] w-full max-w-[1400px] absolute"
      />
      <Image
        className="top-0 w-full max-w-[1200px] absolute"
        src="/gradient-625d94e6.webp"
        alt="Description of the image"
        width={1400} // Set the width of the image
        height={400} // Set the height of the image
      />

      <div className="flex flex-col items-center text-center md:mb-[-100px]">
        <h1 className="z-1 flex flex-col font-normal text-7xl mb-[20px]">
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Hello. I&apos;m Pawan.</span>
          <span  className="relative bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-900  py-[20px]">A Digital Craftsman.</span>
        </h1>
        <p class="max-w-[750px] leading-[1.8] text-[20px]">
        I&apos;m passionate about creating experiences that are easy to use,
          accessible, and that meet the  user&apos;s needs.
        </p>
      </div>
    </div>
  );
};

export default Hero;
