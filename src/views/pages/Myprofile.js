import {useNavigate, Outlet} from "react-router-dom";
import MyprofileChange from "./MyprofileChange";
import {Button} from "antd";
import {getMyProfile} from "../../stores/async";
import {useDispatch, useSelector} from "react-redux";
import {myData, myProfile} from "../../stores/slice";
import {useLayoutEffect} from "react";

const Myprofile = () => {
  const data = useSelector(myData);
  // const dispatch = useDispatch();
  // dispatch(getMyProfile());
  const nav = useNavigate();
  const handlePage = (url) => {
    nav(url);
  };
  return (
    <>
      <div className="title">My Profile</div>
      <div className="profiles">
        <li>
          <p>{console.log("render", data)}</p>
          {/* <p>名前:{myData.username}</p>
          <p>会社名:{myData.company_name}</p>
          <p>部署名:{myData.section_name}</p>
          <p>役職:{myData.post_name}</p> */}
        </li>
      </div>
      <div className="ButtonArea">
        <Button
          style={style.button}
          onClick={() => {
            handlePage("/menu");
          }}
        >
          Top
        </Button>
        <Button
          className="ChangeModal"
          style={style.button}
          onClick={() => {
            handlePage("/myprofile/change");
          }}
        >
          変更
        </Button>
      </div>
      <Outlet />
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
