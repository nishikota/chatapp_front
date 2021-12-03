import {Button, Input} from "antd";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {profileInput} from "../../stores/slice";
import {putMyProfile} from "../../stores/async";
import {myData} from "../../stores/slice";

const MyprofileChange = () => {
  const firstData = useSelector(myData);
  const data = firstData;
  const nav = useNavigate();
  const dispatch = useDispatch();
  const handlePage = (url) => {
    nav(url);
  };
  const asyncButton = async (asyncFunc, url) => {
    const data = await dispatch(asyncFunc);
    console.log(data.type);
    data.payload === undefined ? console.log(data.error) : handlePage(url);
  };
  return (
    <div>
      <li className="inputNewProfile" style={style.profiles}>
        <p>
          名前
          <Input
            className="Name"
            name="username"
            style={style.input}
            onChange={(e) => {
              const nameAndValue = [e.target.name, e.target.value];
              dispatch(profileInput(nameAndValue));
            }}
            value={data.username}
          />
        </p>
        <p>
          会社
          <Input
            className="CompanyName"
            name="company_name"
            style={style.input}
            onChange={(e) => {
              const nameAndValue = [e.target.name, e.target.value];
              dispatch(profileInput(nameAndValue));
            }}
            value={data.company_name}
          />
        </p>
        <p>
          部署
          <Input
            className="SectionName"
            name="section_name"
            style={style.input}
            onChange={(e) => {
              const nameAndValue = [e.target.name, e.target.value];
              dispatch(profileInput(nameAndValue));
            }}
            value={data.section_name}
          />
        </p>
        <p>
          役職
          <Input
            className="PostName"
            name="post_name"
            style={style.input}
            onChange={(e) => {
              const nameAndValue = [e.target.name, e.target.value];
              dispatch(profileInput(nameAndValue));
            }}
            value={data.post_name}
          />
        </p>
      </li>
      <Button
        style={style.button}
        className="ChangeResister"
        onClick={() => {
          asyncButton(putMyProfile(), "/myprofile");
        }}
      >
        完了
      </Button>
    </div>
  );
};

const style = {
  input: {
    borderRadius: "2rem",
    fontSize: "default",
    padding: "0.5rem",
  },
  button: {
    margin: "2rem 7rem",
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
    margin: "0 auto",
    width: "65%",
  },
};

export default MyprofileChange;
