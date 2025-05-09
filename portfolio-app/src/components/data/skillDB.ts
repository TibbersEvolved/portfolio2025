import iconReact from "../../assets/react3.svg";
import iconTS from "../../assets/typescript-icon.svg";
import iconJava from "../../assets/java.svg";
import iconSpring from "../../assets/spring.svg";
import iconC from "../../assets/c-sharp-c.svg";
import iconDocker from "../../assets/docker.svg";
import iconPostGres from "../../assets/postgres.png";
import iconGCP from "../../assets/gcp.png";
import iconAzure from "../../assets/azure.png";
import iconGithub from "../../assets/github.png";
import iconTailwind from "../../assets/tailwind.webp";
import iconTanstack from "../../assets/tanstack.png";
import iconCPlus from "../../assets/c++.png";
import iconAW from "../../assets/aws.avif";
import iconKafka from "../../assets/kafka.webp";

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
    { name: "Github Actions", image: iconGithub, category: ["devops"] },
    { name: "Tailwind", image: iconTailwind, category: ["frontend"] },
    { name: "Tanstack Router", image: iconTanstack, category: ["frontend"] },
    { name: "Tanstack Query", image: iconTanstack, category: ["frontend"] },
    { name: "C++", image: iconCPlus, category: ["backend", "core"] },
    { name: "AWS", image: iconAW, category: ["devops"] },
    { name: "Kafka", image: iconKafka, category: ["backend"] },
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
