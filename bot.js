const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.PREFIX;
const spreadsheetId = process.env.SHEETID;
const readline = require('readline');
const {google} = require('googleapis');
const CODE1 = process.env.CODE1;
const CODE2 = process.env.CODE2;
const CODE3 = process.env.CODE3;
const CODE4 = process.env.CODE4;
const CODE5 = process.env.CODE5;
const CODE6 = process.env.CODE6;
const CODE7 = process.env.CODE7;
const CODE8 = process.env.CODE8;
const CODE9 = process.env.CODE9;
const CODE10 = process.env.CODE10;

client.on('ready', () => {
    console.log('I am ready!');
});

 

client.on('message', message => {
    if (message.content.startsWith(prefix) == true) {
        msg = message.content.toUpperCase();
        if (msg === prefix + 'PING') {

        message.reply('pong');
        } else if (msg == prefix + 'HELP') {
            message.channel.send({embed: {
                    color: 3447003,
                    title: "Help",
                    fields: [
                        { name: "Name", value: "Rolls \nHelp", inline: true},
                        { name: "Description", value: "Shows all available rolls. \nShows this message", inline: true},
                        { name: "Usage", value: ".rolls \n.help", inline: true},
                    ]
                }
            });
            
            
            
        } else if (msg == prefix + 'ROLLS') {
            message.channel.send({embed: {
                    color: 3447003,
                    title: "Available Rolls:",
                    fields: [
                        { name: "Rolls:", value: "1d2\n1d4\n1d6\n1d8\n1d12\n1d20\n1d100", inline: true},
                    ]
                }
            });
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
            message.channel.send("ERROR-CODE: " + CODE1);
            
            
        } else if (msg.startsWith(prefix + "LOGIN") == true && msg != prefix + "LOGIN RED") {
        
               //message.reply('invalid username');
                message.channel.send("Invalid Username");
           
        } else if (msg == prefix + 'LOGIN RED') {
            message.reply(':slight_smile:');
        
        };
    };

});

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
