import modules from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={modules.dialogs}>
      <div className={modules.dialogsItems}>
        <div className={modules.dialog + " " + modules.active}>
          <NavLink to="/dialogs/1">Daniil</NavLink>
        </div>
        <div className={modules.dialog}>
          <NavLink to="/dialogs/2">Anastasia</NavLink>
        </div>
        <div className={modules.dialog}>
          <NavLink to="/dialogs/3">Dmitriy</NavLink>
        </div>
        <div className={modules.dialog}>
          <NavLink to="/dialogs/4">Stanislav</NavLink>
        </div>
        <div className={modules.dialog}>
          <NavLink to="/dialogs/5">Nikita</NavLink>
        </div>
        <div className={modules.dialog}>
          <NavLink to="/dialogs/6">Maxim</NavLink>
        </div>
      </div>
      <div className={modules.messages}>
        <div className={modules.message}>Hi</div>
        <div className={modules.message}>How are you?</div>
        <div className={modules.message}>Everything is fine!</div>
      </div>
    </div>
  );
};

export default Dialogs;
