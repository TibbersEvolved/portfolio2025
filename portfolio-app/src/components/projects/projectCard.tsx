import type { skill } from "../data/skillDB";
import Techbutton from "../index/techbutton";

export default function ProjectCard(props: projectInfo) {
  return (
    <>
      <section className="flex flex-col size-84 bg-zinc-50 shadow-md rounded-2xl hover:bg-zinc-100">
        <img
          className="size-40 rounded-2xl ml-auto mt-4 shadow-sm mr-auto"
          src={props.image}
        ></img>
        <div className="p-2">
          <header className="text-lg font-semibold">{props.title}</header>
          <div>{props.desc}</div>
        </div>
        <div className="flex gap-2 justify-center mt-auto mb-2">
          {props.skills.map((skill, key) => {
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
};
