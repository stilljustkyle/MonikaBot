const Discord = require("discord.js");
const Music = require('discord.js-musicbot-addon');
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const request = require("request");
const fs = require("fs");
const getYouTubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");
const config = require("./config.json", "utf-8");
const music = new Music(client, {
  youtubeKey: process.env.YOUTUBE_KEY,
  prefix: config.prefix,
  anyoneCanSkip: true,
  anyoneCanLeave: true,
  disableHelp: true,
  streamMode: "0"
});

fs.readdir("./events/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		let eventFunction = require(`./events/${file}`);
		let eventName = file.split(".")[0];
		client.on(eventName, (...args) => eventFunction.run(client, ...args));
	});
});

client.on("message", (message) => {
	if (message.author.bot) return;
	if(message.content.indexOf(config.prefix) !== 0) return;
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	try {
		let commandFile = require(`./commands/${command}.js`);
		commandFile.run(client, message, args);
	} catch (err) {
		console.error(err);
	}
});

client.login(process.env.BOT_TOKEN);
