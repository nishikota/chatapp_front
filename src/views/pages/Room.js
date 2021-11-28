import {Link} from "react-router-dom";

const Room = () => {
  return (
    <div>
      <button className="Back">
        <Link to="/talklist">Back</Link>
      </button>
      <div className="Message">{"繰り返し処理でTalkを呼び出す"}</div>
      <div className="MyTalkArea">
        <input className="Content" />
        <button className="Send">DB登録ボタン</button>
        <button className="ImgSelect">ImgSelectModal</button>
      </div>
    </div>
  );
};

export default Room;
