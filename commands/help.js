const { SlashCommandBuilder } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Shows Help Panel!'),
	async execute(interaction) {

        const embed = new Discord.EmbedBuilder()
            .setTitle("Help")
            .setDescription("Hi! We are now a private music bot with possibly some games commands, join discord.gg/SetsM2bRUC for access")
            .addFields(
                { name: 'play', value: '/play [song/query]', inline: true },
                { name: 'stop', value: '/stop', inline: true },
                { name: 'queue', value: '/queue', inline: true },
                { name: 'ping', value: '/ping (this command is only used to help devs check if the bot is properly working)'},
            )
            .setColor('Green')

        interaction.reply({ embeds: [embed], ephemeral: true });

	},
};