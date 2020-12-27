const Discord = require('discord.js');

exports.run = async (client, message) => {
        const helpembed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setThumbnail('https://devforum.roblox.com/uploads/default/original/4X/9/6/5/96579bd047fbc55de559f5753261aa465881572b.png')
        .setTitle('Bloxway Assistant Help')
        .setDescription('Here the list of commands are avalible.\n \n **Session Shouting**\n .shift | Post a shift in the session channel \n .sconcluded | Post in the session channel the shift have been concluded \n .training | Post a training in the session channel \n .tslocked | Post in the session channel the session have been locked \n .tconcluded | Post in the session channel the training have been concluded')
        .setTimestamp()
        .setFooter('Made by opxrator#0001 | Bloxway Assistant', 'https://devforum.roblox.com/uploads/default/original/4X/9/6/5/96579bd047fbc55de559f5753261aa465881572b.png');
    
        return message.channel.send(helpembed);
}
