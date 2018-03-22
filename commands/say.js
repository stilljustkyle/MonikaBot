const config = require("../config.json", "utf-8");

exports.run = (client, message, args) => {
	console.log(message.author.username, "used say");
	if(message.author.id !== config.ownerID) return;
	let text = args.slice(0).join(" ");
	message.channel.send(text);
	message.delete();
}
