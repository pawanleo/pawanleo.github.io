"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export const CustomScrollbar = ({ children }: Props) => {
  const { scrollYProgress } = useScroll();
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const updateContentHeight = () => {
      setContentHeight(document.documentElement.scrollHeight - window.innerHeight);
    };
    updateContentHeight();
    window.addEventListener('resize', updateContentHeight);
    return () => window.removeEventListener('resize', updateContentHeight);
  }, []);

  return (
    <div className="custom-scrollbar-container w-full">
      {children}
      <motion.div
        className="progress-bar rounded hidden md:block"
        style={{
          scaleY: scrollYProgress,
          position: 'fixed',
          top: 0,
          right: '4px', // Slightly inset from the edge
          width: '8px',
          height: '100%',
          background: 'linear-gradient(to bottom, #3490dc, #6574cd, #9561e2)',
          transformOrigin: 'top',
          borderRadius: '4px',
        }}
      />
      <style jsx global>{`
        @media (min-width: 768px) {
          body::-webkit-scrollbar {
            display: none;
          }
          body {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
        }
      `}</style>
    </div>
  );
};