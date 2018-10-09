const config = require('./config.js');
const functions = require('./functions.js');

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
    help: `Play some music using a youtube link.`,
    trigger: ({ client, msg, params, raw, clean }) => {
        functions.summon(msg).then(Player => {
            if (!msg.member.voice.channel) return msg.channel.send({ embed: { title: `Illusion Music`, color: 16711680, description: `You must be in a voice channel to use the play command`, footer: { text: `Illusion Music`, icon_url: client.user.avatarURL() }, timestamp: new Date() } });
            
            functions.fetchLink(raw).then(link => {
                functions.queueAdd({ Player, link, msg }).then((que) => {
                    if (Player.playing == null) {
                        functions.playNext({ Player, client }).catch(err => {
                            if (err.message && err.message == "no_track") {
                                return msg.channel.send({ embed: { title: `Illusion Music`, color: 16711680, description: `Sorry but that track could not be found, we're sorry for the trouble`, footer: { text: `Illusion Music`, icon_url: client.user.avatarURL() }, timestamp: new Date() } });
                            }
    
                            console.error(`Error executing playNext function - Error: ${err}`);
                            return msg.channel.send({ embed: { title: `Illusion Music`, color: 16711680, description: `Well, that was unexpected. Sorry about that something broke. Please try again later`, footer: { text: `Illusion Music`, icon_url: client.user.avatarURL() }, timestamp: new Date() } });
                        });
                    } else {
                        if (que.type != "playlist") {
                            msg.channel.send({ embed: { title: `Song added to queue`, color: 255, description: `That song has been added to the queue, view the queue with \`${prefix}queue\``, fields: [ { name: `Title`, value: `[${que.info.title}](${que.info.url})` }, { name: `Author`, value: `[${que.info.author.name}](${que.info.author.url})` }, { name: `Service`, value: (que.info.service == "youtube" ? `[YouTube](https://YouTube.com)` : `[SoundCloud](https://SoundCloud.com)`) }, { name: `Requested By`, value: `${que.user.tag}` } ], footer: { text: `Illusion Music`, icon_url: client.user.avatarURL() }, timestamp: new Date() } });
                        }
                    }
                }).catch(err => {
                    console.error(`Error on play command in ${msg.guild.name} - Error: ${err}`);
                    return msg.channel.send({ embed: { title: `Illusion Music`, color: 16711680, description: `I was unable to fetch a song with that query, please try again`, footer: { text: `Illusion Music`, icon_url: client.user.avatarURL() }, timestamp: new Date() } });
                });
        
            }).catch(err => {
                if (err.message && err.message == "no_tracks") {
                    return msg.channel.send({ embed: { title: `Illusion Music`, color: 16711680, description: `I was unable to find a song with that query, please try again`, footer: { text: `Illusion Music`, icon_url: client.user.avatarURL() }, timestamp: new Date() } });
                } else if (err.message && err.message == "not_supported") {
                    return msg.channel.send({ embed: { title: `Illusion Music`, color: 16711680, description: `Sorry that provider is not yet support on Illusion Music`, footer: { text: `Illusion Music`, icon_url: client.user.avatarURL() }, timestamp: new Date() } });
                } else {
                    console.error(`Error fetching link from ${raw} - Error: ${err}`);
                    return msg.channel.send({ embed: { title: `Illusion Music`, color: 16711680, description: `I was unable to find a song due to an unexpected error, please try again later`, footer: { text: `Illusion Music`, icon_url: client.user.avatarURL() }, timestamp: new Date() } });
                }
            });
        }).catch(err => {
            console.error(`Error on play command in ${msg.guild.name} - Error: ${err}`);
            return msg.channel.send({ embed: { title: `Illusion Music`, color: 16711680, description: `I was unable to play a song due to an unexpected error, please try again later`, footer: { text: `Illusion Music`, icon_url: client.user.avatarURL() }, timestamp: new Date() } });
        });
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