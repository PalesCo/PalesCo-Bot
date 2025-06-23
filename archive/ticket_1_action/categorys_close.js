/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
  type: "Modal",
  customId: "categorys_close_1",
  onlyOwner: true,
  enableWhiteList: true,
  /**
   * @param {import("discord.js").ModalSubmitInteraction} interaction
   */
  async execute(interaction, { utils, db: data }) {
    const id = interaction.fields.getTextInputValue("id");
    const categorys = interaction.guild.channels.cache.get(id);
    await interaction.deferReply({ ephemeral: true });
    const db = utils.table("tickets_1", data);
    if (!categorys) {
      return await interaction.editReply(
        `**الكتجوري مش موجوده في السيرفر اتاكد من الـID**`
      );
    }
    if (categorys.type !== "GUILD_CATEGORY") {
      return await interaction.editReply(`**الـID ده مش لكتجوري اتاكد منه.**`);
    }
    const has = await utils.checkData(data);
    if (has.tickets_1.categorys_close) {
      await db.set("categorys_close", categorys.id);
      return interaction.editReply("**تم تعديل كتجوري الاغلاق بنجاح.**");
    } else {
      await db.set("categorys_close", categorys.id);
      return interaction.editReply("**تم تعيين كتجوري الاغلاق بنجاح.**");
    }
  },
};
