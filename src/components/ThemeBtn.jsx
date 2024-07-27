import { useState, useEffect } from "react";
import SunIcon from "../icons/SunIcon";
import MoonIcon from "../icons/MoonIcon";

const ThemeBtn = () => {
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <button
      className="flex size-8 items-center justify-center rounded-full bg-transparent"
      onClick={handleThemeChange}
    >
      {theme === "dark" ? (
        <SunIcon className="hover:fill-yellow-400 hover:stroke-yellow-400" />
      ) : (
        <MoonIcon className="hover:fill-current" />
      )}
    </button>
  );
};

export default ThemeBtn;
