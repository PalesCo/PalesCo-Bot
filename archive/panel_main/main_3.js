
/**@type {import("../../utils/types/BaseComponent").BaseComponent} */
module.exports = {
    type: "SM",
    customId: "main_3",
    onlyOwner: true,
    /**
     @param {import("discord.js").SelectMenuInteraction} interaction 
     */
    async execute(interaction,{db, value,utils}) {
const has = await utils.checkData();
      if (has.otherBot) {
        await interaction.update({
          content: "تم تعديل 'البوت الاخر'",
          components:[]
        });
        await db.set("otherBot", value);
      } else {
        await interaction.update({
          content: "تم تعيين 'البوت الاخر'",
          components:[]
        });
        await db.set("otherBot", value);
      }
    },
  };
  


