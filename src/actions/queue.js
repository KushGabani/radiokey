const basicChecks = require("../templates/validation");
const sendMessage = require("./../templates/message");

module.exports = {
  name: "queue",
  aliases: ["q"],
  category: "actions",
  utilisation: "*queue | *q",

  execute(client, message) {
    const response = basicChecks(message);

    if (response) return response;

    const queue = client.player.getQueue(message);

    if (!client.player.getQueue(message))
      return sendMessage(message, "Error", "no songs. Cannot pause");

    message.channel.send(
      `**Server queue - ${message.guild.name} ${
        client.player.getQueue(message).loopMode ? "(looped)" : ""
      }**\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` +
        (queue.tracks
          .map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${
              track.author
            } (requested by : ${track.requestedBy.username})`;
          })
          .slice(0, 5)
          .join("\n") +
          `\n\n${
            queue.tracks.length > 5
              ? "And" + (queue.tracks.length - 5) + "other songs..."
              : "In the playlist" + queue.tracks.length + "song(s)..."
          }`)
    );
  },
};
