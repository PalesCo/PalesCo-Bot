 const { SlashCommandBuilder } = require("@discordjs/builders");
 /**
 * @type {import("../../../utils/types/SlashCommand").SlashCommand}
 */
module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("pong!"),
  category:"Main",
  async execute({interaction}) {
  await  interaction.reply(`Pong 🏓 ${interaction.client.ws.ping}ms`)
  },
};