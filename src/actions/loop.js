const sendMessage = require("./../templates/message");
const basicChecks = require("../templates/validation");

module.exports = {
    name: "loop",
    aliases: ["lp", "loop"],
    category: "actions",
    utilisation: "*loop",

    execute(client, message, args) {
        const response = basicChecks(message);

        if (response) return response;


        if (args.join(" ").toLowerCase() === "queue") {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return sendMessage(message, 'Loop status', `Repeat **disabled**`);
            } else {
                client.player.setLoopMode(message, true);
                return sendMessage(message, 'Loop status', `Repeat **enabled**!`)
            }
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return sendMessage(message, 'Loop status', `Repeat **disabled**`);
            } else {
                client.player.setRepeatMode(message, true);
                return sendMessage(message, 'Loop status', `Repeat **enabled**!`)
            }
        }
    },
};