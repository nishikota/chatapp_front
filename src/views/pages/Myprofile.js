import {BrowserRouter, Link, Route} from "react-router-dom";
import MyprofileChange from "./MyprofileChange";

const Myprofile = () => {
  return (
    <>
      <div className="title">My Profile</div>
      <div className="profiles">
        {/* <p><img className="MyPhoto" /></p> */}
        <li>
          <p>名前:{"APIから合わせて取得"}</p>
          <p>会社名:{"APIより"}</p>
          <p>部署名:{"APIより取得と登録機能の追加"}</p>
          <p>役職:{"APIより取得と登録機能の追加"}</p>
        </li>
      </div>
      <div className="ButtonArea">
        <button>
          <Link to="/:id/menu">Top</Link>
        </button>
        <BrowserRouter>
          <button className="ChangeModal">
            <Link to="/:id/change">変更</Link>
          </button>
          <Route path="/:id/change" component={MyprofileChange} />
        </BrowserRouter>
      </div>
    </>
  );
};

export default Myprofile;
