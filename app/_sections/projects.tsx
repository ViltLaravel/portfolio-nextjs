"use client";

import { Button } from "@nextui-org/react";
import ProjectCard from "../_components/projects-card";
import { LuArrowRight } from "react-icons/lu";

export default function Project() {
  return (
    <div className="space-y-4 md:space-y-10">
      <div className="space-y-3 flex flex-col md:flex-row md:justify-between md:items-center md:gap-5">
        <div className="text-white space-y-2">
          <h1 className="text-4xl xl:text-6xl font-extrabold">
            Featured Projects
          </h1>
          <p className="text-xs md:text-sm xl:text-base font-normal">
            A showcase of innovative mobile and web development projects with
            intuitive designs and impactful solutions.
          </p>
        </div>
        <Button
          variant="faded"
          radius="none"
          className="bg-[#BE1925] text-white text-center border-0 uppercase text-sm font-medium w-28"
        >
          View All
        </Button>
      </div>
      <div className="flex gap-5 flex-wrap justify-center items-center">
        <ProjectCard projectName="E-Trabaho" src="/projects/pro-1.jpg" />
        <ProjectCard
          projectName="Kawaii-Anime Finder"
          src="/projects/pro-2.jpg"
        />
        <ProjectCard projectName="Cyber Zone" src="/projects/pro-3.jpg" />
        <ProjectCard projectName="Startup Boost" src="/projects/pro-4.jpg" />
      </div>
    </div>
  );
}
