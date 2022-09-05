/* eslint-disable no-nested-ternary */
import { useState, useContext } from "react";
import PlanetContext from "@contexts/PlanetContext";
import "@styles/userList.scss";

const UserList = ({ userList, currentPlanet }) => {
  const [open, setOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

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
                ? user
                : user.currentPlanet === currentPlanet.planetName;
            }).length
          }{" "}
          {showAll ? "currently connected" : "on current planet"}
        </p>
        <label htmlFor="oneway">
          <input
            id="oneway"
            type="checkbox"
            defaultChecked={showAll}
            title="Switch between all users and current planet users."
            onClick={() => setShowAll(!showAll)}
          />
          Everyone
        </label>
        {userList
          .filter((user) => {
            return showAll
              ? user
              : user.currentPlanet === currentPlanet.planetName;
          })
          .map((user) => (
            <li>
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
                {user.currentPlanet}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserList;
