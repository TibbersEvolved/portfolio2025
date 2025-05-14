import type { skill } from "../data/skillDB";
import Techbutton from "../index/techbutton";
import type { pageInfo } from "./projectPage";

export default function ProjectCard(props: projectProp) {
  let { title, image, desc, skills } = props.data;
  return (
    <>
      <section
        onClick={() => props.callback(title)}
        className="flex flex-col size-84 bg-zinc-50 shadow-md shadow-emerald-500 rounded-2xl hover:bg-zinc-100"
      >
        <img
          className="size-40 rounded-2xl ml-auto mt-4 shadow-md shadow-slate-700  mr-auto"
          src={image}
        ></img>
        <div className="p-2">
          <header className="text-lg font-semibold font-ibm">{title}</header>
          <div>{desc}</div>
        </div>
        <div className="flex gap-2 justify-center mt-auto mb-2">
          {skills.map((skill, key) => {
            return (
              <div className="">
                <Techbutton skill={skill} key={key} />{" "}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export type projectInfo = {
  title: string;
  desc: string;
  image: string;
  skills: skill[];
  info: pageInfo;
};

interface callbackProp {
  (s: string): void;
}

type projectProp = {
  data: projectInfo;
  callback: callbackProp;
};
