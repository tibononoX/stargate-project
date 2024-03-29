/* eslint-disable no-nested-ternary */
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "@styles/user/menu.scss";
import UserContext from "@contexts/UserContext";
import PlanetContext from "@contexts/PlanetContext";
import AddressBook from "./AddressBook";
import UserList from "./UserList";
import Chat from "./Chat";

const Menu = ({
  dhdOpen,
  setDhdOpen,
  chatOpen,
  setChatOpen,
  userListOpen,
  setUserListOpen,
  addressBookOpen,
  setAddressBookOpen,
  selectedAddress,
  setSelectedAddress,
  windowWidth,
  addressList,
  userList,
}) => {
  const { userData, guestName } = useContext(UserContext);
  const { currentPlanet } = useContext(PlanetContext);
  const [chatNotif, setChatNotif] = useState(0);

  return (
    <div className={dhdOpen ? "menuContainer dhdOpened" : "menuContainer"}>
      <ul className="navMenu left">
        <li className={addressBookOpen ? "navButton active" : "navButton"}>
          <button
            type="button"
            className="navButtonLink"
            to="/signup"
            onClick={() => {
              if (windowWidth < 650) {
                setUserListOpen(false);
                setChatOpen(false);
              }
              setAddressBookOpen(!addressBookOpen);
            }}
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
      <div className="menuMid">
        {addressList && (
          <AddressBook
            addressBookOpen={addressBookOpen}
            setAddressBookOpen={setAddressBookOpen}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            addressList={addressList}
            setDhdOpen={setDhdOpen}
          />
        )}
        {currentPlanet.id && (
          <Chat
            chatOpen={chatOpen}
            setChatOpen={setChatOpen}
            setChatNotif={setChatNotif}
          />
        )}
        <UserList
          userListOpen={userListOpen}
          setUserListOpen={setUserListOpen}
          userList={userList}
          currentPlanet={currentPlanet}
        />
      </div>
      <ul className="navMenu right">
        <li className={userListOpen ? "navButton active" : "navButton"}>
          <button
            type="button"
            className="navButtonLink"
            onClick={() => {
              if (windowWidth < 650) {
                setChatOpen(false);
                setAddressBookOpen(false);
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
            <p className="menuCounter">
              {userList.length > 1 ? userList.length : ""}
            </p>
          </button>
        </li>
        <li className={chatOpen ? "navButton active" : "navButton"}>
          <button
            type="button"
            className="navButtonLink"
            onClick={() => {
              if (windowWidth < 650) {
                setUserListOpen(false);
                setAddressBookOpen(false);
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
            <p className="menuCounter">{chatNotif != 0 ? chatNotif : ""}</p>
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
