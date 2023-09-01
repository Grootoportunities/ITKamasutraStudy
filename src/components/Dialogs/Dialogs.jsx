import modules from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={modules.dialogs}>
      <div className={modules.dialogsItems}>
        <div className={modules.dialog + ' ' + modules.active}>Daniil</div>
        <div className={modules.dialog}>Anastasia</div>
        <div className={modules.dialog}>Dmitriy</div>
        <div className={modules.dialog}>Stanislav</div>
        <div className={modules.dialog}>Nikita</div>
        <div className={modules.dialog}>Maxim</div>
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
