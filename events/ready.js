exports.run = (client) => {
  console.log('===== Monika Online! =====')
  client.user.setPresence({ game: { name: '/help', type: 0 } });
}
