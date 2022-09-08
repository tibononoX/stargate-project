/* eslint-disable no-nested-ternary */
import { useState, useContext } from "react";
import PlanetContext from "@contexts/PlanetContext";
import "@styles/userList.scss";

const UserList = ({ userList, currentPlanet }) => {
  const [open, setOpen] = useState(false);
  const [showAll, setShowAll] = useState(true);

  return (
    <div className="userInfos">
      <button className="toggleList" onClick={() => setOpen(!open)}>
        {open ? "Close user list" : "Open user list"}
      </button>
      <ul className={open ? "userList" : "userList closed"}>
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
        {userList
          .filter((user) => {
            return showAll
              ? user.currentPlanet === currentPlanet.planetName
              : user;
          })
          .map((user) => (
            <li key={user.username}>
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
                {user.hosting === user.currentPlanet ? "Hosting " : ""}
                {user.currentPlanet}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserList;
