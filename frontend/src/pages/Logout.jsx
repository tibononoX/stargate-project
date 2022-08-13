import axios from "@services/axios";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "@contexts/UserContext";

const Logout = () => {
  const { userData, setUserData } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      if (!userData) {
        return console.warn("You are not logged in");
      }
      await axios
        .get("users/logout", {
          withCredentials: true,
        })
        .then((response) => response.data);
      // eslint-disable-next-line no-restricted-syntax
      setUserData();
      navigate("/");
    } catch (err) {
      return console.warn(err);
    }
    return null;
  };

  useEffect(() => {
    logout();
  }, []);

  return (
    <section className="loginForm">
      <h1>LOGIN OUT ...</h1>
    </section>
  );
};

export default Logout;
