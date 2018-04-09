const config = require("../../config.json", "utf-8");

exports.run = (client, message, args) => {
	if(message.author.id !== config.ownerID) return;
	let text = args.slice(0).join(" ");
	message.channel.send(text);
	message.delete();
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'say',
	category: 'owner',
  description: 'make Monika say something',
  usage: 'say <message>'
};
