import ThemeBtn from "../components/ThemeBtn";

const Nav = () => {
  return (
    <>
      <div className="flex gap-8">
        <a href="#home" className="nav-link">
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
          className="ml-20 rounded-full bg-sky-300 px-4 py-2 text-slate-800 hover:bg-sky-500 hover:text-white"
        >
          Contact me
        </a>
        <ThemeBtn />
      </div>
    </>
  );
};

export default Nav;
