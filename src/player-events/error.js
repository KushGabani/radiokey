module.exports = (client, error, message, ...args) => {
  switch (error) {
    case "NotPlaying":
      message.channel.send({
        embed: {
          color: "ORANGE",
          title: "Error",
          description: "Not Playing",
          footer: {
            text: "Radiokey | A product by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });
      break;
    case "NotConnected":
      message.channel.send({
        embed: {
          color: "ORANGE",
          title: "Error",
          description: `Not connected to voice channel`,
          footer: {
            text: "Radiokey | A product by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });
      break;
    case "UnableToJoin":
      message.channel.send({
        embed: {
          color: "ORANGE",
          title: "Error",
          description: "Unable to Join",
          footer: {
            text: "Radiokey | A product by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });
      break;
    case "VideoUnavailable":
      message.channel.send({
        embed: {
          color: "ORANGE",
          title: "Error",
          description: `${args[0].title} is not available in your country! Skipping...`,
          footer: {
            text: "Radiokey | A product by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });
      break;
    case "MusicStarting":
      message.channel.send({
        embed: {
          color: "ORANGE",
          title: "Error",
          description: "A music is being started. wait.",
          footer: {
            text: "Radiokey | A product by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });
      break;
    default:
      message.channel.send({
        embed: {
          color: "ORANGE",
          title: "Error",
          description:
            "Seems like a server issue...\nReport the issue at http://github.com/KushGabani/radiokey and we'll try our best to fix it",
          footer: {
            text: "Radiokey | A product by Kush Gabani",
          },
          timestamp: new Date(),
        },
      });
  }
};
