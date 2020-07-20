module.exports = {
    name: 'server',
    description:'Server Information',
    execute(message, args) {
        message.channel.send(`This server's name is: ${message.guild.name}\n` + 
            `Total members: ${message.guild.memberCount}\n` +
            `Owner: ${message.guild.owner}\n` +
            `Location: ${message.guild.region}\n` + 
            `Created at: ${message.guild.createdAt}`
        );
    }
}