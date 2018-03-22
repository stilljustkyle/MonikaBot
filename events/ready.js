exports.run = (client) => {
  console.log("ready");
  client.user.setPresence({ game: { name: '/help', type: 0 } });
}
