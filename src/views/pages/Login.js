import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
  loginInput,
  loginDataSelector,
  examplePost,
  exampleData,
  LoginPost,
} from "../../stores/usersSlice";

const Login = () => {
  const dispatch = useDispatch();
  const inputData = useSelector(loginDataSelector);

  return (
    <>
      <div>
        <div className="inputArea">
          <input
            name="email"
            onChange={(e) => {
              const nameAndValue = [e.target.name, e.target.value];
              dispatch(loginInput(nameAndValue));
            }}
            value={inputData}
            placeholder="メールアドレス"
          />
          <input
            name="password"
            onChange={(e) => {
              const nameAndValue = [e.target.name, e.target.value];
              dispatch(loginInput(nameAndValue));
            }}
            value={inputData}
            placeholder="パスワード"
          />
          {/* pas2はフロント側でバリデーションさせる */}
          <input className="password2" placeholder="パスワードの確認" />
        </div>
        <button
          onClick={() => {
            // dispatch(asyncLoginPost());
            dispatch(LoginPost());
          }}
        >
          Login
          {/* ログインバリデーションが必要 */}
          {/* <Link to="/:id/menu">Login</Link> */}
        </button>
        <button>
          <Link to="/signUp">signUp</Link>
        </button>
        <div>{exampleData}</div>
      </div>
    </>
  );
};

export default Login;
