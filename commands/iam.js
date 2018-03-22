exports.run = (client, message, args) => {
	console.log(message.author.username, "used iam");
	roleReq = args.join(" ").toLowerCase();
	switch(roleReq) {
		case "dnd":
			message.member.addRole("395281683802226698").catch(console.error);
			message.reply(" Added role DnD");	
			break;
		case "tv":
			message.member.addRole("398995229987831808").catch(console.error);
			message.reply(" Added role TV and Shit");
			break;
		case "homework":
			message.member.addRole("408114668528205834").catch(console.error);
			message.reply(" Added role homework homies");
			break;
		case "anime":
			message.member.addRole("418553305367576588").catch(console.error);
			message.reply(" Added role anime");
			break;
		default:
			break;
	}
}
