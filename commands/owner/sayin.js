const config = require("../../config.json", "utf-8");

exports.run = (client, message, args) => {
	if(message.author.id !== config.ownerID) return;
	let channel = message.content.split(" ").slice(1, 2)[0];
	let text = args.slice(1).join(" ");
	client.channels.get(channel).send(text);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'sayin',
	category: 'owner',
  description: 'make Monika say someething in a specified channel',
  usage: 'sayin <channel_id> <message>'
};
