const d = require('discord.js')
module.exports = {
    name: "stop",
    aliases: ["kapat"],
    description: "Müziği Kapatır",
    usage: "!stop",
    ownerOnly: false, 
    run: async (message,args,client) => {
        let ends31 = client.player.stop(message);
        const embed = new d.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`Müzik Seansı Bitirildi!`)
        if(ends31) message.channel.send(embed);
}}