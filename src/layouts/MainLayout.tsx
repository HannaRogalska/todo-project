import { NavLink, Outlet } from "react-router-dom";
import style from "./MainLayout.module.css";
const MainLayout = () => {
  return (
    <>
      <header className={style.mainLayoutHeader}>
        <img
          src="https://cdn-icons-png.freepik.com/256/15158/15158927.png?semt=ais_white_label"
          alt="logo"
          className={style.logoImg}
        />
        <nav className={style.mainLayoutNav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? style.mainLayoutNavLinkIsActive
                : style.mainLayoutNavLink
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive
                ? style.mainLayoutNavLinkIsActive
                : style.mainLayoutNavLink
            }
          >
            Tasks
          </NavLink>
        </nav>
      </header>
      <main className={style.mainContainer}>
        <Outlet />
      </main>
      <footer>
        <small>© 2025 My App</small>
      </footer>
    </>
  );
};

export default MainLayout;
