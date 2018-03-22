exports.run = (client, message, args) => {
  console.log(message.author.username, "used coinflip");
  var flip = Math.floor((Math.random() * 100) + 1);
  if (flip < 50) return message.channel.send("Coin landed on heads!");
  if (flip > 50) return message.channel.send("Coin landed on tails!");
  if (flip === 50) return message.channel.send("The coin landed dead center and rolled into a sewer drain... Whoops.");
};
