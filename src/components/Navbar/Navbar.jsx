import { NavLink } from "react-router-dom";
import modules from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={modules.nav}>
      <div className={modules.item}>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? modules.active : undefined)}
        >
          Profile
        </NavLink>
      </div>
      <div className={modules.item}>
        <NavLink
          to="/dialogs"
          className={({ isActive }) => (isActive ? modules.active : undefined)}
        >
          Messages
        </NavLink>
      </div>
      <div className={modules.item}>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? modules.active : undefined)}
        >
          News
        </NavLink>
      </div>
      <div className={modules.item}>
        <NavLink
          to="/music"
          className={({ isActive }) => (isActive ? modules.active : undefined)}
        >
          Music
        </NavLink>
      </div>
      <div className={modules.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? modules.active : undefined)}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
