module.exports = (client, message, queue, track) => {
  message.channel.send({
    embed: {
      color: "ORANGE",
      title: "Track added",
      description: `${track.title} added to the queue!`,
      footer: {
        text: "Radiokey | A product by Kush Gabani",
      },
      timestamp: new Date(),
    },
  });
};
