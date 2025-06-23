const { MessageEmbed, MessageButton } = require("discord.js");

/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
  type: "Button",
  customId: "review_1",
  onlyOwner: true,
  enableWhiteList: true,
  /**
   * @param {import("discord.js").ButtonInteraction} interaction
   */
  async execute(interaction, { db: data, utils }) {
    const has = await utils.checkData(data);
    const embed = new MessageEmbed()
      .setAuthor(
        interaction.guild.name,
        interaction.guild.iconURL({ dynamic: true })
      )
      .setFooter("Colors © 2025");
    let image = "";
    let title = "الحصول علي العملة";
    let color = "BLUE";
    let description = "اضغط علي الزر الذي بالاسفل لفتح التذكرة";
    const db = utils.table("tickets_1", data);
    if (has.tickets1.title) title = await db.get("title");
    if (has.tickets1.color) color = await db.get("color");
    if (has.tickets1.description) description = await db.get("description");
    if (has.tickets1.image) image = await db.get("image");
    embed
      .setTitle(title)
      .setColor(color)
      .setDescription(description)
      .setImage(image);
    await interaction.reply({ embeds: [embed],ephemeral:true,components:[utils.row(
        new MessageButton().setLabel("Open").setCustomId('open_review').setStyle("PRIMARY" || await db.get('open_color'))
    )] });
  },
};
