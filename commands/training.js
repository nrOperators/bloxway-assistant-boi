const Discord = require('discord.js');

exports.run = async (client, message) => {
    if(!message.member.roles.cache.some(role =>["Approved HR/SHR"].includes(role.name))){
        return message.channel.send (`❌ You don't have permissions to use this command. ❌`)}
    
    
        message.guild.channels.cache.get('613159244077989909').send('@here')
    const trainingembed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Bloxway Training')
    .setDescription(`A Training is getting hosted at the Training Center! Join up!\n\n\n **Hosted by:**\n<@${message.author.id}>\n\n\n **Game link:** https://www.roblox.com/games/6109020731 \n\n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n \n **● Become a Worker** \n **● Prepare Fresh Food for the Community** \n **● MR+ can Help**\n \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ \n \n **Make sure to join for a chance of promotion!**`)
    .setThumbnail('https://devforum.roblox.com/uploads/default/original/4X/9/6/5/96579bd047fbc55de559f5753261aa465881572b.png')
    .setTimestamp()
    .setFooter('Made by opxrator#0001 | Bloxway Assistant', 'https://devforum.roblox.com/uploads/default/original/4X/9/6/5/96579bd047fbc55de559f5753261aa465881572b.png');

    
    return message.guild.channels.cache.get('613159244077989909').send(trainingembed)
    }