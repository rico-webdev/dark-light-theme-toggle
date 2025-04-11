import { useState, useEffect } from "react";
import Hero from "./components/Hero";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode((prev) => !prev);
    console.log("toggled", isDarkMode);
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen dark:bg-neutral-950 bg-neutral-100 relative transition-colors duration-300 isolate">
      <div className="absolute inset-0 -z-10 isolate">
        <div
          className="absolute inset-0 opacity-30 dark:hidden"
          style={{
            backgroundImage: `
        linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div
          className="absolute inset-0 dark:hidden"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0, 0.05) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <button
        onClick={toggleDarkMode}
        className="fixed z-10 top-3 lg:top-4 right-3 lg:right-4 w-9 h-9 lg:w-10 lg:h-10 flex justify-center items-center rounded-full bg-amber-500 text-neutral-950 shadow-lg hover:bg-amber-600 transition-colors cursor-pointer"
      >
        <i
          className={`bx bx-${isDarkMode ? "sun" : "moon"} text-lg lg:text-xl`}
        ></i>
      </button>

      <Hero />
    </div>
  );
};

export default App;
