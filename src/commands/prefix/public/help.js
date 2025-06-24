const {
    MessageActionRow,
    MessageSelectMenu
  } = require("discord.js");

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
 * @type {import("../../../utils/types/PerfixCommand").PrefixCommand}
 */
module.exports = {
  name: "example",
  description: "Are you lost?",
  short: ["help"],
  category:"Public",
  async execute({message}) {
    message.reply({ content:'طفل شعرو كيرلي.',components: [row] }); 
  },
};
