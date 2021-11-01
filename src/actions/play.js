const basicChecks = require("../templates/validation");

module.exports = {
  name: "play",
  aliases: ["p"],
  category: "actions",
  utilisation: "*play [name/URL]",

  execute(client, message, args) {
    const response = basicChecks(message);

    if (response) return response;

    if (!args[0])
      return message.channel.send({
        embed: {
          color: "ORANGE",
          title: "No song given",
          footer: {
            text: "Radiokey | A product by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });

    const track = args.join(" ");
    client.player
      .play(message, track, true)
      .then(() => console.log(`Playing ${track}`));
  },
};
