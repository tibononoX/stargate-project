import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "@styles/user/menu.scss";
import UserContext from "@contexts/UserContext";

const Menu = () => {
  const { userData } = useContext(UserContext);
  return (
    <ul className="navMenu">
      {!userData && (
        <li>
          <NavLink to="/signup">Sign up</NavLink>
        </li>
      )}
      {!userData ? (
        <li>
          <NavLink to="/login">Log in</NavLink>
        </li>
      ) : (
        <li>
          <NavLink to="/logout">Log out</NavLink>
        </li>
      )}
    </ul>
  );
};

export default Menu;
