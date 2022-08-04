import symbols from "@services/gateSymbols";
import addressList from "@services/addressList";
import "@styles/addressBook.scss";

const AddressBook = () => {
  return (
    <div className="addressBook">
      <ul className="planetList">
        {addressList.map((address) => (
          <li className="planet">
            <h3>{address.planet}</h3>
            <h4>Address: {address.address.map((symbol) => `${symbol} `)}</h4>
            <h4>Point of Origin: {address.poi}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressBook;
