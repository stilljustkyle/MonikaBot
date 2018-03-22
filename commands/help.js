exports.run = (client, message, args) => {
	console.log(message.author.username, "used help");
	if (args.length > 0) {
		var command = args.join(" ");
		switch(command) {
			case "ping":
				message.channel.send("Displays latency");
				break;
			case "50range":
				message.channel.send("A meme from patch 7.10");
				break;
			case "fiora":
				message.channel.send("Rito loves fiora");
				break;
			case "purge":
				message.channel.send("Delete a specified number of messages\nUsage: `purge <#>`");
				break;
			case "setprefix":
				message.channel.send("Change the bot prefix\nUsage: `setprefix <new_prefix>`");
				break;
			case "leave":
				message.channel.send("Leave the voice channel");
				break;
			case "np":
				message.channel.send("Shows the current playing song");
				break;
			case "pause":
				message.channel.send("Pauses the current playing song");
				break;
			case "play":
				message.channel.send("Plays specified song\nUsage: `play <youtube_link>`");
				break;
			case "queue":
				message.channel.send("Displays all songs in the queue");
				break;
			case "resume":
				message.channel.send("Resumes a paused song");
				break;
			case "skip":
				message.channel.send("Skips the current song");
				break;
			case "volume":
				message.channel.send("Changes the volume of the playing music\nUsage: `volume <1 - 200>`");
				break;
			case "buymyfish":
				message.channel.send("Buy Doom's fish");
				break;
			case "anime":
				message.channel.send("Display information about a anime\nUsage: `anime <anime_name>`");
				break;
			case "manga":
				message.channel.send("Display information about a manga\nUsage: `manga <manga_name>`");
				break;
			case "coinflip":
				message.channel.send("Flips a coin");
				break;
			case "github":
				message.channel.send("Sends a link to my github");
				break;
			case "servers":
				message.channel.send("Checks how many servers I am in");
				break;
			case "invite":
				message.channel.send("Invite me to your server");
				break;
			case "testserver":
				message.channel.send("Link to my testing server");
				break;
			case "justmonika":
				message.channel.send("**Just Monika**");
				break;
			default:
				break;
		}
	}
		
	else {
		if (args.length < 1) {
			message.channel.send(":mailbox_with_mail: Commands sent via dm~").catch(console.error);
			message.author.send({embed: {
				color: 3447003,
				author: {
					name: "Monika Commands",
					icon_url: client.user.avatarURL
				},
				fields:[{
					name: "Fun Commands",
					value: "justmonika, 50range, fiora, buymyfish, coinflip, anime, manga"
				},
				{
					name: "Music Commands",
					value: "leave, np, pause, play, queue, resume, skip, volume"
				},
				{
					name: "Moderation Commands",
					value: "purge, setprefix"
				},
				{
					name: "Miscellaneous Commands",
					value: "ping, github, help, invite, servers, testserver"
				}],
				footer: {
					text: "help <command>"
				}
			}});
		}
	}
}
