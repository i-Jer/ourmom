const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');
const DisTube = require("distube");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Play a song!')
        .addStringOption(option => 
            option.setName("query")
            .setDescription("what song are you thinking?")
            .setRequired(true)),
	async execute(interaction) {
		const Vchat = interaction.member.voice.channel;
        if(!Vchat) return interaction.reply("You need to be in a voice channel");

        let queue = interaction.client.distube.getQueue(interaction);
        if(queue) {
            if(queue.songs.length == 30) return interaction.reply("You can only add up to 30 songs in the queue");
        }
        
        const string = interaction.options.getString("query");
        
        interaction.reply("Searching Song!");
        interaction.client.distube.play(Vchat, string, {
            textChannel: interaction.channel,
            interaction,
            member: interaction.member
        });
	},
};