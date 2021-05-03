const d = require('discord.js')
module.exports = {
    name: "resume",
    aliases: ["sürdür","devam-et"],
    description: "Müziği Devam Ettirir",
    usage: "!skip",
    ownerOnly: false, 
    run: async (message,args,client) => {
        let song = client.player.resume(message);
        if(song){ 
            message.channel.send(new d.MessageEmbed().setColor('RANDOM').setDescription(`${song.name} Adlı Şarkı Devam Ettiriliyor!`));
        } 
}}