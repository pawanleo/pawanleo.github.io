import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

export function Skills() {
  const skills = [
    {
      title: "Technologies",
      listItems: ["HTML", "CSS", "Javascript", "Typescript"],
    },
    {
      title: "Frameworks & Libraries",
      listItems: ["React", "Next.js", "Node.js", "Express.js", "Redux"],
    },
    {
      title: "UI Libraries",
      listItems: ["Tailwind CSS", "Material UI", "Bootstrap", "SASS/SCSS"],
    },
    { title: "Other Tools", listItems: ["Docker", "GIT", "AWS Services"] },
  ];

  return (
    <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center py-4 py-20">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative w-full px-8">
        <div className="grid grid-cols-12 gap-x-[30px]">
          <div className="lg:col-start-2 lg:col-span-8 col-span-full">
            <h2 className="text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 mb-8">
              Skills
            </h2>
          </div>
          <div className="lg:col-start-2 lg:col-span-10 col-span-full">
            <HoverEffect items={skills} />
          </div>
        </div>
      </div>
    </div>
  );
}
