module.exports = (client, message, track) => {
    message.channel.send({
        embed: {
            color: "ORANGE",
            title: `Playing ${track.title}`,
            footer: {
                text: "Radiokey | A product by Kush Gabani",
            },
            timestamp: new Date(),
        },
    });
};
