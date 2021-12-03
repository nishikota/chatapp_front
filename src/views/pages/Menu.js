import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getMyProfile, getTalkList} from "../../stores/async";

import {Button} from "antd";

const Menu = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const handlePage = (url) => {
    nav(url);
  };
  const asyncButton = async (asyncFunc, url) => {
    const data = await dispatch(asyncFunc);
    data.payload === undefined ? console.log("error") : handlePage(url);
  };

  return (
    <>
      <p>Link to Community</p>
      <Button style={style.button} onClick={() => handlePage("/")}>
        {/* <Link to="/">signout</Link> */}Sign Out
      </Button>
      <Button
        style={style.button}
        onClick={() => asyncButton(getMyProfile(), "/myprofile")}
      >
        My Profile
      </Button>
      <Button
        style={style.button}
        onClick={() => asyncButton(getTalkList(), "/talklist")}
      >
        Let's Talk
      </Button>
    </>
  );
};

const style = {
  button: {
    margin: "3rem 4rem",
    padding: "0 1rem",
    borderRadius: "2rem",
    backgroundColor: "blue",
    borderStyle: "none",
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
  },
};

export default Menu;
