import myImage from "../../assets/erik2.png";

export default function Person_Card() {
  return (
    <>
      <section className="bg-zinc-50 shadow-md rounded-md flex text-sm md:text-base gap-5 p-4">
        <img
          src={myImage}
          className="size-30 md:size-40 rounded-2xl shadow-md"
        ></img>
        <aside className="flex flex-col">
          <div>Erik Olin</div>
          <div>Fullstack Java Developer</div>
          <div></div>
        </aside>
        <section className="flex flex-col text-xs md:text-sm ml-auto mr-4">
          <div>Stockholm - Sweden</div>
          <div>+4676-5528712</div>
          <div className="hidden md:inline">erik.olin.spanga@gmail.com</div>
        </section>
      </section>
    </>
  );
}
