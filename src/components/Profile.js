import './Profile.css';
const Profile = () => {
  return (
    <div className="Profile">
      <img
        src={process.env.PUBLIC_URL + '/assets/프로필.jpeg'}
        className="ProfilePicture"
      />
      <div className="ProfileInfo">
        <div className="ProfileName">최영서 님</div>
        <div className="ProfileEdit">
          <img src={process.env.PUBLIC_URL + '/assets/setting.png'}></img>
          <span>프로필 편집</span>
        </div>
      </div>
    </div>
  );
};
export default Profile;
