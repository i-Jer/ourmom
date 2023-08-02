const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kill')
		.setDescription('kill the bot!'),
	async execute(interaction) {
        if(interaction.user.id !== "597588545913487380"){
            interaction.reply("Don't kill me please");
        } else {
            interaction.reply('Killing process!');
            process.exit(0);
        }
	},
};