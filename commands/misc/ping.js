exports.run = (client, message, args, perms) => {
    var ping = Math.round(client.ping);
    message.channel.send("Pong! `" + ping + "ms`").catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'ping',
  category: 'misc',
  description: 'Ping/Pong command.',
  usage: 'ping'
};
