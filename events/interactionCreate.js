const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");
const INTENTS = Object.values(GatewayIntentBits);
const client = new Client({ intents: INTENTS });
