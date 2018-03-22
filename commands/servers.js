exports.run = (client, message, args) => {
	console.log(message.author.username, "used servers");
	var servers = (client.guilds.size);
	if (servers > 1) {
    message.channel.send("I am in " + servers + " servers").catch(console.error);
	}
	else {
		message.channel.send("I am in " + servers + " server").catch(console.error);
	}
}
