import getProjects from "../data/projectDB";
import ProjectCard from "./projectCard";

export default function ProjectContainer() {
  const projects = getProjects();
  return (
    <>
      <section className="flex flex-wrap justify-center gap-10 md:mr-10 md:ml-10 mr-3 ml-3 pb-4 pt-5">
        {projects.map((data, key) => {
          return <ProjectCard key={key} data={data} />;
        })}
      </section>
    </>
  );
}
