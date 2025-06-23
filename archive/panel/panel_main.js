//const { Modal, TextInputComponent, showModal } = require("discord-modals");
//const client = require("../../utils/JS/client");
const {
  MessageActionRow,
  MessageSelectMenu,
  Modal,
  TextInputComponent,
  MessageEmbed,
} = require("discord.js");

/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
  type: "SM",
  customId: "panel_main",
  onlyOwner: true,
  /**
  @param {import("discord.js").SelectMenuInteraction} interaction 
  */
  async execute(interaction, { value, utils }) {
    const main_1_modal = new Modal()
      .setTitle("Set Bot Perfix")
      .setCustomId("main_1")
      .addComponents(
        utils.row(
          new TextInputComponent()
            .setLabel("Perfix")
            .setCustomId("perfix")
            .setMinLength(1)
            .setMaxLength(1)
            .setValue("!")
            .setStyle("SHORT")
            .setRequired(true)
        )
      );
    const main_4_modal = new Modal()
      .setTitle("Set Other Bot Perfix")
      .setCustomId("main_4")
      .addComponents(
        utils.row(
          new TextInputComponent()
            .setLabel("Perfix")
            .setCustomId("perfix")
            .setMinLength(1)
            .setMaxLength(1)
            .setValue("!")
            .setStyle("SHORT")
            .setRequired(true)
        )
      );
    const main_2_modal = new Modal()
      .setTitle("Set Coin name")
      .setCustomId("main_2")
      .addComponents(
        utils.row(
          new TextInputComponent()
            .setLabel("Name")
            .setCustomId("name")
            .setMinLength(1)
            .setMaxLength(20)
            .setValue("Sara")
            .setStyle("SHORT")
            .setRequired(true)
        )
      );

    const row = utils.row(
      new MessageSelectMenu()
        .setCustomId("main_3")
        .setPlaceholder("Choice the other coin bot")
        .setOptions([{ label: "Probot Credit", value: "probot" }])
    );

    switch (value) {
      case "main_1":
        await interaction.showModal(main_1_modal);
        break;
      case "main_2":
        await interaction.showModal(main_2_modal);
        break;
      case "main_3":
        await interaction.reply({
          content: "**اختر عملة البوت الاخر من القائمة**",
          components: [row],
          ephemeral: true,
        });
        break;
      case "main_4":
        await interaction.showModal(main_4_modal);
        break;
      case "main_5":
        await interaction.reply({
          embeds: [
            new MessageEmbed()
              .setTitle("Panel - Main")
              .setColor("BLUE")
              .setDescription(
                `القائمة البيضاء هو نظام مثل "الاونر الفعلي" حيث ان من يوضع فيها يمكن له تعديل اعدادت كم يشاء عده بعض الاعدادت حيث ان هذه الاعدادت بمثابة اعدادت خطيره لايحق سوي الاونر تعديلها`
              ),
          ],
          ephemeral: true,
        });
        break;
    }
  },
};
