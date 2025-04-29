import { createFileRoute } from "@tanstack/react-router";
import "../App.css";
import Person_Card from "@/components/index/person_card";
import Techstack from "@/components/index/techstack";
import WorkExperience from "@/components/index/workExperience";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <section className="bg-zinc-100 pb-4">
        <section className="md:mr-10 md:ml-10 mr-3 ml-3 pt-5 font-roboto">
          <Person_Card />
          <Techstack />
          <WorkExperience />
        </section>
      </section>
    </>
  );
}
