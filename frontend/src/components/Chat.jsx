/* eslint-disable no-nested-ternary */
import { useState, useContext, useEffect, useMemo } from "react";
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
  const [userPosted, setUserPosted] = useState(false);
  const [chatRoom, setChatRoom] = useState(currentPlanet.planetName);

  useEffect(() => {
    localStorage.setItem("chatAudio", notifAudio);
  }, [notifAudio]);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const [globalNotif, setGlobalNotif] = useState(0);
  const [localNotif, setLocalNotif] = useState(0);

  const globalCount = useMemo(
    () =>
      messages
        .filter(
          (message) => message.channel === "Global" && message.type !== "info"
        )
        .map((message) => message).length,
    [messages]
  );

  const localCount = useMemo(
    () =>
      messages
        .filter(
          (message) =>
            message.channel === currentPlanet.planetName &&
            message.type !== "info"
        )
        .map((message) => message).length,
    [messages]
  );

  useEffect(() => {
    if (notifAudio) {
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
    setUserPosted(true);
    setNewMessage("");
  };

  useEffect(() => {
    const chatList = document.getElementById("chatList");
    chatList.scrollTop =
      currentPlanet.initial && chatRoom !== "Global" && !userPosted
        ? 0
        : chatList.scrollHeight;

    if (chatRoom === currentPlanet.planetName && chatOpen) {
      setChatNotif(globalNotif);
      setLocalNotif(0);
    }

    if (chatRoom === "Global" && chatOpen) {
      setChatNotif(localNotif);
      setGlobalNotif(0);
    }
  }, [messages, chatRoom]);

  useEffect(() => {
    setChatRoom(currentPlanet.planetName);
  }, [currentPlanet]);

  useEffect(() => {
    socket.emit("getMessages", (fetchedMessages) => {
      setMessages(fetchedMessages);
    });
  }, []);

  const handleNotif = (updatedMessages) => {
    const newGlobalCount = updatedMessages.filter(
      (newMessages) =>
        newMessages.channel === "Global" && newMessages.type !== "info"
    ).length;

    const newLocalCount = updatedMessages
      .filter(
        (newMessages) =>
          newMessages.channel === currentPlanet.planetName &&
          newMessages.type !== "info"
      )
      .map((message) => message).length;

    if (newGlobalCount > globalCount && chatRoom !== "Global") {
      setGlobalNotif(globalNotif + 1);
      setChatNotif(globalNotif + localNotif);
    }
    if (newLocalCount > localCount && chatRoom !== currentPlanet.planetName) {
      setLocalNotif(localNotif + 1);
      setChatNotif(globalNotif + localNotif);
    }
    setMessages(updatedMessages);
  };

  useEffect(() => {
    socket.on("updateChat", (updatedMessages) => {
      handleNotif(updatedMessages);
    });
  }, [messages, chatRoom, globalNotif, localNotif, globalCount, localCount]);

  return (
    <section className={chatOpen ? "chat open" : "chat"}>
      <header className="chatRooms">
        <button
          disable={chatRoom === "Global"}
          type="button"
          onClick={() => setChatRoom("Global")}
          className={
            chatRoom === "Global" ? "chatRoomsButton active" : "chatRoomsButton"
          }
        >
          Global
          <p className="chatNotif">{globalNotif !== 0 ? globalNotif : ""}</p>
        </button>
        <button
          disable={chatRoom === currentPlanet.planetName}
          type="button"
          onClick={() => setChatRoom(currentPlanet.planetName)}
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
                <span className="colorAdmin">Server</span>: Welcome to Stargate
                React! You are currently on {currentPlanet.planetName}, each
                planet have a dedicated chat room.
              </li>
              <li className="message">
                <span className="colorAdmin">Server</span>: Use the address book
                on the left to see reachable planets.
              </li>
              <li className="message">
                <span className="colorAdmin">Server</span>: Open the DHD (button
                at the bottom of your screen), and enter the sequence
                corresponding to your destination.
              </li>
              <li className="message">
                <span className="colorAdmin">Server</span>: Everything is work
                in progress, use the global chat for questions.
              </li>
              <li className="message">
                <span className="colorAdmin">Server</span>: Have fun and
                tek'mate, brother!
              </li>
            </>
          )}
          {messages
            .filter((message) => message.channel === chatRoom)
            .map((message) => {
              if (message.type === "info") {
                return <li className="message info">{message.message}</li>;
              }
              return (
                <li className="message">
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
            (message) => message.channel === chatRoom && message.type !== "info"
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
          maxLength="250"
          required
          placeholder="Enter your message here ..."
          onChange={(e) => setNewMessage(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Chat;
