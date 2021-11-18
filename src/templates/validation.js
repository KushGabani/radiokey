const sendMessage = require("./../templates/message");

module.exports = (message) => {
  if (!message.member.voice.channel)
    return sendMessage(message, "Error", "Please connect to a voice channel");
  if (
    message.guild.me.voice.channel &&
    message.member.voice.channel.id !== message.guild.me.voice.channel.id
  )
    return sendMessage(
      message,
      "Error",
      "You're not connected to the same voice channel"
    );

  return false;
};
