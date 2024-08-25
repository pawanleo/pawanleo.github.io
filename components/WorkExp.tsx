import Image from "next/image";
import React from "react";
import workExp from "./data/workexp.json";
const WorkExp = () => {
  return (
    <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center py-20">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative w-full px-9">
        <div className="grid grid-cols-12 gap-x-[30px]">
          <div className="lg:col-start-2 lg:col-span-8 col-span-full">
            <h2 className="text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-8">
              Work Experience
            </h2>
          </div>
          <div className="lg:col-start-2 lg:col-span-10 col-span-full">
            {workExp.map((ele, index) => (
              <div
                className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 mt-20 mx-auto"
                key={index}
              >
                <div className="flex flex-row md:flex-col relative overflow-x-auto md:overflow-x-visible min-w-[150px]">
                  <div className="relative ">
                    <button className="px-4 text-zinc-400 relative z-20 min-w-28 w-full text-left rounded-md flex flex-row space-x-2 items-center group">
                      <div className="p-1 h-6 w-6 flex items-center justify-center rounded-full bg-gradient-to-br from-zinc-500 to-zinc-600 md:p-0">
                        <Image
                          width={30}
                          height={30}
                          src={ele.logo}
                          alt={`ele.companyName`}
                        />
                      </div>

                      <span className="text-xl">{ele.companyName}</span>
                    </button>
                  </div>
                </div>
                <div className="md:pl-10  flex-1">
                  <div className="flex flex-col space-y-4">
                    <div
                      className="flex flex-col space-y-2"
                      style={{
                        opacity: 1,
                        transform: "none",
                        transformOrigin: "50% 50% 0px",
                      }}
                    >
                      <h1 className="text-2xl font-bold text-zinc-100">
                        {ele.title}
                        <span className="text-cyan-500">
                          @ {ele.companyName}
                        </span>
                      </h1>
                      <div className="text-zinc-400 text-sm tracking-widest">
                        {ele.timeSpan}
                      </div>

                      {ele.points.map((items, index) => (
                        <div key={index}>
                          <div className="flex flex-row space-x-2 items-start my-2">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 16 16"
                              className="text-cyan-500 mt-[3px] flex-shrink-0"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                            </svg>
                            <span className="text-zinc-400 text-sm">
                              {items}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
