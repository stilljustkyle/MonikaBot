exports.run = (client, message, args) => {
    console.log(message.author.username, "used github");
    message.channel.send("https://github.com/stilljustkyle/MonikaBot").catch(console.error);
}
