import { getAllSkills, type skill } from "../data/skillDB";
import ProjectCard from "./projectCard";
import iconTibberstd from "../../assets/project/tibberstd.png";

export default function ProjectContainer() {
  const imgText = "https://picsum.photos/200/200";
  const skills = getAllSkills();

  function getSpecificSkill(name: string) {
    return skills.find((sk) => sk.name === name);
  }

  function addToList(name: string, list: skill[]) {
    const newSkill = getSpecificSkill(name);
    if (!(newSkill === undefined)) {
      list.push(newSkill);
    }
  }

  function generateList(names: string[]) {
    const projectSkills: skill[] = [];
    names.map((str) => {
      addToList(str, projectSkills);
    });
    return projectSkills;
  }

  return (
    <>
      <section className="flex flex-wrap justify-center gap-10 md:mr-10 md:ml-10 mr-3 ml-3 pt-5">
        <ProjectCard
          title="Tibbers Tower Defense"
          desc="A rougelike tower defense with randomized maps. Developed with Unity, using C#"
          image={iconTibberstd}
          skills={generateList(["C#"])}
        />
        <ProjectCard
          title="A Project"
          desc="Worked with C# and Angular to create something"
          image={imgText}
          skills={generateList(["React", "Java", "C#"])}
        />
        <ProjectCard
          title="A Project"
          desc="Worked with C# and Angular to create something"
          image={imgText}
          skills={generateList(["React", "Java"])}
        />
        <ProjectCard
          title="A Project"
          desc="Worked with C# and Angular to create something"
          image={imgText}
          skills={generateList(["React", "Java"])}
        />
      </section>
    </>
  );
}
