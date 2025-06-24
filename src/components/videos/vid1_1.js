const {
  PalesCo,
  DataPalesCo,
  EmbedPalesCo,
  SelectMenuPalesCo,
} = require("palesco.js");
const data = new DataPalesCo();
const embeds = new EmbedPalesCo();
const selectmenu = new SelectMenuPalesCo();
const palesco = new PalesCo();
/**@type {import("../../utils/types/BaseComponent").BaseComponent}*/
module.exports = {
  type: "SM",
  customId: selectmenu.selectmenu.videos.vid1.customId,
  /** @param {import("discord.js").SelectMenuInteraction} interaction */
  async execute(interaction, { value }) {
///fix error on package..........
  },
};
