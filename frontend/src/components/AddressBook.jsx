import { useState, useContext } from "react";
import PlanetContext from "@contexts/PlanetContext";
import "@styles/addressBook.scss";

const AddressBook = ({ addressList }) => {
  const { currentPlanet } = useContext(PlanetContext);
  const [showOneWay, setShowOneWay] = useState(true);
  const [showUnreachable, setShowUnreachable] = useState(false);

  return (
    <div className="addressBook">
      <ul className="planetList">
        <div className="filters">
          <label htmlFor="oneway">
            <input
              id="oneway"
              type="checkbox"
              defaultChecked={showOneWay}
              title="Tip: Those destinations point of origin is also in your current planet's address, you can travel to them, but can not come back."
              onClick={() => setShowOneWay(!showOneWay)}
            />
            Show one-way addresses
          </label>
          <label htmlFor="unreachable">
            <input
              id="unreachable"
              type="checkbox"
              defaultChecked={showUnreachable}
              title="Tip: Those destinations are not reachable, you can not travel to them because your point of origin is also in those destinations addresses."
              onClick={() => setShowUnreachable(!showUnreachable)}
            />
            Show unreachable addresses
          </label>
        </div>
        <p>Number of addresses: {addressList.length}</p>
        {addressList.map((address) => {
          if (
            address.gateAddress.includes(currentPlanet.pooLetter) &&
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
                <h3>{address.planetName}</h3>
                <h4>
                  Address: <span className="glyphs">{address.gateAddress}</span>
                </h4>
                <h4>
                  Point of Origin:{" "}
                  <span className="glyphs">{address.pooLetter}</span>
                </h4>
              </li>
            );
          }
          if (
            address.gateAddress.includes(currentPlanet.pooLetter) &&
            showUnreachable
          ) {
            return (
              <li className="planet unreachable" key={address.id}>
                <h3>{address.planetName}</h3>
                <h4>
                  Address: <span className="glyphs">{address.gateAddress}</span>
                </h4>
                <h4>
                  Point of Origin:{" "}
                  <span className="glyphs">{address.pooLetter}</span>
                </h4>
              </li>
            );
          }
          return (
            <li className="planet" key={address.id}>
              <h3>{address.planetName}</h3>
              <h4>
                Address: <span className="glyphs">{address.gateAddress}</span>
              </h4>
              <h4>
                Point of Origin:{" "}
                <span className="glyphs">{address.pooLetter}</span>
              </h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AddressBook;
