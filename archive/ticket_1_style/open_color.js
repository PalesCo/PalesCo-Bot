/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
  type: "SM",
  customId: "open_color_1",
  onlyOwner: true,
  enableWhiteList: true,
  /**
   * @param {import("discord.js").SelectMenuInteraction} interaction
   */
  async execute(interaction, { db: data, utils, value }) {
    
    const db = utils.table("tickets_1", data);
    await db.set("open_color", value.toUpperCase());
    await interaction.reply({
      content: "**تم تعديل لون الزر بنجاح**",
      ephemeral: true,
    });
  },
};
