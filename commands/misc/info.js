const Discord = require("discord.js");

exports.run = (client, message, args) => {
  // Find the uptime
  /*
  var uptime = client.uptime;
  var days = Math.floor(uptime / (24 * 60 * 60 * 1000));
  var hours = Math.floor( (uptime - days * (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  var mins = Math.round( (uptime - days * (24 * 60 * 60 * 1000) - hours * (60 * 60 * 1000)) / 60000);
  if(mins === 60){
    hours++;
    mins = 0;
  }
  if(hours === 24){
    days++;
    hours = 0;
  }
  */
  var totalSeconds = (client.uptime / 1000);
  var days = Math.floor(totalSeconds / 86400);
  totalSeconds %= 86400;
  var hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  var mins = Math.floor(totalSeconds / 60);
  var seconds = Math.floor(totalSeconds % 60);


  const embed = new Discord.RichEmbed();
  embed.setAuthor('Information', client.user.avatarURL);
  embed.setColor(0x27e33d);
  embed.setThumbnail(client.user.avatarURL);
  embed.addField("<:desktop:432250994965872640> Servers",client.guilds.size, true); //Servers
  embed.addField("<:busts_in_silhouette:432251213065617427> Users", client.users.size, true); // Users
  embed.addField("<:battery:432252074416275461> RAM Usage",`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`, true); // RAM usage
  embed.addField("<:clock2:432251722078093327> Uptime",`${days}d ${hours}h ${mins}m ${seconds}s', true); // Uptime
  embed.addField("<:incoming_envelope:432252757416869908> Invite Link", `[Invite Me!](https://discordapp.com/oauth2/authorize?client_id=397998270171054080&permissions=8&scope=bot)`, true);
  embed.addField("<:tools:432252397461700609> Support Server", `[Monika Support](https://discord.gg/uSJZTuG)`, true);
  embed.addField("<:card_box:432253023067176960> Source", `[GitHub Repo](https://github.com/stilljustkyle/MonikaBot)`, true);
  embed.addField("<:wrench:432251508718043176> Developer", "<@188451970309160960>", true);
  if (message.guild) embed.setFooter(message.guild.name, message.guild.iconURL);
  if (!message.guild) embed.setFooter(message.author.username, message.author.avatarURL);
  embed.setTimestamp(new Date());

  message.channel.send(embed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'info',
  category: 'misc',
  description: 'Provides information about me!',
  usage: 'info'
};
