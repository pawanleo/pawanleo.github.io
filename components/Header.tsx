"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";

export function Header() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative grid grid-cols-12 gap-x-[30px]  px-[3.6vw] mx-auto w-full grid-rows-[auto]"
      >
        <div className=" lg:col-start-2 lg:col-span-8 col-span-full flex self-center flex-col text-3xl md:text-7xl font-bold dark:text-white">
          <div className="tracking-[3px] uppercase lg:font-bold lg:text-[.83vw] text-xs font-medium">
            <span className="inline-block">Hello There!</span>
          </div>
          <h1 className="tracking-wider text-[40px] sm:text-[50px] md:text-[80px] lg:mt-[2vw] lg:text-[6.04vw] mt-[20px] leading-[1.2] font-extrabold opacity-100 translate-y-0 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
            <span>I'm Pawan,</span>
            <br />
            <span>a creative web</span>
            <br />
            <span>developer</span>
          </h1>
        </div>
       
      </motion.div>
    </AuroraBackground>
  );
}

   
   
 