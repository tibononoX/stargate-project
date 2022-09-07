import { useContext, useState, useEffect } from "react";
import AddressBook from "@components/AddressBook";
import { Stargate } from "@components/stargate/Stargate";
import PlanetContext from "@contexts/PlanetContext";
import UserList from "@components/UserList";
import UserContext from "@contexts/UserContext";

const StargatePage = ({ userList, addressList, windowWidth }) => {
  const { audioVolume, setAudioVolume } = useContext(UserContext);
  const { currentPlanet } = useContext(PlanetContext);
  const [addressBookOpen, setAddressBookOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("volume", audioVolume);
  }, [audioVolume]);

  if (currentPlanet) {
    return (
      <div className="page">
        {windowWidth >= 650 && (
          <div className="volumeControl">
            <label className="volumeRange">
              {Math.floor(audioVolume * 100)}%
              <input
                type="range"
                title="Volume slider"
                min={0}
                max={1}
                step={0.02}
                value={audioVolume}
                onChange={(e) => {
                  setAudioVolume(e.target.valueAsNumber);
                }}
              />
            </label>
          </div>
        )}

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
  }
};

export default StargatePage;
