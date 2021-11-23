import {useDispatch, useSelector} from "react-redux";
import {SignUpPost} from "../../stores/async";
import {signUpDataSelector, signUpInput} from "../../stores/slice";
import {Link} from "react-router-dom";
import {Button, Input} from "antd";

const Signin = () => {
  const dispatch = useDispatch();
  const inputData = useSelector(signUpDataSelector);

  return (
    <>
      <div className="inputArea" style={style.inputArea}>
        <Input
          style={style.input}
          name="email"
          onChange={(e) => {
            const nameAndValue = [e.target.name, e.target.value];
            dispatch(signUpInput(nameAndValue));
          }}
          value={inputData}
          placeholder="メールアドレス: 必須"
        />
        <Input
          style={style.input}
          name="username"
          onChange={(e) => {
            const nameAndValue = [e.target.name, e.target.value];
            dispatch(signUpInput(nameAndValue));
          }}
          value={inputData}
          placeholder="名前: 必須"
        />
        <Input
          style={style.input}
          name="company_name"
          onChange={(e) => {
            const nameAndValue = [e.target.name, e.target.value];
            dispatch(signUpInput(nameAndValue));
          }}
          value={inputData}
          placeholder="会社名: 必須"
        />
        <Input
          style={style.input}
          name="section_name"
          onChange={(e) => {
            const nameAndValue = [e.target.name, e.target.value];
            dispatch(signUpInput(nameAndValue));
          }}
          value={inputData}
          placeholder="部署: 任意"
        />
        <Input
          style={style.input}
          name="post_name"
          onChange={(e) => {
            const nameAndValue = [e.target.name, e.target.value];
            dispatch(signUpInput(nameAndValue));
          }}
          value={inputData}
          placeholder="役職: 任意"
        />
        <Input
          style={style.input}
          name="password1"
          onChange={(e) => {
            const nameAndValue = [e.target.name, e.target.value];
            dispatch(signUpInput(nameAndValue));
          }}
          value={inputData}
          placeholder="パスワード"
        />
        <Input
          style={style.input}
          name="password2"
          onChange={(e) => {
            const nameAndValue = [e.target.name, e.target.value];
            dispatch(signUpInput(nameAndValue));
          }}
          value={inputData}
          placeholder="パスワードの確認"
        />
      </div>
      <div>
        <Button
          style={style.button}
          onClick={() => {
            dispatch(SignUpPost());
          }}
        >
          <Link to="/">SignUp</Link>
        </Button>
      </div>
    </>
  );
};

export const style = {
  inputArea: {
    padding: "2rem 1rem",
    display: "flex",
    flexDirection: "column",
    width: "80%",
    margin: "auto",
  },
  input: {
    borderRadius: "2rem",
    margin: "0.5rem 0",
    fontSize: "default",
    padding: "0.5rem",
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
};

export default Signin;
