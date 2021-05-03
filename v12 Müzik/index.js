const d = require("discord.js");
const cruach = require("cruach");  
const client = new d.Client();
let komuts = "./komutlar" //komutlar klasörü
let eventLoad = "./events" // event klasörü
let ownerID = ["SAHIP ID"] 
let owner = true; // bot sahibinin kullanabileceği komutları aktifleştirir
let ana = true;  // örnek komutları etkinleştirir
const loading = new cruach(client,komuts,eventLoad,ownerID,{owner,ana})

let answebots = false;

let prefix = "!" // örnek prefix

let pingprefix = true; 

let prefixtoping = true;

const { Player } = require("discord-music-player");
// nasıl yapılandırmak istiyorsanız burdan ayarlayın
const player = new Player(client, {
    leaveOnEnd: false,
    leaveOnStop: false,
    leaveOnEmpty: true,
    timeout: 0,
    volume: 100,
    quality: 'high',
});

client.player = player;

client.on('message', async (msg) => {
loading.message(msg,prefix,{answebots,prefixtoping,pingprefix})
})
client.login("TOKEN")