const { MessageEmbed,MessageActionRow,MessageSelectMenu,MessageButton } = require("discord.js");
const { bot } = require("../../utils/JS/config");
const developer = `https://discord.com/users/${bot.developerId}`;
const button = new MessageActionRow().setComponents(
  new MessageButton().setLabel("Developer").setStyle("LINK").setURL(developer),
  new MessageButton()
    .setLabel("العودة للقائمة الرئيسية")
    .setStyle("PRIMARY")
    .setCustomId("return_panel")
);
const row = new MessageActionRow().setComponents(
  new MessageSelectMenu()
    .setCustomId("panel_tickets")
    .setPlaceholder("Custom your server")
    .setOptions([
        {
            label:"الحصول علي العملة الخاصه بالسيرفر",
            value:"tickets_1",
            description:"تعيين الغرفة و الاعدادت.",
            emoji:"💱"
        },
        {
            label:"الرصيد المعلق",
            value:"tickets_2",
            description:"تعيين الغرفة و الاعدادت.",
            emoji:"ℹ"
        },
        {
            label:"تبديل العملة بـ العملة الاخره",
            value:"tickets_3",
            description:"تعيين الغرفة و الاعدادت.",
            emoji:"💱"
        },
        {
            label:"الدعم الفني",
            value:"tickets_4",
            description:"تعيين الغرفة و الاعدادت.",
            emoji:"💬"
        },
    ])
);
/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
  type: "Button",
  customId: "tickets",
  onlyOwner: true,
  enableWhiteList: true,
  /**
   *
   * @param {import("discord.js").ButtonInteraction} interaction
   */
  async execute(interaction, { client, db, utils }) {
    const embed = new MessageEmbed()
      .setAuthor(
        interaction.user.tag,
        interaction.user.avatarURL({ dynamic: true })
      )
      .setTitle("Panel - Tickets")
      .setDescription(
        `
**اعدادت التذكره**
وضع التذكره و تعيين الغرفة الخاصه بها. من خلال اعدادت بسيطه وسهله.
`
      )
      .setColor("BLUE")
      .setFooter({
        text: interaction.guild.name + "|" + interaction.guild.id,
        iconURL: interaction.guild.iconURL({ dynamic: true }),
      });
   await interaction.update({ embeds: [embed], components: [row, button] });
  },
};
