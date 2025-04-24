import type { skill } from "../data/skillDB";
import Techbutton from "../index/techbutton";

export default function ProjectCard(props: projectInfo) {
  return (
    <>
      <section className="flex flex-col size-70 bg-zinc-50 shadow-md rounded-2xl hover:bg-zinc-100">
        <img className="h-1/2 rounded-t-2xl" src={props.image}></img>
        <div className="p-2">
          <header className="text-lg font-semibold">{props.title}</header>
          <div>{props.desc}</div>
          <div className="flex gap-2 justify-center mt-3">
            {props.skills.map((skill, key) => {
              return (
                <Techbutton image={skill.image} name={skill.name} key={key} />
              );
            })}
          </div>
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
