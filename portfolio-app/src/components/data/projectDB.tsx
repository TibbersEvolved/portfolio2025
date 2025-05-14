import type { projectInfo } from "../projects/projectCard";
import { getAllSkills, type skill } from "./skillDB";
import type { projectData } from "../projects/projectPage";
import { tibberstd } from "./projects/tibberstd";
import { saltCompanion } from "./projects/saltCompanion";
import { medievalChess } from "./projects/medievalChess";
import { toobiaNordic } from "./projects/toobiaNordic";

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

  function generateFromData(data: projectData): projectInfo {
    data.info.data.map((s) => {
      console.log("Type = " + typeof s);
    });
    return {
      title: data.title,
      desc: data.desc,
      image: data.image,
      skills: generateList(data.skills),
      info: data.info,
    };
  }

  const projects: projectInfo[] = [
    generateFromData(tibberstd),
    generateFromData(saltCompanion),
    generateFromData(medievalChess),
    generateFromData(toobiaNordic),
  ];
  return projects;
}
