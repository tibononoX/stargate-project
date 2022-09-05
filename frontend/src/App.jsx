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

function App() {
  const [userData, setUserData] = useState(null);
  const [currentPlanet, setCurrentPlanet] = useState({
    initial: true,
    id: 1,
    gateAddress: "bZEjKc",
    dialMode: "EARTH",
    pooLetter: "A",
    planetName: "Earth",
  });
  const [userRoom, setUserRoom] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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

  const leavePlanet = () => {
    socket.emit("leave planet", userRoom);
    setUserRoom("");
  };
  console.log(userRoom);
  const joinPlanet = (planetName) => {
    setUserRoom(planetName);
    socket.emit("join planet", planetName);
  };

  const connect = () => {
    socket.emit("joinServer", userData ? userData.username : "Guest");
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
          setCurrentPlanet({
            initial: true,
            id: 1,
            gateAddress: "bZEjKc",
            dialMode: "EARTH",
            pooLetter: "A",
            planetName: "Earth",
          });
          return connect();
        }
        setCurrentPlanet(userPlanet[0]);
        return connect();
      }
      setCurrentPlanet({
        initial: true,
        id: 1,
        gateAddress: "bZEjKc",
        dialMode: "EARTH",
        pooLetter: "A",
        planetName: "Earth",
      });
      return connect();
    } catch (err) {
      return console.warn(err);
    }
  };

  useEffect(() => {
    if (!socket) {
      const socketServer = socketIOClient(`${import.meta.env.VITE_BACKEND}`);
      setSocket(socketServer);
    }
  }, [socket]);

  useEffect(() => {
    initialPlanet();
  }, [userData]);

  useEffect(() => {
    if (socket) {
      leavePlanet();
    }
    if (socket && !currentPlanet.initial) {
      joinPlanet(currentPlanet.planetName);
    }
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
      <UserContext.Provider value={{ userData, setUserData, socket }}>
        <PlanetContext.Provider value={{ currentPlanet, setCurrentPlanet }}>
          <Router>
            <Menu />
            <Routes>
              <Route
                path="/"
                element={
                  <StargatePage
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
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </Router>
        </PlanetContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
