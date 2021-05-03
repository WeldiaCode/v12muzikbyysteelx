const d = require('discord.js')
module.exports = {
    name: "volume",
    aliases: ["ses"],
    description: "Botun Sesini Değiştirir",
    usage: "!volume <değer>",
    ownerOnly: false, 
    run: async (message,args,client) => {
        let end31 = client.player.setVolume(message, parseInt(args[0]));
        if (args[0] % 1 == 0){ 
            if(end31){ 
                const embed = new d.MessageEmbed()
                .setColor('GREEN')
                .setDescription(`Ses ${args[0]} Olarak Ayarlandı`)
                message.channel.send(embed);
            }
        }else{
            const hataembed = new d.MessageEmbed()
                .setColor('RED')
                .setDescription(`Ses Olarak Sayısal Bir Değer Girmelisiniz!`)
                message.channel.send(hataembed);
        }
}}