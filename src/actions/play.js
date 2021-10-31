module.exports = {
  name: "play",
  aliases: ["p"],
  category: "actions",
  utilisation: "*play [name/URL]",

  execute(client, message, args) {
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
