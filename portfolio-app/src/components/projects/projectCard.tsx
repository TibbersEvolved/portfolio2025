import { Link } from "@tanstack/react-router";
import type { skill } from "../data/skillDB";
import Techbutton from "../index/techbutton";
import type { pageInfo } from "./projectPage";

export default function ProjectCard(props: projectProp) {
  let { title, image, desc, skills, id } = props.data;
  return (
    <>
      <Link
        to="/projects/$id"
        params={{ id: id }}
        className="flex flex-col size-84 bg-zinc-50 shadow-md shadow-slate-400 rounded-2xl hover:bg-zinc-100"
      >
        <img
          className="size-40 rounded-2xl ml-auto mt-4 shadow-md shadow-slate-700  mr-auto"
          src={image}
        ></img>
        <div className="p-2 text-center">
          <header className="text-lg font-semibold text-ce font-ibm">
            {title}
          </header>
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
      </Link>
    </>
  );
}

export type projectInfo = {
  title: string;
  desc: string;
  image: string;
  skills: skill[];
  info: pageInfo;
  id: string;
};

type projectProp = {
  data: projectInfo;
};
