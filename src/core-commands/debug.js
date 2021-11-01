const sendMessage = require("./../templates/message");
module.exports = {
  name: "debug",
  aliases: [],
  category: "core",
  utilisation: "*debug",

  execute(client, message) {
    sendMessage("Debug", `${client.user.username} connected in ${client.voice.connections.size} channels !`)
  },
};
