import ThemeBtn from "../components/ThemeBtn";

const Nav = () => {

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
      <div className="flex gap-8">
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
      </div>
      <div className="flex items-center gap-8">
        <a
          href="#contact"
          className="rounded-full border-sky-300 border-2 hover:bg-sky-300 px-4 py-2 hover:text-slate-800 text-slate-200 transition-all duration-300 ease-in-out"
        >
          Contact me
        </a>
        <ThemeBtn />
      </div>
    </>
  );
};

export default Nav;
