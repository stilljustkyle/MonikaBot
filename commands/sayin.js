const config = require("../config.json", "utf-8");

exports.run = (client, message, args) => {
	console.log(message.author.username, "used sayin");
	if(message.author.id !== config.ownerID) return;
	let channel = message.content.split(" ").slice(1, 2)[0];
	let text = args.slice(1).join(" ");
	client.channels.get(channel).send(text);
}
