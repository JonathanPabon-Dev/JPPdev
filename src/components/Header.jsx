import Logo from "./Logo";
import Nav from "./Nav";
import { useEffect, useState } from "react";

const Header = () => {
  const [navHidden, setNavHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollDirection = scrollTop > lastScrollTop ? "down" : "up";

      if (scrollDirection === "down" && scrollTop > 200) {
        setNavHidden(true);
      } else if (scrollDirection === "up" && scrollTop < 200) {
        setNavHidden(false);
      }

      setLastScrollTop(scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header
      className={`fixed left-0 top-0 w-full bg-slate-800 py-3 text-white shadow-md ${
        navHidden ? "hidden" : ""
      }`}
    >
      <nav
        role="navigation"
        className="container mx-auto flex h-full items-center justify-between"
      >
        <Logo />
        <Nav />
      </nav>
    </header>
  );
};

export default Header;
