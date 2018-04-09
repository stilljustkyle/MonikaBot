const settings = require('../../config.json');
const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (!args[0]) {
    const commandNames = Array.from(client.commands.keys());
    var fun = [];
    var misc = [];
    var moderation = [];
    var music = [];
    var owner = [];
    for (i = 0; i < commandNames.length; i++) {
      command = client.commands.get(commandNames[i]);
      switch (command.help.category) {
        case "fun":
          fun.push(` ${commandNames[i]}`);
          break;
        case "misc":
          misc.push(` ${commandNames[i]}`);
          break;
        case "moderation":
          moderation.push(` ${commandNames[i]}`);
          break;
        case "music":
          music.push(` ${commandNames[i]}`);
          break;
        case "owner":
          owner.push(` ${commandNames[i]}`);
          break;
        default:
          break;
      }
    }
    if (message.channel.type != 'dm') message.channel.send(":mailbox_with_mail: Commands sent via dm~");
    const embed = new Discord.RichEmbed();
    embed.setAuthor("Monika Commands", client.user.avatarURL);
    embed.setColor(0x27e33d);
    embed.addField("Fun Commands",`${fun}`);
    embed.addField("Music Commands",`${music}`)
    embed.addField("Moderation Commands",`${moderation}`)
    embed.addField("Miscellaneous Commands",`${misc}`)
    embed.setFooter(`${settings.prefix}help <command> for details`);
    embed.setTimestamp(new Date());
    message.author.send(embed);
  } else {
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      const embed = new Discord.RichEmbed();
      embed.setAuthor(`Command: ${settings.prefix}${command.help.name}`, client.user.avatarURL);
      embed.setColor(0x27e33d);
      embed.addField("Description", command.help.description);
      embed.addField("Usage", `${settings.prefix}${command.help.usage}`);
      if (command.conf.guildOnly === true) embed.setFooter("Guild Only");
      message.channel.send(embed);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'help',
  category: 'misc',
  description: 'Displays all the available commands',
  usage: 'help'
};
