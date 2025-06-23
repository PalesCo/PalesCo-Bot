const { Modal, TextInputComponent } = require("discord.js");

/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
  type: "Button",
  customId: "info_1",
  onlyOwner: true,
  enableWhiteList: true,
  /**
   * @param {import("discord.js").ButtonInteraction} interaction
   */
  async execute(interaction, { utils }) {
interaction.reply("حاليا لا يوجد معلومات")
  },
};
