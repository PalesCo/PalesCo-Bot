const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

/**@type {import("../../utils/types/BaseComponent").BaseComponent} */
module.exports = {
  type: "Button",
  customId: "open_review",
  onlyOwner: true,
  /**
     @param {import("discord.js").ButtonInteraction} interaction 
     */
  async execute(interaction,{db,utils}) {

    await interaction.reply({
      content:"للعرض فقط",
      ephemeral:true
    });
  },
};
