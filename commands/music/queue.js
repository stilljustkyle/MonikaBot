exports.run = (client, message, args, func) => {
  func.queue(message);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'queue',
  category: 'music',
  description: 'Displays the music queue',
  usage: 'queue'
};
