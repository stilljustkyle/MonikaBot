exports.run = (client, message, args) => {
  var flip = Math.floor((Math.random() * 100) + 1);
  if (flip < 50) return message.channel.send("Coin landed on heads!");
  if (flip > 50) return message.channel.send("Coin landed on tails!");
  if (flip === 50) return message.channel.send("The coin landed dead center");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'coinflip',
  category: 'fun',
  description: 'Flips a coin',
  usage: 'coinflip'
};
