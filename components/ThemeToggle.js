import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className=" px-2 py-2 rounded-full bg-offBlack dark:bg-offWhite text-white dark:text-black shadow-2xl dark:shadow-orange-300"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeToggle;
