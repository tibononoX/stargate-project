import "@styles/addressBook.scss";

const AddressBook = ({ addressList }) => {
  return (
    <div className="addressBook">
      <ul className="planetList">
        {addressList.map((address) => (
          <li className="planet">
            <h3>{address.planet}</h3>
            <h4>
              Address: <span className="glyphs">{address.gateAddress}</span>
            </h4>
            <h4>
              Point of Origin: <span className="glyphs">{address.poo}</span>
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressBook;
