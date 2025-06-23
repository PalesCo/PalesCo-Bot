/**@type {import("../../utils/types/BaseComponent").BaseComponent} */
module.exports = {
  type: "Modal",
  customId: "main_4",
  onlyOwner: true,
  /**
     @param {import("discord.js").ModalSubmitInteraction} interaction 
     */
  async execute(interaction, { db, utils }) {
    const name = interaction.fields.getTextInputValue("perfix");
    const has = await utils.checkData(db);

    await interaction.deferReply({ ephemeral: true });
    if (has.otherBotPerfix) {
      await interaction.editReply({
        content: "تم تعديل بادئة البوت الاخر.",
      });
      await db.set("otherBotPerfix", name);
    } else {
      await interaction.editReply({
        content: "تم تعيين بادئة البوت الاخر.",
      });
      await db.set("otherBotPerfix", name);
    }
  },
};
