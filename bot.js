require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();
const botConfig = require("./config").config;
const prefix = botConfig.prefix;
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);



bot.on("ready", () => {
    console.info(`Logged in as ${bot.user.tag}!`);
  });

  bot.on("message", msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (command === 'ping') {
      msg.reply('pong');
      msg.channel.send('pong');
  
    } else if (command === "args") {
        msg.channel.send(`args are  ${args}`);
    }
  });