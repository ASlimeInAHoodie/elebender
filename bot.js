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
    if (message.content.startsWith(prefix) == true) {
        msg = message.content.toUpperCase();
        if (msg === prefix + 'PING') {

        message.reply('pong');

           } else if (msg.startsWith(prefix + "LOGIN") == true && msg != prefix + "LOGIN RED") {
        
               //message.reply('invalid username');
                message.channel.send("Invalid Username");
           
        } else if (msg == prefix + 'LOGIN RED') {
            message.reply(':slight_smile:');
        } else if (msg == prefix + 'ROLLS') {
            message.reply('**Rolls Available:**');
            message.reply('1d2');
            message.reply('1d4');
            message.reply('1d6');
            message.reply('1d8');
            message.reply('1d12');
            message.reply('1d20');
            message.reply('1d100');
            
        } else if (msg == prefix + '1D2') {
            message.reply('2');
        } else if (msg == prefix + '1D4') {
            message.reply('4');
        } else if (msg == prefix + '1D6') {
            message.reply('5');
        } else if (msg == prefix + '1D8') {
            message.reply('3');
        } else if (msg == prefix + '1D12') {
            message.reply('3');
        } else if (msg == prefix + '1D20') {
            message.reply('9');
        } else if (msg == prefix + '1D100') {
            message.reply('10[] AE>{M( P(@)T ">G>:+ ');
            message.channel.send("ERROR");
        };
    };

});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
