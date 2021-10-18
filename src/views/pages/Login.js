import {Link} from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>
        <div className="inputArea">
          <input className="email" placeholder="メールアドレス" />
          <input className="password1" placeholder="パスワード" />
          <input className="password2" placeholder="パスワードの確認" />
        </div>
        <button>
          <Link to="/:id/menu">Login</Link>
        </button>
        <button>
          <Link to="/signUp">signUp</Link>
        </button>
      </div>
    </>
  );
};

export default Login;
