const {
    MessageActionRow,
    MessageSelectMenu
  } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
  const row = new MessageActionRow().addComponents(
    new MessageSelectMenu().setCustomId("help").setOptions([
     {
      label:'About',
      description:"About Project",
      value:'about',
      emoji:'ℹ'
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
  async execute({interaction}) {
    interaction.reply({ content:'طفل شعرو كيرلي.',components: [row] }); 
  },
};