import ProjectCard from "./projectCard";

export default function ProjectContainer() {
  const imgText = "https://picsum.photos/200/200";

  return (
    <>
      <section className="flex flex-wrap justify-center gap-10 md:mr-10 md:ml-10 mr-3 ml-3 pt-5">
        <ProjectCard
          title="A Project"
          desc="Worked with C# and Angular to create something"
          image={imgText}
        />
        <ProjectCard
          title="A Project"
          desc="Worked with C# and Angular to create something"
          image={imgText}
        />
        <ProjectCard
          title="A Project"
          desc="Worked with C# and Angular to create something"
          image={imgText}
        />
        <ProjectCard
          title="A Project"
          desc="Worked with C# and Angular to create something"
          image={imgText}
        />
      </section>
    </>
  );
}
