/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
  type: "Modal",
  customId: "description_1",
  onlyOwner: true,
  enableWhiteList: true,
  /**
   * @param {import("discord.js").ModalSubmitInteraction} interaction
   */
  async execute(interaction, { db: data, utils, value }) {
    const description = interaction.fields.getTextInputValue("description");
    const db = utils.table("tickets_1", data);
    await db.set("description", description);
    await interaction.reply({
      content: "**تم تعديل وصف التذكرة بنجاح**",
      ephemeral: true,
    });
  },
};
