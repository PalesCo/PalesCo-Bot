const chalk = require("chalk");
const { bot } = require("../../utils/JS/config");
require("dotenv").config();
module.exports = {
  name: "ready",
  once: true,
  execute(a,{client}) {
    console.log(chalk.green.bold(` log in ✅ ${client.user.tag}`));
    
    setInterval(() => {
      const activity = bot.status[Math.floor(Math.random() * bot.status.length)];
      client.user.setStatus("dnd");
      client.user.setActivity(activity, "PLAYING");
    }, bot.timestamp);
  },
};