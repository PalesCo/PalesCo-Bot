const { Table } = require("st.db");

/**@type {import("../../utils/types/BaseComponent")} */
module.exports = {
  type: "Button",
  customId: "pending",
  /**
   * @param {import("discord.js").ButtonInteraction} interaction
   */
 async execute(interaction,{db, }) {
const userData = new Table(interaction.user.id,db);
await interaction.reply({content:`
  **الرصيد المعلق:** \`${await userData.get("pending")}\`
  # لماذا لا يحول الرصيد مباشرة؟
للتحقق من العملية اذا كانت ناجحة ام لا.
في حالة اذا كانت ناجحة يرسل الرصيد إليك في الرصيد الاساسي.
## \`يتم التحقق بواسطة ادارة السيرفر.\`
-# **مطور البوت ليس له علاقة بم يحدث**
    `,ephemeral:true});
  },
};
