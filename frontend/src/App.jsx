import { useState } from "react";
import AddressBook from "@components/AddressBook";
import Stargate from "@components/stargate/Stargate";
import "@styles/app.scss";

function App() {
  const [addressBookOpen, setAddressBookOpen] = useState(false);

  return (
    <div className="App">
      <Stargate />
      <button
        type="button"
        className="openAddressBook"
        onClick={() => setAddressBookOpen(!addressBookOpen)}
      >
        Address Book
      </button>
      {addressBookOpen && <AddressBook />}
    </div>
  );
}

export default App;
