import Techbutton from "./techbutton";
import { getAllSkills, getSkillsByCategory, type skill } from "../data/skillDB";
import { useState } from "react";

export default function Techstack() {
  const [filter] = useState("core");
  const listTech: skill[] = getAllSkills();
  const listCore = getSkillsByCategory(listTech, filter);
  return (
    <>
      <section className="bg-zinc-50 shadow-md gap-5 p-4 flex flex-col mt-4">
        <div className="text-xl font-bold flex gap-6">
          <div>Technologies:</div>{" "}
          <select
            name="selectFilter"
            defaultValue={"core"}
            className="bg-zinc-100 shadow-sm border-2 border-zinc-200 hover:border-amber-200"
          >
            Core
            <option value={"core"}>Core</option>
            <option value={"frontend"}>Frontend</option>
            <option value={"backend"}>Backend</option>
          </select>
        </div>
        <div className="flex flex-row gap-2 flex-wrap">
          {listCore.map((skill, key) => {
            return <Techbutton skill={skill} key={key} />;
          })}
        </div>
      </section>
    </>
  );
}
