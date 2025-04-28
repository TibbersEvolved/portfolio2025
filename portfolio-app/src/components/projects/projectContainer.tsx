import { getAllSkills, type skill } from "../data/skillDB";
import ProjectCard from "./projectCard";
import iconTibberstd from "../../assets/project/tibberstd.png";
import iconSpring from "../../assets/spring.svg";
import iconMed from "../../assets/project/medievalChess.png";

export default function ProjectContainer() {
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
      <section className="flex flex-wrap justify-center gap-10 md:mr-10 md:ml-10 mr-3 ml-3 pb-4 pt-5">
        <ProjectCard
          title="Tibbers Tower Defense"
          desc="A rougelike tower defense with randomized maps. Developed with Unity, using C#"
          image={iconTibberstd}
          skills={generateList(["C#"])}
        />
        <ProjectCard
          title="Salt Companion"
          desc="Fullstack Java app that allows teachers to setup a learning enviroment for students. Support for ai content generation."
          image={iconSpring}
          skills={generateList(["React", "Java", "PostgreSQL"])}
        />
        <ProjectCard
          title="Medieval Chess"
          desc="Salt Bootcamp web browser game using Java, React, SQL DB, Typescript."
          image={iconMed}
          skills={generateList(["React", "Java", "Spring Boot"])}
        />
        <ProjectCard
          title="Toobia Nordic Backend"
          desc="Lightweight backend for handling inventory management for Swedish Scouts."
          image={iconSpring}
          skills={generateList(["Spring Boot", "Java", "PostgreSQL"])}
        />
      </section>
    </>
  );
}
