import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {inputEvent, selectInput} from "../../stores/slice";

const Talklist = () => {
  const inputValue = useSelector(selectInput);
  const dispatch = useDispatch();

  return (
    <>
      {"APIからの繰り返しでリストの表示"}
      <button className="ConnectProfile">
        <Link to="/:id/profile/:id">
          写真を押すと相手ユーザーのプロフィールに飛ぶ
        </Link>
      </button>
      <button className="ConnectRoom">
        <Link to="/:id/room/:id">
          直近トークの表示かつクリックでルーム画面に飛ぶ
        </Link>
      </button>
      <input
        placeholder="検索ワードの入力..."
        onChange={(e) => dispatch(inputEvent(e.target.value))}
        value={inputValue}
      />
      {"APIからの繰り返しでリストの表示"}
      <button className="ClickEventModal">
        会社名から連結しているユーザーの表示機能
      </button>

      <button>
        <Link to="/:id/menu">Top</Link>
      </button>
    </>
  );
};

export default Talklist;
