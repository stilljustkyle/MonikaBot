exports.run = (client, message, args, func) => {
  func.pause(client, message);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'pause',
  category: 'music',
  description: 'Pauses the music',
  usage: 'pause'
};
