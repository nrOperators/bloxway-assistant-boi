const Discord = require('discord.js');

exports.run = async (client, message) => {
    if(!message.member.roles.cache.some(role =>["Approved HR/SHR"].includes(role.name))){
        return message.channel.send (`❌ You don't have permissions to use this command. ❌`)}
    

    const trainingembed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Bloxway Training S-Locked')
    .setDescription(`The Training Session have been locked! \n \n Why now go at the Deli for a fresh sub?`)
    .setThumbnail('https://devforum.roblox.com/uploads/default/original/4X/9/6/5/96579bd047fbc55de559f5753261aa465881572b.png')
    .setTimestamp()
    .setFooter('Made by opxrator#0001 | Bloxway Assistant', 'https://devforum.roblox.com/uploads/default/original/4X/9/6/5/96579bd047fbc55de559f5753261aa465881572b.png');

    return message.guild.channels.cache.get('613159244077989909').send(trainingembed)
    }