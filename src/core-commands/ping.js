module.exports = {
  name: "ping",
  aliases: [],
  category: "core",
  utilisation: "*ping",

  execute(client, message) {
    message.channel.send({
      embed: {
        color: "ORANGE",
        title: "Ping",
        description: `Ping : ${client.ws.ping}ms!`,
        footer: {
          text: "Radiokey | A Product by Kush Gabani",
        },
        timestamp: new Date(),
      },
    });
  },
};
