const { EmbedBuilder } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");


module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("ping"),

        run: async (client, interaction) => {



        const ping = client.ws.ping + "ms"

        const embed = new EmbedBuilder()
            .setColor('#5865F2')
            .setTitle(`${client.user.username} Ping!`)
            .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
            
    }
  
}
