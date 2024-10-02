import ProjectCard from "./ProjectCard";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { devProjects, ProjectProps } from "./projectDetails";
import AnimatedBody from "../animations/AnimatedBody";
import { monaSans } from "../fonts/monaSans";
import { useState } from "react";

const ProjectGrid = () => {
  return (
    <>
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        <AnimatedWords2
          title={"Projects"}
          style={`flex max-w-[500px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,14vw,155.04px)]`}
        />
        <AnimatedBody
          text="Some of the Software and Data Engineering Projects I Have Worked on"
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
        />
      </div>
      {/* {filter ? ( */}
      <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
        {devProjects.map((project: ProjectProps) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
            image={project.image}
            available={project.available}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectGrid;
