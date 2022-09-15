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
  confirmPassword: "",
};

const registerForm = (state, action) => {
  switch (action.type) {
    case "UPDATE_USERNAME":
      return { ...state, username: action.payload };
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "UPDATE_PASSWORD":
      return { ...state, password: action.payload };
    case "UPDATE_CONFIRMPASSWORD":
      return { ...state, confirmPassword: action.payload };
    case "RESET_FORM":
      return { ...formInitialState };
    default:
      return state;
  }
};

const Signup = ({ fetchAddressList }) => {
  const { setUserData, socket } = useContext(UserContext);
  const [formData, dispatch] = useReducer(registerForm, formInitialState);
  const [gateAddress, setGateAddress] = useState("");
  const [poo, setPoo] = useState(null);
  const [dialMode, setDialMode] = useState("DHD");
  const [planetName, setPlanetName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.confirmPassword !== formData.password) {
        return alert("Password do not match");
      }

      if (gateAddress.length > 6 || !poo) {
        return alert("You must enter a gate address");
      }

      const newUserData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        gateAddress,
        planetName,
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

      socket.emit("newPlanetRegistered");
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
      return navigate("/");
    } catch (err) {
      return alert(err.response.data);
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
              name="username"
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
          <label htmlFor="confirmPassword">
            Confirm password:
            <input
              id="confirmPassword"
              type="password"
              placeholder="Password"
              required
              value={formData.confirmPassword}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_CONFIRMPASSWORD",
                  payload: e.target.value,
                })
              }
            />
          </label>
        </div>

        <div className="dhd signup">
          <div className="gateInfo">
            <label htmlFor="planetName">
              Name your planet:
              <input
                id="planetName"
                type="text"
                required
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
              <span className="inputAddress">
                {gateAddress} | {poo?.letter}
              </span>
            </p>
            <p className="tuto">
              Enter your address of 6 symbols, and a 7th for the origin point
            </p>
          </div>
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
              if (symbol.id === 1 || symbol.id === 40) {
                return null;
              }
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
        <button className="submitButton" type="submit">
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default Signup;
