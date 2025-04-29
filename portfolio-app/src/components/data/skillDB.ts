import iconReact from "../../assets/react3.svg";
import iconTS from "../../assets/typescript-icon.svg";
import iconJava from "../../assets/java.svg";
import iconSpring from "../../assets/spring.svg";
import iconC from "../../assets/c-sharp-c.svg";
import iconDocker from "../../assets/docker.svg";
import iconPostGres from "../../assets/postgres.png";
import iconGCP from "../../assets/gcp.png";
import iconAzure from "../../assets/azure.png";

export function getAllSkills() {
  let list: skill[] = [
    { name: "React", image: iconReact, category: ["core", "frontend"] },
    { name: "Java", image: iconJava, category: ["core", "backend"] },
    { name: "Spring Boot", image: iconSpring, category: ["core", "backend"] },
    { name: "Typescript", image: iconTS, category: ["core", "frontend"] },
    { name: "C#", image: iconC, category: ["core", "backend"] },
    { name: "Docker", image: iconDocker, category: ["core", "devops"] },
    { name: "PostgreSQL", image: iconPostGres, category: ["core"] },
    { name: "GCP", image: iconGCP, category: ["devops"] },
    { name: "Azure", image: iconAzure, category: ["devops"] },
  ];
  return list;
}

export function getSkillsByCategory(list: skill[], category: string) {
  let newList: skill[] = [];
  list.map((sk) => {
    if (sk.category.includes(category)) {
      newList.push(sk);
    }
  });
  return newList;
}

export type skill = {
  name: string;
  image: string;
  category: string[];
};
