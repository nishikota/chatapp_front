// import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
  signUpInput,
  signUpDataSelector,
  SignUpPost,
} from "../../stores/usersSlice";

const Signin = () => {
  const dispatch = useDispatch();
  const inputData = useSelector(signUpDataSelector);

  return (
    <>
      <div className="inputArea">
        <input
          name="email"
          onChange={(e) => {
            const nameAndValue = [e.target.name, e.target.value];
            dispatch(signUpInput(nameAndValue));
          }}
          value={inputData}
          placeholder="メールアドレス"
        />
        <input
          name="username"
          onChange={(e) => {
            const nameAndValue = [e.target.name, e.target.value];
            dispatch(signUpInput(nameAndValue));
          }}
          value={inputData}
          placeholder="名前"
        />
        <input
          name="company_name"
          onChange={(e) => {
            const nameAndValue = [e.target.name, e.target.value];
            dispatch(signUpInput(nameAndValue));
          }}
          value={inputData}
          placeholder="会社名"
        />
        <input
          name="section_name"
          onChange={(e) => {
            const nameAndValue = [e.target.name, e.target.value];
            dispatch(signUpInput(nameAndValue));
          }}
          value={inputData}
          placeholder="部署"
        />
        <input
          name="post_name"
          onChange={(e) => {
            const nameAndValue = [e.target.name, e.target.value];
            dispatch(signUpInput(nameAndValue));
          }}
          value={inputData}
          placeholder="役職"
        />
        <input
          name="password1"
          onChange={(e) => {
            const nameAndValue = [e.target.name, e.target.value];
            dispatch(signUpInput(nameAndValue));
          }}
          value={inputData}
          placeholder="パスワード"
        />
        <input
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
        <button
          onClick={() => {
            dispatch(SignUpPost());
          }}
        >
          signUp
          {/* <Link to=":id/menu">SignIn</Link> */}
        </button>
      </div>
    </>
  );
};

export default Signin;
