const { EmbedPalesCo, SelectMenuPalesCo } = require("palesco.js");
const embeds = new EmbedPalesCo();
const selectmenu = new SelectMenuPalesCo();
/**
 * @type {import("../../../utils/types/PerfixCommand").PrefixCommand}
 */
module.exports = {
  name: "palesco",
  description: "The main command",
  short: ["p", "palestine"],
  category: "Main",
  async execute({ message }) {
    await message.reply({
      embeds: [
        new EmbedPalesCo().createEmbedByData(
          {
            title: embeds.embeds.mains.main.title,
            description: embeds.embeds.mains.main.description,
          },
          message.author
        ),
      ],
      components: selectmenu.selectmenu.mains.main.row,
    });
  },
};
