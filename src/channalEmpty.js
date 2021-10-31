module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: "ORANGE",
            title: `The channel is empty`,
            footer: {
                text: "Radiokey | A product by Kush Gabani",
            },
            timestamp: new Date(),
        },
    });
};
