/**@type {import("../../utils/types/BaseComponent").BaseComponent} */
module.exports = {
  type: "Modal",
  customId: "main_1",
  onlyOwner: true,
  enableWhiteList: true,
  /**
  @param {import("discord.js").ModalSubmitInteraction} interaction 
  */
  async execute(interaction, { db,utils}) {
    const perfix = interaction.fields.getTextInputValue("perfix");
    const hasPerfix = await utils.checkData(db)
    await interaction.deferReply({ ephemeral: true });
    if (hasPerfix) {
      await interaction.editReply({
        content: "تم تعديل البادئة الخاصه بي.",
      });
      await db.set("prefix", perfix);
    } else {
      await interaction.editReply({
        content: "تم تعيين بادئة الخاصه بي.",
      });
      await db.set("prefix", perfix);
    }
  },
};
