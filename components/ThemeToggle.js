import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { buttonPress } from "../utilities/animations";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      whileHover={buttonPress.hover}
      whileTap={buttonPress.tap}
      initial={buttonPress.initial}
      className="p-4"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "dark" && (
        <>
          <svg
            className="w-8 h-8 fill-lightGrey drop-shadow-lg "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          <span className="sr-only">Toggle Light Mode</span>
        </>
      )}

      {theme === "light" && (
        <>
          <svg
            className="w-8 h-8 fill-yellowBG stroke-offBlack drop-shadow-2xl shadow-offBlack  border-[1px] border-offBlack rounded"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
          <span className="sr-only">Toggle Dark Mode</span>
        </>
      )}
    </motion.button>
  );
};

export default ThemeToggle;
