module.exports = (client, message, queue) => {
    message.channel.send({
        embed: {
            color: "ORANGE",
            title: `Bot Disconnected`,
            footer: {
                text: "Radiokey | A product by Kush Gabani",
            },
            timestamp: new Date(),
        },
    });
};
