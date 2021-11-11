const Discord = require('discord.js');
const config = require('./config.json');
module.exports.run = async(client, message, args) => {
message.delete()

const cmdEmbed = new Discord.MessageEmbed()
	.setColor('#00BDFF')
	.setTitle('📑・Liste des commandes.')
	.setURL("https://twitter.com/YLYenzerTv")
	.setAuthor ("Auteur du bot","https://imgur.com/MJ8nDWN.png")
	.setThumbnail("https://imgur.com/MJ8nDWN.png")
	.addFields(
    { name: '📃-help', value: '(Affiche les fonctionalité du bot.)' },
    { name: '⛺️-pdp', value: '(Afficher sa photo de profil.)' },
    { name: '📈-crea', value: '(Voir la date de création de son compte discord.)' },
    { name: '⛅️-meteo', value: '(Pour afficher la météo.)' },
    { name: '📣-sondage', value: '(Pour faire un sondage.)' },
    { name: '🤖-ibot', value: '(Information concernant le bot.)' }, 
    )
	
	.setTimestamp()
	.setFooter(" Youngless Team", "https://imgur.com/MJ8nDWN.png");

  message.channel.send(cmdEmbed);
}
module.exports.help = {
  name:"help"
}