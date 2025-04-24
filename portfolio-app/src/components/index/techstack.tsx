import Techbutton from "./techbutton";
import { getAllSkills, type skill } from "../data/skillDB";

export default function Techstack() {
  const listTech: skill[] = getAllSkills();

  return (
    <>
      <section className="bg-zinc-50 shadow-md gap-5 p-4 flex flex-col mt-4">
        <div className="text-xl font-bold">Main Technologies</div>
        <div className="flex flex-row gap-2 flex-wrap">
          {listTech.map((skill, key) => {
            return (
              <Techbutton name={skill.name} image={skill.image} key={key} />
            );
          })}
        </div>
      </section>
    </>
  );
}
