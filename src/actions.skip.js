const basicChecks = require("./../templates/validation");
const sendMessage = require("./../templates/message");

module.exports = {
  name: "skip",
  aliases: ["sk", "n"],
  category: "actions",
  utilisation: "*skip",

  execute(client, message) {
    const response = basicChecks(message);

    if (response) return response;

    if (!client.player.getQueue(message))
      return sendMessage(message, "Error", "No songs. Cannot pause");

    const success = client.player.skip(message);

    if (success) sendMessage(message, "Skipping the song...");
  },
};
