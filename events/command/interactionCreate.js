const { slashCommands } = require("../../utils/JS/commands");
const { bot } = require("../../utils/JS/config");

/**
 * @type {import("../../utils/types/BaseEvent").BaseEvent}
 */
module.exports = {
  name: "interactionCreate",
  once: false,
  /**
  * @param {import("discord.js").Interaction} interaction 
  */
  async execute(interaction,{client}) {
    if (!interaction.isCommand()) return;
    const command = slashCommands.get(interaction.commandName);
   
    if (!command) return;
    if (!interaction.guild) {
      return await interaction.reply({
        content: "اعمل في السيرفرات فقط.",
        ephemeral:true
      });
    }
    if (!interaction.guild.members.me.permissions.has(bot.permissions)) {
     return await interaction.reply({
        content: "لا امتلك الصلاحيات الكافية.",
        ephemeral:true
      });
    }

    try {
      await command.execute({client, interaction, utils});
    } catch (error) {
      await interaction.reply({
        content: "حدث خطأ يرجاء المحاولة لاحقا. \n-# اذا تكرر تواصل مع المطور",
        ephemeral:true
      });
      console.error(
        `InteractionError: [CMD_NAME:${interaction.commandName}]:`,
        error
      );
    }
  },
};
