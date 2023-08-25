import modules from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={modules.profile}>
      <div>
        <img src="https://nystudio107.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg" />
      </div>
      <div>Ava + Description</div>
      <div>
        My posts
        <div>New post</div>
        <div>
          <div className={modules.item}>Post 1</div>
          <div className={modules.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
