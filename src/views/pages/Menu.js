import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getMyProfile} from "../../stores/async";

import {Button} from "antd";

const Menu = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  console.log("render:menu");
  const handlePage = (url) => {
    nav(url);
  };

  return (
    <>
      <p>Link to Community</p>
      <Button style={style.button} onClick={() => handlePage("/")}>
        {/* <Link to="/">signout</Link> */}Sign Out
      </Button>
      <Button style={style.button} onClick={() => handlePage("/myprofile")}>
        {/* <Link to="/myprofile">My Profile</Link> */}
        My Profile
      </Button>
      <Button style={style.button} onClick={() => handlePage("/talklist")}>
        {/* <Link to="/talklist">Let's Talk</Link> */}
        Let's Talk
      </Button>
    </>
  );
};

export const style = {
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
