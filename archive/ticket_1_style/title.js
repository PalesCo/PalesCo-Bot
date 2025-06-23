/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
  type: "Modal",
  customId: "title_1",
  onlyOwner: true,
  enableWhiteList: true,
  /**
   * @param {import("discord.js").ModalSubmitInteraction} interaction
   */
  async execute(interaction, { db:data, utils,value }) {
const title = interaction.fields.getTextInputValue("title");
const db = utils.table('tickets_1',data);
await db.set('title',title);
await interaction.reply({content:'**تم تعديل عنوان التذكرة بنجاح**',ephemeral:true});
  },
};
