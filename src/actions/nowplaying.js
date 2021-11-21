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

    const track = client.player.nowPlaying(message);
    const filters = [];

    Object.keys(client.player.getQueue(message).filters).forEach((filterName) =>
      client.player.getQueue(message).filters[filterName]
        ? filters.push(filterName)
        : false
    );

    sendMessage(message, "Now Playing", "", [
      { name: "Channel", value: track.author, inline: true },
      {
        name: "Requested by",
        value: track.requestedBy.username,
        inline: true,
      },
      {
        name: "From playlist",
        value: track.fromPlaylist ? "Yes" : "No",
        inline: true,
      },

      { name: "Views", value: track.views, inline: true },
      { name: "Duration", value: track.duration, inline: true },

      {
        name: "Volume",
        value: client.player.getQueue(message).volume,
        inline: true,
      },
      {
        name: "Repeat mode",
        value: client.player.getQueue(message).repeatMode ? "Yes" : "No",
        inline: true,
      },
      {
        name: "Currently paused",
        value: client.player.getQueue(message).paused ? "Yes" : "No",
        inline: true,
      },

      {
        name: "Progress bar",
        value: client.player.createProgressBar(message, {
          timecodes: true,
        }),
        inline: true,
      },
    ]);
  },
};
