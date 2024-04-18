const { ShardingManager, WebhookClient, EmbedBuilder } = require('discord.js');
const chalk = new require('chalk');
const { token, shard: totalShards, webhook: url } = require("./config.json");
const kullanıcıAdı = "rrasim";
let wb;


const manager = new ShardingManager('bot.js', { token, respawn: true, totalShards });

manager.on('shardCreate', shard => {
      console.log(chalk.green(`[SHARD SYSTEM] `) + chalk.red(`#${shard.id} ID'li shard başarıyla başlatıldı`));

      if(wb) {
        shard.on("disconnect", () => {
            wb.send({ embeds: [new EmbedBuilder().setDescription(`**<:re:1211900252072968253> \`#${shard.id}\` - ID'li shardın bağlantısı koptu, yeniden başlatılmayı deniyor**`).setColor("Red")] });
        });
         shard.on("reconnecting", () => {
            wb.send({ embeds: [new EmbedBuilder().setDescription(`**<a:loading:1211900247421362206> \`#${shard.id}\` - ID'li shard yeniden başlatılıyor**`).setColor("Orange")] });
        });
      shard.on("ready", async () => {
            wb.send({ embeds: [new EmbedBuilder().setDescription(`**<:aktif:1211900241629024306>\`#${shard.id}\` - ID'li shard başarıyla başlatıldı**`).setColor("Green")] });
        });
      shard.on("death", () => {
            wb.send({ embeds: [new EmbedBuilder().setDescription(`**<a:loading:1211900247421362206> \`#${shard.id}\` - ID'li shardın bağlantısı koptu, yeniden başlatılmayı deniyor**`).setColor("Red")] });
        })
      shard.on("error", (err) => {
            wb.send({ embeds: [new EmbedBuilder().setDescription(`**⛔ ‼️ \`#${shard.id}\` - ID'li shard'a bir hata oluştu\n\n• ${err}**`).setColor("Red")] });
        });
} 
})
