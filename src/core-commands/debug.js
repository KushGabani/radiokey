module.exports = {
  name: "debug",
  aliases: [],
  category: "core",
  utilisation: "*debug",

  execute(client, message) {
    message.channel.send({
      embed: {
        color: "ORANGE",
        title: "Debug",
        description: `${client.user.username} connected in ${client.voice.connections.size} channels !`,
        footer: {
          text: "Radiokey | A Product by Kush Gabani",
        },
        timestamp: new Date(),
      },
    });
  },
};
