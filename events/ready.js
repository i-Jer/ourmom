const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Bot Ready! Logged in as ${client.user.tag}`);
        require("../handlers/CommandRegister.js");
		client.user.setActivity(`/help || Private Music Bot || Join for Access: discord.gg/SetsM2bRUC || Monitoring ${client.users.cache.size} users in ${client.guilds.cache.size} servers`, { type: ActivityType.Listening });
	},
};