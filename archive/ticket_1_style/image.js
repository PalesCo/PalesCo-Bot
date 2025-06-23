const { MessageEmbed } = require("discord.js");

/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
  type: "Modal",
  customId: "image_1",
  onlyOwner: true,
  enableWhiteList: true,
  /**
   * @param {import("discord.js").ModalSubmitInteraction} interaction
   */
  async execute(interaction, { db: data, utils, value }) {
    const image = interaction.fields.getTextInputValue("url");
    if (!image.startsWith("https://" || 'http://')) {
      return await interaction.reply({
        content: "**يجب ان يكون رابط**",
        ephemeral: true,
      });
    }
    const db = utils.table("tickets_1", data);
    await db.set("image", image);
    await interaction.reply({
      content: "**تم تعديل صورة التذكرة بنجاح**",
      embeds:[new MessageEmbed().setImage(image)],
      ephemeral: true,
    });
  },
};
