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
      

} )
