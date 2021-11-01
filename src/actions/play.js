const basicChecks = require("../templates/validation");
const sendMessage = require("./../templates/message");

module.exports = {
  name: "play",
  aliases: ["p"],
  category: "actions",
  utilisation: "*play [name/URL]",

  execute(client, message, args) {
    const response = basicChecks(message);

    if (response) return response;

    if (!args[0])
    return sendMessage("No song given")
      
    const track = args.join(" ");
    client.player
      .play(message, track, true)
      .then(() => console.log(`Playing ${track}`));
  },
};
