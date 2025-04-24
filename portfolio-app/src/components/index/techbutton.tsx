import type { skill } from "../data/skillDB";

export default function Techbutton(prop: skill) {
  return (
    <>
      <div className="flex gap-0.5 p-1 bg-gradient-to-b from-zinc-100 to-emerald-200 border-2 border-emerald-300 rounded-sm hover:to-emerald-100 shadow-sm">
        <img src={prop.image} className="size-6  rounded-md"></img>
        <div className="text-sm">{prop.name}</div>
      </div>
    </>
  );
}
