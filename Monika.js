const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json", "utf-8");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

//Load event files
fs.readdir("./events/", (err, files) => {
	if (err) return console.error(err);
  console.log(`Loading ${files.length} events...`);
	files.forEach(file => {
		let eventFunction = require(`./events/${file}`);
		let eventName = file.split(".")[0];
		client.on(eventName, (...args) => eventFunction.run(client, ...args));
    console.log(`Loading Event: ${eventName}`);
	});
});

//Load command files
fs.readdir(`./commands`, (err, categories) => {
	let totalcommands = 0;
	for (let i = 0; i < categories.length; i++) {
		fs.readdir(`./commands/${categories[i]}`, (err, files) => {
			totalcommands = totalcommands + files.length;
			files.forEach(f => {
				try {
					let props = require(`./commands/${categories[i]}/${f}`);
					let commandName = f.split(".")[0];
					console.log(`Loading command: ${props.help.name}`);
					if (!props.help.category) props.help.category = categories[i];
					client.commands.set(props.help.name, props);
					props.conf.aliases.forEach(alias => {
						client.aliases.set(alias, props.help.name);
					});
				} catch (err) {
					console.log(`Failed to load command ${f}: ${err}`);
				}
			});
		});
	}
});
/*
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`Loading ${files.length} commands...`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    let commandName = f.split(".")[0];
    console.log(`Loading Command: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
*/

//Permision levels
client.elevation = function(message) {
  let permlvl = 0;
	if (message.channel.type === 'dm') return;
  let mod_role = message.guild.roles.find('name', 'Moderator');
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  let admin_role = message.guild.roles.find('name', 'Admin');
  if (admin_role && message.member.roles.has(admin_role.id))permlvl = 3;
  if (message.author.id === require('./config.json').ownerID) permlvl = 4;
  return permlvl;
}

client.login(process.env.BOT_TOKEN);
