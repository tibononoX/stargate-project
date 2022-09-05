import { useState, useContext } from "react";
import PlanetContext from "@contexts/PlanetContext";
import "@styles/userList.scss";

const UserList = ({ userList, currentPlanet }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="userInfos">
      <ul className="userList">
        <p>
          {
            userList.filter((user) => {
              return showAll
                ? user
                : user.currentPlanet === currentPlanet.planetName;
            }).length
          }{" "}
          currently connected
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
            <li className={user.username === "Tibuntu" ? "colorAdmin" : ""}>
              {user.username} {user.currentPlanet}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserList;
