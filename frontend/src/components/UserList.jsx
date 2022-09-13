/* eslint-disable no-nested-ternary */
import { useState, useContext } from "react";
import PlanetContext from "@contexts/PlanetContext";
import "@styles/userList.scss";

const UserList = ({
  userListOpen,
  setUserListOpen,
  userList,
  currentPlanet,
}) => {
  const [open, setOpen] = useState(false);
  const [showAll, setShowAll] = useState(true);

  return (
    <div className={userListOpen ? "userInfos" : "userInfos closed"}>
      <header className="userInfoHeader">
        <p>
          {
            userList?.filter((user) => {
              return showAll
                ? user.currentPlanet === currentPlanet.planetName
                : user;
            }).length
          }{" "}
          {showAll
            ? `user${
                userList
                  .filter(
                    (user) => user.currentPlanet === currentPlanet.planetName
                  )
                  .map((user) => user).length > 1
                  ? "s"
                  : ""
              } on ${currentPlanet.planetName}`
            : `user${userList.length > 1 ? "s" : ""} connected`}
        </p>
        <label htmlFor="oneway">
          <input
            id="oneway"
            type="checkbox"
            defaultChecked={showAll}
            title="Switch between all users and current planet users."
            onClick={() => setShowAll(!showAll)}
          />
          Planet filter
        </label>
        <button
          type="button"
          className="closeChat"
          onClick={() => setUserListOpen(false)}
        >
          X
        </button>
      </header>

      <ul className={userListOpen ? "userList" : "userList closed"}>
        {userList
          .filter((user) => {
            return showAll
              ? user.currentPlanet === currentPlanet.planetName
              : user;
          })
          .map((user) => (
            <li className="userLine" key={user.username}>
              <p>
                <span
                  className={
                    user.username === "Tibuntu"
                      ? "colorAdmin"
                      : user.username.includes("Guest")
                      ? "colorGuest"
                      : "colorUser"
                  }
                >
                  {user.username}
                </span>{" "}
                {!showAll && user.currentPlanet}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserList;
