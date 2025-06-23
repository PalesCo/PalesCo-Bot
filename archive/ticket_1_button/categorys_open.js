const { Modal, TextInputComponent } = require("discord.js");

/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
  type: "Button",
  customId: "categorys_open_1",
  onlyOwner: true,
  enableWhiteList: true,
  /**
   * @param {import("discord.js").ButtonInteraction} interaction
   */
  async execute(interaction, { utils }) {
    const modal_categorys_1 = new Modal()
      .setTitle("Set Categorys")
      .setCustomId("categorys_open_1")
      .setComponents(
        utils.row(
          new TextInputComponent()
            .setLabel("ID")
            .setCustomId("id")
            .setStyle("SHORT")
            .setPlaceholder("Add Id of categorys")
            .setRequired(true)
        )
      );
    await interaction.showModal(modal_categorys_1);
  },
};
