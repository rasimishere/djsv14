const { ActivityType, Events } = require("discord.js")
const { oynuyor } = require("./../config.json");
module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        let activities = [oynuyor], i = 0;
        setInterval(() => client.user.setActivity({ name: `${activities[i++ % activities.length]}`, type: ActivityType.Listening }), 22000);
    }
};
