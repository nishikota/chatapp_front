import {otherDataSelector} from "../../stores/slice";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {Button} from "antd";

const Profile = () => {
  const data = useSelector(otherDataSelector);
  const nav = useNavigate();
  const handlePage = (url) => {
    nav(url);
  };
  return (
    <>
      <div className="title" style={style.title}>
        {`${data.username}'s Profile`}
      </div>
      <li className="profiles" style={style.profiles}>
        <p>名前:{data.username}</p>
        <p>会社:{data.company_name}</p>
        <p>部署:{data.section_name}</p>
        <p>役職:{data.post_name}</p>
      </li>
      <div className="ButtonArea">
        <Button
          style={style.button}
          onClick={() => {
            handlePage("/menu");
          }}
        >
          Top
        </Button>
      </div>
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
  profiles: {
    listStyle: "none",
    fontSize: "1rem",
    fontWeight: 700,
    marginRight: "5rem",
  },
};

export default Profile;
