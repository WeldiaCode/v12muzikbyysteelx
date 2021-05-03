const d = require('discord.js')
module.exports = {
    name: "skip",
    aliases: ["atla"],
    description: "Müzik Skipler",
    usage: "!skip",
    ownerOnly: false, 
    run: async (message,args,client) => {
        let song = client.player.skip(message);
        if(song) {
            const embed31 = new d.MessageEmbed()
            .setColor('GREEN')
            .setDescription(`${song.name} Adlı Şarkı Skiplendi`);
            message.channel.send(embed31)
        }
}}