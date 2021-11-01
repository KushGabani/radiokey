const basicChecks = require("../templates/validation");
const sendMessage = require("./../templates/message");

module.exports = {
  name: "pause",
  aliases: [],
  category: "actions",
  utilisation: "*pause",

  execute(client, message) {
    const response = basicChecks(message);

    if (response) return response;

    if (!client.player.getQueue(message))
      return sendMessage(message, "Error", "No songs. Cannot pause");

    if (client.player.getQueue(message).paused)
      return sendMessage(message, "Error", "Song already paused!");

    client.player.pause(message);

    sendMessage(
      message,
      "Paused!",
      `Song ${client.player.getQueue(message).playing.title} paused!`
    );
  },
};
