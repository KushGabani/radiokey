const basicChecks = require("../templates/validation");
const sendMessage = require("./../templates/message");
module.exports = {
  name: "resume",
  aliases: ["res"],
  category: "actions",
  utilisation: "*resume",

  execute(client, message) {
    const response = basicChecks(message);

    if (response) return response;

    if (!client.player.getQueue(message))
      return sendMessage(message, "Error", "no songs. Cannot pause");

    if (!client.player.getQueue(message).paused)
      return sendMessage(message, "Error", "Song already resumed!");

    client.player.resume(message);

    sendMessage(
      message,
      "Resumed!",
      `Song ${client.player.getQueue(message).playing.title} resumed !`
    );
  },
};
