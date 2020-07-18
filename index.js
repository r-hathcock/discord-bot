// required modules
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
// create a new discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    console.log('Ready!');
    console.log('Welcome to BOT BOI!!!');
});

// on = can trigger multiple times
client.on('message', message => {
    if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send('Pong.');
    } else if (message.content.startsWith(`${prefix}beep`)) {
        message.channel.send('Boop.');
    } else if (message.content === `${prefix}server`) {
        message.channel.send(`This server's name is: ${message.guild.name}`);
        message.channel.send(`Total members: ${message.guild.memberCount}`);
        message.channel.send(`Owner: ${message.guild.owner}`);
        message.channel.send(`Location: ${message.guild.region}`);
        message.channel.send(`Created at: ${message.guild.createdAt}`);
    } else if (message.content === `${prefix}user-info`) {
        message.channel.send(`Your Username: ${message.author.username}`);
        message.channel.send(`ID: ${message.author.id}`);
    }
})

// login into Discord with the bot's token
client.login(token);