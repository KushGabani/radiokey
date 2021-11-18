const basicChecks = require("../templates/validation");
const sendMessage = require("./../templates/message");
module.exports = {
  name: "stop",
  aliases: ["dc"],
  category: "actions",
  utilisation: "*stop | *dc",

  execute(client, message) {
    const response = basicChecks(message);

    if (response) return response;

    client.player.setRepeatMode(message, false);
    client.player.stop(message);

    sendMessage(message, "Disconnected!", `bot disconnected !`);
  },
};
