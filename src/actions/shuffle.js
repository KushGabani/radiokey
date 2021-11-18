const sendMessage = require("./../templates/message");
const basicChecks = require("./../templates/validation");

module.exports = {
  name: "shuffle",
  aliases: ["sh"],
  category: "actions",
  utilisation: "*shuffle",

  execute(client, message) {
    const response = basicChecks(message);

    if (response) return response;

    if (!client.player.getQueue(message))
      return sendMessage(message, "Error", "no songs. Cannot pause");

    const success = client.player.shuffle(message);

    if (success) sendMessage(message, "Shuffled!");
  },
};
