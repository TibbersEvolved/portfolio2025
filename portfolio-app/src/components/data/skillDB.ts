import iconReact from "../../assets/react3.svg";
import iconTS from "../../assets/typescript-icon.svg";
import iconJava from "../../assets/java.svg";
import iconSpring from "../../assets/spring.svg";
import iconC from "../../assets/c-sharp-c.svg";
import iconDocker from "../../assets/docker.svg";
import iconPostGres from "../../assets/postgres.png";

export function getAllSkills() {
  let list: skill[] = [
    { name: "React", image: iconReact, category: ["core"] },
    { name: "Java", image: iconJava, category: ["core"] },
    { name: "Spring Boot", image: iconSpring, category: ["core"] },
    { name: "Typescript", image: iconTS, category: ["core"] },
    { name: "C#", image: iconC, category: ["core"] },
    { name: "Docker", image: iconDocker, category: ["core"] },
    { name: "PostgreSQL", image: iconPostGres, category: ["core"] },
  ];
  return list;
}

export type skill = {
  name: string;
  image: string;
  category: string[];
};
