exports.run = (client, message, args, func) => {
  func.resume(client, message);
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'resume',
  category: 'music',
  description: 'Resumes the paused music',
  usage: 'resume'
};
