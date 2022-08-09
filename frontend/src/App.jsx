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
      <div className="App">
        <Stargate addressList={addressList} />

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
