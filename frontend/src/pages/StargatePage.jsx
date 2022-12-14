import { useContext, useState, useEffect } from "react";
import { Stargate } from "@components/stargate/Stargate";
import PlanetContext from "@contexts/PlanetContext";
import symbols from "@services/gateSymbols";
import UserContext from "@contexts/UserContext";
import Menu from "@components/Menu";

const StargatePage = ({ addressList, windowWidth }) => {
  const { audioVolume, setAudioVolume, guestName, userData, socket } =
    useContext(UserContext);
  const [currentPlanet, setCurrentPlanet] = useState({
    initial: true,
    id: null,
    gateAddress: "",
    dialMode: "",
    poo: {
      id: null,
      letter: "",
      label: "",
      position: 0,
    },
    planetName: "",
  });

  const [userRoom, setUserRoom] = useState("");
  const [hosting, setHosting] = useState("");

  const [userList, setUserList] = useState([]);

  const [chatOpen, setChatOpen] = useState(true);
  const [userListOpen, setUserListOpen] = useState(false);
  const [addressBookOpen, setAddressBookOpen] = useState(false);
  const [dhdOpen, setDhdOpen] = useState(false);

  const fetchUsers = () => {
    socket.emit("fetchUsers", (userlist) => setUserList(userlist));
  };

  const connect = (planetName) => {
    socket.emit("joinServer", {
      username: userData ? userData.username : guestName,
      currentPlanet: planetName,
    });

    fetchUsers();
  };

  const joinPlanet = (planetName) => {
    socket.emit("join planet", planetName, currentPlanet?.initial, (host) => {
      setHosting(host);
    });
    setUserRoom(planetName);
    socket.emit("getGateState", planetName);
  };
  const leavePlanet = () => {
    socket.emit("leave planet", userRoom, (socketData) => {
      setUserList([]);
      setUserList(socketData);
      setUserRoom("");
    });
  };

  const initialPlanet = async () => {
    try {
      if (userData) {
        const userPlanet = await addressList
          .filter((planet) => planet.id === userData.current_location_id)
          .map((planet) => {
            const [poo] = symbols.filter(
              (symbol) => symbol.letter === planet.pooLetter
            );
            const newPlanet = { ...planet, poo, initial: true };
            delete newPlanet.pooLetter;
            return newPlanet;
          });
        if (!userPlanet) {
          console.warn(
            "Error updating current planet, setting default to Earth"
          );
          connect("Earth");
          joinPlanet("Earth");
          return setCurrentPlanet({
            initial: true,
            id: 1,
            gateAddress: "bZEjKc",
            dialMode: "EARTH",
            poo: {
              id: 1,
              letter: "A",
              label: "Earth",
              position: 0,
            },
            planetName: "Earth",
          });
        }
        connect(userPlanet[0].planetName);
        setCurrentPlanet(userPlanet[0]);
        return joinPlanet(userPlanet[0].planetName);
      }
      connect("Earth");
      joinPlanet("Earth");
      return setCurrentPlanet({
        initial: true,
        id: 1,
        gateAddress: "bZEjKc",
        dialMode: "EARTH",
        poo: {
          id: 1,
          letter: "A",
          label: "Earth",
          position: 0,
        },
        planetName: "Earth",
      });
    } catch (err) {
      return console.warn(err);
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on("user connected", (clients, client) => {
        if (client) {
          console.warn(client.username, "connected");
          setUserList(clients);
        }
      });
      socket.on("user disconnected", (clients, client) => {
        if (client) {
          console.warn(client.username, "disconnected");
          setUserList(clients);
        }
      });
      socket.on("disconnect", () => {
        leavePlanet();
      });
      socket.on("setUserList", (clients) => {
        setUserList(clients);
      });
      socket.on("user join", (client, clients) => {
        setUserList(clients);
        console.warn(`${client.user} joined ${client.planet}`);
      });
      socket.on("user left", (client, clients) => {
        setUserList(clients);
        console.warn(`${client.user} left ${client.planet}`);
      });
    }

    return () => {
      socket.off("user connected");
      socket.off("user disconnected");
      socket.off("disconnect");
      socket.off("setUserList");
      socket.off("user join");
      socket.off("user left");
    };
  }, []);

  useEffect(() => {
    if (socket && currentPlanet && !currentPlanet.initial) {
      joinPlanet(currentPlanet.planetName);
    }

    fetchUsers();
  }, [currentPlanet]);

  useEffect(() => {
    initialPlanet();
    fetchUsers();
  }, []);

  useEffect(() => {
    localStorage.setItem("volume", audioVolume);
  }, [audioVolume]);

  if (currentPlanet) {
    return (
      <PlanetContext.Provider
        value={{ currentPlanet, setCurrentPlanet, hosting }}
      >
        <div className={`page ${currentPlanet.id !== 1 ? "abydos" : ""}`}>
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
                    const openVortexAudio =
                      document.getElementById("wormholeLoopAudio");
                    if (openVortexAudio !== null) {
                      openVortexAudio.volume = audioVolume;
                    }
                    const sgcAlarmAudio =
                      document.getElementById("sgcAlarmAudio");
                    if (sgcAlarmAudio !== null) {
                      sgcAlarmAudio.volume = audioVolume;
                    }
                    const sgcOffworldAlarmAudio = document.getElementById(
                      "sgcOffworldAlarmAudio"
                    );
                    if (sgcOffworldAlarmAudio !== null) {
                      sgcOffworldAlarmAudio.volume = audioVolume;
                    }
                    setAudioVolume(e.target.valueAsNumber);
                  }}
                />
              </label>
            </div>
          )}

          {currentPlanet?.id !== 1 && <div className="background" />}
          {socket && currentPlanet.id !== null && (
            <Stargate
              addressList={addressList}
              windowWidth={windowWidth}
              dhdOpen={dhdOpen}
              setDhdOpen={setDhdOpen}
            />
          )}
          {currentPlanet?.id !== 1 && <div className="frontground" />}
          <Menu
            dhdOpen={dhdOpen}
            chatOpen={chatOpen}
            setChatOpen={setChatOpen}
            userListOpen={userListOpen}
            setUserListOpen={setUserListOpen}
            addressBookOpen={addressBookOpen}
            setAddressBookOpen={setAddressBookOpen}
            windowWidth={windowWidth}
            addressList={addressList}
            userList={userList}
          />
        </div>
      </PlanetContext.Provider>
    );
  }
};

export default StargatePage;
