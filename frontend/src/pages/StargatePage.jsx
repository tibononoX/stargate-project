import { useContext, useState } from "react";
import AddressBook from "@components/AddressBook";
import { Stargate } from "@components/stargate/Stargate";
import PlanetContext from "@contexts/PlanetContext";
import UserList from "@components/UserList";

const StargatePage = ({ userList, addressList, windowWidth }) => {
  const { currentPlanet } = useContext(PlanetContext);
  const [addressBookOpen, setAddressBookOpen] = useState(false);

  return (
    <div className="page">
      {currentPlanet?.id !== 1 && <div className="background" />}
      <Stargate addressList={addressList} windowWidth={windowWidth} />
      {currentPlanet?.id !== 1 && <div className="frontground" />}
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
      <UserList userList={userList} currentPlanet={currentPlanet} />
    </div>
  );
};

export default StargatePage;
