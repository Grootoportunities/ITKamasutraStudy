import modules from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          src="https://nystudio107.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg"
          className={modules.bigPic}
        />
      </div>
      <div className={modules.descriptionBlock}>Ava + Description</div>
    </div>
  );
};

export default ProfileInfo;
