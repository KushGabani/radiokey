const basicChecks = require("../templates/validation");

module.exports = {
  name: "resume",
  aliases: ["res"],
  category: "actions",
  utilisation: "*resume",

  execute(client, message) {
   
    const response = basicChecks(message);
    
    if (response) return response;

    if (!client.player.getQueue(message))
      return message.channel.send({
        embed: {
          color: "ORANGE",
          title: "Error",
          description: "No songs. Cannot pause",
          footer: {
            text: "Radiokey | A product by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });

    if (!client.player.getQueue(message).paused)
      return message.channel.send({
        embed: {
          color: "ORANGE",
          title: "Error",
          description: "Song already resumed!",
          footer: {
            text: "Radiokey | A product by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });

    client.player.resume(message);
    message.channel.send({
      embed: {
        color: "ORANGE",
        title: "Resumed!",
        description: `Song ${
          client.player.getQueue(message).playing.title
        } resumed !`,
        footer: {
          text: "Radiokey | A project by Kush Gabani",
        },
        timestamp: new Date(),
      },
    });
  },
};
