module.exports = {
  name: "resume",
  aliases: ["res"],
  category: "actions",
  utilisation: "@resume",

  execute(client, message) {
    if (!message.member.voice.channel)
      return message.channel.send({
        embed: {
          color: "ORANGE",
          title: "Error",
          description: "Please connect to a voice channel",
          footer: {
            text: "Radiokey | A product by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });

    if (
      message.guild.me.voice.channel &&
      message.member.voice.channel.id !== message.guild.me.voice.channel.id
    )
      return message.channel.send({
        embed: {
          color: "ORANGE",
          title: "Error",
          description: "You're not connected to the same voice channel",
          footer: {
            text: "Radiokey | A product by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });

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
        title: "Paused!",
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
