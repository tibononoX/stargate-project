import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [addressList, setAddressList] = useState();
  const [currentPlanet, setCurrentPlanet] = useState({
    id: 1,
    gateAddress: "bZEjKc",
    dialMode: "EARTH",
    poo: "A",
    poo_id: 1,
    planetName: "Earth",
  });

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
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    return () =>
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
  }, []);

  return (
    <div className={currentPlanet.id !== 1 ? "App sky" : "App"}>
      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <UserContext.Provider value={{ userData, setUserData }}>
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
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </Router>
        </PlanetContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
