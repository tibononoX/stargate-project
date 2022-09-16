import { useReducer, useContext } from "react";
import { useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";
import axios from "@services/axios";
import "@styles/user/login.scss";
import UserContext from "@contexts/UserContext";

const formInitialState = {
  email: "",
  password: "",
};

const loginForm = (state, action) => {
  switch (action.type) {
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

const Login = ({ socket, setSocket }) => {
  const { setUserData } = useContext(UserContext);
  const [formData, dispatch] = useReducer(loginForm, formInitialState);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      socket.disconnect();
      const userData = {
        email: formData.email,
        password: formData.password,
      };

      const login = await axios
        .post("users/login", userData, {
          withCredentials: true,
        })
        .then((result) => result.data);
      if (!login) {
        return console.warn("An error occured");
      }
      if (login) {
        setUserData(login);
      }
      const socketServer = socketIOClient(`${import.meta.env.VITE_BACKEND}`);
      setSocket(socketServer);
      return navigate("/");
    } catch (err) {
      return console.warn(err);
    }
  };

  return (
    <div className="page">
      <h1>LOGIN</h1>
      <form className="login" onSubmit={handleSubmit}>
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
        <button className="submitButton" type="submit">
          LOG IN
        </button>
      </form>
    </div>
  );
};

export default Login;
