module.exports = (client, message, query) => {
    message.channel.send({
        embed: {
            color: "ORANGE",
            title: "Cannot find the song",
            footer: {
                text: "Radiokey | A product by Kush Gabani",
            },
            timestamp: new Date(),
        },
    });
};
