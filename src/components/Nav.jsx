import { useContext } from "react";
import MenuBtn from "./MenuBtn";
import ThemeBtn from "./ThemeBtn";
import MenuContext from "../contexts/MenuContext";

const Nav = () => {
  const { showMenu } = useContext(MenuContext);

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      link.classList.add("active");
    });
  });

  return (
    <>
      <div
        className={`${
          showMenu ? "flex" : "hidden"
        } flex-col items-center gap-8 md:flex md:flex-row`}
      >
        <a href="#home" className="nav-link active">
          Home
        </a>

        <a href="#about" className="nav-link">
          About
        </a>

        <a href="#projects" className="nav-link">
          Projects
        </a>

        <a href="#skills" className="nav-link">
          Skills
        </a>
        <a
          href="#contact"
          className="ml-5 rounded-full border-2 border-sky-500 px-4 py-2 text-lg text-slate-700 transition-all duration-300 hover:bg-sky-500 hover:text-slate-200 focus:bg-sky-500 focus:text-slate-200 dark:border-sky-300 dark:text-slate-300 dark:hover:bg-sky-300 dark:hover:text-slate-700 dark:focus:bg-sky-300 dark:focus:text-slate-700"
        >
          Contact me
        </a>
        <ThemeBtn />
      </div>
      <MenuBtn />
    </>
  );
};

export default Nav;
