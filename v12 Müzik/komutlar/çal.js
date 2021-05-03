const d = require('discord.js')
module.exports = {
    name: "çal",
    aliases: ["play"],
    description: "Müzik Oynatır",
    usage: "!çal <isim>",
    ownerOnly: false, 
    run: async (message,args,client) => {
        if(client.player.isPlaying(message)) {
            let song = await client.player.addToQueue(message, args.join(' '));
            if(song){ 
            const embed1 = new d.MessageEmbed()
            .setColor("ORANGE")
            .setDescription(`${song.name} Adlı Şarkı Kuyruğa Eklendi!`)
                message.channel.send(embed1);
            return;
            }
        } else {
            let song = await client.player.play(message, args.join(' '));
            if(song){ 
            const embed2 = new d.MessageEmbed()
        .setColor("ORANGE")
        .setDescription(`${song.name} Adlı Şarkı Oynatılıyor!`)
                message.channel.send(embed2);
            return;
            }
        }
  }}