import {Link, Outlet} from "react-router-dom";

const MyprofileChange = () => {
  return (
    <div>
      {/* <img /> */}
      <button className="ImgChangeModal">画像選択</button>
      <li>
        <p>名前:</p>
        <input className="Name" />
        <p>会社名:</p>
        <input className="CompanyName" />
        <p>部署名:</p>
        <input className="SectionName" />
        <p>役職:</p>
        <input className="PostName" />
      </li>
      <button className="ChangeResister">
        <Link to="/myprofile">完了</Link>
      </button>
    </div>
  );
};

export default MyprofileChange;
