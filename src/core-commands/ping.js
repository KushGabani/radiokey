const sendMessage = require("./../templates/message");

module.exports = {
  name: "ping",
  aliases: [],
  category: "core",
  utilisation: "*ping",

  execute(client, message) {
    sendMessage("Ping", `Ping : ${client.ws.ping}ms!`);
  },
};
