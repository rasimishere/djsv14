const { Client, GatewayIntentBits, Events, Collection} = require("discord.js");
const fs = require('node:fs');
const INTENTS = Object.values(GatewayIntentBits);
const client = new Client({ intents: INTENTS });
const config = require("./config.json");
const chalk = require('chalk');
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const { readdirSync } = require("fs");

let token = config.token;

client.commands = new Collection();
client.slashcommands = new Collection();
client.commandaliases = new Collection();

const rest = new REST({ version: "10" }).setToken(token);

const slashcommands = [];
const commandFolders = fs.readdirSync('./src');

console.log(chalk.red('[COMMANDS] Loading Commands...'));

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./src/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const commandPath = `./src/${folder}/${file}`;
        const command = require(commandPath);
        const commandCategory = folder.toLocaleUpperCase();
        slashcommands.push(command.data.toJSON());
        client.slashcommands.set(command.data.name, command);
        console.log(chalk.cyan('[KOMUT] ' + command.data.name + ' Yüklendi' + chalk.yellow(' - ') + chalk.red('Kategori: ' + commandCategory)));
    }
}
client.on(Events.ClientReady, async () => {
    try {
        await rest.put(Routes.applicationCommands(client.user.id), {
            body: slashcommands,
        });
    } catch (error) {
        console.error(error);
    }
    console.log(chalk.red(`[SUCCESS]`) + chalk.green(` ${client.user.username} Aktif Edildi!`));
});


client.login(config.token);
