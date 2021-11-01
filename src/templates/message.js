module.exports = (title = "", description = "", fields = []) => {
  return fields.length == 0
    ? message.channel.send({
        embed: {
          color: "ORANGE",
          title: title,
          description: description,
          footer: {
            text: "Radiokey | A product by Kush Gabani",
          },
        },
      })
    : message.channel.send({
        embed: {
          color: "ORANGE",
          title: title,
          description: description,
          footer: {
            text: "Radiokey | A product by Kush Gabani",
          },
          fields: fields,
        },
      });
};
