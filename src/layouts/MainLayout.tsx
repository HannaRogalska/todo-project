import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
const MainLayout = () => {
  return (
    <>
      <header className={"flex justify-between"}>
        <img
          src="https://cdn-icons-png.freepik.com/256/15158/15158927.png?semt=ais_white_label"
          alt="logo"
          className={" sm: w-[50px]"}
        />
        <nav className={"flex gap-[10px]"}>
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
    </>
  );
};

export default MainLayout;
