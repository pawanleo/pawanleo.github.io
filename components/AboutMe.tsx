import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="relative bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex justify-end py-20">
        {/* Left Section with Background Pattern */}
        <div className="relative flex items-center justify-center md:justify-end">
          {/* Patterned Background */}
          <img
            src="/images/66885669a5e138c07fe94c8f_home-about_lines.svg"
            alt="aboutme-bg"
            className="z-10 object-contain object-left w-full h-full absolute left-0"
          />

          {/* Profile Image */}
          <div className="relative z-10 flex justify-center items-center w-2/3 h-full">
            <motion.img
              src="/images/6688566321e36c3365b9efdb_home-about_circles.svg"
              alt="circle"
              className="z-10 object-contain h-full absolute w-full max-w-full inline-block align-middle"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
            <motion.img
              src="/images/cropped-image.png"
              alt="profile"
              className="z-10 object-contain h-[60%] max-h-[32rem] relative w-full max-w-full inline-block align-middle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Right Section with Text */}
        <div className="flex flex-col justify-center items-center md:items-start w-full gap-5">
          <motion.h1
            className="text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            About Me
          </motion.h1>
          <motion.h2
            className="mt-4 text-2xl font-normal text-gray-500 w-full max-w-[27rem] flex flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="">WHO I AM</div>
            <div className="clip-path-[polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)] h-[2px] flex-1 bg-zinc-400 hidden md:block"></div>
          </motion.h2>
          <motion.p
            className="mt-2 text-zinc-400 max-w-[40ch] px-4 md:px-0 tracking-wider"
            style={{ maxWidth: "50ch" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Hi, I'm Pawan Singh Rathore, a passionate web developer crafting digital experiences that blend creativity with technology. Based in India, I specialize in turning ideas into interactive, responsive websites that not only look beautiful but also function seamlessly. Curious to know more? Let's connect below.
          </motion.p>
          <motion.button
            className="mt-6 w-fit px-6 py-2 border border-gray-500 rounded-full text-zinc-400 hover:bg-gray-200 hover:text-zinc-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;