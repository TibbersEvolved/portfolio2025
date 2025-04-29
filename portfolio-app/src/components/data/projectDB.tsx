import type { projectInfo } from "../projects/projectCard";
import { getAllSkills, type skill } from "./skillDB";
import iconTibberstd from "../../assets/project/tibberstd.png";
import iconSpring from "../../assets/spring.svg";
import iconMed from "../../assets/project/medievalChess.png";

export default function getProjects() {
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

  const projects: projectInfo[] = [
    {
      title: "Tibbers Tower Defense",
      image: iconTibberstd,
      desc: "A rougelike tower defense with randomized maps. Developed with Unity, using C#",
      skills: generateList(["C#"]),
    },
    {
      title: "Salt Companion",
      image: iconSpring,
      desc: "Fullstack Java app that allows teachers to setup a learning enviroment for students. Support for ai content generation.",
      skills: generateList(["React", "Java", "PostgreSQL"]),
    },
    {
      title: "Medieval Chess",
      image: iconMed,
      desc: "Salt Bootcamp web browser game using Java, React, SQL DB, Typescript.",
      skills: generateList(["React", "Java", "Spring Boot"]),
    },
    {
      title: "Toobia Nordic Backend",
      image: iconSpring,
      desc: "Lightweight backend for handling inventory management for Swedish Scouts.",
      skills: generateList(["React", "Java", "PostgreSQL"]),
    },
  ];
  return projects;
}
