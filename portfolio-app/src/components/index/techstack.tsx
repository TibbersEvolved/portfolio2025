import Techbutton from "./techbutton";
import img_link from "../../assets/linkedinImg.png";

export default function Techstack() {
  return (
    <>
      <section className="bg-zinc-50 shadow-md gap-5 p-4 flex flex-col mt-4">
        <div className="text-xl font-bold">Main Technologies</div>
        <div className="flex flex-row gap-2 flex-wrap">
          <Techbutton name="React" image={img_link} />
          <Techbutton name="Java" image={img_link} />
          <Techbutton name="Spring Boot" image={img_link} />
          <Techbutton name="Typescript" image={img_link} />
          <Techbutton name="C#" image={img_link} />
        </div>
      </section>
    </>
  );
}
