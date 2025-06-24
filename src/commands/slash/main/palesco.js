const { SlashCommandBuilder } = require("@discordjs/builders");
const { EmbedPalesCo, SelectMenuPalesCo } = require("palesco.js");
const embeds = new EmbedPalesCo();
const selectmenu = new SelectMenuPalesCo();
/**@type {import("../../../utils/types/SlashCommand").SlashCommand} */
module.exports = {
  data: new SlashCommandBuilder()
    .setName("palesco")
    .setDescription("That is the main command"),
  category: "Main",
  async execute({ interaction }) {
    await interaction.reply({
      embeds: [
        embeds.createEmbedByData(
          {
            title: embeds.embeds.mains.main.title,
            description: embeds.embeds.mains.main.description,
          },
          interaction.user
        ),
      ],
      components: selectmenu.selectmenu.mains.main.row,
    });
  },
};
