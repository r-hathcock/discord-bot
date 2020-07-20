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
    // if message does not start with a prefix or was sent to a bot, exit
    if (!message.content.startsWith(prefix) || message.author.bot) 
        return;
    
    // args variable that slices off prefix, trims leftover whitespaces, and splits it into an array by spaces
    // command variable takes first element in args array and return it while removing it from array
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'server': {
            message.channel.send(`This server's name is: ${message.guild.name}\n` + 
            `Total members: ${message.guild.memberCount}\n` +
            `Owner: ${message.guild.owner}\n` +
            `Location: ${message.guild.region}\n` + 
            `Created at: ${message.guild.createdAt}`
            );
            break;
        }
        case 'user-info': {
            message.channel.send(`Your Username: ${message.author.username}\n` + 
            `ID: ${message.author.id}`
            );
            break;
        }
        case 'args-info': {
            if (!args.length) {
                return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
            }
            message.channel.send(`Command name: ${command}\nArguments: ${args}`);
            break;
        }
        case 'kick': {
            // message.mentions.users is a collection with a size
            // if there are no users in the collection, size === 0 and error message is returned
            if (!message.mentions.users.size) {
                return message.reply('You need to tag a user in order to kick them!');
            }
            // grab the "first" mentioned user from the message
            // this will return a 'User' object, just like 'message.author'
            const taggedUser = message.mentions.users.first();

            message.channel.send(`You want to kick: ${taggedUser.username}`);
            break;
        }
        case 'avatar': {
            // if there are no users in the message
            if (!message.mentions.users.size) {
                return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
            }
            
            // use .map to perform listed function and store each element into an array called avatarList
            const avatarList = message.mentions.users.map(user => {
                return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
            });
        
            // send the entire array of strings as a message
            message.channel.send(avatarList);
            break;
        }
        
}});

// login into Discord with the bot's token
client.login(token);