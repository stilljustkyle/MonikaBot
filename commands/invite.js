exports.run = (client, message, args) => {
    console.log(message.author.username, "used invite");
    message.channel.send("https://discordapp.com/oauth2/authorize?&client_id=397998270171054080&scope=bot&permissions=0").catch(console.error);
}
