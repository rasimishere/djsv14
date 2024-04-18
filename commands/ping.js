const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");


module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("ping"),

        run: async (client, interaction) => {



        const ping = client.ws.ping + "ms"
            
    }
  
}
