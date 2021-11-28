import {Link} from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="title">Profile</div>
      {/* <p><img /></p> */}
      <li>
        <p>{"APIから合わせて取得"}</p>
        <p>{"APIから取得"}</p>
        <p>{"APIから取得"}</p>
        <p>{"APIから取得"}</p>
      </li>
      <button className="back">
        <Link to="/talklist">Back</Link>
      </button>
    </>
  );
};

export default Profile;
