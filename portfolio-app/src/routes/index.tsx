import { createFileRoute } from "@tanstack/react-router";
import "../App.css";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <section className="min-h-dvh bg-amber-100">
        <div>Some text here</div>
      </section>
    </>
  );
}
