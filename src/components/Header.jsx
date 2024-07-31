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

      if (scrollDirection === "down" && scrollTop > 100) {
        setNavHidden(true);
      } else if (scrollDirection === "up" && scrollTop < 100) {
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
      className={`fixed left-0 top-0 z-10 w-full bg-transparent py-3 font-semibold shadow-md ${
        navHidden ? "hidden" : ""
      }`}
    >
      <nav
        role="navigation"
        className="container mx-auto flex h-full items-center justify-between gap-5"
      >
        <Logo />
        <Nav />
      </nav>
    </header>
  );
};

export default Header;
