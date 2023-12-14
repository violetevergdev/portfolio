import { useEffect } from "react";
import { useLocalStorage } from "../utils/useLocalStorage.ts";
import { detectDarkMode } from "../utils/detectDarkMode.ts";

const DarkModeBtn = () => {
  const [theme, setTheme] = useLocalStorage("darkMode", detectDarkMode());

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-schema: dark)")
      .addEventListener("change", (e) => {
        const newColorScheme = e.matches ? "dark" : "light";
        setTheme(newColorScheme);
      });
  }, []);

  const toggleDarkMode = () => {
    setTheme((currentValue: string) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };

  const btnNormal = "dark-mode-btn";
  const btnActive = "dark-mode-btn dark-mode-btn--active";

  return (
    <button
      className={theme === "dark" ? btnActive : btnNormal}
      onClick={toggleDarkMode}
    >
      <img
        src="/src/img/icons/sun.svg"
        alt="Light mode"
        className="dark-mode-btn__icon"
      />
      <img
        src="/src/img/icons/moon.svg"
        alt="Dark mode"
        className="dark-mode-btn__icon"
      />
    </button>
  );
};

export default DarkModeBtn;
