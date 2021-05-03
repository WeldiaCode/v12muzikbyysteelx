const d = require('discord.js')
module.exports = {
    name: "pause",
    aliases: ["durdur"],
    description: "Müziği Durdurur",
    usage: "!pause",
    ownerOnly: false, 
    run: async (message,args,client) => {
        let song = client.player.pause(message);
        if(song) {
            message.channel.send(new d.MessageEmbed().setDescription(`${song.name} Adlı Şarkı Durduruldu!`))
        }
}}