const config = require("../../config.json", "utf-8");
const fs = require("fs");

exports.run = (client, message, args) => {
    if(message.author.id !== config.ownerID) return;
	let newPrefix = message.content.split(" ").slice(1, 2)[0];
	config.prefix = newPrefix;
	fs.writeFile("../config.json", JSON.stringify(config), (err) => console.error);
	message.channel.send("Prefix set to " + config.prefix);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'setprefix',
  category: 'moderation',
  description: 'change the default prefix',
  usage: 'setprefix <new_prefix>'
};
