exports.run = (client, message, args, func) => {
  func.leave(message);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'leave',
  category: 'music',
  description: 'Makes me leave the voice channel',
  usage: 'leave'
};
