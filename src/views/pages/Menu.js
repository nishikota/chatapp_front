import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <>
      <p>Link to Community</p>
      <button>
        <Link to="/">signout</Link>
      </button>
      <button>
        <Link to="/:id/myprofile">My Profile</Link>
      </button>
      <button>
        <Link to="/:id/talklist">Let's Talk</Link>
      </button>
    </>
  );
};

export default Menu;
