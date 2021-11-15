import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginInput, loginDataSelector, LoginPost} from "../../stores/slice";
import {Button, Input} from "antd";

const Login = () => {
  const dispatch = useDispatch();
  const inputData = useSelector(loginDataSelector);

  return (
    <>
      <div>
        <div className="inputArea" style={style.inputArea}>
          <Input
            style={style.input}
            name="email"
            onChange={(e) => {
              const nameAndValue = [e.target.name, e.target.value];
              dispatch(loginInput(nameAndValue));
            }}
            value={inputData}
            placeholder="メールアドレス"
          />
          <Input
            style={style.input}
            name="password"
            onChange={(e) => {
              const nameAndValue = [e.target.name, e.target.value];
              dispatch(loginInput(nameAndValue));
            }}
            value={inputData}
            placeholder="パスワード"
          />
          {/* pas2はフロント側でバリデーションさせる */}
          <Input
            style={style.input}
            className="password2"
            placeholder="パスワードの確認"
          />
        </div>
        <Button
          style={style.button}
          onClick={() => {
            dispatch(LoginPost());
          }}
        >
          {/* ログインバリデーションが必要 */}
          <Link to="/:id/menu">Login</Link>
        </Button>
        <Button style={style.button}>
          <Link to="/signUp">signUp</Link>
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
    fontSize: "default",
    margin: "0.5rem 0",
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

export default Login;
