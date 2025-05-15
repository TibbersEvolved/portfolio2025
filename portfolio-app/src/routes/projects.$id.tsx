import ProjectContainer from "@/components/projects/projectContainer";
import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = useParams({ strict: false });
  let superId = "all";
  if (id === undefined) {
    superId = "all";
  } else {
    superId = id;
  }
  return (
    <>
      <section className="min-h-dvh bg-zinc-100 pb-4">
        <header className="flex justify-center">
          <div className="text-4xl mt-3 font-ibm">My projects</div>
        </header>
        <ProjectContainer id={superId} />
      </section>
    </>
  );
}
