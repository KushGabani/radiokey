module.exports = async (client) => {
  client.user.setActivity(client.config.discord.activity);
  console.log(
    `Logged in as ${client.user.username}. Serving on ${client.guilds.cache.size} servers`
  );
};
