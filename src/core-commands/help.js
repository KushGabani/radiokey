module.exports = {
  name: "help",
  aliases: ["h"],
  category: "core",
  utilization: "*help <command>",

  execute(client, message, args) {
    if (!args[0]) {
      const core = message.client.commands
        .filter((cmd) => cmd.category === "core")
        .map((x) => "`" + x.name + "`")
        .join(", ");
      const actions = message.client.commands
        .filter((cmd) => cmd.category === "actions")
        .map((x) => "`" + x.name + "`")
        .join(", ");

      message.channel.send({
        embed: {
          color: "ORANGE",
          title: "Help Panel",
          footer: {
            text: "Radiokey | A Product by Kush Gabani",
          },
          description: "List of features",
          fields: [
            { name: "Bot", value: core },
            { name: "Actions", value: actions },
          ],
          timestamp: new Date(),
        },
      });
    } else {
      const command =
        message.client.commands.get(args.join(" ").toLowerCase()) ||
        message.client.commands.find(
          (x) => x.aliases && x.aliases.includes(args.join(" ").toLowerCase())
        );

      if (!command)
        return message.channel.send({
          embed: {
            color: "ORANGE",
            title: "the command doesn't exist",
            description:
              "Want a new feature? request a new feature at https://github.com/KushGabani/Radiokey",
            footer: {
              text: "Radiokey | A Product by Kush Gabani",
            },
            timestamp: new Date(),
          },
        });

      message.channel.send({
        embed: {
          color: "ORANGE",
          title: "Help Panel",
          footer: {
            text: "Radiokey | A Product by Kush Gabani",
          },
          fields: [
            { name: "Name", value: command.name, inline: true },
            { name: "Category", value: command.category, inline: true },
            {
              name: "Aliases",
              value:
                command.aliases.length < 1
                  ? "None"
                  : command.aliases.join(", "),
              inline: true,
            },
            {
              name: "Utilisation",
              value: command.utilization,
              inline: true,
            },
          ],
          timestamp: new Date(),
        },
      });
    }
  },
};
