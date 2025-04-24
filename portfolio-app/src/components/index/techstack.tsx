import Techbutton from "./techbutton";
import iconReact from "../../assets/react3.svg";
import iconTS from "../../assets/typescript-icon.svg";
import iconJava from "../../assets/java.svg";
import iconSpring from "../../assets/spring.svg";
import iconC from "../../assets/c-sharp-c.svg";
import iconDocker from "../../assets/docker.svg";

export default function Techstack() {
  return (
    <>
      <section className="bg-zinc-50 shadow-md gap-5 p-4 flex flex-col mt-4">
        <div className="text-xl font-bold">Main Technologies</div>
        <div className="flex flex-row gap-2 flex-wrap">
          <Techbutton name="React" image={iconReact} />
          <Techbutton name="Java" image={iconJava} />
          <Techbutton name="Spring Boot" image={iconSpring} />
          <Techbutton name="Typescript" image={iconTS} />
          <Techbutton name="C#" image={iconC} />
          <Techbutton name="Docker" image={iconDocker} />
        </div>
      </section>
    </>
  );
}
