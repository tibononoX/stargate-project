import { useState, useEffect } from "react";
import axios from "@services/axios";
import AddressBook from "@components/AddressBook";
import Stargate from "@components/stargate/Stargate";
import "@styles/app.scss";

function App() {
  const [addressList, setAddressList] = useState();
  const [addressBookOpen, setAddressBookOpen] = useState(false);

  const fetchAddressList = async () => {
    const addressList = await axios
      .get("/planets")
      .then((result) => result.data);
    if (!addressList) {
      return console.warn("Error retrieving address list");
    }
    return setAddressList(addressList);
  };

  useEffect(() => {
    fetchAddressList();
  }, []);

  return (
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
  );
}

export default App;
