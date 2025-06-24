const { SelectMenuPalesCo, DataPalesCo, EmbedPalesCo } = require("palesco.js");
const data = new DataPalesCo();
const embeds = new EmbedPalesCo();
const selectmenu = new SelectMenuPalesCo();
/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
  type: "SM",
  customId: selectmenu.selectmenu.mains.history.customId,
  /** @param {import("discord.js").SelectMenuInteraction} interaction*/
  async execute(interaction, { value }) {
    const embedData = embeds.embeds.history[value];
    if (embedData.title && embedData.description) {
      const embed = embeds.createEmbedByData(
        { title: embedData.title, description: embedData.description },
        interaction.user
      );
      if (embedData.fields) embed.setFields(embedData.fields);
      return await interaction.update({
        embeds: [embed],
        components: selectmenu.getSelectMenu(value).row,
      });
    } else {
      return await interaction.reply({
        content: "Not supported now",
        ephemeral: true,
      });
    }
  },
};
