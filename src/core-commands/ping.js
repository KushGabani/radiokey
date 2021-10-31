module.exports = {
  name: "ping",
  aliases: [],
  category: "Infos",
  utilisation: "{prefix}ping",

  execute(client, message) {
    message.channel.send({
      embed: {
        color: "ORANGE",
        title: "Ping",
        description: { name: `Ping : ${client.ws.ping}ms!` },
        footer: {
          text: "Radiokey | A Product by Kush Gabani",
        },
        timestamp: new Date(),
      },
    });
  },
};
