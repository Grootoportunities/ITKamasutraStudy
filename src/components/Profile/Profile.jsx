import MyPosts from "./MyPosts/MyPosts";
import modules from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          src="https://nystudio107.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg"
          className={modules.bigPic}
        />
      </div>
      <div>Ava + Description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
