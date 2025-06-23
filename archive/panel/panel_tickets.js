const { MessageEmbed, MessageButton } = require("discord.js");

/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
  type: "SM",
  customId: "panel_tickets",
  onlyOwner: true,
  enableWhiteList: true,
  /**
   * @param {import("discord.js").SelectMenuInteraction} interaction
   */
  async execute(interaction, { db, utils, value }) {   
switch (value) {
  case "tickets_1":
    utils.table("tickets_1",db);
    const embed1 = new MessageEmbed()
    .setAuthor(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
    .setTitle("الحصول علي عملة السيرفر")
    .setColor("BLUE")
    .setDescription("**هذه هي الاعدادت الاساسية لـ الاعدادت الاخره اضغط علي زر 'Other' \n-# يوجد لكل اعداد امر سلاش كومند للتعديل المباشر.**");
    const button1 = utils.row(
    new MessageButton().setLabel("Ticket Channel").setCustomId('channel_1').setStyle("PRIMARY"),
    new MessageButton().setLabel("Categorys Open").setCustomId('categorys_open_1').setStyle("PRIMARY"),
    new MessageButton().setLabel("Categorys Close").setCustomId('categorys_close_1').setStyle("PRIMARY"),
    new MessageButton().setLabel("Info").setCustomId('info_1').setStyle("SECONDARY"),
    new MessageButton().setLabel("Other").setCustomId('other_1').setStyle("SECONDARY"),
    );
    await interaction.reply({embeds:[embed1],components:[button1],ephemeral:true})
    break;
  case "tickets_2":
    utils.table("tickets_2",db);
    const embed2 = new MessageEmbed()
    .setAuthor(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
    .setTitle("الاسأله حول الرصيد المعلق")
    .setColor("BLUE")
    .setDescription("**هذه هي الاعدادت الاساسية لـ الاعدادت الاخره اضغط علي زر 'Other' \n-# يوجد لكل اعداد امر سلاش كومند للتعديل المباشر.**");
    const button2 = utils.row(
    new MessageButton().setLabel("Ticket Channel").setCustomId('channel_2').setStyle("PRIMARY"),
    new MessageButton().setLabel("Categorys Open").setCustomId('categorys_open_2').setStyle("PRIMARY"),
    new MessageButton().setLabel("Categorys Close").setCustomId('categorys_close_2').setStyle("PRIMARY"),
    new MessageButton().setLabel("Support Role").setCustomId('support_2').setStyle("PRIMARY"),
    new MessageButton().setLabel("Other").setCustomId('other_2').setStyle("SECONDARY"),
    );
    await interaction.reply({embeds:[embed2],components:[button2],ephemeral:true})
    break;
  case "tickets_3":
    utils.table("tickets_3",db);
    const embed3 = new MessageEmbed()
    .setAuthor(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
    .setTitle("تبديل العملة بـ عملة اخره")
    .setColor("BLUE")
    .setDescription("**هذه هي الاعدادت الاساسية لـ الاعدادت الاخره اضغط علي زر 'Other' \n-# يوجد لكل اعداد امر سلاش كومند للتعديل المباشر.**");
    const button3 = utils.row(
    new MessageButton().setLabel("Ticket Channel").setCustomId('channel_3').setStyle("PRIMARY"),
    new MessageButton().setLabel("Categorys Open").setCustomId('categorys_open_3').setStyle("PRIMARY"),
    new MessageButton().setLabel("Categorys Close").setCustomId('categorys_close_3').setStyle("PRIMARY"),
    new MessageButton().setLabel("Info").setCustomId('info_3').setStyle("SECONDARY"),
    new MessageButton().setLabel("Other").setCustomId('other_3').setStyle("SECONDARY"),
    );
    await interaction.reply({embeds:[embed3],components:[button3],ephemeral:true})
    break;
  case "tickets_4":
    utils.table("tickets_4",db);
    const embed4 = new MessageEmbed()
    .setAuthor(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
    .setTitle("الدعم الفني")
    .setColor("BLUE")
    .setDescription("**هذه هي الاعدادت الاساسية لـ الاعدادت الاخره اضغط علي زر 'Other' \n-# يوجد لكل اعداد امر سلاش كومند للتعديل المباشر.**");
    const button4 = utils.row(
    new MessageButton().setLabel("Ticket Channel").setCustomId('channel_4').setStyle("PRIMARY"),
    new MessageButton().setLabel("Categorys Open").setCustomId('categorys_open_4').setStyle("PRIMARY"),
    new MessageButton().setLabel("Categorys Close").setCustomId('categorys_close_4').setStyle("PRIMARY"),
    new MessageButton().setLabel("Support Role").setCustomId('support_4').setStyle("PRIMARY"),
    new MessageButton().setLabel("Other").setCustomId('other_4').setStyle("SECONDARY"),
    );
    await interaction.reply({embeds:[embed4],components:[button4],ephemeral:true})
    break;
}
  },
};
