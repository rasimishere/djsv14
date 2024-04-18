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
            .addFields(
                {
                    name: "Bot Delay",
                    value: "```asciidoc\n= " + ping + " =\n```",
                    inline: true,
                },
                {
                    name: "Message Delay",
                    value: "```asciidoc\n= " + Math.floor(new Date().getTime() - interaction.createdTimestamp) + "ms =\n```",
                    inline: true,
                },
            )
            .setFooter({ text: `${interaction.user.tag}.`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
    }
  
}
