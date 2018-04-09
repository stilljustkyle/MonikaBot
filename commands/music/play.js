//const ytdl = require("ytdl-core");
const config = require("../../config.json", "utf-8");

exports.run = (client, message, args, func) => {
  song = args.join(" ");
  if (!song) {
    message.channel.send("<:no_entry_sign:431991853420773387> | Plaese provide a link");
    return;
  }
  if (!message.member.voiceChannel) {
    message.channel.send("<:no_entry_sign:431991853420773387> | You must be in a voice channel");
    return;
  }
  func.play(client, message, song);
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'play',
  category: 'music',
  description: 'Play music from a YouTube link',
  usage: 'play <link>'
};
