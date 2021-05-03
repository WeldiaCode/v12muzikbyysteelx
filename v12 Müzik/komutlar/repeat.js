const d = require('discord.js')
module.exports = {
    name: "repeat",
    aliases: ["döngü"],
    description: "Müziği Tekrarlatır",
    usage: "!repeat",
    ownerOnly: false, 
    run: async (message,args,client) => {
        const tercih = args[0]
        if(!tercih) return message.channel.send(new d.MessageEmbed().setColor('RED').setDescription(`**!döngü aç** Yada **!döngü kapat** Yazmalısın!`))
        if(tercih == "aç"){ 
            let status = client.player.setRepeatMode(message, true);
            if(status === null)
                return;
            let song = client.player.nowPlaying(message);
            if(song){ 
                message.channel.send(new d.MessageEmbed().setColor('GREEN').setDescription(`${song.name} İçin Sürekli Oynatma Aktif`));
            }
        }
        if(tercih == "kapat"){
            let status = client.player.setRepeatMode(message, false);
            if(status === null)
                return;
            let song = client.player.nowPlaying(message);
            if(song){ 
                message.channel.send(new d.MessageEmbed().setColor('GREEN').setDescription(`${song.name} İçin Sürekli Oynatma Deaktif`));
            }
        }
}}