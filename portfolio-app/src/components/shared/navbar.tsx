import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <>
      <header className="flex justify-normal gap-2 p-2 lg:p-4 bg-amber-200 w-auto text-lg m:text-xl lg:text-2xl text-center">
        <Link
          to="/"
          className="hover:text-white transition-colors duration-100"
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
          className="hover:text-white transition-colors duration-100"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Projects
        </Link>{" "}
        <div>|</div>
        <Link
          to="/cv"
          className="hover:text-white transition-colors duration-100"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          CV
        </Link>{" "}
      </header>
    </>
  );
}
