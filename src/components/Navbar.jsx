import modules from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={modules.nav}>
      <div className={modules.item}>Profile</div>
      <div className={modules.item}>Messages</div>
      <div className={modules.item}>News</div>
      <div className={modules.item}>Music</div>
      <div className={modules.item}>Settings</div>
    </nav>
  );
};

export default Navbar;
