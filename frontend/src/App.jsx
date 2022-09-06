/* eslint-disable no-nested-ternary */
import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import socketIOClient from "socket.io-client  ";
import PlanetContext from "@contexts/PlanetContext";
import UserContext from "@contexts/UserContext";
import axios from "@services/axios";
import Menu from "@components/Menu";
import StargatePage from "@pages/StargatePage";
import Login from "@pages/Login";
import Logout from "@pages/Logout";
import "@styles/app.scss";
import Signup from "@pages/Signup";

const guestName = `Guest${Math.floor(
  Math.random() * (9999 - 1000 + 1) + 1000
)}`;

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [userData, setUserData] = useState(null);
  const [audioVolume, setAudioVolume] = useState(
    localStorage.getItem("volume")
      ? localStorage.getItem("volume")
      : windowWidth >= 650
      ? 0.5
      : 0.8
  );
  const [currentPlanet, setCurrentPlanet] = useState({
    initial: true,
    id: 1,
    gateAddress: "bZEjKc",
    dialMode: "EARTH",
    pooLetter: "A",
    planetName: "Earth",
  });
  const [userRoom, setUserRoom] = useState("");
  const [userList, setUserList] = useState([]);
  const [addressList, setAddressList] = useState();
  const [socket, setSocket] = useState(null);

  const checkConnection = async () => {
    try {
      const data = await axios
        .get("users/refreshToken", {
          withCredentials: true,
        })
        .then((result) => result.data);
      return setUserData(data);
    } catch (err) {
      return console.warn(err);
    }
  };

  const fetchUsers = async () => {
    await socket.emit("getUserList", (userlist) => setUserList(userlist));
  };

  const leavePlanet = () => {
    setUserRoom("");
    socket.emit("leave planet", userRoom, (socketData) => {
      setUserList([]);
      setUserList(socketData);
    });
  };

  const joinPlanet = (planetName) => {
    setUserRoom(planetName);
    socket.emit("join planet", planetName);
  };

  const connect = (planetName) => {
    socket.emit("joinServer", {
      username: userData ? userData.username : guestName,
      currentPlanet: planetName,
    });

    socket.emit("fetchUsers", (users) => {
      setUserList(users);
    });
  };

  const initialPlanet = async () => {
    try {
      if (userData) {
        const userPlanet = await addressList
          .filter((planet) => planet.id === userData.current_location_id)
          .map((planet) => planet);
        if (!userPlanet) {
          console.warn(
            "Error updating current planet, setting default to Earth"
          );
          connect("Earth");
          joinPlanet("Earth");
          return setCurrentPlanet({
            initial: true,
            id: 1,
            gateAddress: "bZEjKc",
            dialMode: "EARTH",
            pooLetter: "A",
            planetName: "Earth",
          });
        }
        connect(userPlanet[0].planetName);
        joinPlanet(userPlanet[0].planetName);
        return setCurrentPlanet(userPlanet[0]);
      }
      connect("Earth");
      joinPlanet("Earth");
      return setCurrentPlanet({
        initial: true,
        id: 1,
        gateAddress: "bZEjKc",
        dialMode: "EARTH",
        pooLetter: "A",
        planetName: "Earth",
      });
    } catch (err) {
      return console.warn(err);
    }
  };

  useEffect(() => {
    if (!socket) {
      const socketServer = socketIOClient(`${import.meta.env.VITE_BACKEND}`);
      setSocket(socketServer);
    }

    if (socket) {
      socket.on("user connected", (clients) => setUserList(clients));
      socket.on("disconnect", () => {
        leavePlanet();
      });
      socket.on("user join", (client, clients) => {
        setUserList(clients);
        console.warn(`${client.user} joined ${client.planet}`);
      });
      socket.on("user left", (client, clients) => {
        setUserList(clients);
        console.warn(`${client.user} left ${client.planet}`);
      });
    }
  }, [socket]);

  useEffect(() => {
    initialPlanet();
    fetchUsers();
  }, [userData]);

  useEffect(() => {
    if (socket && !currentPlanet.initial) {
      joinPlanet(currentPlanet.planetName);
    }
    fetchUsers();
  }, [currentPlanet]);

  const fetchAddressList = async () => {
    try {
      const newAddressList = await axios
        .get("/planets")
        .then((result) => result.data);
      if (!newAddressList) {
        return console.warn("Error retrieving address list");
      }
      return setAddressList(newAddressList);
    } catch (err) {
      return console.warn(err);
    }
  };

  useEffect(() => {
    fetchAddressList();
    checkConnection();
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    return () =>
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
  }, []);

  return (
    <div className={currentPlanet?.id !== 1 ? "App sky" : "App"}>
      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <UserContext.Provider
        value={{
          audioVolume,
          setAudioVolume,
          guestName,
          userData,
          setUserData,
          socket,
        }}
      >
        <PlanetContext.Provider value={{ currentPlanet, setCurrentPlanet }}>
          <Router>
            <Menu />
            <Routes>
              <Route
                path="*"
                element={
                  <StargatePage
                    userList={userList}
                    currentPlanet={currentPlanet}
                    addressList={addressList}
                    windowWidth={windowWidth}
                  />
                }
              />
              <Route
                path="/"
                element={
                  <StargatePage
                    userList={userList}
                    currentPlanet={currentPlanet}
                    addressList={addressList}
                    windowWidth={windowWidth}
                  />
                }
              />
              <Route
                path="/signup"
                element={
                  <Signup
                    initialPlanet={initialPlanet}
                    fetchAddressList={fetchAddressList}
                  />
                }
              />
              <Route
                path="/login"
                element={<Login initialPlanet={initialPlanet} />}
              />
              <Route
                path="/logout"
                element={<Logout setSocket={setSocket} />}
              />
            </Routes>
          </Router>
        </PlanetContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
