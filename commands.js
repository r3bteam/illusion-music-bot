const config = require('./config.js');

const cmds = [];

cmds.ping = {
    name: `ping`,
    help: `Just a test command to see if the bot is online.`,
    trigger: ({ client, msg, params, raw, clean }) => {
        let ms = 0;
        let mscount = setInterval(() => { ms++; }, 1);
        msg.channel.send('Pinging').then((m) => { m.edit('Pong : **' + ms + 'ms**'); clearInterval(mscount); });
    }
};

cmds.play = {
    name: `play`,
    help: `Play some music using a youtube link or search query.`,
    trigger: ({ client, msg, params, raw, clean }) => {
        // Play Command //
    }
};

cmds.stop = {
    name: `stop`,
    help: `Make the bot stop playing music and disconnect from the channel.`,
    trigger: ({ client, msg, params, raw, clean }) => {
        // Stop command //
    }
};

cmds.volume = {
    name: `volume`,
    help: `Change the current volume that the music is playing on.`,
    trigger: ({ client, msg, params, raw, clean }) => {
        // Volume Command //
    }
};

cmds.pause = {
    name: `pause`,
    help: `Pause the current playing song.`,
    trigger: ({ client, msg, params, raw, clean }) => {
        // Pause Command //
    }
};

cmds.resume = {
    name: `resume`,
    help: `Resume the music playing if you paused it.`,
    trigger: ({ client, msg, params, raw, clean }) => {
        // Resume Command //
    }
};

cmds.queue = {
    name: `queue`,
    help: `Get a list of the songs currently in the queue.`,
    trigger: ({ client, msg, params, raw, clean }) => {
        // Queue Command //
    }
};

cmds.shuffle = {
    name: `shuffle`,
    help: `Shuffle the current queue.`,
    trigger: ({ client, msg, params, raw, clean }) => {
        // Shuffle Command //
    }
};

cmds.remove = {
    name: `remove`,
    help: `Remove a song from the queue.`,
    trigger: ({ client, msg, params, raw, clean }) => {
        // Remove Command //
    }
};

cmds.repeat = {
    name: `repeat`,
    help: `Make the bot repeat the current song until you turn it off.`,
    trigger: ({ client, msg, params, raw, clean }) => {
        // Repeat Command //
    }
};

cmds.help = {
    name: `help`,
    help: `Returns with a list of commands for the bot.`,
    trigger: ({ client, msg, params, raw, clean }) => {
        // Help Command //
    }
};

module.exports = cmds;