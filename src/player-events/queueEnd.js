module.exports = (client, message, queue) => {
  message.channel.send({
    embed: {
      color: "ORANGE",
      title: "There are no songs in the queue",
      footer: {
        text: "Radiokey | A product by Kush Gabani",
      },
      timestamp: new Date(),
    },
  });
};
