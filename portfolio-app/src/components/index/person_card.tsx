import myImage from "../../assets/linkedinImg.png";

export default function Person_Card() {
  return (
    <>
      <section className="bg-zinc-50 shadow-md flex gap-5 p-4">
        <img src={myImage} className="size-40"></img>
        <aside className="flex flex-col">
          <div>Erik Olin</div>
          <div>Fullstack Java Developer</div>
        </aside>
      </section>
    </>
  );
}
