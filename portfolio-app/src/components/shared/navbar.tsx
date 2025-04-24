import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <>
      <header className="flex justify-normal gap-2 p-2 bg-amber-200 w-auto text-lg text-center">
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{" "}
        <div>|</div>
        <Link
          to="/projects"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Projects
        </Link>{" "}
      </header>
    </>
  );
}
