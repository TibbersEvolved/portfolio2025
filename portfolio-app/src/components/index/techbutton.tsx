export default function Techbutton(prop: props) {
  return (
    <>
      <div className="flex gap-0.5 p-1 bg-zinc-300 border-2 border-zinc-400 rounded-md hover:bg-zinc-200">
        <img src={prop.image} className="size-6  rounded-md"></img>
        <div className="text-sm">{prop.name}</div>
      </div>
    </>
  );
}

type props = {
  name: string;
  image: string;
};
