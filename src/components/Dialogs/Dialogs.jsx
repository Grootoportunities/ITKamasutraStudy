import modules from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={modules.dialog + " " + modules.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return(
    <div className={modules.message}>{props.message}</div>
  );
};

const Dialogs = (props) => {
  return (
    <div className={modules.dialogs}>
      <div className={modules.dialogsItems}>
        <DialogItem name="Daniil" id="1" />
        <DialogItem name="Anastasia" id="2" />
        <DialogItem name="Dmitriy" id="3" />
        <DialogItem name="Stanislav" id="4" />
        <DialogItem name="Nikita" id="5" />
        <DialogItem name="Maxim" id="6" />
      </div>
      <div className={modules.messages}>
        <Message message = "Hi"/>
        <Message message = "How are you?"/>
        <Message message = "Everything is fine!"/>
      </div>
    </div>
  );
};

export default Dialogs;
