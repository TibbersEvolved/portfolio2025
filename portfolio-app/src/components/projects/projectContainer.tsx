import { useState } from "react";
import getProjects from "../data/projectDB";
import ProjectCard from "./projectCard";

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
      <div>{project}</div>
      <button
        className="border-2 border-solid border-amber-500"
        onClick={() => setProject("none")}
      >
        Go Back
      </button>
    </>
  );
}
