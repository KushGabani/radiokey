const sendMessage = require("./../templates/message");
const basicChecks = require("../templates/validation");

module.exports = {
    name: "clear-queue",
    aliases: ["cq", "clear"],
    category: "Music",
    utilisation: "{prefix}clear-queue",

    execute(client, message, args) {
        const response = basicChecks(message);

        if (response) return response;

        if (!client.player.getQueue(message))
            return sendMessage(message, "Error", "Already empty!");

        if (client.player.getQueue(message).tracks.length <= 1)
            return sendMessage(message, "Queue", `only 1 song in the queue`);

        client.player.clearQueue(message);

        sendMessage(message, "Queue empty!");
    },
};
