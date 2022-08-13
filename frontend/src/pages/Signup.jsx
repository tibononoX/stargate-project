import { useReducer, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import symbols from "@services/gateSymbols";
import axios from "@services/axios";
import "@styles/user/login.scss";
import UserContext from "@contexts/UserContext";

const formInitialState = {
  username: "",
  email: "",
  password: "",
};

const registerForm = (state, action) => {
  switch (action.type) {
    case "UPDATE_USERNAME":
      return { ...state, username: action.payload };
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "UPDATE_PASSWORD":
      return { ...state, password: action.payload };
    case "RESET_FORM":
      return { ...formInitialState };
    default:
      return state;
  }
};

const Signup = ({ initialPlanet, fetchAddressList }) => {
  const { setUserData } = useContext(UserContext);
  const [formData, dispatch] = useReducer(registerForm, formInitialState);
  const [gateAddress, setGateAddress] = useState("");
  const [poo, setPoo] = useState(null);
  const [dialMode, setDialMode] = useState("DHD");
  const [planetName, setPlanetName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newUserData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };

      const newCreatedUserData = await axios
        .post("users/", newUserData, {
          withCredentials: true,
        })
        .then((result) => result.data);
      if (!newCreatedUserData) {
        return console.warn("An error occured: register");
      }

      const planetData = {
        planetName,
        gateAddress,
        poo: poo.id,
        dialMode,
        userId: newCreatedUserData.newCreatedUser.id,
      };

      const newPlanetData = await axios
        .post("planets/", planetData, {
          withCredentials: true,
        })
        .then((result) => result.data);
      if (!newPlanetData) {
        return console.warn("An error occured: planet");
      }

      await fetchAddressList();

      const loginData = {
        email: formData.email,
        password: formData.password,
      };

      const login = await axios
        .post("users/login", loginData, {
          withCredentials: true,
        })
        .then((result) => result.data);
      if (!login) {
        return console.warn("An error occured");
      }
      setUserData(login);
      initialPlanet();
      return navigate("/");
    } catch (err) {
      return console.warn(err);
    }
  };

  const handleClick = (dhdSymbol) => {
    if (
      gateAddress.length === 7 ||
      gateAddress.includes(dhdSymbol.letter) ||
      poo !== null
    ) {
      return null;
    }
    if (gateAddress.length === 6) {
      return setPoo({ id: dhdSymbol.id, letter: dhdSymbol.letter });
    }
    return setGateAddress(`${gateAddress}${dhdSymbol.letter}`);
  };

  const handleDhdClassName = (letter) => {
    if (gateAddress.includes(letter) || poo?.letter === letter) {
      return "symbButton active";
    }
    return "symbButton";
  };

  return (
    <div className="page">
      <h1>SIGN UP</h1>
      <form onSubmit={handleSubmit}>
        <div className="userInfo">
          <label htmlFor="username">
            Username:
            <input
              id="username"
              type="text"
              placeholder="Username"
              required
              value={formData.username}
              onChange={(e) =>
                dispatch({ type: "UPDATE_USERNAME", payload: e.target.value })
              }
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) =>
                dispatch({ type: "UPDATE_EMAIL", payload: e.target.value })
              }
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={(e) =>
                dispatch({ type: "UPDATE_PASSWORD", payload: e.target.value })
              }
            />
          </label>
          <button type="submit">SIGN UP</button>
        </div>

        <div className="dhd signup">
          <label htmlFor="planetName">
            Name your planet:
            <input
              id="planetName"
              type="text"
              value={planetName}
              placeholder="Planet name"
              onChange={(e) => setPlanetName(e.target.value)}
            />
          </label>
          <label htmlFor="dialMode">
            Dial Mode:
            <select
              id="dialMode"
              value={dialMode}
              onChange={(e) => setDialMode(e.target.value)}
            >
              <option value="DHD" key="DHD">
                DHD
              </option>
              <option value="EARTH" key="EARTH">
                Earth
              </option>
            </select>
          </label>
          <p>
            Gate address: <span className="inputAddress">{gateAddress}</span>
          </p>
          <p>
            Point of origin: <span className="inputAddress">{poo?.letter}</span>
          </p>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setGateAddress("");
              setPoo(null);
            }}
          >
            reset
          </button>
          <ul className="buttonList">
            {symbols.map((symbol) => {
              return (
                <li className="buttonItem" key={symbol.id}>
                  <button
                    className={handleDhdClassName(symbol.letter)}
                    title={`${symbol.letter} - ${symbol.label}`}
                    type="button"
                    onClick={() => handleClick(symbol)}
                  >
                    {symbol.letter}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Signup;
