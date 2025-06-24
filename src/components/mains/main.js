const { DataPalesCo, EmbedPalesCo, SelectMenuPalesCo } = require("palesco.js");
const data = new DataPalesCo();
const embeds = new EmbedPalesCo();
const selectmenu = new SelectMenuPalesCo();
/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
  type: "SM",
  customId: selectmenu.selectmenu.mains.main.customId,
  /** @param {import("discord.js").SelectMenuInteraction} interaction*/
  async execute(interaction, { value }) {
    const embedData = embeds.embeds.mains[this.customId];
    if (embedData[value].title && embedData[value].description) {
      const embed = embeds.createEmbedByData(
        {
          title: embedData[value].title,
          description: embedData[value].description,
        },
        interaction.user
      );
      if (embedData[value].fields) embed.setFields(embedData[value].fields);
      return await interaction.update({
        embeds: [embed],
        components: selectmenu.getSelectMenu(this.customId).row,
      });
    } else {
      return await interaction.reply({
        content: "Not supported now",
        ephemeral: true,
      });
    }
  },
};
