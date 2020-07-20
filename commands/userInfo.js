module.exports = {
    name: 'user-info',
    description: 'Display info',
    execute(message, args) {
        message.channel.send(`Your Username: ${message.author.username}\nID: ${message.author.id}`);
    }
};