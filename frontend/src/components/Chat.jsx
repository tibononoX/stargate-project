/* eslint-disable no-nested-ternary */
import { useState, useContext, useEffect } from "react";
import "@styles/chat.scss";
import UserContext from "@contexts/UserContext";
import PlanetContext from "@contexts/PlanetContext";

const Chat = () => {
  const { audioVolume, setAudioVolume, guestName, userData, socket } =
    useContext(UserContext);
  const { currentPlanet } = useContext(PlanetContext);
  const [chatRoom, setChatRoom] = useState(currentPlanet.planetName);
  const [open, setOpen] = useState(true);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    socket.emit("newChatMessage", {
      channel: chatRoom,
      username: userData ? userData.username : guestName,
      message: newMessage,
    });
    setNewMessage("");
  };

  useEffect(() => {
    const chatList = document.getElementById("chatList");
    chatList.scrollTop = chatList.scrollHeight;
  }, [messages, chatRoom]);

  useEffect(() => {
    socket.emit("getMessages", (fetchedMessages) => {
      setMessages(fetchedMessages);
    });
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("updateChat", (updatedMessages) => {
        setMessages(updatedMessages);
      });
    }
  }, [socket]);

  return (
    <div className={open ? "chatWindow open" : "chatWindow"}>
      <section className="chat">
        <header className="chatRooms">
          <button
            disable={chatRoom === "Global"}
            type="button"
            onClick={() => setChatRoom("Global")}
            className={
              chatRoom === "Global"
                ? "chatRoomsButton active"
                : "chatRoomsButton"
            }
          >
            Global
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
          </button>
        </header>
        <div className="chatBox">
          <ul className="messages" id="chatList">
            {chatRoom === currentPlanet.planetName && (
              <li className="message">
                <span className="colorAdmin">Server</span>: Welcome to Stargate
                React, keep in mind that everything is work in progress, feel
                free to ask any questions if you need!
              </li>
            )}
            {messages
              .filter((message) => message.channel === chatRoom)
              .map((message) => (
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
              ))}
          </ul>
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
        </div>
      </section>
    </div>
  );
};

export default Chat;
