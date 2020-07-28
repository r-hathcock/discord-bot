// required modules
const fs = require('fs'); // fs = node's native file system module
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client(); // create a new discord client
client.commands = new Discord.Collection(); // create a collection of the client commands
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); // returns an array of all the files within the ./commands directory

// iterate through array of commandFiles and set them into the client.commands collection
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

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

    // check if command exists in client.commands collection
    // then attempt to execute command. Return error message if any
    if (!client.commands.has(command)) 
        return;
    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.log(error);
        message.reply('There was an error when attempting to execute the command');
    }
});


// login into Discord with the bot's token
client.login(token);