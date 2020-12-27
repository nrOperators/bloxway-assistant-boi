
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

client.once('ready', () => {
	console.log("Logged on without any errors noobie");
client.user.setActivity(".help | Bloxway Assistant", {
 type: "STREAMING",
 url: "https://www.twitch.tv/monstercat"
});
});

let commandlist = [];
fs.readdir('./commands/', async (err, files) => {
    if(err){
        return console.error(err);
    }
    files.forEach(async (file) => {
        if(!file.endsWith('.js')) return;
        let commandFile = require(`./commands/${file}`);
        commandlist.push({
            file: commandFile,
            name: file.split('.')[0]
        });
    });
});
client.on('message', message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).split(' ');
    const commandName = args[0].toLowerCase();
    args.shift();
    const command = commandlist.findIndex((cmd) => cmd.name === commandName);
    if(command == -1) return;
    commandlist[command].file.run(client, message, args);
});

client.login(token);