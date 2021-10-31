const fs = require("fs");
const path = require("path");
const discord = require("discord.js");
const client = new discord.Client({ disableMentions: "everyone" });
const { Player } = require("discord-player");

client.player = new Player(client);
client.config = require("./../bot-config");
client.commands = new discord.Collection();

const commands = fs
  .readdirSync(path.resolve(__dirname, "./core-commands"))
  .filter((files) => files.endsWith(".js"));

const actions = fs
  .readdirSync(path.resolve(__dirname, "./actions"))
  .filter((files) => files.endsWith(".js"));

const discordEvents = fs
  .readdirSync(path.resolve(__dirname, "./discord-events"))
  .filter((file) => file.endsWith(".js"));

const playerEvents = fs
  .readdirSync(path.resolve(__dirname, "./player-events"))
  .filter((file) => file.endsWith(".js"));

for (const file of commands) {
  const command = require(`./core-commands/${file}`);
  console.log(`Loading command ${file}...`);
  client.commands.set(command.name.toLowerCase(), command);
}

for (const file of actions) {
  const action = require(`./actions/${file}`);
  console.log(`Loading comamnd ${file}...`);
  client.commands.set(action.name.toLowerCase(), action);
}

for (const file of discordEvents) {
  const event = require(`./discord-events/${file}`);
  console.log(`Loading discord.js event ${file}...`);
  client.on(file.split(".")[0], event.bind(null, client));
}

for (const file of playerEvents) {
  console.log(`Loading player event ${file}...`);
  const event = require(`./player-events/${file}`);
  client.player.on(file.split(".")[0], event.bind(null, client));
}

client
  .login(client.config.discord.token)
  .then(() => console.log("Radiokey compiled!"))
  .catch((error) => {
    console.log(error);
  });
