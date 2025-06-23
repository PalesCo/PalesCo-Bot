const { 
    MessageEmbed,
    MessageSelectMenu,
    MessageButton,
    MessageActionRow 
} = require("discord.js");
const { bot } = require("../../utils/JS/config");
const developer = `https://discord.com/users/${bot.developerId}`;
const button = new MessageActionRow().setComponents(
    new MessageButton().setLabel("Developer").setStyle('LINK').setURL(developer),
    new MessageButton().setLabel("العودة للقائمة الرئيسية").setStyle("PRIMARY").setCustomId("return_panel"),
)
const row = new MessageActionRow().setComponents(
    new MessageSelectMenu().setCustomId("panel_main").setPlaceholder("Custom your server").setOptions([
        {
            label:"تحديد الـPerfix البوت.",
            value:"main_1",
            description:"خصص NMM بطريقة تناسب سيرفرك",
            emoji:"🖊"
        },
        {
            label:"اسم العملة",
            value:"main_2",
            description:"حدد اسم العملة الخاصه بك!",
            emoji:"💎"
        },
        {
            label:"عملة التبديل",
            value:"main_3",
            description:"حدد من العملات المدعومه",
            emoji:"💱"
        },
        {
            label:"بادئة البوت الاخر.",
            value:"main_4",
            description:"للتحويل يجب وضع بادئة التحويل الخاصه بالبوت الاخر",
            emoji:"🖊"
        },
        {
            label:"القائمة البيضاء",
            value:"main_5",
            description:"شرح القائمة البيضاء وتفاصيل عنها",
            emoji:"⚪"
        },
    ])
)

/**@type {import("../../utils/types/BaseComponent").BaseComponent} */
module.exports = {
    type:"Button",
    customId:"main",
    onlyOwner:true,
    /**@param {import('discord.js').ButtonInteraction} interaction*/
    async execute(interaction) {
const embed = new MessageEmbed()
.setTitle("Panel - Main")
.setAuthor({name:interaction.user.tag,iconURL:interaction.user.avatarURL({dynamic:true})})
.setDescription(`
# الاعدادت الاساسيه 
**تخصيص البوت بطريقة تناسب سيرفرك. من ناحية اسم العملة,بادئة البوت والمزيد من المميزات!**
    `).setColor("BLUE").setFooter({text:interaction.guild.name + '|' + interaction.guild.id,iconURL:interaction.guild.iconURL({dynamic:true})})

await interaction.update({embeds:[embed],components:[row,button]})
    }
}