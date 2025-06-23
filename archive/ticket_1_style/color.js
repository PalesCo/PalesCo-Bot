/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
  type: "Modal",
  customId: "color_1",
  onlyOwner: true,
  enableWhiteList: true,
  /**
   * @param {import("discord.js").ModalSubmitInteraction} interaction
   */
  async execute(interaction, { db: data, utils, value }) {
    const color = interaction.fields.getTextInputValue("color");
    const db = utils.table("tickets_1", data);
    if (!color.startsWith("#")) {
      return await interaction.reply({
        content: "*يجب ان يبدأ الون بـ#*",
        ephemeral: true,
      });
    }
    if (!utils.textHexColor(color)) {
      return await interaction.reply({
        content: "**الون غير صالح**",
        ephemeral: true,
      });
    }
    await db.set("color", color);
    await interaction.reply({
      content: "**تم تعديل لون التذكرة بنجاح**",
      ephemeral: true,
    });
  },
};
