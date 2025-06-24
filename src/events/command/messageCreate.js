const { prefixCommands: prefixcommand } = require("../../utils/JS/commands");
const { bot } = require("../../utils/JS/config");
/**
 * @type {import("../../utils/types/BaseEvent").BaseEvent}
 */
module.exports = {
  name: "messageCreate",
  once: false,
  /**
   * @param {import("discord.js").Message} message
   */
  async execute(message,{client}) {
    if (message.author.bot) return;
    if (!message.guild) return message.react("❌");
    

    let Prefix = bot.prefix;

    //const guild = client.guilds.cache.get(message.guild.id);
    //const member = guild.members.cache.get(message.author.id);
    const args = message.content.slice(Prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    if (!message.content.startsWith(Prefix)) return;
    const command =
      prefixcommand.get(commandName) ||
      prefixcommand.find((cmd) => cmd.short && cmd.short.includes(commandName));
    if (!command) return;
    if (!message.guild.members.me.permissions.has(bot.permissions)) {
      await message.reply({
        content: "لا امتلك الصلاحيات الكافية.",
      });
      return;
    }
    try {
      await command.execute({client, message, args});
    } catch (error) {
      message.reply("حدث خطأ اثناء تنفيذ الامر.");
      console.log(`MessageError: [CMD_NAME:${commandName}]:`, error);
    }
  },
};
