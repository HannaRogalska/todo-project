import { NavLink, Outlet } from "react-router-dom";
import { Suspense, useState, useEffect } from "react";

const MainLayout = () => {
  const savedThemeLocalStorage = localStorage.getItem("theme");
  const [darkMode, setDarkMode] = useState<boolean>(
    savedThemeLocalStorage ? JSON.parse(savedThemeLocalStorage) : false
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "false");
    }
  }, [darkMode]);

  const toggleThem = (): void => setDarkMode(!darkMode);
  return (
    <div
      className={
        "bg-[var(--background-color)]  text-[var(--input-bg-color)] dark:bg-[var(--dark-background-color)]  dark:text-[var(--dark-text-color)]"
      }
    >
      <header className={"flex justify-between items-center p-[20px]"}>
        <img
          src="https://cdn-icons-png.freepik.com/256/15158/15158927.png?semt=ais_white_label"
          alt="logo"
          className={" sm: w-[50px]"}
          loading="lazy"
        />
        <nav className={"flex gap-[10px] "}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Tasks
          </NavLink>
          <button
            className={
              "border rounded-md border-[var(--input-bg-color)] px-[5px] dark:border-white"
            }
            onClick={toggleThem}
          >
            {darkMode ? "🌙 Dark" : "☀️ Light"}
          </button>
        </nav>
      </header>
      <main className={"h-[100vh]"}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <small>© 2025 My App</small>
      </footer>
    </div>
  );
};

export default MainLayout;
