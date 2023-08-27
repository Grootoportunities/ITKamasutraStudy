import modules from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={modules.posts}>
        <Post message="It's my first project" likesCount="15" />
        <Post message="So don't blame me" likesCount="20" />
      </div>
    </div>
  );
};

export default MyPosts;
