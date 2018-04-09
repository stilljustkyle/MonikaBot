const config = require("./config.json", "utf-8");
const ytdl = require("ytdl-core");
const ypi = require('youtube-playlist-info');
const { YTSearcher } = require('ytsearcher');
const Discord = require("discord.js");
const db = require("quick.db");

const ytsearch = new YTSearcher({
  key: process.env.YOUTUBE_KEY,
  revealkey: true
});
var servers = {}

module.exports = {
  //music functions
  play: function(client, message, song) {
    if (!song.startsWith("https://www.youtube.com/watch?v=")) return message.channel.send("<:no_entry_sign:431991853420773387> | Invalid Link");
    if (!servers[message.guild.id]) servers[message.guild.id] = {
      queue: []
    };
    var server = servers[message.guild.id];
    ytsearch.search(song, { type: 'video' })
      .then(searchResult => {
        if (!searchResult.totalResults || searchResult.totalResults === 0) return message.channel.send("<:no_entry_sign:431991853420773387> | Failed to get search results");
        var result = searchResult.first;
        server.queue.push(result);
        if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
          playd(client, connection, message);
        });
    });
    function playd(client, connection, message) {
      console.log("test");
      var server = servers[message.guild.id];
      const embed = new Discord.RichEmbed();
      embed.setAuthor('Now Playing', client.user.avatarURL);
      embed.setColor(0x27e33d);
      embed.addField(`${server.queue[0].channelTitle}`, `[${server.queue[0].title}](${server.queue[0].url})`);
      embed.setThumbnail(server.queue[0].thumbnails.high.url);
      message.channel.send(embed);
      stream = ytdl(server.queue[0].url, { audioonly: true })
        .on('error', err => {
          console.log(err);
          server.queue.shift();
        });
        server.dispatcher = connection.playStream(stream);
        server.dispatcher.on("end", function() {
          server.queue.shift();
          if (server.queue[0]) playd(client, connection, message);
          else connection.disconnect();
        });
      }
    },

    skip: function(client, message) {
      var server = servers[message.guild.id];
      if (message.guild.voiceConnection) {
        const embed = new Discord.RichEmbed();
        embed.setAuthor('Skipped:', client.user.avatarURL);
        embed.setColor(0x27e33d);
        embed.addField(`${server.queue[0].channelTitle}`, `[${server.queue[0].title}](${server.queue[0].url})`);
        embed.setThumbnail(server.queue[0].thumbnails.high.url);
        message.channel.send(embed);
        if(server.dispatcher) server.dispatcher.end();
      } else message.channel.send("<:no_entry_sign:431991853420773387> | No music is being played");
    },

    leave: function(message) {
      var server = servers[message.guild.id];
      if (message.guild.voiceConnection) {
        var queueSize = server.queue.length;
        message.channel.send("<:musical_note:431669621523873792> | Successfully left your voice channel");
        message.guild.voiceConnection.disconnect();
        for (var i = 0; i < queueSize; i++) {
          server.queue[i] = [];
        }
      } else message.channel.send("<:no_entry_sign:431991853420773387> | Im not in a voice channel");
    },

    pause: function(client, message) {
      var server = servers[message.guild.id];
      if (!message.guild.voiceConnection) return message.channel.send("<:no_entry_sign:431991853420773387> | No music is being played");
      if (server.dispatcher.paused) return message.channel.send("<:no_entry_sign:431991853420773387> | Music already paused");
      const embed = new Discord.RichEmbed();
      embed.setAuthor('Paused:', client.user.avatarURL);
      embed.setColor(0x27e33d);
      embed.addField(`${server.queue[0].channelTitle}`, `[${server.queue[0].title}](${server.queue[0].url})`);
      embed.setThumbnail(server.queue[0].thumbnails.high.url);
      message.channel.send(embed);
      if (!server.dispatcher.paused) server.dispatcher.pause();
    },

    resume: function(client, message) {
      var server = servers[message.guild.id];
      if (!message.guild.voiceConnection) return message.channel.send("<:no_entry_sign:431991853420773387> | No music is being played");
      const embed = new Discord.RichEmbed();
      embed.setAuthor('Resumed:', client.user.avatarURL);
      embed.setColor(0x27e33d);
      embed.addField(`${server.queue[0].channelTitle}`, `[${server.queue[0].title}](${server.queue[0].url})`);
      embed.setThumbnail(server.queue[0].thumbnails.high.url);
      message.channel.send(embed);
      if (server.dispatcher.paused) server.dispatcher.resume();
    },

    nowplaying: function(client, message) { // come back later
      var server = servers[message.guild.id];
      if (!message.guild.voiceConnection) return message.channel.send("<:no_entry_sign:431991853420773387> | No music is being played");
      if (server.queue) {
        var songname = server.queue[0];
        const embed = new Discord.RichEmbed();
        embed.setAuthor('Now Playing:', client.user.avatarURL);
        embed.setColor(0x27e33d);
        embed.addField(`${server.queue[0].channelTitle}`, `[${server.queue[0].title}](${server.queue[0].url})`);
        embed.setThumbnail(server.queue[0].thumbnails.high.url);
        message.channel.send(embed);
        console.log(server.queue[0].title);
      }
    },

    queue: function(message) {
      var server = servers[message.guild.id];
      if (!message.guild.voiceConnection) return message.channel.send("<:no_entry_sign:431991853420773387> | No music is being played");
      if (server.queue) {
        var queueSize = server.queue.length;
        const embed = new Discord.RichEmbed();
        embed.setColor(0x27e33d);
        for (var i = 0; i < queueSize; i++) {
          embed.addField(`${server.queue[i].channelTitle}`, ` [${server.queue[i].title}](${server.queue[i].url})`);
        }
        embed.setFooter(`Total Songs: ${queueSize}`, message.author.displayAvatarURL);
        message.channel.send(embed);
      }
    }

}
