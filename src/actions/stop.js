const basicChecks = require("../templates/validation");
const sendMessage = require("./../templates/message");
module.exports = {
    name: "stop",
    aliases: ["dc"],
    category: "actions",
    utilisation: "*stop | *dc",

    execute(client, message) {
        const response = basicChecks(message);

        if (response) return response;

        if (!client.player.getQueue(message))
            return sendMessage(message, "Error", "no songs. Cannot pause");

        if (!client.player.getQueue(message).paused)
            return sendMessage(message, "Error", "Song already resumed!");

        client.player.setRepeatMode(message, false);
        const success = client.player.stop(message);

        if (success)
            sendMessage(
                message,
                "Disconnected!",
                `bot disconnected !`
            );
    },
};