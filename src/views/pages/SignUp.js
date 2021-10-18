import {Link} from "react-router-dom";

const Signin = () => {
  return (
    <>
      <div className="inputArea">
        <input className="email" placeholder="メールアドレス" />
        <input className="last_name" placeholder="姓" />
        <input className="first_name" placeholder="名" />
        <input className="company_name" placeholder="会社名" />
        <input className="password1" placeholder="パスワード" />
        <input className="password2" placeholder="パスワードの確認" />
      </div>
      <div>
        <button>
          <Link to=":id/menu">SignIn</Link>
        </button>
      </div>
    </>
  );
};

export default Signin;
