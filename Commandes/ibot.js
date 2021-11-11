const Discord = require('discord.js');
const config = require('./config.json');

module.exports.run = async(client, message, args) => {
message.delete()
const botinfoEmbed = new Discord.MessageEmbed()
      .setColor('#00BDFF')
      .setTitle('📈・Information concernant le bot !')
      .setURL("https://twitter.com/YLYenzerTv")
      .setAuthor ("Auteur du bot","https://imgur.com/MJ8nDWN.png")
      .setThumbnail("https://imgur.com/MJ8nDWN.png")
      .addFields(
          { name: '\u200B', value: '\u200B' },
          { name: '✨ | Création :', value: '11/11/2021', inline: true },
          { name: '⌨ | Développeur :', value: '!Yenzer#0001', inline: true },
      )
      .addField('Présence :', `${client.guilds.cache.size} serveurs`,  true)
      .setTimestamp()
      .setFooter(" Youngless Team", "https://imgur.com/MJ8nDWN.png");

  
  message.channel.send(botinfoEmbed);

}

module.exports.help = {
    name:"ibot"
}