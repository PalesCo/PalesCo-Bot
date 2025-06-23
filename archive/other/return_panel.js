const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { panelEmbed } = require("../../utils/functions/embeds");
const row = require("../../utils/functions/row");

const buttons = row(
  new MessageButton().setLabel("Main").setCustomId("main").setStyle("PRIMARY"),
  new MessageButton().setLabel("Logs").setCustomId("logs").setStyle("PRIMARY"),
  new MessageButton().setLabel("Tickets").setCustomId("tickets").setStyle("PRIMARY"),
  new MessageButton().setLabel("ID").setCustomId("id").setStyle("PRIMARY")
);
/**@type {import("../../utils/types/BaseComponent").BaseComponent} */
module.exports = {
  type: "Button",
  customId: "return_panel",
  onlyOwner: true,
  /**
     @param {import("discord.js").ButtonInteraction} interaction 
     */
  async execute(interaction,{db, }) {
    await interaction.update({
      embeds: [panelEmbed(interaction.guild, interaction.user)],
      components: [buttons],
    });
  },
};
