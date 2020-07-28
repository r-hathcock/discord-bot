module.exports = {
    name: 'kick',
    description: '',
    execute(message, args) {
        // message.mentions.users is a collection with a size
        // if there are no users in the collection, size === 0 and error message is returned
        if (!message.mentions.users.size) {
            return message.reply('You need to tag a user in order to kick them!');
        }
        // grab the "first" mentioned user from the message
        // this will return a 'User' object, just like 'message.author'
        const taggedUser = message.mentions.users.first();

        message.channel.send(`You want to kick: ${taggedUser.username}`);
    }
};