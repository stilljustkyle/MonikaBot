const config = require("../config.json", "utf-8");
const func = require("../functions.js");

exports.run = (client, message) => {
  //var servers = {};
  if (message.author.bot) return;
  if(!message.content.startsWith(config.prefix)) return;
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
  const perms = client.elevation(message);
  let cmd;
  if(client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (!cmd) return;
  if (cmd.conf.guildOnly === true && !message.guild) return message.channel.send("<:no_entry_sign:431991853420773387> | This command is guild only");
  if (perms < cmd.conf.permLevel) return;
  cmd.run(client, message, args, func, perms);
};
