const config = require("../../config.json", "utf-8");

exports.run = (client, message, args) => {
	message.delete();
	if(message.author.id !== config.ownerID) return;
	async function purge() {
		if (isNaN(args[0])) return;
        const fetched = await message.channel.fetchMessages({limit: args[0]});
            message.channel.bulkDelete(fetched)
				.catch(error => message.channel.send(`Error: ${error}`));
        }
        purge();
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'purge',
	category: 'moderation',
  description: 'Delete a specified amount of messages',
  usage: 'purge <number>'
};
