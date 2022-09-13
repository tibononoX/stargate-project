/* eslint-disable no-nested-ternary */
import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import socketIOClient from "socket.io-client  ";
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
  const [userData, setUserData] = useState(null);

  const [addressList, setAddressList] = useState();
  const [socket, setSocket] = useState(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [audioVolume, setAudioVolume] = useState(
    localStorage.getItem("volume")
      ? parseFloat(localStorage.getItem("volume"))
      : windowWidth >= 650
      ? 0.5
      : 0.8
  );

  const [notifAudio, setNotifAudio] = useState(
    localStorage.getItem("chatAudio")
      ? localStorage.getItem("chatAudio") === "true"
      : true
  );

  const checkConnection = async () => {
    try {
      if (socket) {
        socket.disconnect();
      }
      const data = await axios
        .get("users/refreshToken", {
          withCredentials: true,
        })
        .then((result) => result.data);
      if (data) {
        setUserData(data);
      }
      const socketServer = socketIOClient(`${import.meta.env.VITE_BACKEND}`);
      return setSocket(socketServer);
    } catch (err) {
      return console.warn(err);
    }
  };

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
    if (socket) {
      socket.on("fetchAddressList", () => {
        fetchAddressList();
      });
    }
  }, [socket]);

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
    <div className="App">
      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <UserContext.Provider
        value={{
          audioVolume,
          setAudioVolume,
          notifAudio,
          setNotifAudio,
          guestName,
          userData,
          setUserData,
          socket,
        }}
      >
        <Router>
          <Routes>
            {socket && (
              <>
                <Route
                  path="*"
                  element={
                    <StargatePage
                      addressList={addressList}
                      windowWidth={windowWidth}
                    />
                  }
                />
                <Route
                  path="/"
                  element={
                    <StargatePage
                      addressList={addressList}
                      windowWidth={windowWidth}
                    />
                  }
                />
              </>
            )}
            <Route
              path="/signup"
              element={<Signup fetchAddressList={fetchAddressList} />}
            />
            <Route
              path="/login"
              element={<Login socket={socket} setSocket={setSocket} />}
            />
            <Route
              path="/logout"
              element={<Logout socket={socket} setSocket={setSocket} />}
            />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
