module.exports = (message) => {
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
    return false
}