const { Modal,TextInputComponent } = require("discord.js");

/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
  type: "Button",
  customId: "channel_1",
  onlyOwner: true,
  enableWhiteList: true,
  /**
   * @param {import("discord.js").ButtonInteraction} interaction
   */
  async execute(interaction, { utils }) {
const modal_channel_1 = new Modal().setTitle("Set Channel").setCustomId("channel_1").setComponents(
    utils.row(
        new TextInputComponent()
        .setLabel("ID")
        .setCustomId('id')
        .setStyle("SHORT")
        .setPlaceholder("Add Id of channel")
        .setRequired(true)
    )
);
await interaction.showModal(modal_channel_1);
  },
};
