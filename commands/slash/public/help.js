const {
    MessageActionRow,
    MessageSelectMenu,
    MessageEmbed
  } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
  const row = new MessageActionRow().addComponents(
    new MessageSelectMenu().setCustomId("help").setOptions([
     {
      label:'About',
      description:"About Bot",
      value:'about',
      emoji:'ℹ'
     },
     {
      label:'How can use this bot??',
      description:"Let's see how can!",
      value:'hcutb',
      emoji:'🆘'
     },
     {
      label:'Commands',
      description:"See informations about all commands",
      value:'commands',
      emoji:'🔨'
     },
     {
      label:'Copyright',
      description:"Copyright informations ",
      value:'copy',
      emoji:'©'
     },
    ])
  );
  /**
 * @type {import("../../../utils/types/SlashCommand").SlashCommand}
 */
module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Are you lost?"),
  category:"Public",
  permissions:['SEND_MESSAGES','VIEW_CHANNEL'],
  login:false,
  async execute({interaction}) {
    const embed = new MessageEmbed()
    .setAuthor(interaction.user.tag,interaction.user.avatarURL({dynamic:true}))
    .setDescription(`NMM Bot 
      هو بوت عملة وساطه مجاني بالكامل!
      يمكن لـ اي سيرفر تخصيص اشياء تجعل البوت مميز في سيرفره مثل: **اسم العملة ,تحديد قيمة العملة الخ..**
      يمكن للتجار حفظ سجل تقييماتهم داخل البوت استحضاره متي سأل العميل. (في حالة وجوده ويحفظ التقييمات داخل السيرفر  فقط)
      `)
    .setColor(interaction.member.displayHexColor)
    interaction.reply({ embeds: [embed], components: [row] }); 
  },
};