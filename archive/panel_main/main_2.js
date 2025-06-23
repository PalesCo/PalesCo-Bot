/**@type {import("../../utils/types/BaseComponent").BaseComponent} */
module.exports = {
    type: "Modal",
    customId: "main_2",
    onlyOwner: true,
    enableWhiteList: true,

    /**
     @param {import("discord.js").ModalSubmitInteraction} interaction 
     */
    async execute(interaction,{db,utils }) {
      const name = interaction.fields.getTextInputValue("name");
      const has = await utils.checkData(db);
  await interaction.deferReply({ephemeral:true});
      if (has.coinName) {
        await interaction.editReply({
          content: "تم تعديل اسم العملة بنجاح"
        });
        await db.set("coinName", name);
      } else {
        await interaction.editReply({
          content: "تم تعيين اسم العملة بنجاح"
        });
        await db.set("coinName", name);
      }
    },
  };
  

