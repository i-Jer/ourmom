console.clear();
// init
const Discord = require("discord.js")
const { Collection } = require('discord.js');
const path = require("path")
const fs = require('fs');
const Client = require("./handlers/ClientStart.js");
const config = require("./configs/config.json");
const client = new Client();
// start bot
client.start();

// Distube
const DisTube = require("distube")
const COOKIE = 'VISITOR_INFO1_LIVE=GOMeHVFdMoQ;PREF=tz=Asia.Jakarta&f6=400&f7=100&f5=30000;HSID=AWg2AOAzD8TQObT9V;SSID=APOl0OhXhTWFQVll3;APISID=bbmSazBn7ciPi_UD/ArBXw7KyI3c9OJSal;SAPISID=6qM7sIt9vgs2UhK_/AcyGIjp5a6YoC9OKU;__Secure-1PAPISID=6qM7sIt9vgs2UhK_/AcyGIjp5a6YoC9OKU;__Secure-3PAPISID=6qM7sIt9vgs2UhK_/AcyGIjp5a6YoC9OKU;SID=ZQiFtupWoMWyeEdIB2GKgQMGXfXz3G9BNCVh1jjWE0SVbaYrdrVqalymEbrq60bjneYWXg.;__Secure-1PSID=ZQiFtupWoMWyeEdIB2GKgQMGXfXz3G9BNCVh1jjWE0SVbaYrw6CO52Ero5wr0appZU5Eaw.;__Secure-3PSID=ZQiFtupWoMWyeEdIB2GKgQMGXfXz3G9BNCVh1jjWE0SVbaYrfkBQ2MTNehGnLMI9Kx0qvg.;LOGIN_INFO=AFmmF2swRgIhAJC3RXtMZ_HUX2K9zqU__D8GRKhteUejZYG_WbT0WA92AiEAw00eYkyVQWaFbNasU8iE8kWaPVKfFWsxxXz3u_R1OAU:QUQ3MjNmeFdNUTFqODFLV3E5aV9hXzllaHVaUmdaU2NUaXhVYzFQRS15MVBud2J3MmZCRklsWEtPZG9xWEZud1hlTElqYmkxSlRtUm9HZUt5SFR2b205aEhhZFJUQVVXZURHRFN2dkE1YnJxUmlwY1p2Mi15TEUxZ0MxYWs2NDUxdHdzT2JqV0NCUmF4STVBeHlFVXlfSmFmaHBSSWR0Tl93;SIDCC=APoG2W9cKUde7PTfq0s2Zz9GVnCs2KvqClvTOLuQddoxpeWu9o50HM_SG-DAE5rEDL0_pUKLqKk;__Secure-3PSIDCC=APoG2W8EnEFajpBxjYf5UxsgZLY-C4yV1dvoC6pivs1b9n2eJqU1LfuP8it34Af6dSUXWAkRQ4X0';
client.distube = new DisTube.DisTube(client, {
    leaveOnEmpty: true,
    leaveOnFinish: true,
    emptyCooldown: 20,
    emitNewSongOnly: false,
    youtubeCookie: COOKIE,
    youtubeIdentityToken: 'QUFFLUhqbGtNQlVadXNJc0dGT3lLdjU0aW9UcTZ4Zk9VQXw\\u003d',
    emitAddSongWhenCreatingQueue: false,
    emitAddListWhenCreatingQueue: false
});

client.distube
    .on("playSong", (queue, song) => {
        const Embed = new Discord.EmbedBuilder()
            .setTitle('Now Playing')
            .setDescription(`Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`)
            .setColor('Green')
        queue.textChannel.send({ embeds: [Embed] })
    })
    .on("addSong", (queue, song) => queue.textChannel.send(
        `-> Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))
    .on("error", (e) => {
        console.log(e)
    })
    .on("empty", queue => queue.textChannel.send("Voice channel is empty! Leaving the channel..."))
    .on("finish", queue => queue.textChannel.send("Queue Finished!"))
