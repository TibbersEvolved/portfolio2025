import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cv")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <section className="min-h-dvh bg-amber-100"></section>
    </>
  );
}
