import {BrowserRouter, Link, Route} from "react-router-dom";
import MyprofileChange from "./MyprofileChange";
import {Button} from "antd";
import {useEffect} from "react";
import {getMyProfile} from "../../stores/async";
import {useDispatch} from "react-redux";

const Myprofile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyProfile());
  });
  return (
    <>
      <div className="title">My Profile</div>
      <div className="profiles">
        <li>
          <p>名前:{"APIから合わせて取得"}</p>
          <p>会社名:{"APIより"}</p>
          <p>部署名:{"APIより取得と登録機能の追加"}</p>
          <p>役職:{"APIより取得と登録機能の追加"}</p>
        </li>
      </div>
      <div className="ButtonArea">
        <Button style={style.button}>
          <Link to="/:id/menu">Top</Link>
        </Button>
        <BrowserRouter>
          <Button className="ChangeModal" style={style.button}>
            <Link to="/:id/change">変更</Link>
          </Button>
          <Route path="/:id/change" component={MyprofileChange} />
        </BrowserRouter>
      </div>
    </>
  );
};

export const style = {
  button: {
    margin: "1rem 7rem",
    padding: "0 2rem",
    borderRadius: "2rem",
    backgroundColor: "blue",
    borderStyle: "none",
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
  },
};

export default Myprofile;
