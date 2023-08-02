const { Events } = require('discord.js');
const Client = require("../handlers/ClientStart.js")
/**
 * @param {Client} client 
 */

module.exports = {
	name: Events.InteractionCreate,
	once: false,
	async execute(interaction) {
		if(!interaction.isChatInputCommand()) return;
        if(interaction.guild.id !== "961793380445204550" && interaction.guild.id !== "877408138532384858" && interaction.commandName !== "help") return interaction.reply("Your server is not whitelisted, join discord.gg/SetsM2bRUC to request access!");
        const command = interaction.client.commands.get(interaction.commandName);
	    if (!command) {
		    console.error(`No command matching ${interaction.commandName} was found.`);
		    return;
	    }
	    try {
		    await command.execute(interaction);
	    } catch (error) {
	    	console.error(error);
	    	if (interaction.replied || interaction.deferred) {
	    		await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
	    	} else {
	    		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	    	}
	    }
	},
};