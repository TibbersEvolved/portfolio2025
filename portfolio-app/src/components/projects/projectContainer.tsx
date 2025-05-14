import { useState } from "react";
import getProjects from "../data/projectDB";
import ProjectCard, { type projectInfo } from "./projectCard";
import ProjectPage from "./projectPage";

function getProjectById(projects: projectInfo[], search: string) {
  let proj: projectInfo = {
    title: "Not found",
    desc: "",
    image: "",
    skills: [],
    info: {
      data: [],
    },
  };
  projects.map((s) => {
    if (s.title === search) {
      proj = s;
    }
  });
  return proj;
}

export default function ProjectContainer() {
  const projects = getProjects();
  const [project, setProject] = useState("none");
  if (project === "none") {
    return (
      <>
        <section className="flex flex-wrap justify-center gap-10 md:mr-10 md:ml-10 mr-3 ml-3 pb-4 pt-5 font-roboto">
          {projects.map((data, key) => {
            return (
              <ProjectCard
                key={key}
                callback={(val: string) => setProject(val)}
                data={data}
              />
            );
          })}
        </section>
      </>
    );
  }
  return (
    <>
      <section className="md:mr-10 md:ml-10 mr-3 ml-3 mt-2 bg-neutral-50 shadow-md">
        <button
          className="border-2 mt-2 p-1 ml-2 border-solid transition-colors duration-100 hover:bg-yellow-200 border-amber-500 bg-yellow-400 font-bold text-lg rounded-md shadow-md mr-auto"
          onClick={() => setProject("none")}
        >
          Go Back
        </button>
        <div className="flex justify-center gap-10">
          <div className="text-2xl font-bold">{project}</div>
        </div>
        <ProjectPage pageInfo={getProjectById(projects, project).info} />
      </section>
    </>
  );
}
