exports.run = (client, message, args) => {
	delete require.cache[require.resolve(`./${args[0]}.js`)];
	message.channel.send(`The command \'${args[0]}\' has been reloaded`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 4
};

exports.help = {
  name: 'reload',
	category: 'owner',
  description: 'Reloads the command file.',
  usage: 'reload <command_name>'
};
