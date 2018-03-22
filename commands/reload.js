exports.run = (client, message, args) => {
	console.log(message.author.username, "used reload");
	delete require.cache[require.resolve(`./${args[0]}.js`)];
	message.reply(`The command ${args[0]} has been reloaded`);
};
