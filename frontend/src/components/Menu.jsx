/* eslint-disable no-nested-ternary */
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "@styles/user/menu.scss";
import UserContext from "@contexts/UserContext";

const Menu = ({
  dhdOpen,
  chatOpen,
  setChatOpen,
  userListOpen,
  setUserListOpen,
  addressBookOpen,
  setAddressBookOpen,
  windowWidth,
}) => {
  const { userData, guestName } = useContext(UserContext);
  return (
    <div className="menuContainer">
      <ul className="navMenu left">
        <li
          className={
            dhdOpen
              ? addressBookOpen
                ? "navButton active dhdOpened"
                : "navButton dhdOpened"
              : addressBookOpen
              ? "navButton active"
              : "navButton"
          }
        >
          <button
            type="button"
            className="navButtonLink"
            to="/signup"
            onClick={() => setAddressBookOpen(!addressBookOpen)}
          >
            <img
              src={`${import.meta.env.VITE_FRONTEND_SRC_URL}/assets/icons/${
                addressBookOpen ? "active/addressbook.png" : "addressbook.png"
              }`}
              className="menuIcon"
              alt=""
            />
          </button>
        </li>
      </ul>
      <ul className="navMenu right">
        <li className={userListOpen ? "navButton active" : "navButton"}>
          <button
            type="button"
            className="navButtonLink"
            onClick={() => {
              if (windowWidth < 650) {
                setChatOpen(false);
              }
              setUserListOpen(!userListOpen);
            }}
          >
            <img
              src={`${import.meta.env.VITE_FRONTEND_SRC_URL}/assets/icons/${
                userListOpen ? "active/users.png" : "users.png"
              }`}
              className="menuIcon"
              alt=""
            />
          </button>
        </li>
        <li className={chatOpen ? "navButton active" : "navButton"}>
          <button
            type="button"
            className="navButtonLink"
            onClick={() => {
              if (windowWidth < 650) {
                setUserListOpen(false);
              }
              setChatOpen(!chatOpen);
            }}
          >
            <img
              src={`${import.meta.env.VITE_FRONTEND_SRC_URL}/assets/icons/${
                chatOpen ? "active/chat.png" : "chat.png"
              }`}
              className="menuIcon"
              alt=""
            />
          </button>
        </li>
        {!userData ? (
          <li className="navButton">
            <NavLink className="navButtonLink" to="/login">
              <img
                src={`${
                  import.meta.env.VITE_FRONTEND_SRC_URL
                }/assets/icons/login.png`}
                className="menuIcon"
                alt=""
              />
            </NavLink>
          </li>
        ) : (
          <li className="navButton">
            <NavLink className="navButtonLink" to="/logout">
              <img
                src={`${
                  import.meta.env.VITE_FRONTEND_SRC_URL
                }/assets/icons/logout.png`}
                className="menuIcon"
                alt=""
              />
            </NavLink>
          </li>
        )}
        {!userData && (
          <li className="navButton">
            <NavLink className="navButtonLink" to="/signup">
              <img
                src={`${
                  import.meta.env.VITE_FRONTEND_SRC_URL
                }/assets/icons/signup.png`}
                className="menuIcon"
                alt=""
              />
            </NavLink>
          </li>
        )}
      </ul>
      <p className="connectedInfo">
        Connected as {userData ? userData.username : guestName}
      </p>
    </div>
  );
};

export default Menu;
