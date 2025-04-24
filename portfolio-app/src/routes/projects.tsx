import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <section className="min-h-dvh bg-amber-100">
        <header className="flex justify-center">
          <div className="text-4xl mt-3">My projects</div>
        </header>
      </section>
    </>
  );
}
