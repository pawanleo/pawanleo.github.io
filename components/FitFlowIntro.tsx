import React from 'react'
import { BackgroundLines } from './ui/background-lines'

const Fit7Intro = () => {
  return (
    <BackgroundLines
      className="relative overflow-hidden"
      svgOptions={{ duration: 4 }}
    >
      <div className="relative h-[60vh] md:h-screen flex flex-col items-center justify-center overflow-hidden text-center px-4">
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
          Fit Flow: Redefine Your Fitness
        </h1>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-neutral-400 mb-2 px-2 max-w-3xl mx-auto">
          Your AI-powered fitness companion — track, connect, and transform.
        </p>
        <p className="text-xs sm:text-sm text-neutral-500 mt-3 md:mt-4">
           Coming Soon...!
        </p>
      </div>
    </BackgroundLines>
  )
}

export default Fit7Intro