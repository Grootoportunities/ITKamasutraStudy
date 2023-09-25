import modules from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "It's my first project", likesCount: "15" },
    { id: 2, message: "So don't blame me", likesCount: "20" },
  ];

  let postsElements = posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  return (
    <div className={modules.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={modules.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
