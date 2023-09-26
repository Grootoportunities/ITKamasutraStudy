import modules from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Daniil" },
    { id: 2, name: "Anastasia" },
    { id: 3, name: "Dmitry" },
    { id: 4, name: "Stanislav" },
    { id: 5, name: "Nikita" },
    { id: 6, name: "Maxim" },
  ];

  let messages = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Everything is fine!" },
  ];

  let dialogsElements = dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = messages.map((messages) => (
    <Message message={messages.message} />
  ));

  return (
    <div className={modules.dialogs}>
      <div className={modules.dialogsItems}>{dialogsElements}</div>
      <div className={modules.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
