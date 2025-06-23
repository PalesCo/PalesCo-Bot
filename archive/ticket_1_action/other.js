const {
  MessageEmbed,
  MessageActionRow,
  MessageSelectMenu,
  MessageButton,
  Modal,
  TextInputComponent,
} = require("discord.js");

/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
  type: "SM",
  customId: "other_1",
  onlyOwner: true,
  enableWhiteList: true,
  /**
   * @param {import("discord.js").SelectMenuInteraction} interaction
   */
  async execute(interaction, { utils, value }) {
    const modal_title = new Modal()
      .setTitle("Set Title of embed")
      .setCustomId("title_1")
      .setComponents(
        utils.row(
          new TextInputComponent()
            .setCustomId("title")
            .setLabel("Title")
            .setStyle("SHORT")
            .setMinLength(1)
            .setMaxLength(100)
            .setRequired(true)
        )
      );
    const modal_description = new Modal()
      .setTitle("Set description of embed")
      .setCustomId("description_1")
      .setComponents(
        utils.row(
          new TextInputComponent()
            .setCustomId("description")
            .setLabel("Description")
            .setStyle("PARAGRAPH")
            .setMinLength(1)
            .setMaxLength(4000)
            .setRequired(true)
        )
      );
    const modal_image = new Modal()
      .setTitle("Set image of embed")
      .setCustomId("image_1")
      .setComponents(
        utils.row(
          new TextInputComponent()
            .setCustomId("url")
            .setLabel("Image URL")
            .setStyle("SHORT")
            .setPlaceholder("https://example.com")
            .setMinLength(1)
            .setMaxLength(200)
            .setRequired(true)
        )
      );
    const modal_color = new Modal()
      .setTitle("Set color of embed")
      .setCustomId("color_1")
      .setComponents(
        utils.row(
          new TextInputComponent()
            .setCustomId("color")
            .setLabel("HEX")
            .setStyle("SHORT")
            .setPlaceholder("Only HEX Color")
            .setValue("#000000")
            .setMinLength(7)
            .setMaxLength(7)
            .setRequired(true)
        )
      );
    const close_color = utils.row(
      new MessageSelectMenu()
        .setCustomId("close_color_1")
        .setPlaceholder("Select Color")
        .setOptions([
          { label: "اساسي", value: "primary", emoji: "🟪" },
          { label: "احمر", value: "danger", emoji: "🟥" },
          { label: "رمادي", value: "secondary" },
          { label: "اخضر", value: "success", emoji: "🟢" },
        ])
    );
    const open_color = utils.row(
      new MessageSelectMenu()
        .setCustomId("open_color_1")
        .setPlaceholder("Select Color")
        .setOptions([
          { label: "اساسي", value: "primary", emoji: "🟪" },
          { label: "احمر", value: "danger", emoji: "🟥" },
          { label: "رمادي", value: "secondary" },
          { label: "اخضر", value: "success", emoji: "🟢" },
        ])
    );
    switch (value) {
      case "title":
        await interaction.showModal(modal_title);
        break;
      case "description":
        await interaction.showModal(modal_description);
        break;
      case "image":
        await interaction.showModal(modal_image);
        break;
      case "color":
        await interaction.showModal(modal_color);
        break;
      case "open_color":
        await interaction.showModal(modal_color);
        await interaction.reply({
          content: "اختر الون الـ انت عاوزه",
          components: [open_color],
          ephemeral: true,
        });
        break;
      case "close_color":
        await interaction.reply({
          content: "اختر الون الـ انت عاوزه",
          components: [close_color],
          ephemeral: true,
        });
        break;
    }
  },
};
