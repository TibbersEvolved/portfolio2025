import iconReact from "../../assets/react3.svg";
import iconTS from "../../assets/typescript-icon.svg";
import iconJava from "../../assets/java.svg";
import iconSpring from "../../assets/spring.svg";
import iconC from "../../assets/c-sharp-c.svg";
import iconDocker from "../../assets/docker.svg";

export function getAllSkills() {
  let list: skill[] = [
    { name: "React", image: iconReact },
    { name: "Java", image: iconJava },
    { name: "Spring Boot", image: iconSpring },
    { name: "Typescript", image: iconTS },
    { name: "C#", image: iconC },
    { name: "Docker", image: iconDocker },
  ];
  return list;
}

export type skill = {
  name: string;
  image: string;
};
