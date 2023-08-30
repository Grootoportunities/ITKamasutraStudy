import modules from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={modules.nav}>
      <div className={modules.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={modules.item}>
        <a href="/dialogs">Messages</a>
      </div>
      <div className={modules.item}>
        <a href="/dialogs">News</a>
      </div>
      <div className={modules.item}>
        <a href="/dialogs">Music</a>
      </div>
      <div className={modules.item}>
        <a href="/dialogs">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
