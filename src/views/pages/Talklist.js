import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {
  userNameSelector,
  userCompanySelector,
  userIdSelector,
} from "../../stores/slice";
import {Button} from "antd";
import {getOtherProfile} from "../../stores/async";

const Talklist = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const names = useSelector(userNameSelector);
  const companies = useSelector(userCompanySelector);
  const id = useSelector(userIdSelector);
  const handlePage = (url) => {
    nav(url);
  };
  const asyncButton = async (asyncFunc, url) => {
    const data = await dispatch(asyncFunc);
    console.log(data.type);
    data.payload === undefined ? console.log(data.error) : handlePage(url);
  };

  const userRoop = () => {
    const value = [];
    for (let i = 0; i < id.length; i++) {
      value.push(
        <li style={style.userInfo} key={id[i]}>
          <button
            className="ConnectProfile"
            onClick={() => asyncButton(getOtherProfile(i), `/profile`)}
            style={style.userButton}
          >
            {`会社:${companies[i]} -- 名前:${names[i]}`}
          </button>
          <Button
            className="ConnectRoom"
            onClick={() => handlePage("/room")}
            style={style.roomButton}
          >
            Talk
          </Button>
        </li>
      );
    }
    return <ul style={style.list}>{value}</ul>;
  };

  return (
    <>
      <div style={style.title}>Talk List</div>
      {userRoop()}
      <Button style={style.button} onClick={() => handlePage("/menu")}>
        Top
      </Button>
    </>
  );
};

const style = {
  title: {
    fontSize: "2rem",
    marginTop: "0.5rem",
    marginBottom: "2rem",
    color: "blue",
    fontWeight: 700,
  },
  list: {
    listStyle: "none",
    fontSize: "1rem",
    fontWeight: 700,
    marginRight: "5rem",
  },
  userInfo: {
    display: "flex",
    flexDirection: "row",
  },
  userButton: {
    margin: "1rem auto",
    padding: "0 2rem",
    backgroundColor: "skyBlue",
    borderStyle: "none",
    color: "black",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  roomButton: {
    margin: "0.5rem 4rem",
    borderRadius: "2rem",
    backgroundColor: "blue",
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    borderStyle: "none",
  },
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

export default Talklist;
