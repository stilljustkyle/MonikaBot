exports.run = (client, message, args, func) => {

  func.skip(client, message);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'skip',
  category: 'music',
  description: 'Skip the current song',
  usage: 'skip'
};
