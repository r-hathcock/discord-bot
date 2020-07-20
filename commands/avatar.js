module.exports = {
    name: 'avatar',
    description: 'Returns links to user\'s avatars',
    execute(message, args) {
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
    }
};