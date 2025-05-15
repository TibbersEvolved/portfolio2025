import { Link } from "@tanstack/react-router";
import imgLinkedin from "../../assets/linkedinImg.png";
import imgGith from "../../assets/github.png";

export default function Navbar() {
  return (
    <>
      <header className="flex font-ibm justify-between gap-2 p-2 lg:p-4 border-b-2 border-zinc-200 bg-zinc-100 w-auto text-lg md:text-xl lg:text-2xl text-center">
        <section className="hidden md:inline">Erik Olin</section>
        <section className="flex justify-normal gap-2">
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
            to="/projects/$id"
            params={{ id: "all" }}
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
        </section>
        <section className="flex justify-normal gap-2">
          <a
            href="https://www.linkedin.com/in/erik-olin-608a2611b/"
            target="_blank"
          >
            <img src={imgLinkedin} className="size-8 p-0 m-0"></img>
          </a>
          <a href="https://github.com/TibbersEvolved" target="_blank">
            <img src={imgGith} className="size-8 p-0 m-0"></img>
          </a>
        </section>
      </header>
    </>
  );
}
