import { useState, useContext } from "react";
import PlanetContext from "@contexts/PlanetContext";
import "@styles/addressBook.scss";

const AddressBook = ({ addressBookOpen, setAddressBookOpen, addressList }) => {
  const { currentPlanet } = useContext(PlanetContext);
  const [showOneWay, setShowOneWay] = useState(true);
  const [showUnreachable, setShowUnreachable] = useState(false);

  return (
    <div className={addressBookOpen ? "addressBook open" : "addressBook"}>
      <header className="filters">
        <div className="filterContainer">
          <label htmlFor="oneway">
            <input
              id="oneway"
              type="checkbox"
              defaultChecked={showOneWay}
              title="Tip: Those destinations point of origin is also in your current planet's address, you can travel to them, but can not come back."
              onClick={() => setShowOneWay(!showOneWay)}
            />
            Show <span className="oneWayText">one-way</span> addresses
          </label>
          <label htmlFor="unreachable">
            <input
              id="unreachable"
              type="checkbox"
              defaultChecked={showUnreachable}
              title="Tip: Those destinations are not reachable, you can not travel to them because your point of origin is also in those destinations addresses."
              onClick={() => setShowUnreachable(!showUnreachable)}
            />
            Show <span className="unreachableText">unreachable</span> addresses
          </label>
          <button
            type="button"
            className="closeChat"
            onClick={() => setAddressBookOpen(false)}
          >
            X
          </button>
        </div>
        <p>
          Number of addresses:{" "}
          {
            addressList.filter((address) => {
              if (
                address.gateAddress.includes(currentPlanet.poo.letter) &&
                !showUnreachable
              ) {
                return null;
              }
              if (
                currentPlanet.gateAddress.includes(address.pooLetter) &&
                !showOneWay
              ) {
                return null;
              }
              if (
                currentPlanet.gateAddress.includes(address.pooLetter) &&
                showOneWay
              ) {
                return address;
              }
              if (
                address.gateAddress.includes(currentPlanet.poo.letter) &&
                showUnreachable
              ) {
                return address;
              }
              return address;
            }).length
          }
        </p>
      </header>
      <ul className="planetList">
        {addressList
          .sort((a, b) =>
            a.planetName.toLowerCase().localeCompare(b.planetName.toLowerCase())
          )
          .map((address) => {
            if (
              address.gateAddress.includes(currentPlanet.poo.letter) &&
              !showUnreachable
            ) {
              return null;
            }
            if (
              currentPlanet.gateAddress.includes(address.pooLetter) &&
              !showOneWay
            ) {
              return null;
            }
            if (
              currentPlanet.gateAddress.includes(address.pooLetter) &&
              showOneWay
            ) {
              return (
                <li className="planet oneway" key={address.id}>
                  <h3>
                    {address.planetName}{" "}
                    {currentPlanet.planetName === address.planetName
                      ? "(current location)"
                      : ""}
                  </h3>
                  <h4>
                    Address:{" "}
                    <span className="glyphs">{address.gateAddress}</span>
                  </h4>
                  {currentPlanet.id === address.id && (
                    <h4>
                      Point of Origin:{" "}
                      <span className="glyphs">{address.pooLetter}</span>
                    </h4>
                  )}
                </li>
              );
            }
            if (
              address.gateAddress.includes(currentPlanet.poo.letter) &&
              showUnreachable
            ) {
              return (
                <li className="planet unreachable" key={address.id}>
                  <h3>
                    {address.planetName}{" "}
                    {currentPlanet.planetName === address.planetName
                      ? "(current location)"
                      : ""}
                  </h3>
                  <h4>
                    Address:{" "}
                    <span className="glyphs">{address.gateAddress}</span>
                  </h4>
                  {currentPlanet.id === address.id && (
                    <h4>
                      Point of Origin:{" "}
                      <span className="glyphs">{address.pooLetter}</span>
                    </h4>
                  )}
                </li>
              );
            }
            return (
              <li className="planet" key={address.id}>
                <h3>
                  {address.planetName}{" "}
                  {currentPlanet.planetName === address.planetName
                    ? "(current location)"
                    : ""}
                </h3>
                <h4>
                  Address: <span className="glyphs">{address.gateAddress}</span>
                </h4>
                {currentPlanet.id === address.id && (
                  <h4>
                    Point of Origin:{" "}
                    <span className="glyphs">{address.pooLetter}</span>
                  </h4>
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default AddressBook;
