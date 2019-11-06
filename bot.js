const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.PREFIX;
const spreadsheetId = process.env.SHEETID;
const readline = require('readline');
const {google} = require('googleapis');


client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {
    if message.content.startsWith(prefix) {
    message.content = message.content.toUpperCase();
    if (message.content === prefix + 'PING') {

       message.reply('pong');

       } else if (message.content.startsWith(prefix + "LOGIN") === true && message.content != prefix + "LOGIN RED") {
        
           message.reply('invalid username')
           
       };
    };

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
