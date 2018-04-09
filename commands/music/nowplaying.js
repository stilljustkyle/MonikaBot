exports.run = (client, message, args, func) => {
  func.nowplaying(client, message);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['np'],
  permLevel: 0
};

exports.help = {
  name: 'nowplaying',
  category: 'music',
  description: 'Displays what song is currently playing',
  usage: 'nowplaying'
};
