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
    id: "none",
  };
  projects.map((s) => {
    if (s.id === search) {
      proj = s;
    }
  });
  return proj;
}

export default function ProjectContainer(prop: props) {
  const projects = getProjects();
  if (prop.id === "all") {
    return (
      <>
        <section className="flex flex-wrap justify-center gap-10 md:mr-10 md:ml-10 mr-3 ml-3 pb-4 pt-5 font-roboto">
          {projects.map((data, key) => {
            return <ProjectCard key={key} data={data} />;
          })}
        </section>
      </>
    );
  }
  let pageData: projectInfo = getProjectById(projects, prop.id);
  return (
    <>
      <section className="md:mr-10 md:ml-10 mr-3 ml-3 mt-2 bg-neutral-50 shadow-md min-h-screen rounded-md">
        <div className="flex justify-center gap-10">
          <div className="text-2xl font-bold underline">{pageData.title}</div>
        </div>
        <ProjectPage pageInfo={pageData.info} />
      </section>
    </>
  );
}

export type props = {
  id: string;
};
