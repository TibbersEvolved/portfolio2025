import { createFileRoute } from "@tanstack/react-router";
import "../App.css";
import Person_Card from "@/components/index/person_card";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <section className="min-h-dvh bg-zinc-100">
        <section className="mr-10 ml-10 pt-5">
          <Person_Card />
        </section>
      </section>
    </>
  );
}
