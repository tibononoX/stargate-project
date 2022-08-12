import { useState, useEffect } from "react";
import PlanetContext from "@contexts/PlanetContext";
import axios from "@services/axios";
import AddressBook from "@components/AddressBook";
import { Stargate } from "@components/stargate/Stargate";
import "@styles/app.scss";

function App() {
  const [currentPlanet, setCurrentPlanet] = useState({
    id: 1,
    gateAddress: "bZEjKc",
    dialMode: "EARTH",
    poo: "A",
    poo_id: 1,
    planetName: "Earth",
  });
  const [addressList, setAddressList] = useState();
  const [addressBookOpen, setAddressBookOpen] = useState(false);

  const fetchAddressList = async () => {
    const newAddressList = await axios
      .get("/planets")
      .then((result) => result.data);
    if (!newAddressList) {
      return console.warn("Error retrieving address list");
    }
    return setAddressList(newAddressList);
  };

  useEffect(() => {
    fetchAddressList();
  }, []);

  return (
    <PlanetContext.Provider value={{ currentPlanet, setCurrentPlanet }}>
      <div className={currentPlanet.id !== 1 ? "App sky" : "App"}>
        {currentPlanet.id !== 1 && (
          // <>
          //   <img
          //     className="forestVeryFar left"
          //     src="src/assets/graphics/forest.svg"
          //   />
          //   <img
          //     className="forestVeryFar left"
          //     src="src/assets/graphics/forest.svg"
          //   />
          //   <img
          //     className="forestVeryFar mid"
          //     src="src/assets/graphics/forest.svg"
          //   />
          //   <img
          //     className="forestFar mid"
          //     src="src/assets/graphics/forest.svg"
          //   />
          //   <img
          //     className="forestFar right"
          //     src="src/assets/graphics/forest.svg"
          //   />
          //   <img
          //     className="forestFar right"
          //     src="src/assets/graphics/forest.svg"
          //   />
          //   <img className="forest left" src="src/assets/graphics/forest.svg" />
          //   <img className="forest mid" src="src/assets/graphics/forest.svg" />
          //   <img
          //     className="forest right"
          //     src="src/assets/graphics/forest.svg"
          //   />
          //   </>
          <div className="background" />
        )}
        <Stargate addressList={addressList} />
        {currentPlanet.id !== 1 && <div className="frontground" />}

        <button
          type="button"
          className="openAddressBook"
          onClick={() => setAddressBookOpen(!addressBookOpen)}
        >
          Address Book
        </button>
        {addressBookOpen && addressList && (
          <AddressBook addressList={addressList} />
        )}
      </div>
    </PlanetContext.Provider>
  );
}

export default App;
