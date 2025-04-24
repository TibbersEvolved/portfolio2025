export default function Job(props: prop) {
  return (
    <>
      <section className="flex flex-col border-b-2 border-neutral-200">
        <header className="flex flex-row gap-0.5 text-sm md:text-lg font-bold">
          <img className="size-6" src={props.image}></img>
          <div>{props.title}</div>
        </header>
        <div className="text-sm md:text-base font-thin text-slate-700">
          {props.yearFrom} - {props.yearTo}
        </div>
        <div className="text-xs md:text-base">{props.desc}</div>
      </section>
    </>
  );
}

type prop = {
  title: string;
  image: string;
  yearFrom: number;
  yearTo: string;
  desc: string;
};
