const { ShardingManager, WebhookClient, EmbedBuilder } = require('discord.js');
const chalk = new require('chalk');
const { token, shard: totalShards, webhook: url } = require("./config.json");
const kullanıcıAdı = "rrasim";
let wb;


const manager = new ShardingManager('bot.js', { token, respawn: true, totalShards });

manager.on('shardCreate', shard => {
      console.log(chalk.green(`[SHARD SYSTEM] `) + chalk.red(`#${shard.id} ID'li shard başarıyla başlatıldı`));

} )
