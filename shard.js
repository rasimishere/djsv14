const { ShardingManager, WebhookClient, EmbedBuilder } = require('discord.js');
const chalk = new require('chalk');
const { token, shard: totalShards, webhook: url } = require("./config.json");
const kullanıcıAdı = "rrasim";
let wb;


const manager = new ShardingManager('bot.js', { token, respawn: true, totalShards });
