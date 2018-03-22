exports.run = (client, message, args) => {
	console.log(message.author.username, "used roles");
	message.channel.send({embed: {
		color: 3447003,
		author: {
			name: "Roles",
			icon_url: client.user.avatarURL
		},
		fields:[{
			name: "DnD",
			value: "role for people participating in DnD"
			},
			{
			name: "Homework",
			value: "role for people willing to help and needing help with homework"
			},
			{
			name: "TV",
			value: "role that is tagged when we start watching a show on rabbit"
		}],
		footer: {
			text: "iam <role>, iamnot <role> to assign and remove a role"
		}
	}});
}
