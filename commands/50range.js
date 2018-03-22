exports.run = (client, message, args) => {
	console.log(message.author.username, "used 50range");
	message.channel.send("https://i.redd.it/ivmwvtamh2cz.png");
}
