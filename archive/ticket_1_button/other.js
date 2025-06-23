const { MessageEmbed,MessageActionRow,MessageSelectMenu, MessageButton } = require("discord.js");
const { bot } = require("../../utils/JS/config");
const developer = `https://discord.com/users/${bot.developerId}`;
const row = new MessageActionRow().setComponents(
  new MessageSelectMenu()
    .setCustomId("other_1")
    .setPlaceholder("Custom your server")
    .setOptions([
        {
            label:"Embed Title",
            value:"title",
            description:"تعديل عنوان التذكرة",
        },
        {
            label:"Embed Description",
            value:"description",
            description:"تعديل وصف التذكرة",

        },
        {
            label:"Embed Image",
            value:"image",
            description:"وضع صورة في التذكرة",

        },
        {
            label:"Embed Color",
            value:"color",
            description:"تعديل لون التذكرة",

        },
        {
            label:"Close Color",
            value:"close_color",
            description:" (داخل) تعديل لون زر الاغلاق",

        },
        {
            label:"Open Color",
            value:"open_color",
            description:"(خارج)تعديل لون زر فتح التذكره",

        },
    ])
);
/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
  type: "Button",
  customId: "other_1",
  onlyOwner: true,
  enableWhiteList: true,
  /**
   * @param {import("discord.js").ButtonInteraction} interaction
   */
  async execute(interaction, { client, db, utils }) {
    const embed = new MessageEmbed()
    .setAuthor(interaction.guild.name,interaction.guild.iconURL({dynamic:true}))
    .setTitle("اعدادت اضافية")
    .setColor("BLUE")
    .setDescription("**خصص رسالة التذكرة بطريقة تناسب سيرفرك.**");
    const button = utils.row(
      new MessageButton().setLabel("Review Embed").setCustomId("review_1").setStyle("SECONDARY").setEmoji('👁')
    )
  await interaction.reply({embeds:[embed],components:[row,button],ephemeral:true})
  },
};
