import { useReducer, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import symbols from "@services/gateSymbols";
import axios from "@services/axios";
import "@styles/user/login.scss";
import UserContext from "@contexts/UserContext";
import PlanetBackground from "@components/graphics/planets/PlanetBackground";
import ColorPicker from "react-best-gradient-color-picker";

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
  const [planetSeed, setPlanetSeed] = useState(
    Math.floor(Math.random() * 1000000)
  );
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [skyColor, setSkyColor] = useState(
    "linear-gradient(0deg, rgba(211,242,255,1) 0%, rgba(136,199,255,1) 100%)"
  );
  const [backColor, setBackColor] = useState(
    "linear-gradient(0deg, rgb(255, 235, 199) 0%, rgb(255, 193, 136) 50%)"
  );
  const [frontColor, setFrontColor] = useState(
    "linear-gradient(0deg, rgb(201, 168, 92) 0%, rgba(255, 209, 136, 1) 40%)"
  );
  const [editingColors, setEditingColors] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    return () =>
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
  }, []);

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
        seed: planetSeed,
        frontColor,
        midColor: backColor,
        skyColor,
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
      <PlanetBackground
        currentPlanet={{
          id: 0,
          seed: planetSeed,
          frontColor: frontColor,
          midColor: backColor,
          skyColor: skyColor,
        }}
        windowWidth={windowWidth}
      />
      <h1>SIGN UP</h1>
      <form onSubmit={handleSubmit}>
        {!editingColors && (
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
            <button className="submitButton" type="submit">
              SIGN UP
            </button>
            <button
              className="colorButton"
              type="button"
              onClick={() => setEditingColors("sky")}
            >
              Sky color
            </button>
            <button
              className="colorButton"
              type="button"
              onClick={() => setEditingColors("back")}
            >
              Hills color
            </button>
            <button
              className="colorButton"
              type="button"
              onClick={() => setEditingColors("front")}
            >
              Ground color
            </button>
          </div>
        )}
        {editingColors === "sky" && (
          <>
            <button
              type="button"
              className="pickerClose"
              onClick={() => setEditingColors(false)}
            >
              X
            </button>
            <ColorPicker
              className="picker sky"
              value={skyColor}
              onChange={setSkyColor}
              hideInputs={true}
              hidePresets={true}
            />
          </>
        )}
        {editingColors === "back" && (
          <>
            <button
              type="button"
              className="pickerClose"
              onClick={() => setEditingColors(false)}
            >
              X
            </button>
            <ColorPicker
              className="picker back"
              value={backColor}
              onChange={setBackColor}
              hideInputs={true}
              hidePresets={true}
            />
          </>
        )}
        {editingColors === "front" && (
          <>
            <button
              type="button"
              className="pickerClose"
              onClick={() => setEditingColors(false)}
            >
              X
            </button>
            <ColorPicker
              className="picker front"
              value={frontColor}
              onChange={setFrontColor}
              hideInputs={true}
              hidePresets={true}
            />
          </>
        )}
        {!editingColors && (
          <div className="dhd signup">
            <div className="gateInfo">
              <label htmlFor="planetSeed">
                Choose your seed:
                <input
                  id="planetSeed"
                  type="number"
                  required
                  value={planetSeed}
                  placeholder="Planet name"
                  onChange={(e) => setPlanetSeed(e.target.value)}
                />
              </label>
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
        )}
      </form>
    </div>
  );
};

export default Signup;
