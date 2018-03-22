exports.run = (client, message, args) => {
console.log(message.author.username, "used iamnot");
	roleReq = args.join(" ").toLowerCase();
	switch(roleReq) {
		case "dnd":
			message.member.removeRole("395281683802226698").catch(console.error);
			message.reply(" Removed role DnD");	
			break;
		case "tv":
			message.member.removeRole("398995229987831808").catch(console.error);
			message.reply(" Removed role TV and Shit");
			break;
		case "homework":
			message.member.removeRole("408114668528205834").catch(console.error);
			message.reply(" Removed role homework homies");
			break;
		case "anime":
			message.member.removeRole("418553305367576588").catch(console.error);
			message.reply( "Removed role anime");
			break;
		default:
			break;
	}
}
