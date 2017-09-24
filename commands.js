const config = require('./config.js');

const cmds = [];

cmds.ping = {
    name: `ping`,
    help: `Just a test command to see if the bot is online.`,
    trigger: ({ client, msg, params, raw, clean }) => {
        var ms = 0;
        var mscount = setInterval(() => { ms++; }, 1);
        msg.channel.send('Pinging').then((m) => { m.edit('Pong : **' + ms + 'ms**'); clearInterval(mscount); });
    }
};

module.exports = cmds;