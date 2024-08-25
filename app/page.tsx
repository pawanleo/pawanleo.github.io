"use client";
import React from "react";

import { Header } from "@/components/Header";
import { TracingBeam } from "@/components/ui/tracing-beam";
import WorkExp from "@/components/WorkExp";
import { Skills } from "@/components/Skills";
import AboutMe from "@/components/AboutMe";
import Specializing from "@/components/Specializing";
import Footer from "@/components/Footer";
import { CustomScrollbar } from "@/components/ui/CustomScrollbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between dark portfolio">
      <CustomScrollbar>
        {/* Your page content goes here */}
        <div className="mx-auto antialiased relative">
          <Header />
          <Specializing />
          <WorkExp />
          <Skills />
          <AboutMe />
          <Footer/>
        </div>
      </CustomScrollbar>
    </main>
  );
}
