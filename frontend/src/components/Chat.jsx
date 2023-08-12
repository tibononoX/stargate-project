/* eslint-disable no-nested-ternary */
import { useState, useContext, useEffect, useMemo } from "react";
import moment from "moment";
import "@styles/chat.scss";
import audioSelector from "@services/audio";
import UserContext from "@contexts/UserContext";
import PlanetContext from "@contexts/PlanetContext";

const Chat = ({ chatOpen, setChatOpen, setChatNotif }) => {
  const {
    audioVolume,
    notifAudio,
    setNotifAudio,
    guestName,
    userData,
    socket,
  } = useContext(UserContext);
  const { currentPlanet } = useContext(PlanetContext);
  const [userActioned, setUserActioned] = useState(false);
  const [chatRoom, setChatRoom] = useState(currentPlanet.planetName);

  useEffect(() => {
    localStorage.setItem("chatAudio", notifAudio);
  }, [notifAudio]);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const [globalNotif, setGlobalNotif] = useState(0);
  const [localNotif, setLocalNotif] = useState(0);

  useEffect(() => {
    const chatList = document.getElementById("chatList");
    chatList.scrollTop =
      currentPlanet.initial && chatRoom !== "Global" && !userActioned
        ? 0
        : chatList.scrollHeight;

    chatList.addEventListener("scroll", () => {
      setUserActioned(true);
    });

    return () =>
      chatList.removeEventListener("scroll", () => {
        setUserActioned(true);
      });
  }, [messages, chatRoom]);

  useEffect(() => {
    if (notifAudio && (localNotif !== 0 || globalNotif !== 0)) {
      audioSelector(audioVolume, "chatNotif");
    }
  }, [localNotif, globalNotif]);

  const handleSubmit = (e) => {
    e.preventDefault();

    socket.emit("newChatMessage", {
      channel: chatRoom,
      username: userData ? userData.username : guestName,
      message: newMessage,
    });
    setUserActioned(true);
    setNewMessage("");
  };

  useEffect(() => {
    if (chatRoom === currentPlanet.planetName) {
      setChatNotif(globalNotif + localNotif);
      setLocalNotif(0);
    }

    if (chatRoom === "Global") {
      setChatNotif(globalNotif + localNotif);
      setGlobalNotif(0);
    }
  }, [globalNotif, localNotif, chatRoom]);

  useEffect(() => {
    setChatRoom(currentPlanet.planetName);
  }, [currentPlanet]);

  useEffect(() => {
    socket.emit("getMessages", (fetchedMessages) => {
      setMessages(fetchedMessages);
    });
  }, []);

  const handleNotif = (updatedMessages) => {
    if (updatedMessages[updatedMessages.length - 1].channel === "Global") {
      setGlobalNotif(globalNotif + 1);
      setMessages(updatedMessages);
      return setChatNotif(globalNotif + localNotif);
    }

    if (
      updatedMessages[updatedMessages.length - 1].channel ===
      currentPlanet.planetName
    ) {
      setLocalNotif(localNotif + 1);
      setMessages(updatedMessages);
      return setChatNotif(globalNotif + localNotif);
    }
    return setMessages(updatedMessages);
  };

  useEffect(() => {
    socket.on("updateChat", (updatedMessages) => {
      handleNotif(updatedMessages);
    });
  }, [chatRoom, globalNotif, localNotif]);

  return (
    <section className={chatOpen ? "chat open" : "chat"}>
      <header className="chatRooms">
        <button
          type="button"
          onClick={() => {
            if (!userActioned) {
              setUserActioned(true);
            }
            setChatRoom("Global");
          }}
          className={
            chatRoom === "Global" ? "chatRoomsButton active" : "chatRoomsButton"
          }
        >
          Global
          <p className="chatNotif">{globalNotif !== 0 ? globalNotif : ""}</p>
        </button>
        <button
          type="button"
          onClick={() => {
            if (!userActioned) {
              setUserActioned(true);
            }
            setChatRoom(currentPlanet.planetName);
          }}
          className={
            chatRoom === currentPlanet.planetName
              ? "chatRoomsButton active"
              : "chatRoomsButton"
          }
        >
          {currentPlanet.planetName}
          <p className="chatNotif">{localNotif !== 0 ? localNotif : ""}</p>
        </button>
        <button
          type="button"
          className="notifSound"
          onClick={() => setNotifAudio(!notifAudio)}
        >
          <img
            src={`${import.meta.env.VITE_FRONTEND_SRC_URL}/assets/icons/${
              notifAudio ? "active/notifSound.png" : "notifSound.png"
            }`}
            className="bellIcon"
            alt=""
          />
        </button>
        <button
          type="button"
          className="closeChat"
          onClick={() => setChatOpen(false)}
        >
          X
        </button>
      </header>
      <div className="chatBox" id="chatList">
        <ul className="messages">
          {chatRoom === currentPlanet.planetName && currentPlanet.initial && (
            <>
              <li className="message">
                <span className="colorAdmin">Tutorial</span>: Welcome to
                Stargate React! You are currently on {currentPlanet.planetName}
              </li>

              <li className="message">
                <span className="colorAdmin">Tutorial</span>: Use the address
                book on the left to see reachable planets
              </li>
              <li className="message">
                <span className="colorAdmin">Tutorial</span>: Click on an
                address to highlight its sequence, and enter it in the DHD
              </li>
              <li className="message">
                <span className="colorAdmin">Tutorial</span>: Once the gate is
                open, click on the event horizon to travel to your destination
              </li>
              <li className="message">
                <span className="colorAdmin">Tutorial</span>: Each planet have
                its own dedicated chat room, and you can use the global chat for
                questions
              </li>
              <li className="message">
                <span className="colorAdmin">Tutorial</span>: Everything is WORK
                IN PROGRESS!
              </li>
              <li className="message">
                <span className="colorAdmin">Tutorial</span>: Have fun and
                tek'mate o7
              </li>
            </>
          )}
          {messages
            .filter((message) => message.channel === chatRoom)
            .map((message) => {
              if (message.type === "info") {
                return (
                  <li className="message info">
                    <span
                      title={moment(message.date).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}
                      className="date"
                    >
                      {`${moment(message.date).format("LTS")}: `}
                    </span>
                    {message.message}
                  </li>
                );
              }
              if (message.type === "alert") {
                return (
                  <li className="message alert">
                    <span
                      title={moment(message.date).format(
                        "MMMM Do YYYY, h:mm:ss a"
                      )}
                      className="date"
                    >
                      {`${moment(message.date).format("LTS")}: `}
                    </span>
                    {message.message}
                  </li>
                );
              }
              return (
                <li className="message">
                  <span
                    title={moment(message.date).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                    className="date"
                  >
                    {`${moment(message.date).format("LTS")}: `}
                  </span>
                  <span
                    className={
                      message.username === "Tibuntu"
                        ? "colorAdmin"
                        : message.username.includes("Guest")
                        ? "colorGuest"
                        : "colorUser"
                    }
                  >
                    {message.username}
                  </span>
                  {": "}
                  {message.message}
                </li>
              );
            })}
          {messages.filter(
            (message) =>
              message.channel === chatRoom &&
              message.type !== "info" &&
              message.type !== "alert"
          ).length === 0 && (
            <li className="message">
              <span className="emptyChat">
                {chatRoom} chatroom is quiet, you can change that!
              </span>
            </li>
          )}
        </ul>
      </div>
      <form className="inputContainer" onSubmit={handleSubmit}>
        <input
          type="text"
          className="inputBox"
          value={newMessage}
          maxLength="1000"
          required
          placeholder="Enter your message here ..."
          onChange={(e) => setNewMessage(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Chat;
