const discord = require("discord.js");
const client = new discord.Client({});
const { Player } = require("discord-player");

client.player = new Player(client);
client.config = require("./bot-config");

client.login(client.config.discord.token).then((response) => {
    console.log(response);
});
