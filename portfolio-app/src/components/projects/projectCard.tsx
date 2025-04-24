export default function ProjectCard(props: projectInfo) {
  return (
    <>
      <section className="flex flex-col size-60">
        <img className="h-1/2" src={props.image}></img>
        <div>
          <header className="text-lg font-semibold">{props.title}</header>
          <div>{props.desc}</div>
        </div>
      </section>
    </>
  );
}

export type projectInfo = {
  title: string;
  desc: string;
  image: string;
};
