const messages = [];

class Chat {
  static getMessages() {
    return messages;
  }

  static newChatMessage(io, data) {
    if (messages.length === 1500) {
      messages.shift();
    }
    messages.push({
      date: new Date(),
      type: data.type,
      channel: data.channel ? data.channel : "Global",
      username: data.username,
      message: data.message,
    });

    io.emit("updateChat", messages);
  }
}

module.exports = Chat;
