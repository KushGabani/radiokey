const basicChecks = require("../templates/validation");
const sendMessage = require("./../templates/message");

module.exports = {
  name: "search",
  aliases: ["sr"],
  category: "actions",
  utilisation: "*search [name/URL]",

  execute(client, message, args) {
    const response = basicChecks(message);

    if (response) return response;

    if (!args[0])
      return sendMessage(
        message,
        "Error",
        "please indicate the title of the song"
      );

    client.player.play(message, args.join(" "));
  },
};
