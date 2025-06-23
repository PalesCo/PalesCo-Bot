const { Modal,TextInputComponent } = require("discord.js");

/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
  type: "Modal",
  customId: "channel_1",
  onlyOwner: true,
  enableWhiteList: true,
  /**
   * @param {import("discord.js").ModalSubmitInteraction} interaction
   */
  async execute(interaction, { utils,db:data }) {
    const id = interaction.fields.getTextInputValue("id");
    const channel = interaction.guild.channels.cache.get(id);
    await interaction.deferReply({ ephemeral: true });
    const db = utils.table("tickets_1", data);
    if (!channel) {
      return await interaction.editReply(
        `**الغرفة مش موجوده, اتاكد من الـID**`
      );
    }
    if (channel.type !== "GUILD_TEXT") {
      return await interaction.editReply(`**الـID ده مش لغرفة اتاكد انه لغرفة نصية**`);
    }
    const has = await utils.checkData(data);
    if (has.tickets1.channel) {
      await db.set("channel", channel.id);
      return interaction.editReply("**تم تعديل غرفة التذكرة بنجاح.**");
    } else {
      await db.set("channel", channel.id);
      return interaction.editReply("**تم تعيين غرفة التذكرة بنجاح.**");
    }
  },
};
