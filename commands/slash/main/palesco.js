const { SlashCommandBuilder } = require("@discordjs/builders");
const { ESPalesCo } = require("palesco.js");
const palescoES = new ESPalesCo();
/**@type {import("../../../utils/types/SlashCommand").SlashCommand} */
module.exports = {
  data: new SlashCommandBuilder()
    .setName("palesco")
    .setDescription("That is the main command"),
  category: "Main",

  async execute({interaction}) {
    await interaction.reply({
      embeds: [palescoES.embeds.mains.main],
      components: palescoES.selectmenu.mains.main.row
    });
  },
};
