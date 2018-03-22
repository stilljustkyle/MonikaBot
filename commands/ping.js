exports.run = (client, message, args) => {
    console.log(message.author.username, "used ping");
    var ping = Math.round(client.ping);
    message.channel.send("Pong! `" + ping + "ms`").catch(console.error);
}
