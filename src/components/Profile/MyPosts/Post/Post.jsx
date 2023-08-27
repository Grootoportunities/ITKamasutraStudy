import modules from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={modules.item}>
      <img src="https://bipbap.ru/wp-content/uploads/2022/11/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg"></img>
      {props.message}
      <div>
        <button>Like</button>
        <span> {props.likesCount} Likes</span>
      </div>
    </div>
  );
};

export default Post;
