import modules from "./../Dialogs.module.css";

const Message = (props) => {
  return <div className={modules.message}>{props.message}</div>;
};

export default Message;
