exports.run = (client, message, args) => {
	console.log(message.author.username, "used testserver");
	message.channel.send("https://discord.gg/uSJZTuG").catch(console.error);
}
