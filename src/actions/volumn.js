const basicChecks = require("./../templates/validation");
const sendMessage = require("./../templates/message");

module.exports = {
  name: "nowplaying",
  aliases: ["np"],
  category: "actions",
  utilisation: "*np",

  execute(client, message) {
    const response = basicChecks(message);

    if (response) return response;

    if (!client.player.getQueue(message))
      return sendMessage(message, "Error", "No songs. Cannot pause");

    if (!args[0] || isNaN(args[0]) || args[0] === "Infinity")
      if (
        Math.round(parseInt(args[0])) < 1 ||
        Math.round(parseInt(args[0])) > 100
      )
        return sendMessage(message, "Error", "not valid (1, 100)");

    const success = client.player.setVolume(message, parseInt(args[0]));

    if (success) sendMessage(message, `Volume: **${parseInt(args[0])}%**`);
  },
};
