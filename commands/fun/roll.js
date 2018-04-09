const request = require('request');

exports.run = (client, message, args) => {
    let diceroll = args.join(" ");
    request.get({
        url: `https://rolz.org/api/?${diceroll}.json`,
    }, function (err, httpResponse, body) {
        const obj = JSON.parse(body);
        message.channel.send({
            embed: {
                color: 3447003,
                author: {
                    name: "Roll Results",
                    icon_url: "https://d30y9cdsu7xlg0.cloudfront.net/png/10617-200.png"
                },
                description: diceroll,
                fields: [{
                    name: obj.result,
                    value: obj.details
                }],
                footer: {
                    text: message.author.username
                }
            }
        });
    });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 0
};

exports.help = {
  name: 'roll',
  category: 'fun',
  description: 'roll the specified type of dice (default 1d6)',
  usage: 'roll <amount>D<type>'
};
