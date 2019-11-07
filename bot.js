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
    //if message.content.startsWith(prefix) == true {
        msg = message.content.toUpperCase();
        if (msg === prefix + 'PING') {

        message.reply('pong');

           } else if (msg.startsWith(prefix + "LOGIN") == true && msg.content != prefix + "LOGIN RED") {
        
               //message.reply('invalid username');
                bot.sendMessage({
                    to: channelID,
                    message: "Invalid Username"
                });
           
        };
    //};

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
